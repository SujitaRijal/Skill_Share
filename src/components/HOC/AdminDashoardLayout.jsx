import React from "react";
import Sidebar from "../../pages/sidebar";
import { Outlet } from "react-router-dom";

const AdminDashoardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashoardLayout;
