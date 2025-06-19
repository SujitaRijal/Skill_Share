import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/HOC/AuthLayout";
import Register from "./pages/AuthPages/Register";
import Login from "./pages/AuthPages/Login";
import { Toaster } from "react-hot-toast";

import MainLayout from "./components/HOC/MainLayout";
import Explore from "./components/Explore/Explore";
import About from "./components/About/About";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact.jsx";

import Home from "./components/Home/Home";

import DashboardLayout from "./components/HOC/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/UserPage/UserProfile";
import MySkills from "./pages/SkillPage/Skill";
import Explores from "./pages/ExplorePage/Explores";
import Message from "./pages/MessagePage/Message";
import MySessions from "./pages/MySessionPage/MySession";
import AdminDashoardLayout from "./components/HOC/AdminDashoardLayout.jsx";
import Overview from "./pages/AdminDashboard/Overview.jsx";
import Skills from "./pages/AdminDashboard/Skills.jsx";
import Settings from "./pages/AdminDashboard/Settings.jsx";
import Users from "./pages/AdminDashboard/Users.jsx";
import Sessions from "./pages/AdminDashboard/Sessions.jsx";
import Analytics from "./pages/AdminDashboard/Analytics.jsx";
import UserDashboardHome from "./pages/Dashboard/UserDashboardHome.jsx";

import UserFindSkills from "./pages/Dashboard/UserFindSkills.jsx";

import UserInbox from "./pages/Dashboard/UserInbox.jsx";
import UserMySessions from "./pages/Dashboard/UserMySessions.jsx";
import UserProfile from "./pages/Dashboard/UserProfile.jsx";
import UserSettings from "./pages/Dashboard/UserSettings.jsx";

const App = () => {
  return (
    <>
      <Toaster positon="top-right" reverseOrder={false} />
      <Routes>
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
        {/* <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<UserDashboardHome />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/skills" element={<MySkills />} />
          <Route path="/dashboard/explore" element={<Explores />} />
          <Route path="/dashboard/messages" element={<Message />} />
          <Route path="/dashboard/session" element={<MySessions />} />
        </Route> */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboardHome />} />{" "}
          {/* User's main dashboard view */}
          <Route path="profile" element={<UserProfile />} />
          <Route path="my-skills" element={<UserFindSkills />} />
          {/* Add more user pages here as you create them */}
          <Route path="my-sessions" element={<UserMySessions />} />
          <Route path="find-skills" element={<UserFindSkills />} />
          <Route path="inbox" element={<UserInbox />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>

        <Route path="/admin" element={<AdminDashoardLayout />}>
          <Route index element={<Overview />} />
          <Route path="users" element={<Users />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="skills" element={<Skills />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
