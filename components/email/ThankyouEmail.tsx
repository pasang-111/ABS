import * as React from "react";

type ThankYouEmailProps = {
  customerName?: string;
  logoUrl?: string;
};

const COLORS = {
  bg: "#05070a",
  surface: "#0a0e14",
  surface2: "#0e131a",
  surface3: "#06090e",
  orange: "#f97316",
  orangeDeep: "#c2410c",
  orangeBright: "#fb923c",
  text: "#f1f5f9",
  textMuted: "#9ca3af",
  textDim: "#6b7280",
  textFaint: "#4b5563",
  white: "#f8fafc",
  border: "rgba(249,115,22,0.14)",
} as const;

export function ThankYouEmail({
  customerName,
  logoUrl = "https://yourdomain.com/logo-full-white.png",
}: ThankYouEmailProps) {
  const greeting = customerName?.trim()
    ? `Hi ${customerName.trim()},`
    : "Hi there,";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thank You – After Built Solutions</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: COLORS.bg,
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "none", fontSize: "1px", color: COLORS.bg, lineHeight: "1px", maxHeight: 0, maxWidth: 0, opacity: 0, overflow: "hidden" }}>
          We&apos;ve received your quote request — After Built Solutions will be in touch within one business day.
        </div>

        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} width="100%" style={{ backgroundColor: COLORS.bg }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: "32px 16px" }}>
                <table role="presentation" cellPadding={0} cellSpacing={0} border={0} width={600} style={{ maxWidth: 600, width: "100%", backgroundColor: COLORS.surface, borderRadius: 16, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.55)" }}>
                  <tbody>
                    <tr>
                      <td style={{ height: 5, background: `linear-gradient(90deg, ${COLORS.orangeDeep}, ${COLORS.orange}, ${COLORS.orangeBright})`, fontSize: 0, lineHeight: 0 }}>&nbsp;</td>
                    </tr>

                    <tr>
                      <td align="center" style={{ padding: "40px 40px 28px", backgroundColor: COLORS.surface }}>
                        <a href="https://afterbuiltsolutions.com.au" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                          <img src={logoUrl} width={200} alt="After Built Solutions" style={{ display: "block", width: 200, maxWidth: 200, height: "auto", border: 0 }} />
                        </a>
                        <p style={{ margin: "16px 0 0", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.textDim, fontWeight: 600 }}>
                          Finishing what the builders leave behind
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "8px 40px" }}>
                        <table role="presentation" cellPadding={0} cellSpacing={0} border={0} width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style={{ paddingBottom: 22 }}>
                                <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                                  <tbody>
                                    <tr>
                                      <td align="center" valign="middle" style={{ width: 68, height: 68, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeDeep})`, boxShadow: "0 8px 28px rgba(249,115,22,0.40)" }}>
                                        <span style={{ fontSize: 32, lineHeight: "68px", color: "#ffffff", fontWeight: 700 }}>✓</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <h1 style={{ margin: "0 0 14px", fontSize: 28, fontWeight: 700, color: COLORS.white, lineHeight: 1.25 }}>
                                  Thank you for your enquiry
                                </h1>
                                <p style={{ margin: "0 0 8px", fontSize: 15, color: COLORS.textMuted, lineHeight: 1.6 }}>{greeting}</p>
                                <p style={{ margin: "0 0 10px", fontSize: 15, color: COLORS.textMuted, lineHeight: 1.6 }}>
                                  We&apos;ve received your quote request and our team will review the details carefully.
                                </p>
                                <p style={{ margin: 0, fontSize: 15, color: COLORS.orange, fontWeight: 600 }}>
                                  We&apos;ll be in touch within <strong>one business day</strong>.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "28px 40px 8px" }}>
                        <table role="presentation" width="100%"><tbody><tr>
                          <td style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.28), transparent)", fontSize: 0 }}>&nbsp;</td>
                        </tr></tbody></table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "24px 40px 8px" }}>
                        <h2 style={{ margin: "0 0 20px", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.orange, fontWeight: 700 }}>
                          What happens next
                        </h2>
                        <Step number={1} title="We review your project" description="Our team looks over the details you shared about the space, finishes and timeline." />
                        <Step number={2} title="We contact you" description="You'll hear from us by phone or email to arrange a measure or discuss options." />
                        <Step number={3} title="Clear quote, no obligation" description="We prepare a transparent quote for your garage, alfresco, wardrobe or outdoor area." last />
                      </td>
                    </tr>

                    <tr>
                      <td align="center" style={{ padding: "32px 40px 16px" }}>
                        <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                          <tbody>
                            <tr>
                              <td style={{ borderRadius: 11, background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeDeep})`, boxShadow: "0 6px 22px rgba(249,115,22,0.38)" }}>
                                <a href="tel:+61413230730" style={{ display: "inline-block", padding: "14px 34px", fontSize: 15, fontWeight: 600, color: "#ffffff", textDecoration: "none" }}>
                                  Call us · 0413 230 730
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "24px 40px 36px" }}>
                        <table role="presentation" width="100%" style={{ backgroundColor: COLORS.surface2, borderRadius: 14, border: `1px solid ${COLORS.border}` }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: "26px 28px" }}>
                                <p style={{ margin: "0 0 18px", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: COLORS.orange, fontWeight: 700 }}>
                                  Contact After Built Solutions
                                </p>
                                <ContactRow icon="📞" href="tel:+61413230730" label="0413 230 730" bold />
                                <ContactRow icon="✉️" href="mailto:Afterbuiltsolutions@gmail.com" label="Afterbuiltsolutions@gmail.com" />
                                <table role="presentation" width="100%">
                                  <tbody>
                                    <tr>
                                      <td width={28} valign="top" style={{ color: COLORS.orange, fontSize: 15, paddingTop: 2 }}>📍</td>
                                      <td valign="top">
                                        <a href="https://maps.google.com/?q=6+Kibble+Place+Narellan+NSW+2567" style={{ fontSize: 15, color: COLORS.text, textDecoration: "none", lineHeight: 1.45 }}>
                                          6 Kibble Place<br />Narellan 2567 NSW
                                        </a>
                                        <p style={{ margin: "5px 0 0", fontSize: 12, color: COLORS.textDim }}>Showroom · South West Sydney</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ backgroundColor: COLORS.surface3, padding: "28px 40px 32px", borderTop: "1px solid rgba(249,115,22,0.10)" }}>
                        <table role="presentation" width="100%">
                          <tbody>
                            <tr>
                              <td align="center">
                                <p style={{ margin: "0 0 8px", fontSize: 13, color: COLORS.textMuted, lineHeight: 1.55 }}>
                                  <strong style={{ color: "#e5e7eb" }}>After Built Solutions</strong><br />
                                  Part of <a href="https://reycorp.com.au/" style={{ color: COLORS.orange, textDecoration: "none", fontWeight: 600 }}>Rey Corporate Group</a>
                                </p>
                                <p style={{ margin: "14px 0 0", fontSize: 12, color: COLORS.textDim }}>
                                  © {new Date().getFullYear()} After Built Solutions · All rights reserved
                                </p>
                                <p style={{ margin: "10px 0 0", fontSize: 11, color: COLORS.textFaint }}>
                                  You&apos;re receiving this because you submitted a quote request on our website.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ height: 4, background: `linear-gradient(90deg, ${COLORS.orangeDeep}, ${COLORS.orange}, ${COLORS.orangeBright})`, fontSize: 0 }}>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

function Step({ number, title, description, last = false }: { number: number; title: string; description: string; last?: boolean }) {
  return (
    <table role="presentation" width="100%" style={{ marginBottom: last ? 0 : 18 }}>
      <tbody>
        <tr>
          <td width={44} valign="top">
            <table role="presentation"><tbody><tr>
              <td align="center" style={{ width: 34, height: 34, borderRadius: 9, backgroundColor: "rgba(249,115,22,0.12)", color: COLORS.orange, fontSize: 14, fontWeight: 700 }}>{number}</td>
            </tr></tbody></table>
          </td>
          <td valign="top" style={{ paddingLeft: 6 }}>
            <p style={{ margin: "0 0 3px", fontSize: 15, fontWeight: 600, color: COLORS.text }}>{title}</p>
            <p style={{ margin: 0, fontSize: 14, color: COLORS.textMuted, lineHeight: 1.5 }}>{description}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ContactRow({ icon, href, label, bold = false }: { icon: string; href: string; label: string; bold?: boolean }) {
  return (
    <table role="presentation" width="100%" style={{ marginBottom: 14 }}>
      <tbody>
        <tr>
          <td width={28} style={{ color: COLORS.orange, fontSize: 15 }}>{icon}</td>
          <td>
            <a href={href} style={{ fontSize: 15, fontWeight: bold ? 600 : 400, color: COLORS.text, textDecoration: "none" }}>{label}</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ThankYouEmail;