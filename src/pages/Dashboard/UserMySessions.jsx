import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  MessageSquare,
  Eye,
  Star,
} from "lucide-react";

const sampleUserSessions = [
  {
    id: 1,
    skill: "Advanced React Hooks",
    role: "learner", // or 'teacher'
    partner: "Prakriti Sharma",
    date: "2025-06-25",
    time: "10:00 AM",
    status: "upcoming", // upcoming, completed, cancelled
    location: "Online - Google Meet",
  },
  {
    id: 2,
    skill: "Python for Data Analysis",
    role: "teacher",
    partner: "Prashant Dahal",
    date: "2025-06-20",
    time: "02:00 PM",
    status: "completed",
    rating: 5,
    location: "Online - Zoom",
  },
  {
    id: 3,
    skill: "Introduction to Node.js",
    role: "learner",
    partner: "Ayush Aryal",
    date: "2025-06-18",
    time: "04:00 PM",
    status: "completed",
    rating: 4,
    location: "Cafe De Ktm",
  },
  {
    id: 4,
    skill: "SQL Database Design",
    role: "teacher",
    partner: "Smriti Pandey",
    date: "2025-07-01",
    time: "11:00 AM",
    status: "upcoming",
    location: "Online - Microsoft Teams",
  },
  {
    id: 5,
    skill: "Tailwind CSS Essentials",
    role: "learner",
    partner: "Saroj Pangeni",
    date: "2025-06-10",
    time: "09:00 AM",
    status: "cancelled",
    location: "Online - Google Meet",
  },
];

const UserMySessions = () => {
  const [filterRole, setFilterRole] = useState("all"); // 'all', 'learner', 'teacher'
  const [filterStatus, setFilterStatus] = useState("all"); // 'all', 'upcoming', 'completed', 'cancelled'

  const filteredSessions = sampleUserSessions.filter((session) => {
    const matchesRole = filterRole === "all" || session.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || session.status === filterStatus;
    return matchesRole && matchesStatus;
  });

  const handleCancelSession = (sessionId) => {
    if (window.confirm("Are you sure you want to cancel this session?")) {
      alert(`Session ${sessionId} cancelled (dummy action)`);
      // In a real app: Send API request to update session status
      // Then, update local state or refetch data
    }
  };

  const handleRateSession = (sessionId) => {
    alert(`Rate session ${sessionId} (dummy action)`);
    // In a real app: Open a rating modal/form
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Sessions</h2>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="learner">As Learner</option>
            <option value="teacher">As Teacher</option>
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {filteredSessions.length > 0 ? (
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="flex flex-col items-start justify-between p-4 rounded-lg shadow-sm bg-gray-50 md:flex-row md:items-center"
              >
                <div className="flex-1 mb-3 md:mb-0">
                  <p className="flex items-center text-lg font-semibold text-gray-900">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    {session.skill}
                    <span
                      className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                        session.status
                      )}`}
                    >
                      {session.status}
                    </span>
                  </p>
                  <p className="flex items-center mt-1 text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    {session.role === "learner"
                      ? `Teaching by: ${session.partner}`
                      : `Learning with: ${session.partner}`}
                  </p>
                  <p className="flex items-center mt-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    {new Date(session.date).toLocaleDateString()} at{" "}
                    {session.time}
                  </p>
                  <p className="flex items-center mt-1 text-sm text-gray-600">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                    {session.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:ml-4">
                  {session.status === "upcoming" && (
                    <button
                      onClick={() => handleCancelSession(session.id)}
                      className="flex items-center px-3 py-1 text-sm text-white transition-colors bg-red-500 rounded-md hover:bg-red-600"
                    >
                      <XCircle className="w-4 h-4 mr-1" /> Cancel
                    </button>
                  )}
                  {session.status === "completed" && !session.rating && (
                    <button
                      onClick={() => handleRateSession(session.id)}
                      className="flex items-center px-3 py-1 text-sm text-white transition-colors bg-yellow-500 rounded-md hover:bg-yellow-600"
                    >
                      <Star className="w-4 h-4 mr-1" /> Rate
                    </button>
                  )}
                  {session.status === "completed" && session.rating && (
                    <span className="flex items-center px-3 py-1 text-sm text-yellow-800 bg-yellow-100 rounded-md">
                      <Star className="w-4 h-4 mr-1" /> Rated: {session.rating}
                    </span>
                  )}
                  {/* Add a "View Details" button if needed */}
                  <button className="flex items-center px-3 py-1 text-sm text-gray-800 transition-colors bg-gray-200 rounded-md hover:bg-gray-300">
                    <Eye className="w-4 h-4 mr-1" /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg">No sessions found matching your criteria.</p>
            <p className="mt-2 text-sm">
              Try adjusting your filters or find new skills to learn!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMySessions;
