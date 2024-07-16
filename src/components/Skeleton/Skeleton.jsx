import React from "react";

import cl from "./Skeleton.module.css";

export default function Skeleton({ count = 1, type = "banner" }) {
  return (
    <div>
      {count > 1 ? (
        <ul className={cl.list}>
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
