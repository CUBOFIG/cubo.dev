import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <Image src={Cubo} alt="logo" className="hero__image-logo" />
      <div className="hero__information">
        <div>
          <h1>{t("welcome")}</h1>

          <div className="name-container">
            <h1 className="h1-one">{t("myName")}</h1>
            <h1 className="h1-two">{t("myName")}</h1>
            <h1 className="h1-three">{t("myName")}</h1>
          </div>
        </div>

        <p>Frontend Developer</p>
      </div>
    </section>
  );
};

export default Hero;
