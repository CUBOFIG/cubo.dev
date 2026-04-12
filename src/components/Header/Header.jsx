import { memo, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";
import Kiubit from "./Kiubit";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <nav className="header">
        <div className="header__container">
          <h1 className="header__logo">
            <Link href="/" aria-label="Go Home">
              CUBO
            </Link>
          </h1>

          <Kiubit />

          <button
            className={`header__theme-toggle${isAnimating ? " header__theme-toggle--animating" : ""}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted ? (isDark ? <FiMoon /> : <FiSun />) : <FiSun />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
