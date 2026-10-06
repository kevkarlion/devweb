import { NextResponse } from "next/server";
import transporter from "@/lib/nodemailer";
import { CONTACT_EMAIL } from "@/lib/contact-info";

// Email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Send confirmation email
async function sendConfirmationEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const adminEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"Devweb Patagonia" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: adminEmail, // Te llega copia a vos también
      subject: "Nuevo pedido de diagnóstico técnico - DEVWEB",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
    .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
    .title { margin: 0 0 20px 0; font-size: 24px; font-weight: 700; }
    .subtitle { font-size: 16px; opacity: 0.9; margin-bottom: 20px; }
    .info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .cta { display: inline-block; background: #1e3a5f; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="title">Nuevo pedido de diagnóstico técnico</h1>
    <p class="subtitle">Solicitud registrada a través del formulario</p>
  </div>
  <div class="content">
    <p style="color: #475569; margin: 0 0 16px 0;">
      Recibimos tu pedido de diagnóstico técnico gratuito. Te contactamos dentro de las próximas 24 h hábiles.
    </p>

    <div class="info">
      <p style="margin: 0;"><strong>Contacto:</strong> ${email}</p>
      <p style="margin: 12px 0 0;"><strong>Solicitud:</strong> diagnóstico técnico gratuito</p>
    </div>

    <p style="color: #64748b; font-size: 14px; margin-top: 24px;">
      Analizamos tus procesos y te mostramos qué se puede automatizar con CRM, IA y dashboards: planillas, cotizaciones y seguimiento de clientes.
    </p>
  </div>
  <div class="footer">
    <p>© ${new Date().getFullYear()} Devweb - Software a Medida y Desarrollo Web</p>
    <p>Neuquén y Alto Valle, Patagonia, Argentina</p>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return { success: false, error: `No pudimos procesar tu pedido. Escribinos a ${CONTACT_EMAIL} o al WhatsApp +54 9 298 425-2859 y te respondemos a la brevedad.` };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email es requerido" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Send confirmation email - WAIT for result so we can report errors
    const emailResult = await sendConfirmationEmail(normalizedEmail);

    if (!emailResult.success) {
      // No persistence layer exists: this log is the only record of the lead.
      // Single error-level line so it surfaces in Vercel's logs.
      console.error(
        `[api/leads] Delivery failed for ${normalizedEmail}: ${emailResult.error}`
      );
      return NextResponse.json(
        {
          success: false,
          warning: emailResult.error,
          error: emailResult.error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Recibimos tu pedido. Te contactamos dentro de las próximas 24 h hábiles." });
  } catch (error) {
    console.error("Error in /api/leads:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}