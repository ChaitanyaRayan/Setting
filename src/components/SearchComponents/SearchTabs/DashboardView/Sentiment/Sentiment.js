import React from "react";
import sentimentCss from "./Sentiment.module.css";
import { FaArrowUp } from "react-icons/fa";

function Sentiment() {
  return (
    <div className={sentimentCss.body}>
      <div className={sentimentCss.title}>Sentiment</div>
      <div className={sentimentCss.articleType}>
        <div className={sentimentCss.reachNumSection}>
        <div className={sentimentCss.natureOfArticle}>
            <span className={sentimentCss.reachValue}>1.2 Million</span>
            <FaArrowUp />
            <span className={sentimentCss.reachPercentage}>
              32.1<label>%</label>
            </span>
            </div>
            <div className={sentimentCss.sentimentType}>
            &#128522;
            <span className={sentimentCss.positiveType}>
                Positive Articles
            </span>
            </div>
        </div>
        <div className={sentimentCss.natureOfArticle}>
        <div className={sentimentCss.natureOfArticle}>

            <span className={sentimentCss.reachValue}>1.2 Million</span>
            <FaArrowUp />
            <span className={sentimentCss.reachPercentage}>
              32.1<label>%</label>
            </span>
            </div>
            <div className={sentimentCss.sentimentType}>
            &#128522;
            <span className={sentimentCss.positiveType}>
                Positive Articles
            </span>
            </div>
        </div>
        <div className={sentimentCss.natureOfArticle}>
        <div className={sentimentCss.natureOfArticle}>
            <span className={sentimentCss.reachValue}>1.2 Million</span>
            <FaArrowUp />
            <span className={sentimentCss.reachPercentage}>
              32.1<label>%</label>
            </span>
            </div>
            <div className={sentimentCss.sentimentType}>
            &#128522;
            <span className={sentimentCss.positiveType}>
                Positive Articles
            </span>
            </div>
        </div>
        <div className={sentimentCss.insightsBlock}>
        <label>Insights</label>
  : More negative sentiment was observed after Jul 2021.

  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s</p>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
