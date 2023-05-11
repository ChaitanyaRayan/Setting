import React, { useState } from 'react'
import './PasswordChange.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo  from "../../assets/Logo/Logos@3x.png"
import { useParams } from 'react-router-dom';
import authService from '../services/auth-service';

function PasswordChange() {
    let navigator = useNavigate();
    const params = useParams();


    const userId = localStorage.getItem("forgotPassword")

    const initialValues ={
        newPassword: '',
        confirmNewPassword: '',
        showNewPassword : false,
        showConfirmPassword: false,
    }

    const [changePassword, setChangePassword] = useState(initialValues);

    function handleClick(event){
        const {name,value} = event.target;
        if(name === 'showNewPassword' ){
            setChangePassword({...changePassword, showNewPassword: !changePassword.showNewPassword })
        }
        else if(name === 'showConfirmPassword'){
            setChangePassword({...changePassword, showConfirmPassword: !changePassword.showConfirmPassword})
        }
        else{
            setChangePassword({...changePassword, [name]: value })
        }
    }

    const inputType1 = changePassword.showNewPassword ? 'text' : 'password';
    const inputType2 = changePassword.showConfirmPassword ? 'text' : 'password';
    const passwordIcon1 = changePassword.showNewPassword ? <FaEyeSlash/> : <FaEye/>;
    const passwordIcon2 = changePassword.showConfirmPassword ? <FaEyeSlash/> : <FaEye/>;

    const submitForgotPassword = async (event) =>{
        event.preventDefault();
        try{
            await authService.setPassword({
                password: changePassword.newPassword,
                 password2: changePassword.confirmNewPassword 
                }).then( (response) =>{
                    console.log(response);
                    navigator('/login')
                },
                (err) =>{
                    console.log(err);
                }
                )
        }
        catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="backGround">
            <div className="Login_Carousel col-8 ">
                <div className="title_side">
                    <img src={logo} alt="" className="logo" />
                    <br />
                    <span className="title">
                        <b>Build Analytics </b> with
                    </span>
                    <br />
                    <span className="Intelligence title">Intelligence</span>
                </div>
            </div>

            <div className=" login_Pannel">
                <span className="Login_Title">Welcome <span className='userName'> {userId.slice(1,-1)}</span></span>
                <span className="welcome_text">
                Change Password 
                </span>
                <form className="input_Fields" onSubmit={submitForgotPassword}>
                    <div className="boxField">
                        <input
                            type={inputType1}
                            className="email_password"
                            placeholder="Enter New Password"
                            name='newPassword'
                            value={changePassword.newPassword}
                            onChange={handleClick}
                        />
                        <div className='icons' onClick={() => handleClick({target:{name:'showNewPassword'}})}>
                            {passwordIcon1}
                        </div>
                    </div>
                    <div className="boxField">
                        <input
                            type={inputType2}
                            className="email_password"
                            placeholder="Confirm New Password"
                            name='confirmNewPassword'
                            value={changePassword.confirmNewPassword}
                            onChange={handleClick}
                        />
                        <div className='icons' onClick={() => handleClick({target:{name:'showConfirmPassword'}})}>
                            {passwordIcon2}
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PasswordChange;
