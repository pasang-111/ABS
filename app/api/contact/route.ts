import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { createTransporter, type QuotePayload } from "@/lib/mail";
import { ThankYouEmail } from "@/components/email/ThankyouEmail";
import { AdminNotificationEmail } from "@/components/email/AdminNotificationEmail";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const suburb = String(body.suburb || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Check env vars
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "SMTP_USER or SMTP_PASS missing in .env.local" },
        { status: 500 }
      );
    }

    const payload: QuotePayload = { name, email, phone, service, suburb, message };
    const logoUrl = process.env.LOGO_URL || "https://yourdomain.com/logo-full-white.png";
    const adminTo = process.env.ADMIN_EMAIL || process.env.SMTP_USER!;
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER!;

    const transporter = createTransporter();

    const thankYouHtml = await render(
      ThankYouEmail({ customerName: name, logoUrl })
    );

    const adminHtml = await render(
      AdminNotificationEmail({ ...payload })
    );

    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: "Thank you for your enquiry – After Built Solutions",
        html: thankYouHtml,
        text: `Hi ${name},\n\nWe've received your quote request and will be in touch within one business day.\n\nAfter Built Solutions\n0413 230 730`,
      }),
      transporter.sendMail({
        from,
        to: adminTo,
        replyTo: email,
        subject: `New quote request from ${name}${service ? ` – ${service}` : ""}`,
        html: adminHtml,
        text: [
          `New quote request`,
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : "",
          service ? `Service: ${service}` : "",
          suburb ? `Suburb: ${suburb}` : "",
          ``,
          `Message:`,
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Show real error while debugging
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact]", err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}