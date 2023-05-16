import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import postService  from '../../../pages/services/post-service';
import authService from '../../../pages/services/auth-service';
const Header = () => {

    let navigate = useNavigate()

  function  logout(){
    localStorage.removeItem("dataKey");
    navigate('/login')
    }

    const [post,setPost] = useState([])

    // useEffect(()=>{
    //     postService.getAllPublicPosts().then((resp)=>{
    //         setPost(resp.data)
    //     },
    //     (error)=>{
    //         console.error(error);
    //     })
    // }, [])

    // useEffect(()=>{
    //     postService.getAllPrivateData.then((resp)=>{
    //         setPost(resp.data)
    //     },
    //     (error)=>{
    //         console.log("Private Page", error.response);
    //         // Invalid token
    //         if(error.response && error.response.status === 403){
    //             authService.logout();
    //             navigate("/login");
    //             window.location.reload();
    //         }

    //     }
    //     )
    // },[])

    const logOut =()=>{
        navigate('/login')
        authService.logout();
    }
    const handleClick = (event) => {
        // Your logic goes here
        event.preventDefault()
        window.location.href = event.currentTarget.href;
      };

  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/home'>AlphametricX</a>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls='navbarNavAltMarkup' aria-aria-expanded="false">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <a className='nav-link active' aria-current="page" href="/home">Home</a>
                        <a className='nav-link' href="/search">Search</a>
                        <a className='nav-link ' href="/dashboard">Dashboard</a>
                        <a className='nav-link ' href="/newsLetter" onClick={handleClick}>NewsLetters</a>
                        <a className='nav-link logout' href="/setting/myaccount" tabindex="-1" >Setting</a>
                        <a className='nav-link logout' href="" tabindex="-1" onClick={logOut}>Logout</a>

                    </div>
                </div>
            </div>
        </nav>
        {/* <div className='text-center'>
             {post.map((post) => post.value)}
        </div> */}
    </div>
  )
}

export default Header