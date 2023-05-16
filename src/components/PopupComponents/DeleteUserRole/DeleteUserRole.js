import React, { useState } from 'react'
import { settingService } from '../../../ServiceAPI/SettingService/setting-service';
import deleteUserCss from './DeleteUserRole.module.css'


const DeleteUserRole = ({trigger, cancel,userId}) => {

  const [isPopup, setIsPopup] = useState(false);


    // delete the user
  const deleteUserRole = async () =>{
    // if(userId && roleId){
        cancel(true)
        console.log(userId);
   await settingService.deleteUser(userId.user_id).then((resp) =>{
      if(resp.status === 204){
console.log(cancel);

      }
    })
    // await settingService.deleteRole(roleId).then((resp) =>{
    //   if(resp.status === 204){
    //     setIsReload((prev) => !prev)
    //   }
    // })

  // }
  }

  return (
    trigger ? (
    <div className={deleteUserCss.body} >
     <div className={deleteUserCss.popUp}>
        <div className={deleteUserCss.titleSection}>
        <span className={deleteUserCss.ChangePasswordTitle}>
        Delete User?
</span>
        </div>
        <div className= {deleteUserCss.inputFields}>
          <div className={deleteUserCss.descriptionSection}>
          <span className= {deleteUserCss.description}>
  Are you sure you want to delete this user? All data 
created by this user will be lost.
</span>
          </div>
          <div className={`${deleteUserCss.userSection} d-flex flex-row`}>
          <div className={`${deleteUserCss.profile} ${deleteUserCss.description}`}>
            <img src=''  alt="as"/>
          </div>
          <div className={`d-flex flex-column  ${deleteUserCss.description}`}>
             <label className= {`${deleteUserCss.userName}`}>
            Anuran Chakraborty
             </label>
             <label className={`${deleteUserCss.userEmail}`}>
  anuran.chakraborty@infovision.com
             </label>

          </div>
          </div>
        </div>
        <hr/>
        <div className={deleteUserCss.cancelSubmitButtons}>
            <button className={deleteUserCss.yesButton} onClick={deleteUserRole} >Yes Delete</button>
            <button className={deleteUserCss.noButton} onClick={() => cancel(false)}>No</button>
        </div>
    </div>
    </div>
  ): ''
  )
}

export default DeleteUserRole