import React from "react";

import cl from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList({ news }) {
  return (
    <ul className={cl.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
