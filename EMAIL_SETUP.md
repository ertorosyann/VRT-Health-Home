# Email Setup Instructions

To enable email functionality for the contact form, you need to configure email credentials.

## Setup Steps

1. **Create a `.env.local` file** in the root directory of the project

2. **Add the following environment variables:**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

3. **For Gmail users:**
   - Enable 2-factor authentication on your Google account
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Generate a new app password for "Mail"
   - Use that app password (not your regular password) in `EMAIL_PASSWORD`

4. **Restart your development server** after adding the environment variables

## Notes

- The contact form will send emails to: **vrtcare@gmail.com**
- Make sure your `.env.local` file is in `.gitignore` (it should be by default)
- Never commit your actual email credentials to version control

