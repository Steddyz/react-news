import React from "react";
import { formatDate } from "../../helpers/formatDate";

import cl from "./Header.module.css";

export default function Header() {
  return (
    <header className={cl.header}>
      <h1 className={cl.title}>Steddy NEWS</h1>
      <p className={cl.date}>{formatDate(new Date())}</p>
    </header>
  );
}
