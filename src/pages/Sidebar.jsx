import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Activity,
  TrendingUp,
} from "lucide-react";

const sidebarItems = [
  { id: "overview", label: "Overview", icon: BarChart3, path: "/admin" }, // Base path for dashboard
  { id: "users", label: "Users", icon: Users, path: "/admin/users" },
  {
    id: "sessions",
    label: "Sessions",
    icon: BookOpen,
    path: "/admin/sessions",
  },
  { id: "skills", label: "Skills", icon: Activity, path: "/admin/skills" },
  {
    id: "analytics",
    label: "Analytics",
    icon: TrendingUp,
    path: "/admin/analytics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashborad</h1>
      </div>
      <nav className="mt-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          // Check if the current path starts with the item's path for active state,
          // especially useful for the root '/' or '/admin' path.
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/admin" && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
