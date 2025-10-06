import { NextResponse } from 'next/server';
import transporter from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validaciones
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    // Configurar email
    const mailOptions = {
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Tu email para recibir mensajes
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - DevWeb`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Inter', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
              .container { max-width: 600px; background: white; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { background: #0A0A0A; color: #E9E9E9; padding: 30px; text-align: center; }
              .content { padding: 30px; color: #333; }
              .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; }
              .field strong { color: #0A0A0A; display: block; margin-bottom: 5px; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px; }
              .message { background: #121212; color: #E9E9E9; padding: 20px; border-radius: 8px; border-left: 4px solid #E9E9E9; white-space: pre-wrap; }
              .footer { background: #0A0A0A; color: #E9E9E9; padding: 20px; text-align: center; font-size: 0.8em; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 Nuevo Mensaje de Contacto</h1>
                <p>DevWeb - Formulario de Contacto</p>
              </div>
              <div class="content">
                <div class="field">
                  <strong>👤 Nombre</strong>
                  ${name}
                </div>
                <div class="field">
                  <strong>📧 Email</strong>
                  ${email}
                </div>
                <div class="field">
                  <strong>💬 Mensaje</strong>
                  <div class="message">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de DevWeb</p>
                <p>📍 ${new Date().toLocaleString('es-AR', { 
                  timeZone: 'America/Argentina/Buenos_Aires',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
NUEVO MENSAJE DE CONTACTO - DEVWEB
===================================

Nombre: ${name}
Email: ${email}

Mensaje:
${message}

---
Enviado desde el formulario de contacto de DevWeb
${new Date().toLocaleString('es-AR')}
      `
    };

    // Enviar email
    const result = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        message: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
        success: true,
        messageId: result.messageId
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error enviando email:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor. Por favor intentá nuevamente en unos minutos.' 
      },
      { status: 500 }
    );
  }
}