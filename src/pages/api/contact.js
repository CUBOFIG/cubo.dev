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
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── Rate limit ────────────────────────────────────────────────────────────
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress;

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many attempts. Try again in 15 minutes." });
  }

  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ error: "Invalid body." });
  }

  const { email, message, _honey, turnstileToken } = req.body;

  // ── Honeypot ──────────────────────────────────────────────────────────────
  if (_honey) {
    return res.status(200).json({ success: true });
  }

  // ── Validación server-side ────────────────────────────────────────────────
  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email." });
  }

  if (message.length < 10 || message.length > 5000) {
    return res
      .status(400)
      .json({ error: "Message must be between 10 and 5000 characters." });
  }

  // ── Turnstile verification ────────────────────────────────────────────────
  if (!turnstileToken) {
    return res
      .status(400)
      .json({ error: "Security verification required." });
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
        .json({ error: "Security verification failed." });
    }
  } catch {
    return res.status(500).json({ error: "Error verifying security." });
  }

  // ── Enviar email con Resend ───────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: "cubo.dev <contact@cubo.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from cubo.dev`,
      html: `
        <h2>New contact message</h2>
        <p><strong>De:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Error sending message." });
  }
}
