import React, { useState } from 'react'
import changePasswordCss  from './ChangePassword.module.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import authService from '../../../pages/services/auth-service';

const ChangePassword = (props) => {

  const initialValues ={
    oldPassword :'',
    password: '',
    confirmPassword:'',
    showPassword: false,
    showConfirmPassword: false,

  }

  const [changePassword, setChangePassword] = useState(initialValues);

  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "showPassword") {
      setChangePassword({ ...changePassword, showPassword: !changePassword.showPassword });
    } else if (name === "showConfirmPassword") {
      setChangePassword({
        ...changePassword,
        showConfirmPassword: !changePassword.showConfirmPassword,
      });
    } else {
      setChangePassword({ ...changePassword, [name]: value });
    }
  }

  const enterPassword = changePassword.showPassword ? "text" : "password";
  const enterConfirmPassword = changePassword.showConfirmPassword ? "text" : "password";
  const passwordIcon = changePassword.showPassword ? <FaEyeSlash /> : <FaEye />;
  const confirmPasswordIcon = changePassword.showConfirmPassword ? (
    <FaEyeSlash />
  ) : (
    <FaEye />
  );


  const handleChange = async (event) => {
    event.preventDefault();
    try {
      await authService.changePassword({
          old_password:changePassword.oldPassword,
          password: changePassword.password,
          password2: changePassword.confirmPassword,
        })
        .then(
          (resp) => {
            // check token and status should be 200
            // console.log("Sign up successfully", resp);
            if(resp){

              const success = resp.data.msg
  
              toast.success(`${success}` ,{
                position: toast.POSITION.TOP_RIGHT
              })
              props.setTrigger(false)
            }
            // localStorage.setItem("signup", JSON.stringify( signUp.firstName,  signUp.lastName ));
          },
          (error) => {
            console.error(error);
              const  errorMessage = JSON.stringify(error.response.data.errors.old_password)
              const errMsg = JSON.parse(errorMessage)
              toast.error(`${errMsg}`, {
                position: toast.POSITION.TOP_RIGHT,
              });
          }
        );
    } catch (err) {
      console.log(err);
    }
  }

  

    
      return (props.trigger) ? (
    <div className={changePasswordCss.body}>
        <div className={changePasswordCss.popUp}>
        <div className={changePasswordCss.titleSection}>
        <span className={changePasswordCss.ChangePasswordTitle}>
  Change Password
</span>
        </div>
        <div className={changePasswordCss.inputFields}>
          <div className={changePasswordCss.labelInputs}>
            <label className={changePasswordCss.CurrentPasswordLabel}>Enter your current password</label>
            <div className={changePasswordCss.inputDiv}>
            <input type='password' className={changePasswordCss.CurrentPasswordField}  placeholder='Current Password' name='oldPassword' value={changePassword.oldPassword} 
            onChange={handleInput}/>
            
            </div>
            </div>
            <div className={changePasswordCss.labelInputs}>
            <label className={changePasswordCss.CurrentPasswordLabel}>  Enter new password</label>
            <div className={changePasswordCss.inputDiv}>
            <input type={enterPassword} className={changePasswordCss.CurrentPasswordField}  placeholder='New Password' name='password' value={changePassword.password}
            onChange={handleInput}/>
            <div
              onClick={() => handleInput({ target: { name: "showPassword" } })}
              className={changePasswordCss.icons}
            >
              {passwordIcon}
            </div>
</div>
            </div>
          <div className={changePasswordCss.labelInputs}>
          <label className={changePasswordCss.CurrentPasswordLabel}>  Confirm new password</label>
          <div className = {changePasswordCss.inputDiv}>
            <input type={enterConfirmPassword} className={changePasswordCss.CurrentPasswordField}  placeholder='Confirm Password' name='confirmPassword' value={changePassword.confirmPassword}
            onChange={handleInput}/>
            <div
              onClick={() => handleInput({ target: { name: "showConfirmPassword" } })}
              className={changePasswordCss.icons}
            >
              {confirmPasswordIcon}
            </div>
</div>
            </div>
        </div>
        <hr/>
        <div className={changePasswordCss.cancelsubmitButtons}>
            <button className={changePasswordCss.cancelButton} onClick={()=> props.setTrigger(false)}>Cancel</button>
            <button className={changePasswordCss.updateButton} onClick={handleChange}>Update</button>
        </div>
    </div>
    <ToastContainer />
    </div>
    
  ) : '';
}

export default ChangePassword