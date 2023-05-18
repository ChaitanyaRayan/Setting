import React, { useEffect, useState } from "react";
import profileCss from "./ProfileSecurity.module.css";
import { FaEdit } from "react-icons/fa";
import ChangePassword from "../../../PopupComponents/ChangePassword/ChangePassword";
import EditProfile from "../../../PopupComponents/EditProfile/EditProfile";
import authService from "../../../../pages/services/auth-service";
import Spinners from "../../../common/Spinner/Spinner";

function ProfileSecurity() {
    const [buttonPopup, setButtonPopup]=  useState(false)
    const [editPop, setEditPop] = useState(false)
    const [profileDetails, setProfileDetails] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
  setLoading(true)
      authService.getSignUpData().then((resp) => {
        if(resp){
          setProfileDetails(resp);
          console.log(resp);
          setLoading(false)
          
        }
      
      })
    },[editPop])


    let spinnerLoad;
    if(loading){
      spinnerLoad = <div className={profileCss.spinner} role="status"><Spinners/></div>
    }

  return (
    <div className={profileCss.body}>
      <div className={profileCss.spinner}>
        {spinnerLoad}
      </div>
      <div className={profileCss.userSection}>
        <div className={profileCss.profilePic}>
          <img src="data:image/jpeg;base64,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" alt="" className={profileCss.userPic} />
        </div>
        <div className={profileCss.userDetails}>
          <label className={profileCss.userName}>{profileDetails.first_name} {profileDetails.last_name}</label>
          <span className={profileCss.userEmail}>
            {profileDetails.email}
          </span>
          <span className={profileCss.userType}>
            Access Level : {profileDetails.role_name}
          </span>
        </div>
      </div>
      <hr  className={profileCss.hr}/>
      <div className={profileCss.editSection}>
        <div className={`${profileCss.changePassword} btn`} onClick={()=> setButtonPopup(true)}>
          <label className={profileCss.changePasswordText}>
            Change Password
          </label>
        </div>
        <div className={`${profileCss.changePassword} btn `} onClick={() => setEditPop(true)}>
          <label className={profileCss.changePasswordText}>
           <FaEdit/> Edit Profile
          </label>
        </div>
      </div>
      <ChangePassword trigger={buttonPopup} setTrigger={setButtonPopup}/>
      <EditProfile trigger={editPop} setTrigger={()=>{
        setEditPop(!editPop)
        setButtonPopup(false)
      }} details={profileDetails} />

    </div>
  );
}

export default ProfileSecurity;
