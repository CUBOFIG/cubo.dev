import React, { useEffect, useRef } from "react";

const ButtonGrid = () => {
  const ref = useRef(null);

  function toggle() {
    let btn = this;
    btn.classList.add("animation");
    btn.classList.toggle("active");
    let newElem = btn.cloneNode(true);
    btn.parentNode.replaceChild(newElem, btn);
    newElem.addEventListener("click", toggle);
  }

  useEffect(() => {
    const element2 = ref.current;
    const element = document
      .querySelectorAll(".grid-list")
      .forEach((button) => button.addEventListener("click", toggle));
  }, []);

  return (
    <button className="grid-list without-text" ref={ref}>
      <div className="icon">
        <div className="dots">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="lines">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </button>
  );
};

export default ButtonGrid;
