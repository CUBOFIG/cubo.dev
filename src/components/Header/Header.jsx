import { LenguageSelector } from "@/components";
import classNames from "classnames";
import { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [dark, toggleDark] = useState(theme === "system");

  const toggleClass = classNames("toggle-inner", {
    "header__toggle-theme-active": dark,
  });

  return (
    <div className="header">
      <h1 className="header__logo">CUBO</h1>
      <LenguageSelector />
      <div
        className="header__toggle-theme"
        onClick={() => {
          toggleDark((prevState) => !prevState);
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <div className={toggleClass} />
      </div>
    </div>
  );
};

export default Header;
