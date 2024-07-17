import React, { useEffect, useState } from "react";

import cl from "./Main.module.css";
import NewsBunner from "../../components/NewsBunner/NewsBunner";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keywords, setKeywords] = useState("");

  const totalPages = 10;
  const pageSize = 10;
  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={cl.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

      {news.length > 0 && !isLoading ? (
        <NewsBunner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
