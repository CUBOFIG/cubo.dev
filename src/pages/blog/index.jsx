import Head from "next/head";
import Link from "next/link";
import blogPosts from "@/data/blogPosts.json";
import { FiCalendar, FiClock } from "react-icons/fi";

// Mapa de fechas formateadas (creado en build time)
const postDates = {};
blogPosts.forEach((post) => {
  postDates[post.id] = new Date(post.date).toLocaleDateString("es-ES");
});

export default function BlogList({ posts }) {
  return (
    <div className="blog">
      <Head>
        <title>Blog - cubo.dev</title>
        <meta name="description" content="Blog de desarrollo y tecnología" />
        <link rel="icon" href="/favicon.png" arial-label="favicon" />
      </Head>
      <main>
        <div className="blog__header-blog">
          <div className="base-section__title">
            <div className="cont-title">
              <h1>Slime Posts</h1>
              <h1 className="t-h2">Slime Posts</h1>
              <h1 className="t-h3">Slime Posts</h1>
            </div>
          </div>
          <p>{posts.length} artículos sobre desarrollo web y tecnología</p>
        </div>
        <section className="posts-list">
          <div className="container-posts">
            <div className="posts-grid">
              {posts.map((post, index) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className={`post-wrapper item-${(index % 3) + 1} ${posts.length % 3 === 1 && index === posts.length - 1 ? "is-full" : ""}`}
                >
                  <article className="post-card">
                    <div className="post-card-header">
                      <h2>{post.title}</h2>
                      <span className="main-tag">{post.mainTag}</span>
                    </div>
                    <p className="excerpt">{post.excerpt}</p>
                    <div className="post-card-footer">
                      <span className="date">
                        <FiCalendar /> {postDates[post.id]}
                      </span>
                      <span className="reading-time">
                        <FiClock /> {post.readingTime} min
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
}
