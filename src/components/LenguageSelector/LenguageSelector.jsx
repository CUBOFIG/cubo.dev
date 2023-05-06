import { UsaFlag, MexFlag } from "@/images";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const LenguageSelector = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);
  const [toggleSelect, setOpenSelect] = useState(false);

  const openSelect = () => {
    setOpenSelect((prevState) => !prevState);
  };

  const router = useRouter();

  const changeLang = () => {
    const currentLanguage = switchLanguage();

    router.push(router.pathname, router.pathname, {
      locale: currentLanguage,
    });

    setLanguage(currentLanguage);
    setOpenSelect((prevState) => !prevState);
  };

  const switchLanguage = () => {
    return language === "es" ? "en" : "es";
  };

  const switchFlag = (opposite = false) => {
    const conditionalLanguage = !opposite ? "es" : "en";

    return language === conditionalLanguage ? MexFlag : UsaFlag;
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-toggle" onClick={openSelect}>
        <p> {language}</p>
        <Image src={switchFlag()} alt="language" />
      </div>
      <div className={`${toggleSelect ? "menu" : "menu-hidden"}`}>
        <ul onClick={changeLang}>
          <li>
            <p>{switchLanguage()}</p>
            <Image src={switchFlag(true)} alt="language" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LenguageSelector;
