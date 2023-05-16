import React, { useEffect, useState } from 'react'
import editPopCss from './EditUserRole.module.css'
import { settingService } from '../../../ServiceAPI/SettingService/setting-service';
import { ToastContainer, toast } from 'react-toastify';

const EditUserRole = ({trigger,cancel, userRole}) => {

  const initialValues = {
    role_name: "",
  };

  const [updateRole, setUpdateRole] = useState(initialValues);

 const onChangeHandling=(event) =>{
  const {name, value} = event.target;
  setUpdateRole({...updateRole, [name]: value});
}

 const updateUserRole = async () =>{

  cancel && cancel(true)
  try{

   await settingService.updateRole(userRole.user_id, updateRole).then((resp) =>{
      console.log(resp.data.role_name);
  
        const success = "Role Changed";
        toast.success(`${success}`,{
          position:toast.POSITION.TOP_RIGHT
        })
      }
   )
  }catch(err){
    const error = err;
    // toast.error(`${error}`,{
    //   position:toast.POSITION.TOP_RIGHT
    // })
  }
 }

 useEffect(() => {
  setUpdateRole(userRole);
}, [userRole]);

  return (
    trigger ? (
        <div className={editPopCss.body} >
         <div className={editPopCss.popUp}>
            <div className={editPopCss.titleSection}>
            <span className={editPopCss.ChangePasswordTitle}>
           Edit User Access
    </span>
            </div>
            <div className={`${editPopCss.userSection} d-flex flex-row`}>
              <div className={editPopCss.profile}>
                <img src='' alt='' />
              </div>
              <div className={`${editPopCss.userDetails} d-flex flex-column`}>
              <label className={editPopCss.userName}>
  Anuran Chakraborty
</label>
<span className={editPopCss.userEmail}>
  anuran.chakraborty@infovision.com
</span>
              </div>
            </div>
            <div className= {editPopCss.inputFields}>
             <label className={editPopCss.selectAccess}>Access Level</label>
             {/* <select className={editPopCss.editAcess} value={values.role_name} name='role_name'  onChange={onChangeHandling}> */}
             <select className={editPopCss.editAcess} value={updateRole.role_name} name='role_name'   onChange={onChangeHandling}>
                <option value='' >Select</option>
                <option value='Admin'>Admin</option>
                <option value='Analyst' >Analyst</option>
                <option value='Reader' >Reader</option>
            </select>
            </div>
            <hr/>
            <div className={editPopCss.cancelSubmitButtons}>
                <button className={editPopCss.cancelButton} onClick={() =>cancel(false)}>Cancel</button>
                <button className={editPopCss.addUserButton}  onClick={updateUserRole}>Update</button>
            </div>
        </div>
        <ToastContainer/>
        </div>
      ): ''
  )
}

export default EditUserRole