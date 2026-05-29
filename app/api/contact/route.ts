import { Resend } from "resend";

const TO = "contact@doniia.com";
const FROM = "Donia Contact <contact@doniia.com>";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "Une question générale").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Champs manquants" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Email invalide" }, { status: 400 });
  }
  if (message.length > 5000) {
    return Response.json({ error: "Message trop long" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing on the server");
    return Response.json({ error: "Service indisponible" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; line-height: 1.5; color: #2A0F1A;">
      <h2 style="color:#F4486F;margin:0 0 16px">Nouveau message — formulaire doniia.com</h2>
      <p><strong>De :</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>
  `;

  const text = `Nouveau message — formulaire doniia.com\n\nDe : ${name} <${email}>\nSujet : ${subject}\n\n${message}`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Site] ${subject} — ${name}`,
      html,
      text,
    });
    if (error) {
      console.error("Resend error", error);
      return Response.json({ error: "Envoi impossible" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Resend exception", err);
    return Response.json({ error: "Envoi impossible" }, { status: 502 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
