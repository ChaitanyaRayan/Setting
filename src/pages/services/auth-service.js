import axios from 'axios'
// import { useState } from 'react';



const baseUrl = "http://13.52.39.75:8000/user";
// const baseUrl = "http://127.0.0.1:8000/user";


 
// const [message,setMessage] = useState('')

const signUp =async ({first_name, last_name,email, password, password2} ) =>{
    // required username and confirm password
    console.log({first_name, last_name,email, password, password2});
    const resp = await axios.post(`${baseUrl}/register/`, {
        first_name,
        last_name,
        email,
        // "role_name": 'admin',
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


const changePassword = async ({old_password,password, password2}) =>{
    const token = localStorage.getItem("user")
    
    // Parse the token JSON string into an object
  const tokenObj = JSON.parse(token);

  // Access the refresh token from the token object
  let refresh_token = tokenObj.token.access;

  setTimeout(
    () =>{
        refresh_token = tokenObj.token.refresh
    },1000
  )

//   alert(refresh_token);
    // console.log(token);

    const resp = (
        await axios.post(baseUrl + `/changepassword/`,{
            old_password,
            password,
            password2
        },
        {
            headers: {
              'Authorization': `Bearer ${refresh_token}`
            }
          }
        )
    )
    console.log(resp);

    return resp.data
}


const getSignUpData = async () =>{
    const token = localStorage.getItem("user")
    
    // Parse the token JSON string into an object
  const tokenObj = JSON.parse(token);

  // Access the refresh token from the token object
  const refresh_token = tokenObj.token.access;

  
    // console.log(token);
    const resp = (
        await axios.get(baseUrl + `/profile/`,
        {
            headers: {
              'Authorization': `Bearer ${refresh_token}`
            }
          }
        )
    )
    console.log(resp);

    return resp.data
        }

        
        const updateProfile = async(values) =>{
            const token = localStorage.getItem("user")
    
            // Parse the token JSON string into an object
          const tokenObj = JSON.parse(token);
        
          // Access the refresh token from the token object
          let refresh_token = tokenObj.token.access;
        
          setTimeout(
            () =>{
                refresh_token = tokenObj.token.refresh
                alert(refresh_token)
                changePro(values,refresh_token)
            },1000
          )
          alert('refresh', refresh_token)
        
        //   alert(refresh_token);
            // console.log(token);
        
            // const resp = (
            //     await axios.post(baseUrl + `/changeprofile/`,{
            //         first_name: values.first_name,
            //         last_name: values.last_name,
            //     },
            //     {
            //         headers: {
            //           'Authorization': `Bearer ${refresh_token}`
            //         }
            //       }
            //     )
            // )
            // console.log(resp);
        
            // return resp.data
             changePro(values,refresh_token);
        }

        const changePro = async(values,token) =>{
            const resp = (
                await axios.post(baseUrl + `/changeprofile/`,{
                    first_name: values.first_name,
                    last_name: values.last_name,
                },
                {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  }
                )
            )
            console.log(resp);
        
            return resp.data
        }

const  authService ={
    signUp,
    login,
    logout,
    forgotPassword,
    setPassword,
    getCurrentUser,
    changePassword,
    getSignUpData,
    updateProfile
}

export default authService;