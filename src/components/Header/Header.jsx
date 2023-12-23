import { IoMdSettings, IoMdDownload } from "react-icons/io";
import { LenguageSelector, Dropdown } from "@/components";
import { useTheme } from "next-themes";
import { LuConstruction } from "react-icons/lu";

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
          <h1 className="header__logo">CUBO</h1>

          {/* <div className="d-flex align-items-center header__indication">
            <LuConstruction />
            <h2> Estamos en construccion</h2>
            <LuConstruction />
          </div> */}

          <div className="button-cv">
            <a href="/static/data/cv.pdf" download="Mi_CV.pdf">
              <button type="button">
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

            <div className="settings-large">
              <div className="toggle-theme" onClick={toggleTheme}>
                <div className="toggle-inner" />
              </div>
              <LenguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="indication-mobile">
        <div>
          <LuConstruction />
          <h2> Estamos en construccion</h2>
          <LuConstruction />
        </div>
      </div> */}
    </>
  );
};

export default Header;
