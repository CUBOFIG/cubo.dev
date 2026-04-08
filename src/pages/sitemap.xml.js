import blogPosts from "@/data/blogPosts.json";

const BASE_URL = "https://cubo.dev";

function generateSitemap() {
  const staticRoutes = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/blog", priority: "0.8", changefreq: "weekly" },
    { path: "/es", priority: "1.0", changefreq: "weekly" },
    { path: "/es/blog", priority: "0.8", changefreq: "weekly" },
  ];

  const blogRoutes = blogPosts.flatMap((post) => [
    {
      path: `/blog/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: post.date,
    },
    {
      path: `/es/blog/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: post.date,
    },
  ]);

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ path, priority, changefreq, lastmod }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return { props: {} };
}
