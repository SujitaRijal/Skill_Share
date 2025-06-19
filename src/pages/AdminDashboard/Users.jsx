import React, { useState } from "react";
import { Search, Star, Eye, Edit, Ban } from "lucide-react";

const SampleUsers = [
  {
    id: 1,
    name: "Sujita Rijal",
    email: "sujita@example.com",
    status: "active",
    joinDate: "2024-01-15",
    skillsOffered: 5,
    skillsWanted: 3,
    sessionsCompleted: 12,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Saroj Pangeni",
    email: "saroj@example.com",
    status: "active",
    joinDate: "2024-02-20",
    skillsOffered: 3,
    skillsWanted: 4,
    sessionsCompleted: 8,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Ayush Aryal",
    email: "ayush@example.com",
    status: "active",
    joinDate: "2024-01-10",
    skillsOffered: 2,
    skillsWanted: 2,
    sessionsCompleted: 3,
    rating: 3.2,
  },
  {
    id: 4,
    name: "Smriti Pandey",
    email: "smriti@example.com",
    status: "suspended",
    joinDate: "2024-03-05",
    skillsOffered: 7,
    skillsWanted: 2,
    sessionsCompleted: 15,
    rating: 4.9,
  },
];
const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [users, setUsers] = useState(SampleUsers); //real app ma this would be fetched using api

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">User Management</h2>

        <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:text-blue-700">
          Export Users
        </button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search Users..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active"></option>
            <option value="suspended"></option>
            <option value="inactive"></option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-left">User</th>
                <th className="px-4 py-3 font-semibold text-left">Status</th>
                <th className="px-4 py-3 font-semibold text-left">Join Date</th>
                <th className="px-4 py-3 font-semibold text-left">Skills</th>
                <th className="px-4 py-3 font-semibold text-left">Sessions</th>
                <th className="px-4 py-3 font-semibold text-left">Rating</th>
                <th className="px-4 py-3 font-semibold text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "suspended"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <span className="text-green-600">
                        {user.skillsOffered} offered
                      </span>
                      <br />
                      <span className="text-blue-600">
                        {user.skillsWanted} wanted
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.sessionsCompleted}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span className="text-sm font-medium">{user.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 rounded hover:bg-blue-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 rounded hover:bg-green-100">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 rounded hover:bg-red-100">
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
