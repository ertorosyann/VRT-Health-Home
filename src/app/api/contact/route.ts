import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 3 // Maximum 3 submissions per hour per IP
const GLOBAL_RATE_LIMIT = 20 // Maximum 20 submissions per hour globally

// In-memory storage for rate limiting
const ipRequestMap = new Map<string, { count: number; resetTime: number }>()
const globalRequestCount = { count: 0, resetTime: Date.now() + RATE_LIMIT_WINDOW }

// Clean up old entries periodically to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of Array.from(ipRequestMap.entries())) {
    if (data.resetTime < now) {
      ipRequestMap.delete(ip)
    }
  }
}, 5 * 60 * 1000) // Clean up every 5 minutes

// Helper function to get client IP
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIp) {
    return realIp
  }
  
  return 'unknown'
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Helper function to sanitize input (prevent XSS)
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 500) // Limit length
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; error?: string } {
  const now = Date.now()
  
  // Check global rate limit
  if (globalRequestCount.resetTime < now) {
    globalRequestCount.count = 0
    globalRequestCount.resetTime = now + RATE_LIMIT_WINDOW
  }
  
  if (globalRequestCount.count >= GLOBAL_RATE_LIMIT) {
    return { 
      allowed: false, 
      error: 'Service temporarily unavailable. Please try again later.' 
    }
  }
  
  // Check IP-specific rate limit
  const ipData = ipRequestMap.get(ip)
  
  if (!ipData || ipData.resetTime < now) {
    ipRequestMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    globalRequestCount.count++
    return { allowed: true }
  }
  
  if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
    const remainingTime = Math.ceil((ipData.resetTime - now) / 60000)
    return { 
      allowed: false, 
      error: `Too many requests. Please try again in ${remainingTime} minute(s).` 
    }
  }
  
  ipData.count++
  globalRequestCount.count++
  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)
    
    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIp)
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { error: rateLimitCheck.error },
        { status: 429 }
      )
    }
    
    // Parse body with size limit check
    const body = await request.json()
    const bodyString = JSON.stringify(body)
    
    // Check payload size (prevent large payloads)
    if (bodyString.length > 10000) { // 10KB limit
      return NextResponse.json(
        { error: 'Request payload too large' },
        { status: 413 }
      )
    }
    
    const { firstName, lastName, dateOfBirth, email, phone, medicareNumber, service, message, honeypot } = body

    // Honeypot field check (bots usually fill all fields)
    if (honeypot) {
      console.warn(`Honeypot triggered for IP: ${clientIp}`)
      // Return success to not alert the bot, but don't send email
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!firstName || !lastName || !dateOfBirth || !medicareNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate field types and lengths
    if (
      typeof firstName !== 'string' || firstName.length > 100 ||
      typeof lastName !== 'string' || lastName.length > 100 ||
      typeof dateOfBirth !== 'string' || dateOfBirth.length > 50 ||
      typeof medicareNumber !== 'string' || medicareNumber.length > 50
    ) {
      return NextResponse.json(
        { error: 'Invalid field format or length' },
        { status: 400 }
      )
    }
    
    // Validate email if provided
    if (email && (!isValidEmail(email) || email.length > 200)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Validate phone if provided
    if (phone && (typeof phone !== 'string' || phone.length > 30)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }
    
    // Validate message length if provided
    if (message && (typeof message !== 'string' || message.length > 2000)) {
      return NextResponse.json(
        { error: 'Message too long. Maximum 2000 characters.' },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      dateOfBirth: sanitizeInput(dateOfBirth),
      email: email ? sanitizeInput(email) : '',
      phone: phone ? sanitizeInput(phone) : '',
      medicareNumber: sanitizeInput(medicareNumber),
      service: service ? sanitizeInput(service) : '',
      message: message ? sanitizeInput(message) : ''
    }

    // Create transporter - using Gmail SMTP
    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPassword) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    })

    // Email content
    // Use Reply-To so replies go directly to the user's email
    const mailOptions = {
      from: emailUser,
      replyTo: sanitizedData.email || emailUser, // Replies will go to user's email
      // to: 'vrtcare@gmail.com',
      to: 'ertorosyann@gmail.com',
      
      subject: `New Contact Form Submission from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #555; margin-top: 0;">Contact Information</h3>
            
            <p><strong>First Name:</strong> ${sanitizedData.firstName}</p>
            <p><strong>Last Name:</strong> ${sanitizedData.lastName}</p>
            <p><strong>Date of Birth:</strong> ${sanitizedData.dateOfBirth}</p>
            ${sanitizedData.email ? `<p><strong>Email:</strong> ${sanitizedData.email}</p>` : ''}
            ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizedData.phone}</p>` : ''}
            <p><strong>Medicare Number:</strong> ${sanitizedData.medicareNumber}</p>
            ${sanitizedData.service ? `<p><strong>Service of Interest:</strong> ${sanitizedData.service}</p>` : ''}
          </div>
          
          ${sanitizedData.message ? `
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px;">
            <p>This email was sent from the VRT Health Home contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
            <p>Submitted by IP: ${clientIp}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        First Name: ${sanitizedData.firstName}
        Last Name: ${sanitizedData.lastName}
        Date of Birth: ${sanitizedData.dateOfBirth}
        ${sanitizedData.email ? `Email: ${sanitizedData.email}` : ''}
        ${sanitizedData.phone ? `Phone: ${sanitizedData.phone}` : ''}
        Medicare Number: ${sanitizedData.medicareNumber}
        ${sanitizedData.service ? `Service of Interest: ${sanitizedData.service}` : ''}
        ${sanitizedData.message ? `
        Message:
        ${sanitizedData.message}
        ` : ''}
        
        Submitted on: ${new Date().toLocaleString()}
        Submitted by IP: ${clientIp}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

