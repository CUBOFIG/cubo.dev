import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__blur"></div>
      <div className="hero__container-information">
        <div className="hero__information">
          <div>
            <p className="hero__welcome">{t("welcome")}</p>

            <div>
              <div className="name-container">
                <h1 className="h1-one">{t("myName")}</h1>
                <h1 className="h1-two" aria-hidden="true">{t("myName")}</h1>
                <h1 className="h1-three" aria-hidden="true">{t("myName")}</h1>
              </div>
            </div>
          </div>

          <p>Frontend Developer</p>
          <p>{t("my_description")} </p>

        </div>

        <figure className="hero__image-container">
          <Image src={Cubo} alt="logo" className="hero__image-logo" priority draggable={false} />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
