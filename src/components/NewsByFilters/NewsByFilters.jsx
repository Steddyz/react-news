import React from "react";

import cl from "./NewsByFilters.module.css";

import Pagination from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constant/constants";
import NewsFilters from "../NewsFilters/NewsFilters";

export default function NewsByFilters({
  filters,
  changeFilters,
  isLoading,
  news,
}) {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  return (
    <section className={cl.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
      <NewsList isLoading={isLoading} news={news} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
}
