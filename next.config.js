/** @type {import('next').NextConfig} */
const path = require("path");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    silenceDeprecations: ["import", "global-builtin"],
  },
  i18n,
};

module.exports = nextConfig;
