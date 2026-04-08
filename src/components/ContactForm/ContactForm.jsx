import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "next-i18next";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const ContactForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }
  const toastTimerRef = useRef(null);

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);
  const turnstileRef = useRef(null);
  const tokenRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current || widgetIdRef.current !== null) return;

      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => {
          tokenRef.current = token;
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
      return () => {
        if (widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }

    if (!document.getElementById("turnstile-script")) {
      const script = document.createElement("script");
      script.id = "turnstile-script";
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
      script.async = true;
      document.head.appendChild(script);
    }

    window.onTurnstileLoad = renderWidget;

    return () => {
      delete window.onTurnstileLoad;
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus("sending");
      setErrorMsg("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            message,
            _honey: e.target._honey.value,
            turnstileToken: tokenRef.current,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setEmail("");
          setMessage("");
          showToast("success", t("contact_success"));
          if (window.turnstile && widgetIdRef.current !== null) {
            window.turnstile.reset(widgetIdRef.current);
            tokenRef.current = null;
          }
        } else {
          setStatus("error");
          setErrorMsg(data.error || t("contact_error_generic"));
          showToast("error", data.error || t("contact_error_generic"));
        }
      } catch {
        setStatus("error");
        setErrorMsg(t("contact_error_network"));
        showToast("error", t("contact_error_network"));
      }
    },
    [email, message, showToast, t],
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="_honey"
        autoComplete="off"
        tabIndex={-1}
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <div className="contact-form__field">
        <label htmlFor="contact-email">Correo</label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div ref={turnstileRef} className="contact-form__turnstile" />

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {toast && (
        <div
          className={`contact-toast contact-toast--${toast.type}`}
          role="status"
          aria-live="polite"
        >
          <span className="contact-toast__icon" aria-hidden="true">
            {toast.type === "success" ? "✓" : "!"}
          </span>
          <span className="contact-toast__message">{toast.message}</span>
          <button
            type="button"
            className="contact-toast__close"
            aria-label="Cerrar"
            onClick={() => setToast(null)}
          >
            ×
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
