import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const companyName = process.env.COMPANY_NAME || 'Krushi World Export'
const accentColor = '#f97316'

const escapeHTML = (str = '') =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const formatMultiline = (str = '') => escapeHTML(str).replace(/\n/g, '<br>')

const renderField = (label, value) => `
  <tr>
    <td style="padding-bottom:18px;">
      <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;">${label}</div>
      <div style="border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-size:15px;color:#0f172a;background:#fff;">
        ${value ? escapeHTML(value) : '<span style="color:#94a3b8;">Not provided</span>'}
      </div>
    </td>
  </tr>
`

const renderMessageBlock = (label, value) => `
  <tr>
    <td style="padding-top:4px;">
      <div style="font-size:13px;font-weight:600;color:#475569;margin-bottom:6px;">${label}</div>
      <div style="border:1px solid #e2e8f0;border-radius:14px;padding:16px 18px;min-height:120px;font-size:15px;color:#0f172a;background:#fff;">
        ${formatMultiline(value)}
      </div>
    </td>
  </tr>
`

const buildShell = ({ heading, subheading, content, footerNote }) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:36px 12px;font-family:'Inter','Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:28px;box-shadow:0 30px 60px rgba(15,23,42,0.12);overflow:hidden;">
          <tr>
            <td style="padding:40px;">
              <div style="font-size:14px;text-transform:uppercase;letter-spacing:3px;color:${accentColor};font-weight:600;margin-bottom:8px;">${companyName}</div>
              <h1 style="margin:0 0 6px;font-size:30px;color:${accentColor};">${heading}</h1>
              ${
                subheading
                  ? `<p style="margin:0 0 28px;font-size:15px;color:#64748b;">${subheading}</p>`
                  : '<div style="height:12px;"></div>'
              }
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${content}</table>
              ${
                footerNote
                  ? `<p style="margin:28px 0 0;font-size:13px;color:#94a3b8;">${footerNote}</p>`
                  : ''
              }
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`

const buildAdminEmail = ({ name, email, phone, company, subject, message }) => {
  const content = `
    ${renderField('Your Name', name)}
    ${renderField('Company Name', company)}
    ${renderField('Email Address', email)}
    ${renderField('Phone Number', phone)}
    ${renderField('Subject', subject)}
    ${renderMessageBlock('Message', message)}
  `

  return buildShell({
    heading: 'Send Us a Message',
    subheading: 'A new enquiry was submitted on your website. Review the details below.',
    content,
    footerNote:
      'This email mirrors the contact form layout for easy review. Reply directly to get back to the sender.',
  })
}

const buildUserEmail = ({ name, subject, message }) => {
  const content = `
    ${renderField('Your Name', name)}
    ${renderField('Subject', subject)}
    ${renderMessageBlock('Message', message)}
  `

  return buildShell({
    heading: 'We received your message',
    subheading: `Hi ${escapeHTML(
      name
    )}, thanks for reaching out. Our team will get back to you soon.`,
    content,
    footerNote: `Need to update your request? Just reply to this email and it'll reach ${companyName}.`,
  })
}

export async function POST(request) {
  try {
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS']
    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key])

    if (missingEnvVars.length) {
      return NextResponse.json(
        {
          error: 'Email service is not configured.',
          details: `Missing environment variables: ${missingEnvVars.join(', ')}`,
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const port = parseInt(process.env.SMTP_PORT || '587')

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      // Use secure connection for port 465 or when explicitly enabled
      secure: process.env.SMTP_SECURE === 'true' || port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: buildAdminEmail({ name, email, phone, company, subject, message }),
    }

    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `We received your message | ${companyName}`,
      html: buildUserEmail({ name, subject, message }),
    }

    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}

