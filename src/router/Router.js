import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getstarted from "../pages/Getstarted";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Verify from "../pages/Verify";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getstarted />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="verify" element={<Verify />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
