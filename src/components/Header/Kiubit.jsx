import { useRouter } from "next/router";
import { memo, useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Modos del slime
const MODE = {
  FOLLOW: "follow",
  SLEEPING: "sleeping",
};

const DIALOGS = ["Soy Kiubit 👋", "Ven al blog ✍️", "¿Qué tal? 🤓"];

const SpeechBubble = ({ children, forceLeft }) => (
  <div className={`kiubit-bubble${forceLeft ? " kiubit-bubble--left" : ""}`}>
    <span className="kiubit-bubble__text">{children}</span>
    <span className="kiubit-bubble__arrow" />
  </div>
);

const Slime = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const isBlog = router.pathname.startsWith("/blog");
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);
  const slimeRef = useRef(null);
  const frameRef = useRef(null);
  const sleepTimerRef = useRef(null);
  const blinkTimerRef = useRef(null);
  const eyeRectsRef = useRef({ left: null, right: null });

  const updateEyeRects = useCallback(() => {
    eyeRectsRef.current.left = eyeLeftRef.current?.getBoundingClientRect() ?? null;
    eyeRectsRef.current.right = eyeRightRef.current?.getBoundingClientRect() ?? null;
  }, []);

  const [mode, setMode] = useState(MODE.FOLLOW);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dialog, setDialog] = useState(null);
  const dialogTimerRef = useRef(null);
  const modeRef = useRef(MODE.FOLLOW);

  const showDialog = useCallback((content, duration = 3000) => {
    setDialog(content);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    dialogTimerRef.current = setTimeout(() => setDialog(null), duration);
  }, []);

  const setModeSync = (m) => {
    modeRef.current = m;
    setMode(m);
  };

  // Resetea el timer de inactividad
  const resetSleepTimer = useCallback(() => {
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    if (modeRef.current === MODE.SLEEPING) setModeSync(MODE.FOLLOW);

    sleepTimerRef.current = setTimeout(() => {
      setModeSync(MODE.SLEEPING);
    }, 10000);
  }, []);

  // Seguimiento del mouse — usa rects cacheados (no fuerza reflow en cada movimiento)
  const moveEyes = useCallback(
    (e) => {
      resetSleepTimer();
      if (modeRef.current !== MODE.FOLLOW) return;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const pairs = [
          [eyeLeftRef.current, eyeRectsRef.current.left],
          [eyeRightRef.current, eyeRectsRef.current.right],
        ];
        for (const [eye, rect] of pairs) {
          if (!eye || !rect) continue;
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const angle = Math.atan2(dy, dx);
          const dist = Math.min(Math.hypot(dx, dy), 3);
          eye.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
        }
      });
    },
    [resetSleepTimer],
  );

  useEffect(() => {
    updateEyeRects();
    window.addEventListener("mousemove", moveEyes);
    window.addEventListener("resize", updateEyeRects);
    window.addEventListener("scroll", updateEyeRects, { passive: true });
    resetSleepTimer();
    return () => {
      window.removeEventListener("mousemove", moveEyes);
      window.removeEventListener("resize", updateEyeRects);
      window.removeEventListener("scroll", updateEyeRects);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, [moveEyes, resetSleepTimer, updateEyeRects]);

  // Parpadeo — en sleep parpadea muy lento y pesado
  // Escuchar evento de TechStack
  useEffect(() => {
    const handler = (e) => {
      const { tech } = e.detail;
      showDialog(
        <>
          <span className="kiubit-bubble__heart">&#9829;</span>
          <span className="kiubit-bubble__icon">
            {tech.isIcon ? (
              tech.icon
            ) : (
              <Image src={tech.icon} alt={tech.name} width={18} height={18} />
            )}
          </span>
        </>,
        3500,
      );
    };
    window.addEventListener("kiubit-dialog", handler);
    return () => window.removeEventListener("kiubit-dialog", handler);
  }, [showDialog]);

  useEffect(() => {
    const scheduleBlink = () => {
      const isSleeping = modeRef.current === MODE.SLEEPING;
      const delay = isSleeping
        ? 4000 + Math.random() * 4000
        : 2000 + Math.random() * 3000;
      const closeDuration = isSleeping ? 600 : 150;

      blinkTimerRef.current = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, closeDuration);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(blinkTimerRef.current);
  }, []);

  const eyeClass = [
    "slime__eye",
    isBlinking && "slime__eye--blink",
    isHovered && mode !== MODE.SLEEPING && "slime__eye--squint",
    mode === MODE.SLEEPING && !isBlinking && "slime__eye--sleep",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={`slime${mode === MODE.SLEEPING ? " slime--sleeping" : ""}`}
      ref={slimeRef}
      onClick={() => {
        if (isBlog) {
          setTheme(theme === "light" ? "dark" : "light");
        } else {
          router.push("/blog");
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isBlog ? "Toggle theme" : "Go to Blog"}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (isBlog) {
            setTheme(theme === "light" ? "dark" : "light");
          } else {
            router.push("/blog");
          }
        }
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        const msg = DIALOGS[Math.floor(Math.random() * DIALOGS.length)];
        showDialog(msg);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
        setDialog(null);
      }}
    >
      <span ref={eyeLeftRef} className={eyeClass} />
      <span ref={eyeRightRef} className={eyeClass} />
      {dialog && <SpeechBubble forceLeft={isBlog}>{dialog}</SpeechBubble>}
      {mode === MODE.SLEEPING && (
        <span className="slime__zzz" aria-hidden="true">
          <span className="slime__z">z</span>
          <span className="slime__z">Z</span>
          <span className="slime__z">z</span>
        </span>
      )}
    </span>
  );
};

const Kiubit = () => (
  <div className="header__blog-wrapper">
    <Slime />
  </div>
);

export default memo(Kiubit);
