import { CgNotes } from "react-icons/cg";
import { useRouter } from "next/router";
import { memo } from "react";

const BlogButton = () => {
  const { pathname } = useRouter();

  if (pathname === "/blog") return null;

  return (
    <a
      className="header__blog-button"
      href="/blog"
      aria-label="Go to Blog"
    >
      <CgNotes />
      Blog
    </a>
  );
};

export default memo(BlogButton);
