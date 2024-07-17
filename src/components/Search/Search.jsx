import React from "react";

import cl from "./Search.module.css";

export default function Search({ keywords, setKeywords }) {
  return (
    <div className={cl.search}>
      <input
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
        type="text"
        value={keywords}
        className={cl.input}
        placeholder="Search "
      />
    </div>
  );
}
