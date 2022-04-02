import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import AdminDashBoard from './components/Pages/AdminDashBoard/AdminDashBoard';
import Home from './components/Pages/Home/Home';
import UserDashBoard from './components/Pages/UserDashBoard/UserDashBoard';
import ErrorPage from './components/Pages/WrongURL/WrongURL';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import AdminLogIn from './components/Pages/AdminLogIn/AdminLogIn';
import SignupLogin from './components/Pages/UserSignupAndLogin/SignupLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogIn />} />
        <Route path="/signup-and-login" element={<SignupLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/user-dahsboard" element={<UserDashBoard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
