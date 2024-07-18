import React from "react";

import cl from "./Skeleton.module.css";

export default function Skeleton({
  count = 1,
  type = "banner",
  direction = "column",
}) {
  return (
    <div>
      {count > 1 ? (
        <ul className={direction === "column" ? cl.column__list : cl.row__list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? cl.banner : cl.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? cl.banner : cl.item}></li>
      )}
    </div>
  );
}
