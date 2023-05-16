import React from "react";
import sideBarCss from "./SettingSideBar.module.css";
import { Link,Outlet } from "react-router-dom";
import MyAccount from "../MyAccount/MyAccount";
function SettingSideBar() {
  return (
    <div className={sideBarCss.body}>
      <div className={sideBarCss.sideNavItem}>
        <div className={sideBarCss.hrItem}>
            <Link to='myaccount'>
          <label className={sideBarCss.itemName} >My Account</label></Link>
          <hr className={sideBarCss.hr}/>
        </div>
        <div className={sideBarCss.hrItem}>
        <Link to='notifications'>
          <label className={sideBarCss.itemName} >Notifications</label></Link>
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
      {/* <div className={sideBarCss.myAccount}>
        <MyAccount/>
      </div> */}
    </div>
  );
}

export default SettingSideBar;
