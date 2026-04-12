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
  experimental: {
    optimizePackageImports: [
      "react-icons/fa",
      "react-icons/si",
      "react-icons/fi",
      "react-icons/ri",
      "react-icons/vsc",
      "react-icons/hi",
      "react-icons/io",
      "react-icons/lu",
      "react-icons/tb",
    ],
  },
  i18n,
  async redirects() {
    return [
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
