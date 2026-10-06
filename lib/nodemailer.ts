import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
const port = Number(process.env.SMTP_PORT) || 465;
const secureRaw = process.env.SMTP_SECURE?.trim().toLowerCase();
const secure = secureRaw === 'true' ? true
  : secureRaw === 'false' ? false
  : port === 465;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error: Error | null) => {
  if (error) {
    console.error('❌ Error configuring Nodemailer:', error);
  } else {
    console.log('✅ Nodemailer ready to send emails');
  }
});

export default transporter;
