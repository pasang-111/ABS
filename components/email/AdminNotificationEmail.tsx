import * as React from "react";

export type AdminNotificationProps = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  suburb?: string;
  message: string;
  submittedAt?: string;
};

const C = {
  bg: "#05070a",
  surface: "#0a0e14",
  surface2: "#0e131a",
  orange: "#f97316",
  orangeDeep: "#c2410c",
  text: "#f1f5f9",
  muted: "#9ca3af",
  dim: "#6b7280",
  border: "rgba(249,115,22,0.14)",
  white: "#f8fafc",
} as const;

export function AdminNotificationEmail({
  name,
  email,
  phone,
  service,
  suburb,
  message,
  submittedAt,
}: AdminNotificationProps) {
  const when =
    submittedAt ||
    new Date().toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
      dateStyle: "full",
      timeStyle: "short",
    });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New quote request – {name}</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: C.bg, fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
        <table role="presentation" width="100%" style={{ backgroundColor: C.bg }}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: "28px 16px" }}>
                <table role="presentation" width={600} style={{ maxWidth: 600, width: "100%", backgroundColor: C.surface, borderRadius: 14, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
                  <tbody>
                    <tr>
                      <td style={{ height: 5, background: `linear-gradient(90deg, ${C.orangeDeep}, ${C.orange})`, fontSize: 0 }}>&nbsp;</td>
                    </tr>

                    <tr>
                      <td style={{ padding: "28px 32px 16px" }}>
                        <p style={{ margin: "0 0 6px", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: C.orange, fontWeight: 700 }}>
                          New quote request
                        </p>
                        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: C.white, lineHeight: 1.3 }}>{name}</h1>
                        <p style={{ margin: "8px 0 0", fontSize: 13, color: C.dim }}>{when}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "8px 32px 24px" }}>
                        <table role="presentation" width="100%" style={{ backgroundColor: C.surface2, borderRadius: 12, border: `1px solid ${C.border}` }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: "20px 22px" }}>
                                <Row label="Name" value={name} />
                                <Row label="Email" value={email} href={`mailto:${email}`} />
                                {phone ? <Row label="Phone" value={phone} href={`tel:${phone.replace(/\s/g, "")}`} /> : null}
                                {service ? <Row label="Service" value={service} /> : null}
                                {suburb ? <Row label="Suburb" value={suburb} /> : null}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "0 32px 28px" }}>
                        <p style={{ margin: "0 0 10px", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: C.orange, fontWeight: 700 }}>
                          Project details
                        </p>
                        <div style={{ backgroundColor: C.surface2, borderRadius: 12, border: `1px solid ${C.border}`, padding: "16px 18px", fontSize: 14, color: C.text, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                          {message}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td align="center" style={{ padding: "0 32px 32px" }}>
                        <table role="presentation">
                          <tbody>
                            <tr>
                              <td style={{ borderRadius: 10, background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})` }}>
                                <a href={`mailto:${email}?subject=Re: Your quote request – After Built Solutions`} style={{ display: "inline-block", padding: "12px 28px", fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none" }}>
                                  Reply to {name.split(" ")[0]}
                                </a>
                              </td>
                              {phone ? (
                                <td style={{ paddingLeft: 12 }}>
                                  <a href={`tel:${phone.replace(/\s/g, "")}`} style={{ display: "inline-block", padding: "12px 22px", fontSize: 14, fontWeight: 600, color: C.orange, textDecoration: "none", borderRadius: 10, border: `1px solid ${C.border}` }}>
                                    Call {phone}
                                  </a>
                                </td>
                              ) : null}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "16px 32px 24px", borderTop: "1px solid rgba(249,115,22,0.1)", textAlign: "center" }}>
                        <p style={{ margin: 0, fontSize: 12, color: C.dim }}>After Built Solutions · Admin notification</p>
                      </td>
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

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <table role="presentation" width="100%" style={{ marginBottom: 12 }}>
      <tbody>
        <tr>
          <td width={90} valign="top" style={{ fontSize: 12, color: C.dim, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>
            {label}
          </td>
          <td valign="top" style={{ fontSize: 15, color: C.text }}>
            {href ? (
              <a href={href} style={{ color: C.orange, textDecoration: "none", fontWeight: 600 }}>{value}</a>
            ) : (
              value
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default AdminNotificationEmail;