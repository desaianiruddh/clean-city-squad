import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import AdminDashBoard from './components/Pages/AdminDashBoard/AdminDashBoard';
import Home from './components/Pages/Home/Home';
import UserDashBoard from './components/Pages/UserDashBoard/UserDashBoard';
import ErrorPage from './components/Pages/WrongURL/WrongURL';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import { fetchUserFromAPI } from './redux/actions/admin';
import Signup from './components/Pages/UserSignupAndLogin/Signup';
import LogIn from './components/Pages/UserSignupAndLogin/LogIn';
import Forgot from './components/Pages/ForgetPassword/Forgetpass'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFromAPI());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/user-dashboard" element={<UserDashBoard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/forget-pass" element={<Forgot />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
