import React from "react";
import sideBarCss from "./SettingSideBar.module.css";
import { Link } from "react-router-dom";
function SettingSideBar() {
  return (
    <div className={sideBarCss.body}>
      <div className={sideBarCss.sideNavItem}>
        <div className={sideBarCss.hrItem}>
          <label className={sideBarCss.itemName}>My Account</label>
          <hr className={sideBarCss.hr}/>
        </div>
        <div className={sideBarCss.hrItem}>

          <label className={sideBarCss.itemName} >Notifications</label>
          <hr />
        </div>
        <div className={sideBarCss.hrItem}>
          <label className={sideBarCss.itemName}>Tags</label>
          <hr />
        </div>
        <div className={sideBarCss.hrItem}>
          <label className={sideBarCss.itemName}>Themes</label>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SettingSideBar;
