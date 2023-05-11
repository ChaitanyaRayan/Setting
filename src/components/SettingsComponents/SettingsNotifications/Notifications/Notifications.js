import React from "react";
import notifCss from "./Notifications.module.css";
import './Notification.css'
function Notifications() {
  return (
    <div className={notifCss.body}>
      <div className={notifCss.titleSection}>
        <span className={notifCss.title}>Notification Settings</span>
        <br/>
        <span className={notifCss.description}>
          Select the kinds of notifications you get about your activities and
          recomendations
        </span>
      </div>
      <hr  className={notifCss.hr}/>
      <div className={`${notifCss.emailSection} col-6`}>
        <div className={notifCss.leftSection}>
          <label className={notifCss.leftTitle}>Email Notifications</label>
          <span className={notifCss.leftDescripction}>
            Get emails to notify whats goin on when you are not online.
          </span>
        </div>
        <div className={notifCss.rightSection}>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>News and Updates</label>
              <span className={notifCss.toggleDescript}>
                News about the product and feature updates
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Tips and Tutorials</label>
              <span className={notifCss.toggleDescript}>
              Tips and tricks to make the most out of the tool
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Offers</label>
              <span className={notifCss.toggleDescript}>
              Personalised offers
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Reminders</label>
              <span className={notifCss.toggleDescript}>
              Remainders on your subscription and usage
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Team Activities</label>
              <span className={notifCss.toggleDescript}>
              Updates when team shares and downloads
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr  className={notifCss.hr}/>
      <div className={`${notifCss.emailSection} col-6`}>
        <div className={notifCss.leftSection}>
          <label className={notifCss.leftTitle}>Desktop Notifications</label>
          <span className={notifCss.leftDescripction}>
          Get push notifications in app to findout whats going on when you are online.
          </span>
        </div>
        <div className={notifCss.rightSection}>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>News and Updates</label>
              <span className={notifCss.toggleDescript}>
                News about the product and feature updates
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Tips and Tutorials</label>
              <span className={notifCss.toggleDescript}>
              Tips and tricks to make the most out of the tool
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Offers</label>
              <span className={notifCss.toggleDescript}>
              Personalised offers
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Reminders</label>
              <span className={notifCss.toggleDescript}>
              Remainders on your subscription and usage
              </span>
            </div>
          </div>
          <div className={notifCss.toggleRequired}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className={notifCss.toggleSection}>
              <label className={notifCss.toggleName}>Team Activities</label>
              <span className={notifCss.toggleDescript}>
              Updates when team shares and downloads
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr  className={notifCss.hr}/>
      <button className={notifCss.callbacKButton}>
  <label className={notifCss.label}>Need Help?</label>
  Request Callback
</button>
    </div>
  );
}

export default Notifications;
