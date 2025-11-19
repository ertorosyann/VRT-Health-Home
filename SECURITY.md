# Security Features for Contact Form

## Overview
The contact form has been enhanced with multiple layers of security to protect against DDoS attacks, spam, and other malicious activities.

## Security Features Implemented

### 1. **Rate Limiting**

#### IP-Based Rate Limiting
- **Per IP Limit**: Maximum of 3 submissions per hour per IP address
- **Global Limit**: Maximum of 20 submissions per hour across all IPs
- **Window**: 1 hour (configurable)

#### How It Works
- Each submission is tracked by the client's IP address
- When a limit is exceeded, the user receives a 429 (Too Many Requests) error
- The error message tells users how long to wait before trying again
- Memory is automatically cleaned every 5 minutes to prevent leaks

#### Configuration
Edit these constants in `/src/app/api/contact/route.ts`:

```typescript
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 3 // Maximum 3 submissions per hour per IP
const GLOBAL_RATE_LIMIT = 20 // Maximum 20 submissions per hour globally
```

### 2. **Input Validation & Sanitization**

#### Field Validation
- **Required fields**: First name, last name, date of birth, Medicare number
- **Email validation**: Regex pattern validation for proper email format
- **Phone validation**: Type checking and length limits (max 30 characters)
- **Message length**: Maximum 2000 characters
- **Field length limits**:
  - Names: 100 characters max
  - Email: 200 characters max
  - Medicare number: 50 characters max
  - Date of birth: 50 characters max

#### Input Sanitization
All inputs are sanitized to prevent XSS attacks:
- Removal of `<` and `>` characters (potential HTML tags)
- Trimming of whitespace
- Length limiting (max 500 characters per field after sanitization)

### 3. **Payload Size Limit**
- Maximum request payload size: 10KB
- Returns 413 (Payload Too Large) error if exceeded
- Prevents large payload attacks

### 4. **Honeypot Field**
- Hidden field that real users won't see or fill
- Bots typically fill all fields, including hidden ones
- If filled, the submission is silently rejected (returns success but doesn't send email)
- Implemented with:
  - `className="hidden"` - CSS hiding
  - `aria-hidden="true"` - Hidden from screen readers
  - `tabIndex={-1}` - Not keyboard accessible
  - `autoComplete="off"` - Prevents auto-fill

### 5. **IP Tracking**
- Client IP is logged in every email
- Helps identify patterns of abuse
- Works with:
  - `x-forwarded-for` header (proxy/load balancer)
  - `x-real-ip` header
  - Fallback to 'unknown' if neither available

### 6. **Response Status Codes**

| Status Code | Meaning | Description |
|-------------|---------|-------------|
| 200 | Success | Email sent successfully |
| 400 | Bad Request | Missing/invalid fields |
| 413 | Payload Too Large | Request body exceeds 10KB |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Email configuration or sending error |

## Monitoring & Logging

### What Gets Logged
- Honeypot triggers (with IP address)
- Email sending errors
- Email configuration errors

### What's Tracked in Emails
- Submission timestamp
- Client IP address
- All form data (sanitized)

## Production Deployment Considerations

### 1. **For High-Traffic Sites**
Consider upgrading to a more robust rate limiting solution:
- Use Redis for distributed rate limiting
- Implement database-backed tracking
- Consider services like Cloudflare for DDoS protection

### 2. **For Enhanced Security**
Additional measures you can implement:
- Add CAPTCHA (e.g., Google reCAPTCHA v3, hCaptcha)
- Implement CSRF tokens
- Add IP allowlist/blocklist
- Use Web Application Firewall (WAF)

### 3. **Environment Variables**
Ensure these are set in your production environment:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Your Gmail app password

## Testing the Security Features

### Test Rate Limiting
```bash
# Send 4 requests quickly (the 4th should fail)
for i in {1..4}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{
      "firstName": "Test",
      "lastName": "User",
      "dateOfBirth": "1990-01-01",
      "medicareNumber": "123456",
      "email": "test@example.com",
      "message": "Test message '$i'"
    }'
  echo "\n---"
done
```

### Test Honeypot
```bash
# This should return success but not send email
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Bot",
    "lastName": "Tester",
    "dateOfBirth": "1990-01-01",
    "medicareNumber": "123456",
    "honeypot": "I am a bot",
    "message": "This should not be sent"
  }'
```

### Test Payload Size Limit
```bash
# Create a message larger than 10KB
python3 -c "print('A' * 11000)" > large_message.txt
MESSAGE=$(cat large_message.txt)

curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "dateOfBirth": "1990-01-01",
    "medicareNumber": "123456",
    "message": "'"$MESSAGE"'"
  }'
```

## Maintenance

### Memory Management
The rate limiting system uses in-memory storage with automatic cleanup:
- Old entries are removed every 5 minutes
- Entries are automatically expired after the rate limit window

For production environments with multiple server instances, consider:
- Using a shared cache (Redis, Memcached)
- Database-backed rate limiting
- Third-party services (Upstash, Redis Labs)

## Adjusting Rate Limits

You can adjust rate limits based on your needs:

```typescript
// More restrictive (for high-abuse scenarios)
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_WINDOW = 1 // Only 1 submission per hour
const GLOBAL_RATE_LIMIT = 10 // 10 submissions per hour globally

// More lenient (for legitimate high-traffic)
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5 // 5 submissions per hour
const GLOBAL_RATE_LIMIT = 50 // 50 submissions per hour globally
```

## Common Issues & Solutions

### Issue: Legitimate users being rate limited
**Solution**: 
- Increase `MAX_REQUESTS_PER_WINDOW`
- Decrease `RATE_LIMIT_WINDOW`
- Implement user authentication to allow higher limits for authenticated users

### Issue: Rate limiting not working in development
**Solution**: 
- Make sure you're not behind a proxy that masks your IP
- Check that `x-forwarded-for` or `x-real-ip` headers are being set correctly

### Issue: Honeypot catching legitimate users
**Solution**: 
- Ensure the honeypot field is truly hidden (check CSS)
- Verify that browser extensions aren't auto-filling the field
- Consider using a more subtle honeypot implementation

## Future Enhancements

Consider implementing:
1. **Database logging** - Track all submissions and failed attempts
2. **Email notifications** - Alert admins of suspicious activity
3. **IP blocklist** - Automatically block IPs after repeated violations
4. **CAPTCHA integration** - Add human verification for suspicious patterns
5. **Analytics dashboard** - Monitor form usage and security events

