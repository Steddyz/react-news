import React from "react";

import cl from "./Pagination.module.css";

export default function Pagination({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}) {
  return (
    <div className={cl.pagination}>
      <button
        onClick={handlePrevPage}
        className={cl.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={cl.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={cl.page__number}
              disabled={index + 1 === currentPage}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        className={cl.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
}
