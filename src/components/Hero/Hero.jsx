import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__greeting">{t("hero_greeting")}</span>
          <span className="hero__name">
            <span className="hero__name-layer hero__name-layer--main">{t("hero_name")}</span>
            <span className="hero__name-layer hero__name-layer--cyan" aria-hidden="true">
              {t("hero_name")}
            </span>
            <span className="hero__name-layer hero__name-layer--red" aria-hidden="true">
              {t("hero_name")}
            </span>
          </span>
        </h1>

        <figure className="hero__avatar">
          <Image
            src={Cubo}
            alt="CUBO avatar"
            className="hero__avatar-image"
            sizes="(min-width: 1024px) 400px, 70vw"
            width={400}
            height={400}
            priority
            draggable={false}
          />
        </figure>

        <div className="hero__intro">
          <p className="hero__role">Frontend Developer</p>
          <p className="hero__description">{t("hero_description")}</p>
        </div>

        <div className="hero__cta">
          <p className="hero__tagline">{t("hero_tagline")}</p>
          <a href="#experience" className="hero__button">
            {t("hero_view_work")} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
