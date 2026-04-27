import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFileSync, existsSync, readFileSync } from "fs";

const LEADS_FILE = "/tmp/leads.json";

// Email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Configure nodemailer transporter
// Use the same config as lib/nodemailer.ts
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Read existing leads
function readLeads(): Array<{ email: string; timestamp: number }> {
  if (!existsSync(LEADS_FILE)) {
    return [];
  }
  try {
    const data = readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save lead to file
function saveLead(email: string): void {
  const leads = readLeads();
  leads.push({
    email,
    timestamp: Date.now(),
  });
  writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// Send confirmation email
async function sendConfirmationEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const transporter = createTransporter();
    const adminEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;

    const mailOptions = {
      from: `"Devweb Patagonia" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: adminEmail, // Te llega copia a vos también
      subject: "🎯 Confirmación - 7 Señales de que tu Web Necesita una Renewal",
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
    .checklist { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .check-item { display: flex; align-items: flex-start; margin: 12px 0; }
    .check-icon { color: #10b981; margin-right: 12px; font-weight: bold; }
    .cta { display: inline-block; background: #10b981; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="header">
    <h1 class="title">🎉 ¡Gracias por suscribirte!</h1>
    <p class="subtitle">Aquí están las 7 señales que prometimos</p>
  </div>
  <div class="content">
    <h2 style="color: #1e3a5f; margin-bottom: 16px;">📋 Las 7 Señales de que tu Web Necesita una Renewal</h2>
    
    <div class="checklist">
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>1. Carga lenta</strong> — Si tu sitio tarda más de 3 segundos en cargar, estás perdiendo clientes.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>2. No aparece en Google</strong> — Sin SEO actualizado, tu web es invisible.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>3. No es responsive</strong> — Más del 60% del tráfico es desde móvil.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>4. Diseño obsoleto</strong> — Un sitio antiguo genera desconfianza.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>5. Sin analytics</strong> — No sabes cuántos visitantes tienes.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>6. Sin optimización de imágenes</strong> — Archivos pesados = carga lenta.</span>
      </div>
      <div class="check-item">
        <span class="check-icon">✓</span>
        <span><strong>7. Sin mantenimiento técnico</strong> — Security patches, backups, actualizaciones.</span>
      </div>
    </div>

    <p style="margin: 24px 0; color: #475569;">
      ¿Cuántas de estas señales ves en tu sitio actual? Si detectaste al menos 3, 
      <strong>es momento de renovar tu presencia digital.</strong>
    </p>

    <a href="https://devwebpatagonia.com/#contacto" class="cta">
      🚀 Agenda tu Auditoría Gratis
    </a>

    <p style="color: #64748b; font-size: 14px; margin-top: 24px;">
     PD: Este checklist es solo el comienzo. En nuestra auditoría gratuita profundizamos 
      en cada punto y te proponemos un plan de acción concreto.
    </p>
  </div>
  <div class="footer">
    <p>© ${new Date().getFullYear()} Devweb - Gestión y Desarrollo Web</p>
    <p>Alto Valle, Río Negro - Patagonia, Argentina</p>
  </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return { success: false, error: "No pudimos enviarte el email de confirmación, pero tu consulta quedó registrada." };
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

    // Save lead
    saveLead(normalizedEmail);

    // Send confirmation email - WAIT for result so we can report errors
    const emailResult = await sendConfirmationEmail(normalizedEmail);

    if (!emailResult.success) {
      // Still return success for the form submission, but include the warning
      return NextResponse.json({
        success: true,
        warning: emailResult.error,
        message: emailResult.error
      });
    }

    return NextResponse.json({ success: true, message: "Te enviamos el checklist a tu email" });
  } catch (error) {
    console.error("Error in /api/leads:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return lead count for debugging
  const leads = readLeads();
  return NextResponse.json({
    count: leads.length,
    leads: leads.slice(-10), // Last 10 leads
  });
}