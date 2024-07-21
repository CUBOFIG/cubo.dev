import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const interval = 5000;
  const animationDuration = 2500;

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);

      const timeout = setTimeout(() => {
        setAnimate(false);
      }, animationDuration);

      return () => clearTimeout(timeout);
    }, interval);

    return () => clearInterval(animationInterval);
  }, [interval, animationDuration]);

  return (
    <section className="hero">
      <div className="hero__blur"></div>
      <div className="hero__container-information">
        <motion.div
          className="hero__information"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <h1>{t("welcome")}</h1>

            <div>
              <div
                className={classNames("name-container", {
                  "name-container__animate": animate,
                })}
              >
                <h1 className="h1-one">{t("myName")}</h1>
                <h1 className="h1-two">{t("myName")}</h1>
                <h1 className="h1-three">{t("myName")}</h1>
              </div>
            </div>
          </div>

          <p>Frontend Developer</p>
          <p>{t("my_description")} </p>
        </motion.div>

        <motion.figure
          className="hero__image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src={Cubo} alt="logo" className="hero__image-logo" />
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
