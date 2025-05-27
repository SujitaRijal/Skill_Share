import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default MainLayout;
