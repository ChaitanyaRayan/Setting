import React from "react";
import recentSearchCss from "./RecentSearch.module.css";
function RecentSearch() {
  return (
    <div className={recentSearchCss.body}>
      <div className={recentSearchCss.title}>Recent Searches</div>
      <div className={recentSearchCss.searchesOfDay}>
        <span class={recentSearchCss.day}>Today</span>
        <div className={recentSearchCss.searches}>
          <div className={recentSearchCss.searchName}>Nike</div>
          <div className={recentSearchCss.searchName}>Nike</div>
          <div className={recentSearchCss.searchName}>Nike</div>
        </div>
      </div>
    </div>
  );
}

export default RecentSearch;
