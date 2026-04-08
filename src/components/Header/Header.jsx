import { IoMdSettings, IoMdDownload } from "react-icons/io";
import { LenguageSelector, Dropdown } from "@/components";
import { useTheme } from "next-themes";
import { LuConstruction } from "react-icons/lu";
import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Kiubit from "./Kiubit";

LuConstruction;
const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const isBlog = router.pathname.startsWith("/blog");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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

          {!isBlog && (
            <>
              <div className="header__settings">
                <Dropdown icon={<IoMdSettings />}>
                  <LenguageSelector />
                  <div className="toggle-theme" onClick={toggleTheme}>
                    <div className="toggle-inner" />
                  </div>
                </Dropdown>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
