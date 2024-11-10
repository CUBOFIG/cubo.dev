import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ children, text, icon }) => {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openSelect = () => {
    if (toggleSelect) {
      setIsAnimating(true);
      setTimeout(() => {
        setToggleSelect(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setToggleSelect(true);
      const event = new CustomEvent("closed");
      window.dispatchEvent(event);
    }
  };

  const hiddenContainer = classNames({
    menu: true,
    "menu-hidden": !toggleSelect && !isAnimating,
  });

  const logit = () => {
    setToggleSelect(false);
  };

  useEffect(() => {
    if (toggleSelect) {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
    }

    return () => window.removeEventListener("scroll", logit);
  }, [toggleSelect]);

  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown-toggle" onClick={openSelect}>
          {text}
          {icon}
        </div>
        <motion.div
          className={hiddenContainer}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: toggleSelect && !isAnimating ? 1 : 0,
            y: toggleSelect && !isAnimating ? 0 : -10,
          }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ul>{children}</ul>
        </motion.div>
      </div>

      {toggleSelect && <div className="background-exit" onClick={openSelect} />}
    </>
  );
};

export default Dropdown;
