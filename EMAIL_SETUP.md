# Email Setup with Nodemailer

This project uses Nodemailer to send emails from the contact form.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (Nodemailer)
# For Gmail, you'll need to use an App Password: https://support.google.com/accounts/answer/185833

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Where to send contact form submissions
CONTACT_EMAIL=info@krushiworldexport.com

# Company name for email templates
COMPANY_NAME=Krushi World Export
```

## Gmail Setup

1. Enable 2-Step Verification on your Google account
2. Generate an App Password:
   - Go to your Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

## Other Email Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Outlook/Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Testing

After setting up your environment variables, restart your development server and test the contact form at `/contact`.

