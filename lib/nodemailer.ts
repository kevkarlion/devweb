import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verificar conexión al iniciar
transporter.verify((error: Error | null) => {
  if (error) {
    console.log('❌ Error configurando Nodemailer:', error);
  } else {
    console.log('✅ Nodemailer listo para enviar emails');
  }
});

export default transporter;