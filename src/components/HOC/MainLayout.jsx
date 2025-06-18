import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
