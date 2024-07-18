import React from "react";

import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import LatestNews from "../../LatestNews/LatestNews";

import cl from "./Main.module.css";

export default function Main() {
  return (
    <main className={cl.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}
