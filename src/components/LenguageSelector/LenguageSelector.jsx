import { UsaFlag, MexFlag } from "@/images";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import Image from "next/image";

const LenguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language);
  const [toggleSelect, setToggleSelect] = useState(false);

  const openSelect = () => setToggleSelect((prev) => !prev);

  const changeLang = () => {
    const currentLanguage = switchLanguage();

    router.push(router.pathname, router.pathname, {
      locale: currentLanguage,
    });

    setLanguage(currentLanguage);
    setToggleSelect((prevState) => !prevState);
  };

  const switchLanguage = () => {
    return language === "es" ? "en" : "es";
  };

  const switchFlag = (opposite = false) => {
    const conditionalLanguage = !opposite ? "es" : "en";

    return language === conditionalLanguage ? MexFlag : UsaFlag;
  };

  const hiddenContainer = classNames({
    ...(toggleSelect
      ? { "lenguage-selector__menu": true }
      : { "lenguage-selector__menu-hidden": true }),
  });

  useEffect(() => {
    const handleClosed = () => setToggleSelect(false);

    window.addEventListener("closed", handleClosed);

    return () => window.removeEventListener("closed", handleClosed);
  }, []);

  return (
    <div className="lenguage-selector">
      <div className="lenguage-selector__dropdown-container">
        <div className="dropdown-toggle" onClick={openSelect}>
          <p>{language}</p>
          <Image src={switchFlag()} alt="language" />
        </div>
        <div className={hiddenContainer}>
          <ul onClick={changeLang}>
            <li>
              <p>{switchLanguage()}</p>
              <Image src={switchFlag(true)} alt="language" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LenguageSelector;
