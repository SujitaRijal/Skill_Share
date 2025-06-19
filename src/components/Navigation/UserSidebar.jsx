import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  MessageSquare,
  Search,
  Settings,
  Star,
} from "lucide-react";

const userSidebarItems = [
  { id: "home", label: "Dashboard", icon: Home, path: "/dashboard" }, // User's home
  {
    id: "profile",
    label: "My Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    id: "my-skills",
    label: "My Skills",
    icon: Star,
    path: "/dashboard/my-skills",
  },
  {
    id: "my-sessions",
    label: "My Sessions",
    icon: BookOpen,
    path: "/dashboard/my-sessions",
  },
  {
    id: "find-skills",
    label: "Find Skills",
    icon: Search,
    path: "/dashboard/find-skills",
  },
  {
    id: "inbox",
    label: "Inbox",
    icon: MessageSquare,
    path: "/dashboard/inbox",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const UserSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">User Dashboard</h1>
      </div>
      <nav className="mt-6">
        {userSidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/dashboard" &&
              location.pathname.startsWith(item.path));
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

export default UserSidebar;
