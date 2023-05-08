import { IoMdSettings } from "react-icons/io";
import { LenguageSelector, Dropdown } from "@/components";
import { useState } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__logo">CUBO</h1>
        <div className="header__settings">
          <Dropdown icon={<IoMdSettings />}>
            <LenguageSelector />
            <div className="toggle-theme" onClick={toggleTheme}>
              <div className="toggle-inner" />
            </div>
          </Dropdown>

          <div className="settings-large">
            <div className="toggle-theme" onClick={toggleTheme}>
              <div className="toggle-inner" />
            </div>
            <LenguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
