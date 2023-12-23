import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { HiArrowUp } from "react-icons/hi";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);

    if (scrolled > 300)
      setTimeout(() => {
        verificarSobreposicion();
      }, 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const verificarSobreposicion = () => {
    const elemento1 = document.getElementById("footer") || null;
    const elemento2 = document.getElementById("scroll-button") || null;

    if (!elemento1 || !elemento2) return;

    const rect1 = elemento1?.getBoundingClientRect();
    const rect2 = elemento2?.getBoundingClientRect();

    const sobre =
      rect2.left > rect1.right ||
      rect2.right < rect1.left ||
      rect2.top > rect1.bottom ||
      rect2.bottom < rect1.top;

    if (sobre) {
      elemento2.classList.remove("sobre");
    } else {
      elemento2.classList.add("sobre");
    }
  };

  return (
    <>
      {visible && (
        <button
          onClick={() => scroll.scrollToTop()}
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
