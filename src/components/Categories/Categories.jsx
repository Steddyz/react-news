import React, { forwardRef } from "react";

import cl from "./Categories.module.css";

export const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div ref={ref} className={cl.categories}>
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
);

Categories.displayName = "Categories";

export default Categories;
