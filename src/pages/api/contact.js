import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// ── Rate limiting (in-memory por IP) ──────────────────────────────────────────
const rateMap = new Map();
const RATE_LIMIT = 3;
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutos

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  // ── Rate limit ────────────────────────────────────────────────────────────
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress;

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Demasiados intentos. Intenta en 15 minutos." });
  }

  const { email, message, _honey, turnstileToken } = req.body;

  // ── Honeypot ──────────────────────────────────────────────────────────────
  if (_honey) {
    return res.status(200).json({ success: true });
  }

  // ── Validación server-side ────────────────────────────────────────────────
  if (!email || !message) {
    return res.status(400).json({ error: "Correo y mensaje son requeridos." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Correo inválido." });
  }

  if (message.length < 10 || message.length > 5000) {
    return res
      .status(400)
      .json({ error: "El mensaje debe tener entre 10 y 5000 caracteres." });
  }

  // ── Turnstile verification ────────────────────────────────────────────────
  if (!turnstileToken) {
    return res
      .status(400)
      .json({ error: "Verificación de seguridad requerida." });
  }

  try {
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
          remoteip: ip,
        }),
      },
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return res
        .status(400)
        .json({ error: "Verificación de seguridad fallida." });
    }
  } catch {
    return res.status(500).json({ error: "Error verificando seguridad." });
  }

  // ── Enviar email con Resend ───────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: "cubo.dev <contact@cubo.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje desde cubo.dev`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>De:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return res.status(500).json({ error: "Error enviando el mensaje." });
  }
}
