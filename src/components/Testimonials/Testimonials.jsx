import { Fragment, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { testimonialsData } from "@/data/testimonialsData";

// Convierte "texto [[resaltado]] texto" en texto con <mark>.
const renderMarked = (text) =>
  text.split(/\[\[(.+?)\]\]/g).map((part, index) => (
    <Fragment key={index}>
      {index % 2 === 1 ? <mark>{part}</mark> : part}
    </Fragment>
  ));

const TestimonialCard = ({ testimonial }) => {
  const { name, role, photo, linkedin, tone, keywords, paragraphs } =
    testimonial;
  const [open, setOpen] = useState(false);
  const fullTextId = useId();

  return (
    <article
      className={classNames("testimonial", `testimonial--${tone}`, {
        "is-open": open,
      })}
    >
      <div className="testimonial__body">
        <span className="testimonial__qmark" aria-hidden="true">
          “
        </span>

        <ul className="testimonial__chips" aria-label="What stands out">
          {keywords.map((keyword, index) => (
            <li
              key={keyword}
              className="testimonial__chip"
              style={{ "--i": index }}
            >
              {keyword}
            </li>
          ))}
        </ul>

        <div className="testimonial__full" id={fullTextId}>
          <div className="testimonial__full-inner">
            <blockquote className="testimonial__quote">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{renderMarked(paragraph)}</p>
              ))}
            </blockquote>
          </div>
        </div>

        <button
          type="button"
          className="testimonial__toggle"
          aria-expanded={open}
          aria-controls={fullTextId}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span className="testimonial__toggle-label">
            {open ? "Show less" : "Read more"}
          </span>
          <span className="testimonial__chev" aria-hidden="true">
            ↓
          </span>
        </button>
      </div>

      <footer className="testimonial__author">
        <a
          className="testimonial__photo"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image src={photo} alt="" width={48} height={48} />
        </a>
        <div className="testimonial__who">
          <a
            className="testimonial__name"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn (opens in a new tab)`}
          >
            {name}
            <span className="testimonial__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <span className="testimonial__role">{role}</span>
        </div>
      </footer>
    </article>
  );
};

const Testimonials = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Los chips empiezan a animarse cuando la sección entra en pantalla.
  useEffect(() => {
    const node = containerRef.current;
    if (!node || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames("testimonials", { "is-visible": isVisible })}
    >
      {testimonialsData.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
