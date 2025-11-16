import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, dateOfBirth, email, phone, medicareNumber, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !dateOfBirth || !medicareNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
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
      replyTo: email || emailUser, // Replies will go to user's email
      to: 'vrtcare@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #555; margin-top: 0;">Contact Information</h3>
            
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Medicare Number:</strong> ${medicareNumber}</p>
            ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px;">
            <p>This email was sent from the VRT Health Home contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Contact Information:
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dateOfBirth}
        ${email ? `Email: ${email}` : ''}
        ${phone ? `Phone: ${phone}` : ''}
        Medicare Number: ${medicareNumber}
        ${service ? `Service of Interest: ${service}` : ''}
        ${message ? `
        Message:
        ${message}
        ` : ''}
        
        Submitted on: ${new Date().toLocaleString()}
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

