import React, { useEffect, useState } from "react";

import cl from "./Main.module.css";
import NewsBunner from "../../components/NewsBunner/NewsBunner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

export default function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={cl.main}>
      {news.length > 0 ? <NewsBunner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
}
