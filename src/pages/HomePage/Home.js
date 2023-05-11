import React, { useEffect, useState } from 'react';
import homeStyle from"./Home.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [user, setUser] = useState()
  const customId = "custom-id-yes";
  
  let userId = localStorage.getItem("login")
  let userName = localStorage.getItem('signup')
  useEffect(() =>{
    if(userName){
      setUser(true)
      
    }
    // setTimeout(()=>{
    setTimeout(()=>{

      toast.success('Login Success.', {
        position: toast.POSITION.TOP_RIGHT,
        toastId: customId
    })
    },1000)
    // alert("Login Success")
  },[])
  return (
    <div>    
      <h6 className={homeStyle.title}>My Workspace</h6>
      <div className={homeStyle.home}>
               {user ? (<h2 className={homeStyle.welcomes}> Welcome <b>{userName}</b> From AlphametricX </h2>): (<h2 className={homeStyle.welcomes}>Welcome <b>{userId}</b> From the AlphametricX</h2>)} 

               <form className={homeStyle.searchBox}>
               <label class={homeStyle.label}>
  Start a New Search
</label>
<div className={homeStyle.inputField}>
  <input type='text' className={homeStyle.search} placeholder='Enter Search Keyword'/>
  </div>

<button type='submit' className={`btn btn-primary ${homeStyle.btn} `} >Search</button>
               </form>
             <ToastContainer limit={1}/>   

    </div>
    </div>

  )
}

export default Home