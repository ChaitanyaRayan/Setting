import axios from 'axios'
import { useState } from 'react';



const baseUrl = "http://54.241.251.179:8000/user";
// const baseUrl = "http://127.0.0.1:8000/user";


 
// const [message,setMessage] = useState('')

const signUp =async ({name,email, password, password2} ) =>{
    // required username and confirm password
    console.log({name,email, password, password2});
    const resp = await axios.post(`${baseUrl}/register/`, {
        email,
        name,
         password,
        password2
    })
    if (resp.data) {
        localStorage.setItem("user", JSON.stringify(resp.data));
        
    }
    return resp.data;
}

const login= async ({email,password}) =>{
    console.log("email:" +  email +"and"+ "password"+ password);
    const resp = await axios.post(baseUrl + '/login/', {
        email,
        password,
    }).then((resp)=>{
    if (resp.data.token) {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
    }
    return resp.data;
})
};

const forgotPassword = async ({email}) =>{
    console.log("email:" + email);
    const resp = (await axios.post(baseUrl + '/send-reset-password-email/', {email}))
   console.log(resp.data);
   localStorage.setItem('forgotPassword', JSON.stringify(email))
  
    return resp.data
}

const setPassword = async ({password, password2}) =>{

    const forgotId = JSON.parse(localStorage.getItem("uidForgot"))
    console.log(forgotId.uid);
    console.log(password , " and ", password2);

    const resp = (
        await axios.post(baseUrl + `/reset-password/${forgotId.uid}/${forgotId.token}/`,{
            password,
            password2
        })
    )
    console.log(resp);

    return resp.data
}

const logout =() =>{
    localStorage.removeItem("user")
    localStorage.removeItem("login")
    localStorage.removeItem("signup")
};

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"))
};

const  authService ={
    signUp,
    login,
    logout,
    forgotPassword,
    setPassword,
    getCurrentUser
}

export default authService;