import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__container-information">
        <div className="hero__information">
          <div>
            <h1>{t("welcome")}</h1>

            <div>
              <div className="name-container">
                <h1 className="h1-one">{t("myName")}</h1>
                <h1 className="h1-two">{t("myName")}</h1>
                <h1 className="h1-three">{t("myName")}</h1>
              </div>
            </div>
          </div>

          <p>Frontend Developer</p>

          <p>
            Desarrollador web con experiencia en diseño y desarrollo de
            aplicaciones web, utilizando diversas tecnologías y sus ecosistemas.
            Creando soluciones, siempre un café a la vez.
          </p>
        </div>

        <figure className="hero__image-container">
          <Image src={Cubo} alt="logo" className="hero__image-logo" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
