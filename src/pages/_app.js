import "../sass/main.scss";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components";
import { arimo, cube, funkturm } from "../fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <style jsx global>{`
        :root {
          --font-arimo: ${arimo.style.fontFamily};
          --font-cube: ${cube.style.fontFamily};
          --font-funkturm: ${funkturm.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
