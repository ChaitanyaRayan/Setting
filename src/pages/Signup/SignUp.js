import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authService from "../services/auth-service";
import logo from "../../assets/Logo/Logos@3x.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinners from "../../components/common/Spinner/Spinner";
function SignUp() {
  let navigate = useNavigate();
  // const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword]=useState(false);
  // const [showConfirmPassword, setShowConfirmPassword]=useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    loading: false,
  };

  const [errorIs, setErrorIs] = useState(null);

  const [signUp, setSignUp] = useState(initialValues);

  function handleInput(event) {
    const { name, value } = event.target;
    if (name === "showPassword") {
      setSignUp({ ...signUp, showPassword: !signUp.showPassword });
    } else if (name === "showConfirmPassword") {
      setSignUp({
        ...signUp,
        showConfirmPassword: !signUp.showConfirmPassword,
      });
    } else {
      setSignUp({ ...signUp, [name]: value });
    }
  }

  const enterPassword = signUp.showPassword ? "text" : "password";
  const enterConfirmPassword = signUp.showConfirmPassword ? "text" : "password";
  const passwordIcon = signUp.showPassword ? <FaEyeSlash /> : <FaEye />;
  const confirmPasswordIcon = signUp.showConfirmPassword ? (
    <FaEyeSlash />
  ) : (
    <FaEye />
  );

  const baseUrl = "http://127.0.0.1:8000/user/register";

  // useEffect(() =>{
  //     localStorage.setItem('dataKey', JSON.stringify(signUp))

  // })

  function onSubmitSignUp(event) {
    event.preventDefault();
    axios
      .post(
        baseUrl +
          "/" +
          {
            username: signUp.username,
            email: signUp.email,
            password: signUp.password,
            confirmPassword: signUp.confirmPassword,
          }
      )
      .then((resp) => {
        localStorage.setItem("dataKey", JSON.stringify(signUp));

        const { jwt, access, message } = resp.data;
        localStorage.setItem("jwtToken", jwt);
        localStorage.setItem("accessToken", access);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        alert("Signup failed");
      });
  }

  

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await authService
        .signUp({
          first_name: signUp.firstName,
          last_name: signUp.lastName,
          email: signUp.email,
          password: signUp.password,
          password2: signUp.confirmPassword,
        })
        .then(
          () => {
            setSignUp({
              loading: true
            })

            if(localStorage.getItem('user')){
              navigate("/home")

              if(navigate('/home')){
                setSignUp({
                  loading:false
                })
              }
              window.location.reload();
              localStorage.setItem("signup", JSON.stringify( signUp.firstName,  signUp.lastName ));
            }
            // check token and status should be 200
            // console.log("Sign up successfully", resp);
          },
          (error) => {
            console.error(error);
            console.log(error.response.data.errors.email);
              const  errorMessage = error.response?.data.errors.email
              toast.error(`${errorMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
              });
          }
        );
    } catch (err) {
      console.log(err);
    }
  };

  let spinner;

  if(signUp.loading){
    spinner = <div className="spinners"><Spinners/></div>
  }
  

  return (
    <div className="backGround">
      <div className="spinners">
        {spinner}
      </div>
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
        <span className="Login_Title">SignUp</span>
        <span className="welcome_text">SignUp to AlphametricX</span>
        {/* <form className="input_Fields" onSubmit={onSubmitSignUp}> */}
        <form className="input_Fields" onSubmit={handleSignup}>
          {/* using authService */}
          <div className="boxField">
            <input
              type="text"
              className="email_password"
              placeholder="Enter First Name"
              name="firstName"
              value={signUp.firstName}
              onChange={handleInput}
            />
          </div>
          <div className="boxField">
            <input
              type="text"
              className="email_password"
              placeholder="Enter Last Name"
              name="lastName"
              value={signUp.lastName}
              onChange={handleInput}
            />
          </div>
          <div className="boxField">
            <input
              type="email"
              className="email_password"
              placeholder="Enter Email"
              name="email"
              value={signUp.email}
              onChange={handleInput}
            />
          </div>
          <div className="boxField">
            <input
              type={enterPassword}
              className="email_password"
              name="password"
              value={signUp.password}
              onChange={handleInput}
              placeholder="Enter Password"
            />
            <div
              onClick={() => handleInput({ target: { name: "showPassword" } })}
              className="icons"
            >
              {passwordIcon}
            </div>
          </div>
          <div className="boxField">
            <input
              type={enterConfirmPassword}
              className="email_password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signUp.confirmPassword}
              onChange={handleInput}
            />
            <div
              onClick={() =>
                handleInput({ target: { name: "showConfirmPassword" } })
              }
              className="icons"
            >
              {confirmPasswordIcon}
            </div>
          </div>
          <button className="btn btn-primary">SignUp</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
