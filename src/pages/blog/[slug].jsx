import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import blogPosts from "@/data/blogPosts.json";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { FiCalendar, FiClock } from "react-icons/fi";

const CARD_COLORS = [
  "#e8a87c",
  "#5bbfbf",
  "#d96860",
  "#b07890",
  "#3db8a8",
  "#606070",
  "#e8a040",
];

const postMap = new Map(blogPosts.map((post) => [post.slug, post]));

export default function BlogPost({ post, content, formattedDate, heroColor }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  if (!post) {
    return (
      <div className="blog">
        <main>
          <div className="not-found">
            <h1>Post no encontrado</h1>
            <Link href="/blog">← Volver a blog</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="blog">
      <Head>
        <title>{post.title} - cubo.dev</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.png" aria-label="favicon" />
      </Head>
      <main className="blog__main--post">
        <div className="slime-post-hero" style={{ backgroundColor: heroColor }}>
          <div className="slime-post-hero__inner">
            <div className="slime-post-hero__top">
              <Link href="/blog" className="slime-post-hero__back">
                ← Volver al blog
              </Link>
              <span className="slime-post-hero__tag">{post.mainTag}</span>
            </div>
            <h1 className="slime-post-hero__title">{post.title}</h1>
            <p className="slime-post-hero__excerpt">{post.excerpt}</p>
            <div className="slime-post-hero__meta">
              <span>
                <FiCalendar /> {formattedDate}
              </span>
              <span>
                <FiClock /> {post.readingTime} min de lectura
              </span>
            </div>
          </div>
        </div>

        <div className="slime-post-body">
          <article className="slime-post-content">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p className="no-content">Contenido no disponible</p>
            )}
          </article>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = postMap.get(params.slug);

  if (!post) {
    return { notFound: true };
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const heroColor = CARD_COLORS[postIndex % CARD_COLORS.length];

  const formattedDate = new Date(post.date).toLocaleDateString("es-ES");

  let content = null;
  const contentDir = path.join(process.cwd(), "src/content/blog");
  const filePath = path.join(contentDir, `${post.id}.md`);

  try {
    if (fs.existsSync(filePath)) {
      const markdown = fs.readFileSync(filePath, "utf-8");
      const rawHtml = marked(markdown);
      content = sanitizeHtml(rawHtml, {
        allowedTags: [
          "b",
          "i",
          "em",
          "strong",
          "a",
          "p",
          "br",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ul",
          "ol",
          "li",
          "blockquote",
          "code",
          "pre",
          "img",
          "hr",
          "span",
          "div",
        ],
        allowedAttributes: {
          a: ["href", "title"],
          img: ["src", "alt", "title"],
          span: ["class"],
          div: ["class"],
        },
        allowedSchemes: ["http", "https", "mailto"],
      });
      // Estilizar firma "atte: CUBO"
      content = content.replace(
        /atte:\s*CUBO/g,
        '<div class="cubo-signature"><span class="cubo-signature__label">atte:</span> <span class="cubo-signature__name">CUBO</span></div>',
      );
      // Estilizar "Próximo slime Post"
      content = content.replace(
        /<h2>Próximo slime Post:?\s*<\/h2>\s*<p><strong>(.*?)<\/strong><\/p>/g,
        '<div class="next-slime">' +
          '<div class="next-slime__seal">' +
          '<div class="next-slime__kiubit"><span></span><span></span></div>' +
          '<span class="next-slime__badge">NEXT</span>' +
          "</div>" +
          '<div class="next-slime__info">' +
          '<span class="next-slime__label">Próximo Slime Post</span>' +
          '<p class="next-slime__title">$1</p>' +
          "</div>" +
          "</div>",
      );
    }
  } catch (error) {
    console.error(`Error cargando ${post.id}:`, error);
  }

  return {
    props: { post, content, formattedDate, heroColor },
    revalidate: 3600,
  };
}
