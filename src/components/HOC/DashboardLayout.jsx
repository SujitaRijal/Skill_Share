import { Outlet } from "react-router-dom"
import SideBar from "../Navigation/SideBar"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 text-white fixed h-full z-10">
        <SideBar />
      </aside>
      <main className="flex-1 p-6 bg-gray-50 ml-64 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout