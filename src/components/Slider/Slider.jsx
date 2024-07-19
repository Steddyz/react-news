import React, { useRef } from "react";

import cl from "./Slider.module.css";

export default function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={cl.slider}>
      <button onClick={scrollLeft} className={cl.arrow}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={cl.arrow}>
        {">"}
      </button>
    </div>
  );
}
