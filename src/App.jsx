import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Registration/Register";
import MainLayout from "./components/Layout/MainLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import Explore from "./components/Explore/Explore";
import About from "./components/About/About";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Toaster positon="top-right" reverseOrder={false} />
      <Routes>
        {/* //main layout-shows navbar,hero etc */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Testimonials" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
