import { useRef, useState, useEffect, useCallback } from "react";

const MODE = {
  FOLLOW: "follow",
  SLEEPING: "sleeping",
};

const DIALOGS = ["I'm Kiubit 👋", "Visit the blog ✍️", "What's up? 🤓"];

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

export default function useKiubit() {
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);
  const slimeRef = useRef(null);
  const frameRef = useRef(null);
  const sleepTimerRef = useRef(null);
  const blinkTimerRef = useRef(null);
  const wanderTimerRef = useRef(null);
  const dialogTimerRef = useRef(null);
  const eyeRectsRef = useRef({ left: null, right: null });
  const modeRef = useRef(MODE.FOLLOW);

  const [mode, setMode] = useState(MODE.FOLLOW);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dialog, setDialog] = useState(null);

  const setModeSync = (m) => {
    modeRef.current = m;
    setMode(m);
  };

  const updateEyeRects = useCallback(() => {
    eyeRectsRef.current.left = eyeLeftRef.current?.getBoundingClientRect() ?? null;
    eyeRectsRef.current.right = eyeRightRef.current?.getBoundingClientRect() ?? null;
  }, []);

  const showDialog = useCallback((content, duration = 3000) => {
    setDialog(content);
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    dialogTimerRef.current = setTimeout(() => setDialog(null), duration);
  }, []);

  const hideDialog = useCallback(() => {
    if (dialogTimerRef.current) clearTimeout(dialogTimerRef.current);
    setDialog(null);
  }, []);

  const moveEyesTo = useCallback((dx, dy) => {
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(Math.hypot(dx, dy), 3);
    const tx = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
    if (eyeLeftRef.current) eyeLeftRef.current.style.transform = tx;
    if (eyeRightRef.current) eyeRightRef.current.style.transform = tx;
  }, []);

  // Sleep timer
  const resetSleepTimer = useCallback(() => {
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    if (modeRef.current === MODE.SLEEPING) setModeSync(MODE.FOLLOW);

    sleepTimerRef.current = setTimeout(() => {
      setModeSync(MODE.SLEEPING);
    }, 10000);
  }, []);

  // Mobile wander
  useEffect(() => {
    if (!isMobile()) return;

    const wander = () => {
      if (modeRef.current === MODE.SLEEPING) return;
      const dx = (Math.random() - 0.5) * 8;
      const dy = (Math.random() - 0.5) * 6;
      moveEyesTo(dx, dy);
      wanderTimerRef.current = setTimeout(wander, 1500 + Math.random() * 2500);
    };

    if (mode === MODE.FOLLOW) {
      wanderTimerRef.current = setTimeout(wander, 1000);
    }
    return () => clearTimeout(wanderTimerRef.current);
  }, [moveEyesTo, mode]);

  // Desktop mouse follow + scroll activity
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
    const mobile = isMobile();
    updateEyeRects();

    const onScroll = () => {
      updateEyeRects();
      if (mobile) resetSleepTimer();
    };

    if (!mobile) {
      window.addEventListener("mousemove", moveEyes);
    }
    window.addEventListener("resize", updateEyeRects);
    window.addEventListener("scroll", onScroll, { passive: true });
    resetSleepTimer();
    return () => {
      if (!mobile) {
        window.removeEventListener("mousemove", moveEyes);
      }
      window.removeEventListener("resize", updateEyeRects);
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current);
    };
  }, [moveEyes, resetSleepTimer, updateEyeRects]);

  // TechStack dialog listener
  useEffect(() => {
    const handler = (e) => {
      showDialog({ tech: e.detail.tech }, 3500);
    };
    window.addEventListener("kiubit-dialog", handler);
    return () => window.removeEventListener("kiubit-dialog", handler);
  }, [showDialog]);

  // Blink loop
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

  return {
    refs: { eyeLeftRef, eyeRightRef, slimeRef },
    mode,
    MODE,
    dialog,
    isHovered,
    eyeClass,
    showDialog,
    hideDialog,
    setIsHovered,
    DIALOGS,
  };
}
