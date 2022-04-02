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
import AdminLogIn from './components/Pages/AdminLogIn/AdminLogIn';
import SignupLogin from './components/Pages/UserSignupAndLogin/SignupLogin.jsx';
import { fetchUserFromAPI } from './redux/actions/admin';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserFromAPI());
    console.log('hello');
  }, [dispatch]);

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
