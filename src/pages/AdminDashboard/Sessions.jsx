import { Eye, Star, XCircle } from "lucide-react";
import React from "react";
import { useState } from "react";

const sampleSessions = [
  {
    id: 1,
    teacher: "Sujita Rijal",
    learner: "saroj Pangeni",
    skill: "React.js",
    status: "completed",
    date: "2024-06-15",
    duration: 120,
    rating: 5,
  },
  {
    id: 2,
    teacher: "Smriti Pandey",
    learner: "Ayush Aryal",
    skill: "Python",
    status: "scheduled",
    date: "2024-06-20",
    duration: 90,
    rating: null,
  },
  {
    id: 3,
    teacher: "Saroj Pangeni",
    learner: "Sujita Rijal",
    skill: "UI/UX Design",
    status: "in-progress",
    date: "2024-06-18",
    duration: 60,
    rating: null,
  },
];
const Sessions = () => {
  const [sessions, setSessions] = useState(sampleSessions);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Session Management</h2>
        <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
          Export Sessions
        </button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-left">
                  Session ID
                </th>
                <th className="px-4 py-3 font-semibold text-left">
                  Participants
                </th>
                <th className="px-4 py-3 font-semibold text-left">Skill</th>
                <th className="px-4 py-3 font-semibold text-left">Status</th>
                <th className="px-4 py-3 font-semibold text-left">Date</th>
                <th className="px-4 py-3 font-semibold text-left">Duration</th>
                <th className="px-4 py-3 font-semibold text-left">Rating</th>
                <th className="px-4 py-3 font-semibold text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr
                  key={session.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-medium">#{session.id}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm">
                      <p>
                        <span className="font-medium">Teacher:</span>{" "}
                        {session.teacher}
                      </p>
                      <p>
                        <span className="font-medium">Learner:</span>{" "}
                        {session.learner}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{session.skill}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : session.status === "scheduled"
                          ? "bg-blue-100 text-blue-800"
                          : session.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {new Date(session.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {session.duration} min
                  </td>
                  <td className="px-4 py-3">
                    {session.rating ? (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {session.rating}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Not rated</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 rounded hover:bg-blue-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 rounded hover:bg-red-100">
                        <XCircle className="w-4 h-4" />
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

export default Sessions;
