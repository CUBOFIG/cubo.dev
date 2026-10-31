import dynamic from "next/dynamic";
import { BaseSection, Hero, ScrollButton } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const TechStack = dynamic(() => import("@/components/TechStack/TechStack"));
const ExperienceList = dynamic(
  () => import("@/components/ExperienceList/ExperienceList"),
);
const SocialNetwork = dynamic(
  () => import("../components/SocialNetwork/SocialNetwork"),
);
const ContactForm = dynamic(
  () => import("@/components/ContactForm/ContactForm"),
);

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations("en", ["common"])),
    },
  };
}

export default function Home() {
  const title = "CUBO — Frontend Developer";
  const description = "Heriberto, Frontend Developer specialized in React, Vue and TypeScript.";
  const canonical = "https://cubo.dev";

  return (
    <div className="page-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://cubo.dev/images/cubo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://cubo.dev/images/cubo.jpg" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Heriberto",
              alternateName: "CUBO",
              url: "https://cubo.dev",
              image: "https://cubo.dev/images/cubo.jpg",
              jobTitle: "Frontend Developer",
              description: description,
              sameAs: [
                "https://github.com/CUBOFIG",
              ],
            }),
          }}
        />
      </Head>
      <main>
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
          <BaseSection title={{ st: "Contact Me" }} content={ContactForm} />
          <SocialNetwork />
        </section>

        <ScrollButton />
      </main>
      <footer className="footer" id="footer">
        <p>Made with coffee and lots of love</p>
        <p className="header__logo">CUBO</p>
      </footer>
    </div>
  );
}
