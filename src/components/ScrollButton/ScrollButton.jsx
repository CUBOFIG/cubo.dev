import { useState, useEffect, useCallback } from "react";
import { animateScroll as scroll } from "react-scroll";
import { HiArrowUp } from "react-icons/hi";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
    verificarSobreposicion();

    // eslint-disable-next-line
  }, []);

  const verificarSobreposicion = useCallback(() => {
    const footer = document.getElementById("footer");
    const scrollButton = document.getElementById("scroll-button");

    if (!footer || !scrollButton) return;

    const footerRect = footer.getBoundingClientRect();
    const buttonRect = scrollButton.getBoundingClientRect();

    const isOverlapping =
      buttonRect.bottom > footerRect.top && buttonRect.top < footerRect.bottom;

    scrollButton.classList.toggle("sobre", isOverlapping);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, [toggleVisible]);

  return (
    <>
      {visible && (
        <button
          onClick={() => scroll.scrollToTop({ duration: 100, smooth: true })}
          className="scroll-button"
          id="scroll-button"
        >
          <HiArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
