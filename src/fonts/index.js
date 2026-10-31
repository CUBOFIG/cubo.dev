import localFont from "next/font/local";

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
