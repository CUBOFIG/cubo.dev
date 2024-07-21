import dynamic from "next/dynamic";
import { BaseSection, Header, Hero, ScrollButton } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const TechStack = dynamic(() => import("@/components/TechStack/TechStack"));
const ExperienceList = dynamic(() =>
  import("@/components/ExperienceList/ExperienceList")
);
const SocialNetwork = dynamic(() =>
  import("../components/SocialNetwork/SocialNetwork")
);

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
        <Hero />
        <section className="container">
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
          <BaseSection title={{ st: "Contact Me" }} />
          <SocialNetwork />
        </section>

        <ScrollButton />
      </main>

      <footer className="footer" id="footer">
        <p>Creado con un cafe y mucho amor</p>
        <p className="header__logo">CUBO</p>
      </footer>
    </>
  );
}
