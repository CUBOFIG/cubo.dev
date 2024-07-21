import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ children, text, icon }) => {
  const [toggleSelect, setOpenSelect] = useState(false);

  const openSelect = () => {
    setOpenSelect((prevState) => !prevState);
  };

  const hiddenContainer = classNames({
    ...(toggleSelect ? { menu: true } : { "menu-hidden": true }),
  });

  function logit() {
    setOpenSelect(false);
  }

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
        <AnimatePresence>
          {toggleSelect && (
            <motion.div
              className={hiddenContainer}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul>{children}</ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {toggleSelect && <div className="background-exit" onClick={openSelect} />}
    </>
  );
};

export default Dropdown;
