import React, { useEffect, useState } from "react";
import "./Login.css";
import Header from "../../components/common/Header/Header";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { Link, Route, useNavigate } from "react-router-dom";
// import axios from 'axios';
import authService from "../services/auth-service";
import logo  from "../../assets/Logo/Logos@3x.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../components/common/Spinner/Spinner";

const Login = ({onInputChange}) => {

  let navigator = useNavigate();

  // const [password, setPassword] = useState(false);


  const initialValues = {
    email: '',
    password: '',
    showPassword: false,
    loading: false
  }

  const [loginInputs, setLoginInputs] = useState(initialValues)
  // console.log(loginInputs);

  // useEffect(() => {
    
  // }, []);

  const handleClick=(event) =>{
    const {name, value} = event.target;
    if(name === 'showPassword'){
      setLoginInputs({...loginInputs, showPassword: !loginInputs.showPassword})

    }else{

      setLoginInputs({ ...loginInputs, [name]: value });
    }
  }

  const passwordType = loginInputs.showPassword ? 'text' : 'password';
  const icon = loginInputs.showPassword ? <FaEyeSlash/> : <FaEye/>
  
  // const baseUrl = 'http://127.0.0.1:8000/user/login'

  // function  onSubmitLogin(event){
  //   event.preventDefault()
  //   axios.post(baseUrl, {
  //     email: loginInputs.email,
  //     password: loginInputs.password,
  //   })
  //   .then((resp) => {

  //     const {jwt, access, message} = resp.data;
  //     localStorage.setItem('jwtToken', jwt);
  //     localStorage.setItem('accessToken', access);
  //     navigator('/home');
  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //     alert("Login Failed")
  //   });
  // }

  // login code starts
  const handleLogin = async (event)=>{
    event.preventDefault();

    if(!loginInputs.email || !loginInputs.password){
      toast.error("All fields are required",{
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    try{
      await authService.login({email:loginInputs.email, password:loginInputs.password}).then(() =>{
        // console.log("Token resp"+": "+resp);
        setLoginInputs({
          loading: true
        })
        if(localStorage.getItem("user")){
          navigator('/home');

          if(navigator('/home')){
            setLoginInputs({
              loading:false
            })
          }
          
          window.location.reload();
          
          localStorage.setItem("login", JSON.stringify(loginInputs.email))
        }
      },
      (error)=>{
        console.error(error);
          toast.error('Invalid email or password.', {
            position: toast.POSITION.TOP_RIGHT
        });
      
      });
      
    }
    catch(err){
      console.log(err);
       
    }
  }

  // 

  // Spinner code starts

  let spinner;

  if(loginInputs.loading){
    spinner = <div className="spinner"><Spinner/></div>
  }
// ends

// Forgot password starts
  const forgotPassword = async (event) =>{
    event.preventDefault();
    try{
      await authService.forgotPassword({email:loginInputs.email}).then((resp)=>{
        console.log(resp);
        toast.info(resp.msg,{
          position: toast.POSITION.TOP_CENTER
        })
        localStorage.setItem("uidForgot", JSON.stringify(resp))          
      },
      (error) =>{
        console.log(error);
        toast.error("Invalid Email Id",{
          position: toast.POSITION.TOP_RIGHT
        })
      })
    }
    catch(err){
      console.log(err);
    }
  }

  // ends


  return (
    <div className=" mainPage">
      <div className="spinner">
        {spinner}
      </div>
      <div className="Login_Carousel col-8 ">
        <div className="title_side">
          <img src={logo} alt="AlphametricX" className="logo" />
          <br/>
          <span className="title">
            <b>Build Analytics </b> with
          </span><br/>
          <span className="Intelligence title">Intelligence</span>
          </div>
      </div>
      
      <div className=" login_Pannel ">
      <span className="Login_Title">
        Login
      </span>
      <span className="welcome_text">
  Welcome back, login to AlphametricX
</span>
    {/* <form className="input_Fields" onSubmit={onSubmitLogin}> */}
    <form className="input_Fields" onSubmit={handleLogin}> 
    {/* using authService */}
      <div className="boxField">
        <input type="email" className="email_password" placeholder="Registered Email" name="email" value={loginInputs.email} onChange={handleClick}/>
      </div>
      <div className="boxField" >
        <input type={passwordType} className="email_password"  placeholder="Password" name="password" value={loginInputs.password} onChange={handleClick}/>
        <div className="icons" onClick={()=>handleClick({target:{name:"showPassword"}})} name="showPassword">
          {icon}
        </div>
      </div>
      {/* <button className="btn btn-primary" onClick={() =>navigator('/home')}>Login</button> */}
      <button className="btn btn-primary" >Login</button>
    </form>
    {/* <p onClick={() =>navigator('/forgotPassword')} className="forgotPassword"> Forgot Password</p> */}
    <p className="forgotPassword" onClick={forgotPassword}> <Link >Forgot Password</Link></p>
    <hr className="hr"/>
    <Link to="/signup"> <button onClick={() =>navigator('/signup')}  className="btn btn-primary">SignUp</button></Link>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
