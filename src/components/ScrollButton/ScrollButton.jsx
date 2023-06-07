import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { HiArrowUp } from "react-icons/hi";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {visible && (
        <button onClick={() => scroll.scrollToTop()} className="scroll-button">
          <HiArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
