import React from "react";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";

import cl from "./NewsFilters.module.css";

export default function NewsFilters({ filters, changeFilters }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={cl.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => {
            changeFilters("category", category);
          }}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilters("keywords", keywords);
        }}
      />
    </div>
  );
}
