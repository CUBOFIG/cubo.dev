import React from "react";
import Image from "next/image";
import { Cubo } from "@/images";

const Hero = ({ translate }) => {
  return (
    <div className="hero">
      <Image src={Cubo} alt="logo" className="hero__image-logo" />
      <div className="hero__information">
        <div>
          <h1>{translate("welcome")}</h1>

          <div className="name-container">
            <h1 className="h1-one">{translate("myName")}</h1>
            <h1 className="h1-two">{translate("myName")}</h1>
            <h1 className="h1-three">{translate("myName")}</h1>
          </div>
        </div>

        <p>Frontend Developer</p>
      </div>
    </div>
  );
};

export default Hero;
