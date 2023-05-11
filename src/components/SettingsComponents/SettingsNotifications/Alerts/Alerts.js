import React from "react";
import alertCss from "./Alerts.module.css";
import { FaGripLinesVertical } from "react-icons/fa";
import './Alert.css'
function Alerts() {
  return (
    <div className={alertCss.body}>
      <div className={alertCss.titleSection}>
        <div className={alertCss.titleName}>Alerts you have setup</div>
        <div className={alertCss.titleDescription}>
          Alerts configured for spike in volume and sentiment changes.
        </div>
      </div>
      <hr className='hr'/>
      <div className='cardSections d-flex flex-row'>
        <div className={alertCss.cards}>
          <div className={alertCss.cardTitleSection}>
            <span className={alertCss.cardTitle}>Covid Vaccine</span>
            <FaGripLinesVertical className={alertCss.icon}/>
          </div>
          <div className={alertCss.cardDiscription}>
            This will the space for description and additional information about
            the saved search or whichever...
          </div>
          <div className={alertCss.cardAlertSection}>
            <span className={alertCss.alert}>Alerts Active for</span>
            <label className={alertCss.alertVolume}>
              Search volume increases by 15%
            </label>
            <label className={alertCss.alertVolume}>
              Search volume decreases by 15%
            </label>
            <label className={alertCss.alertVolume}>Sentiment Shift</label>
          </div>
        </div>
        <div className={alertCss.cards}>
          <div className={alertCss.cardTitleSection}>
            <span className={alertCss.cardTitle}>Covid Vaccine</span>
            <FaGripLinesVertical className={alertCss.icon}/>
          </div>
          <div className={alertCss.cardDiscription}>
            This will the space for description and additional information about
            the saved search or whichever...
          </div>
          <div className={alertCss.cardAlertSection}>
            <span className={alertCss.alert}>Alerts Active for</span>
            <label className={alertCss.alertVolume}>
              Search volume increases by 15%
            </label>
            <label className={alertCss.alertVolume}>
              Search volume decreases by 15%
            </label>
            <label className={alertCss.alertVolume}>Sentiment Shift</label>
          </div>
        </div>
        <div className={alertCss.cards}>
          <div className={alertCss.cardTitleSection}>
            <span className={alertCss.cardTitle}>Covid Vaccine</span>
            <FaGripLinesVertical className={alertCss.icon}/>
          </div>
          <div className={alertCss.cardDiscription}>
            This will the space for description and additional information about
            the saved search or whichever...
          </div>
          <div className={alertCss.cardAlertSection}>
            <span className={alertCss.alert}>Alerts Active for</span>
            <label className={alertCss.alertVolume}>
              Search volume increases by 15%
            </label>
            <label className={alertCss.alertVolume}>
              Search volume decreases by 15%
            </label>
            <label className={alertCss.alertVolume}>Sentiment Shift</label>
          </div>
        </div>
      </div>
      <button className={alertCss.callbacKButton}>
  <label className={alertCss.label}>Need Help?</label>
  Request Callback
</button>
    </div>
  );
}

export default Alerts;
