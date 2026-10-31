import localFont from "next/font/local";
import { Bowlby_One, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

export const arimo = localFont({
  src: "./Arimo.woff2",
  weight: "400 700",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-arimo",
});

export const cube = localFont({
  src: "./cube.woff2",
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-cube",
});

export const funkturm = localFont({
  src: "./Funkturm.woff2",
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-funkturm",
});

export const bowlby = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Fuente variable: incluye pesos 400–700 y el eje óptico (12–96)
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
