import React from "react";
import trendingTopicCss from './TrendingTopics.module.css'
function TrendingTopics() {
  return (
    <div className={trendingTopicCss.body}>
      <div className={trendingTopicCss.title}>Trending Topics</div>
      <div className={trendingTopicCss.searchesOfDay}>
        <span class={trendingTopicCss.day}>Worldwide</span>
        <div className={trendingTopicCss.searches}>
          <div className={trendingTopicCss.searchName}>Nike</div>
          <div className={trendingTopicCss.searchName}>Nike</div>
          <div className={trendingTopicCss.searchName}>Nike</div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTopics;
