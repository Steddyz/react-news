import React from "react";

import cl from "./Categories.module.css";

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className={cl.categories}>
      <button
        onClick={() => {
          setSelectedCategory(null);
        }}
        className={!selectedCategory ? cl.active : cl.item}
      >
        All
      </button>
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
