import React from "react";

import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../api/apiNews";

import cl from "./NewsFilters.module.css";
import Slider from "../Slider/Slider";

export default function NewsFilters({ filters, changeFilters }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={cl.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => {
              changeFilters("category", category);
            }}
          />
        </Slider>
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
