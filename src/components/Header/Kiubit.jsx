import { useRouter } from "next/router";
import { memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import useKiubit from "./useKiubit";

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

  const {
    refs: { eyeLeftRef, eyeRightRef, slimeRef },
    mode,
    MODE,
    dialog,
    eyeClass,
    showDialog,
    hideDialog,
    setIsHovered,
    DIALOGS,
  } = useKiubit();

  const handleClick = () => {
    if (isBlog) {
      setTheme(theme === "light" ? "dark" : "light");
    } else {
      router.push("/blog");
    }
  };

  return (
    <span
      className={`slime${mode === MODE.SLEEPING ? " slime--sleeping" : ""}`}
      ref={slimeRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={isBlog ? "Toggle theme" : "Go to Blog"}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      onMouseEnter={() => {
        setIsHovered(true);
        showDialog(DIALOGS[Math.floor(Math.random() * DIALOGS.length)]);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        hideDialog();
      }}
    >
      <span ref={eyeLeftRef} className={eyeClass} />
      <span ref={eyeRightRef} className={eyeClass} />
      {dialog && (
        <SpeechBubble forceLeft={isBlog}>
          {dialog.tech ? (
            <>
              <span className="kiubit-bubble__heart">&#9829;</span>
              <span className="kiubit-bubble__icon">
                {dialog.tech.isIcon ? (
                  dialog.tech.icon
                ) : (
                  <Image src={dialog.tech.icon} alt={dialog.tech.name} width={18} height={18} />
                )}
              </span>
            </>
          ) : (
            dialog
          )}
        </SpeechBubble>
      )}
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
