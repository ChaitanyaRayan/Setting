import React from "react";
import searchArticleCss from "./SimpleSearchArticles.module.css";
import {
  FaAnchor,
  FaBookmark,
  FaComment,
  FaDotCircle,
  FaGripLinesVertical,
  FaReadme,
  FaTheRedYeti,
} from "react-icons/fa";

function SimpleSearchArticles() {
  return (
    <div className={searchArticleCss.body}>
      <div className={searchArticleCss.articleHead}>
        <div className={searchArticleCss.checkBoxPage}>
          <input type="checkbox" className={searchArticleCss.inputCheck} />
          <select className={searchArticleCss.select}>
            <option value="Select">Select</option>
          </select>

          <select className={searchArticleCss.select}>
            <option value="Results">Results per page - 10</option>
          </select>
        </div>

        <div className={searchArticleCss.pagination}>
          <button className={searchArticleCss.pageNumbers}>Previous</button>
          <button className={searchArticleCss.pageNumbers}>1</button>
          <button className={searchArticleCss.pageNumbers}>2</button>
          <button className={searchArticleCss.pageNumbers}>3</button>
          <button className={searchArticleCss.pageNumbers}>Next</button>
        </div>

        <div className={searchArticleCss.tagsThemes}>
          <span className={searchArticleCss.tagTitle}>Tags/Themes</span>
          <button className={searchArticleCss.pageNumbers}>Theme 1</button>
          <button className={searchArticleCss.pageNumbers}>Theme 1</button>
          <button className={searchArticleCss.pageNumbers}>...</button>

          <select className={searchArticleCss.select}>
            <option value="Sortby">Sort By</option>
          </select>
        </div>
      </div>

      {/* Articles */}

      <div className={searchArticleCss.article}>
        <div className={`${searchArticleCss.articleTitle} col-6`}>
          <div className={searchArticleCss.articleIcons}>
            <input type="checkbox" className={searchArticleCss.inputCheck} /> |
            &nbsp;
            <FaBookmark /> <FaComment />
          </div>
          <div className={searchArticleCss.articleDetails}>
            <label className={searchArticleCss.articleName}>
              White House to launch effort to develop next generation of Covid
              vaccines
            </label>
            <span className={searchArticleCss.articleDescription}>
              The Biden administration is preparing a sweeping initiative to
              develop a next generation of Covid-19 immunizations that would
              thwart future coronavirus variants and dramatically reduce rates
              of coronavirus infection or transmission, building on current
              shots whose impact has been mainly to prevent serious...
            </span>
          </div>

          <div className={searchArticleCss.articleFooter}>
            <img src="" className={searchArticleCss.articleWebImg} />
            <span className={searchArticleCss.articleFooterDetails}>
              www.wsj.com | Published on 05 Jun 2021 | Author | New York, US |
              12 Matching Keywords | Online News
            </span>
          </div>
        </div>

        {/* left portion */}
        <div className={`${searchArticleCss.articleImageReach} col-6`}>
          <img
            src=""
            alt="ArticleImage"
            className={searchArticleCss.articleImg}
          />

          <div className={searchArticleCss.articleStatitics}>
            <div className={searchArticleCss.articleSentiment}>
              <div className={searchArticleCss.articleSentimentType}>
                &#128522; Positive
              </div>
              <FaGripLinesVertical />
            </div>
            <div className={searchArticleCss.articleSentimentInNumber}>
              <span className={searchArticleCss.articleReach}>
                Reach :<span className={searchArticleCss.articleReachNum}>1.6 M</span>
              </span>
              <span class={searchArticleCss.articleReach}>
                AVE :<span class={searchArticleCss.articleReachNum}>~$ 1.8 M</span>
              </span>
              <span class={searchArticleCss.articleReach}>
                Syndication :<span class={searchArticleCss.articleReachNum}>8</span>
              </span>
            </div>
            <span className={searchArticleCss.articleMatchingKeywords}>
              <span className={searchArticleCss.articleMatches}>Matches :</span>
              covid vaccine, health care, pandemic, pfizer
            </span>
          </div>
        </div>
      </div>
      <div className={searchArticleCss.article}>
        <div className={`${searchArticleCss.articleTitle} col-6`}>
          <div className={searchArticleCss.articleIcons}>
            <input type="checkbox" className={searchArticleCss.inputCheck} /> |
            &nbsp;
            <FaBookmark /> <FaComment />
          </div>
          <div className={searchArticleCss.articleDetails}>
            <label className={searchArticleCss.articleName}>
              White House to launch effort to develop next generation of Covid
              vaccines
            </label>
            <span className={searchArticleCss.articleDescription}>
              The Biden administration is preparing a sweeping initiative to
              develop a next generation of Covid-19 immunizations that would
              thwart future coronavirus variants and dramatically reduce rates
              of coronavirus infection or transmission, building on current
              shots whose impact has been mainly to prevent serious...
            </span>
          </div>

          <div className={searchArticleCss.articleFooter}>
            <img src="" className={searchArticleCss.articleWebImg} />
            <span className={searchArticleCss.articleFooterDetails}>
              www.wsj.com | Published on 05 Jun 2021 | Author | New York, US |
              12 Matching Keywords | Online News
            </span>
          </div>
        </div>

        {/* left portion */}
        <div className={`${searchArticleCss.articleImageReach} col-6`}>
          <img
            src=""
            alt="ArticleImage"
            className={searchArticleCss.articleImg}
          />

          <div className={searchArticleCss.articleStatitics}>
            <div className={searchArticleCss.articleSentiment}>
              <div className={searchArticleCss.articleSentimentType}>
                &#128522; Positive
              </div>
              <FaGripLinesVertical />
            </div>
            <div className={searchArticleCss.articleSentimentInNumber}>
              <span class={searchArticleCss.articleReach}>
                Reach :<span className={searchArticleCss.articleReachNum}>1.6 M</span>
              </span>
              <span className={searchArticleCss.articleReach}>
                AVE :<span className={searchArticleCss.articleReachNum}>~$ 1.8 M</span>
              </span>
              <span className={searchArticleCss.articleReach}>
                Syndication :<span className={searchArticleCss.articleReachNum}>8</span>
              </span>
            </div>
            <span className={searchArticleCss.articleMatchingKeywords}>
              <span className={searchArticleCss.articleMatches}>Matches :</span>
              covid vaccine, health care, pandemic, pfizer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSearchArticles;
