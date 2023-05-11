import React from 'react';
import resultsOverCss from './ResultsOver.module.css'
import { FaEdit, FaGripVertical } from 'react-icons/fa';
import { ToggleButton } from 'react-bootstrap';

function ResultsOverTime() {
  return (
    <><div className={resultsOverCss.body}>
          <div className={resultsOverCss.titleSection}>
              <div className={resultsOverCss.title}>Result Over Time</div>
              <div className={resultsOverCss.icons}>
                  <div className={resultsOverCss.toggleButton}>
                      <button type='button' className={`${resultsOverCss.button} btn btn-primary`}>Trendline</button>
                      <button type='button' className={`${resultsOverCss.button} btn btn-light`}>Bar</button>
                  </div>
                  <div className={resultsOverCss.icon}> <FaEdit /> <FaGripVertical className={resultsOverCss.faIcon} /></div></div>
          </div>

          <div className={resultsOverCss.image}></div>
      </div>
      <div className={resultsOverCss.insights}>
              <span className={resultsOverCss.insightsDetails}><label>Insights</label>
                  : Media engagement of “covid vaccine” increased by 22% in jan 2021</span>
          </div></>
  )
}

export default ResultsOverTime