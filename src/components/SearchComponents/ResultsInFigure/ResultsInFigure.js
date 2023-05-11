import React from "react";
import resultFigureCss from "./ResultsInFigure.module.css";
import { FaArrowCircleUp, FaGripVertical } from "react-icons/fa";
function ResultsInFigure() {
  return (
    <div className={resultFigureCss.body}>
      <div className={resultFigureCss.titleSection}>
        <div className={resultFigureCss.title}>Results in Figure</div>
       <FaGripVertical/>
      </div>
    <div className={resultFigureCss.figureParent}>
      <div className={resultFigureCss.figure}>
        <div className={resultFigureCss.digit}>
            <div className={resultFigureCss.topDigit}>
                <span className={resultFigureCss.digitValue}>1.9 Million</span>
                <div className={resultFigureCss.arrowSection}>
                    <FaArrowCircleUp/>  32.1%
                </div>
            </div>
            <span className={resultFigureCss.digitName}>Total Articles</span>
        </div>
      </div>
      <div className={resultFigureCss.figure}>
        <div className={resultFigureCss.digit}>
            <div className={resultFigureCss.topDigit}>
                <span className={resultFigureCss.digitValue}>42.9 Billion</span>
                <div className={resultFigureCss.arrowSection}>
                    <FaArrowCircleUp/>  32.1%
                </div>
            </div>
            <span className={resultFigureCss.digitName}>Total Reach</span>
        </div>
      </div>
      <div className={resultFigureCss.figure}>
        <div className={resultFigureCss.digit}>
            <div className={resultFigureCss.topDigit}>
                <span className={resultFigureCss.digitValue}>~$ 380.9 Million</span>
                <div className={resultFigureCss.arrowSection}>
                    <FaArrowCircleUp/>  32.1%
                </div>
            </div>
            <span className={resultFigureCss.digitName}>Total Ad Value Equivalency(AVE)</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ResultsInFigure;
