import "../styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
