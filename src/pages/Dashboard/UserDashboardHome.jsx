import React from "react";
import { Link } from "react-router-dom";
import StatCard from "../AdminDashboard/StatCard";
import {
  BookOpen,
  Star,
  MessageSquare,
  UserCheck,
  User,
  Search,
} from "lucide-react";

// Import Recharts components
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample User Data (replace with actual logged-in user data)
const currentUser = {
  name: "Sujita Rijal",
  email: "sujita@example.com",
  skillsOffered: 5,
  skillsWanted: 3,
  sessionsCompleted: 12,
  averageRating: 4.8,
  upcomingSessions: [
    {
      id: 101,
      skill: "Advanced React",
      teacher: "Prakriti Sharma",
      date: "2025-06-25",
      time: "10:00 AM",
    },
    {
      id: 102,
      skill: "Python Data Analysis",
      teacher: "Prashant Dahal",
      date: "2025-06-28",
      time: "02:00 PM",
    },
  ],
  recentActivity: [
    {
      type: "session_completed",
      text: 'Completed session: "JavaScript Basics"',
      date: "2025-06-15",
    },
    { type: "skill_added", text: 'Added skill: "Node.js"', date: "2025-06-14" },
    {
      type: "new_message",
      text: "New message from Saroj Pangeni",
      date: "2025-06-13",
    },
  ],
};

// --- NEW SAMPLE DATA FOR CHART ---
const userSessionsData = [
  { name: "Jan", Sessions: 2 },
  { name: "Feb", Sessions: 3 },
  { name: "Mar", Sessions: 1 },
  { name: "Apr", Sessions: 4 },
  { name: "May", Sessions: 2 },
  { name: "Jun", Sessions: 3 },
];

const UserDashboardHome = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome, {currentUser.name}!
      </h2>
      <p className="text-gray-600">Here's a quick overview of your activity.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={BookOpen}
          title="Sessions Completed"
          value={currentUser.sessionsCompleted}
          color="purple"
        />
        <StatCard
          icon={Star}
          title="Your Average Rating"
          value={currentUser.averageRating}
          color="yellow"
        />
        <StatCard
          icon={MessageSquare}
          title="New Messages"
          value="3"
          color="blue"
        />
      </div>

      {/* --- NEW SECTION FOR CHART --- */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="flex items-center mb-4 text-lg font-semibold">
          <BookOpen className="w-5 h-5 mr-2 text-purple-600" /> Your Session
          Activity
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={userSessionsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Sessions"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* --- END NEW SECTION --- */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Sessions */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center mb-4 text-lg font-semibold">
            <BookOpen className="w-5 h-5 mr-2 text-purple-600" /> Upcoming
            Sessions
          </h3>
          {currentUser.upcomingSessions.length > 0 ? (
            <ul className="space-y-3">
              {currentUser.upcomingSessions.map((session) => (
                <li
                  key={session.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{session.skill}</p>
                    <p className="text-sm text-gray-500">
                      With {session.teacher}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {new Date(session.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">{session.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No upcoming sessions.{" "}
              <Link
                to="/dashboard/find-skills"
                className="text-blue-600 hover:underline"
              >
                Find new skills!
              </Link>
            </p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center mb-4 text-lg font-semibold">
            <UserCheck className="w-5 h-5 mr-2 text-green-600" /> Recent
            Activity
          </h3>
          <ul className="space-y-3">
            {currentUser.recentActivity.length > 0 ? (
              currentUser.recentActivity.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <p className="text-sm font-medium">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No recent activity.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Quick Actions / Suggestions */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/dashboard/profile"
            className="flex items-center px-4 py-2 text-blue-800 transition-colors bg-blue-100 rounded-lg hover:bg-blue-200"
          >
            <User className="w-4 h-4 mr-2" /> Complete Profile
          </Link>
          <Link
            to="/dashboard/find-skills"
            className="flex items-center px-4 py-2 text-green-800 transition-colors bg-green-100 rounded-lg hover:bg-green-200"
          >
            <Search className="w-4 h-4 mr-2" /> Find New Skills
          </Link>
          <Link
            to="/dashboard/my-sessions"
            className="flex items-center px-4 py-2 text-purple-800 transition-colors bg-purple-100 rounded-lg hover:bg-purple-200"
          >
            <BookOpen className="w-4 h-4 mr-2" /> Manage Sessions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
