import Home from './view/pages/home/home'
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./view/pages/login/LoginPage";
import NavBar from "../src/view/components/NavBar";
import ContactLine from "./view/components/ContactLine";
import Footer from "./view/components/Footer";
import ForgotPassword from './view/pages/forgotPassword/ForgotPassword';
import Verification from './view/pages/forgotPassword/Verification';
import GenerateNewPassword from './view/pages/forgotPassword/GenerateNewPassword';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/" element={<ContactLine />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/reset-password" element={<GenerateNewPassword />} />


        </Routes>
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
