import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import MyRoutes from './Routes/Routes';
import authService from './pages/services/auth-service';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup/SignUp';
import PasswordChange from './pages/PasswordChange/PasswordChange';
import Home from './pages/HomePage/Home';

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  if (!currentUser) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user/reset/:uuId/:tokenId"  element={<PasswordChange/>}/>
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    );
  }{
    <MyRoutes/>
  }

  return (
    <div className="App">
      {currentUser ? (<MyRoutes />) : (<Login />)}
      {/* <MyRoutes/> */}
    </div>
  );
}

export default App;
