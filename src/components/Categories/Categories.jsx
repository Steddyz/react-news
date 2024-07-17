import React from "react";

import cl from "./Categories.module.css";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={cl.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
            key={category}
            className={selectedCategory === category ? cl.active : cl.item}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
