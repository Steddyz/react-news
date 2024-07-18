import React from "react";

import cl from "./LatestNews.module.css";
import BannerList from "../components/BannersList/BannersList";

export default function LatestNews({ banners, isLoading }) {
  return (
    <section className={cl.section}>
      <BannerList banners={banners} isLoading={isLoading} />
    </section>
  );
}
