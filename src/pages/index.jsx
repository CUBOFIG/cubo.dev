import {
  BaseSection,
  Header,
  Hero,
  ScrollButton,
  TechStack,
  ExperienceList,
} from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import SocialNetwork from "../components/SocialNetwork/SocialNetwork";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>cubo.dev</title>
        <meta name="description" content="frontend developer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header />
        <section className="container">
          <Hero />
          <BaseSection
            title={{ ft: "About", st: "Me" }}
            description="aboutme"
          />

          <BaseSection
            title={{ ft: "Tech", st: "Stack" }}
            description="devstack"
            content={TechStack}
          />
          <BaseSection
            title={{ ft: "My", st: "Experience" }}
            description="myexperience"
            content={ExperienceList}
          />
          {/* <BaseSection
            title={{ ft: "My", st: "Projects" }}
            description="aboutme"
          /> */}
          {/* <BaseSection title={{ st: "Contact Me" }} description="aboutme" />
          <div className="aports">
            <BaseSection title={{ st: "Aportaciones" }} description="aboutme" />
          </div> */}
          <BaseSection title={{ st: "Contact Me" }} />
          <SocialNetwork />
        </section>

        <ScrollButton />
      </main>

      <footer className="footer">
        <p>Creado con un cafe y mucho amor</p>
        <p className="header__logo">CUBO</p>
      </footer>
    </>
  );
}
