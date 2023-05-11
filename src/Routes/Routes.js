import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Signup/SignUp';
import PasswordChange from '../pages/PasswordChange/PasswordChange';
import { useEffect, useState } from 'react';
import authService from '../pages/services/auth-service';
import Home from '../pages/HomePage/Home';
import Header from '../components/common/Header/Header';
import SearchPage from '../pages/SearchPage/SearchPage';
import Footer from '../components/common/Footer/Footer';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import MyAccount from '../components/SettingsComponents/MyAccount/MyAccount';
import Notifications from '../components/SettingsComponents/SettingsNotifications/Notifications/Notifications';
import SettingsTags from '../components/SettingsComponents/SettingsTags/SettingsTags';
import SettingsThemes from '../components/SettingsComponents/SettingsThemes/SettingsThemes';


function MyRoutes(){

    

    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup"  element={<SignUp/>}/>
            <Route path="/user/reset/:uuId/:tokenId"  element={<PasswordChange/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/setting' element={<SettingsPage/>}>
                <Route path='myaccount' element={<MyAccount/>}/>
                <Route path='notifications' element={<Notifications/>}/>
                <Route path='tags' element={<SettingsTags/>}/>
                <Route path='themes' element={<SettingsThemes/>}/>

            </Route>
            
        </Routes>
        </>
    )
}

export default MyRoutes;