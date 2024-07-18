import React from "react";

import cl from "./LatestNews.module.css";
import BannerList from "../components/BannersList/BannersList";
import { useFetch } from "../helpers/hooks/useFetch";
import { getLatestNews } from "../api/apiNews";

export default function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={cl.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
