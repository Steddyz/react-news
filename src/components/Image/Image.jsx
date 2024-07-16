import React from "react";

import cl from "./Image.module.css";

export default function Image({ image }) {
  return (
    <div className={cl.wrapper}>
      {image ? <img src={image} alt="news" className={cl.image} /> : null}
    </div>
  );
}
