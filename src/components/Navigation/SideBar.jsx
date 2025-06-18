import { Icon, icons, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function SideBar() {
  const sidebarItems = [
    { path: "/dashboard", label: "Dashboard", icon: "🏠" },
    { path: "/dashboard/skills", label: "My Skills", icon: "⭐" },
    { path: "/dashboard/messages", label: "Messages", icon: "💬" },
    { path: "/dashboard/session", label: "My Sessions", icon: "⭐"},
    { path: "/dashboard/profile", label: "Profile", icon: "👤" },
    { path: "/dashboard/explore", label: "Explore", icon: "👤" },
    { path: "/dashboard/upload-cv", label: "Upload CV", icon: "📤" }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-center py-6 border-b">
        <Users className="w-6 h-6 text-purple-500" />
        <span className="ml-3 text-xl font-bold text-black">SKILL SHARE</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {sidebarItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-md transition-colors text-sm font-medium ${
                    isActive
                      ? "bg-gray-300 text-indigo-700 hover:bg-indigo-600"
                      : "text-white hover:bg-indigo-600"
                  }`
                }
              >
                <span className="text-lg k">{item.icon}</span>
                <span className='text-black'>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
