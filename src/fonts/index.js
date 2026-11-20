import localFont from "next/font/local";
import { Bowlby_One, Bricolage_Grotesque, Inter } from "next/font/google";

export const arimo = localFont({
  src: "./Arimo.woff2",
  weight: "400 700",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-arimo",
});

// Solo se usa en el blog: no se precarga en todas las rutas
export const cube = localFont({
  src: "./cube.woff2",
  display: "swap",
  preload: false,
  fallback: ["sans-serif"],
  variable: "--font-cube",
});

export const bowlby = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Fuente variable: incluye pesos 200–800 (sin eje óptico para reducir el peso)
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

// Fuente de las tarjetas de "What People Say" (debajo del fold: no se precarga)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});
