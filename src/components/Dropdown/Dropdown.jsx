import classNames from "classnames";
import React, { useState, useEffect } from "react";

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
        <div className={hiddenContainer}>
          <ul>{children}</ul>
        </div>
      </div>

      {toggleSelect && <div className="background-exit" onClick={openSelect} />}
    </>
  );
};

export default Dropdown;
