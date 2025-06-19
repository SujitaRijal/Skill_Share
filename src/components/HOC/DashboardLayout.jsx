import { Outlet } from "react-router-dom";
import SideBar from "../Navigation/SideBar";
import UserSidebar from "../Navigation/usersidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="fixed z-10 w-64 h-full text-white">
        {/* <SideBar /> */}
        <UserSidebar />
      </aside>
      <main className="flex-1 p-6 ml-64 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
