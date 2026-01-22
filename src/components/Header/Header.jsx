import { IoMdSettings, IoMdDownload } from "react-icons/io";
import { LenguageSelector, Dropdown } from "@/components";
import { useTheme } from "next-themes";
import { LuConstruction } from "react-icons/lu";
import { memo } from "react";
import BlogButton from "./BlogButton";

LuConstruction;
const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav className="header">
        <div className="header__container">
          <h1 className="header__logo">
            <a href="/" aria-label="Go Home">
              CUBO
            </a>
          </h1>

          <BlogButton />

          <div className="button-cv">
            <a
              href="/static/data/cv.pdf"
              download="Mi_CV.pdf"
              aria-label="Download CV"
            >
              <button type="button" name="download-cv" aria-label="Download CV">
                <IoMdDownload />
              </button>
            </a>
          </div>

          <div className="header__settings">
            <Dropdown icon={<IoMdSettings />}>
              <LenguageSelector />
              <div className="toggle-theme" onClick={toggleTheme}>
                <div className="toggle-inner" />
              </div>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
