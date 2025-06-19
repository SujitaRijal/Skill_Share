import React from "react";
import StatCard from "./StatCard";
import {
  BookOpen,
  CheckCircle,
  Star,
  UserCheck,
  Users,
  Calendar1,
} from "lucide-react";
import { div } from "framer-motion/client";

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
const sampleSkills = [
  {
    id: 1,
    name: "React.js",
    category: "Programming",
    offered: 25,
    wanted: 18,
    popularity: 92,
  },
  {
    id: 2,
    name: "Python",
    category: "Programming",
    offered: 30,
    wanted: 22,
    popularity: 88,
  },
  {
    id: 3,
    name: "UI/UX Design",
    category: "Design",
    offered: 15,
    wanted: 28,
    popularity: 85,
  },
  {
    id: 4,
    name: "Data Science",
    category: "Analytics",
    offered: 12,
    wanted: 35,
    popularity: 95,
  },
];

const Overview = () => {
  const users = SampleUsers;
  const sessions = sampleSessions;
  const skills = sampleSkills;

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter((u) => u.status === "active").length,
    totalSessions: sessions.length,
    completedSessions: sessions.filter((s) => s.status === "completed").length,
    totalSkills: skills.length,
    averagerating: (
      users.reduce((acc, user) => acc + user.rating, 0) / users.length
    ).toFixed(1),
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          title="Total Users"
          value={stats.totalUsers}
          trend="+12% this month"
          color="blue"
        />

        <StatCard
          icon={UserCheck}
          title="Active Users"
          value={stats.activeUsers}
          trend="+8% this months"
          color="green"
        />

        <StatCard
          icon={BookOpen}
          title="Total Sessions"
          value={stats.totalSessions}
          trend="+25% this months"
          color="purple"
        />

        <StatCard
          icon={Star}
          title="Average Ratings"
          value={stats.averagerating}
          trend="+0.2 this months"
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 space-x-3 rounded-lg bg-gray-50">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm font-medium">
                  Session completed:React.js
                </p>
                <p className="text-xs test-gray-500">
                  Sujita Rijal - Saroj Pangeni
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 space-x-3 rounded-lg bg-gray-50">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">New User Registered</p>
                <p className="text-xs text-gray-500">Smriti Pandey Joined</p>
              </div>
            </div>

            <div className="flex items-center p-3 space-x-3 rounded-lg bg-gray-50">
              <Calendar1 className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Session Scheduled:Python</p>
                <p className="text-xs text-gray-500">
                  Smriti Pandey-Sumika Thapa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Top Skills in Demand</h3>
          <div className="space-y-3">
            {skills
              .sort((a, b) => b.wanted - a.wanted)
              .slice(0, 4)
              .map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-xs text-gray-500">{skill.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">
                      {skill.wanted}
                    </p>
                    <p className="text-xs text-gray-500">{skill.offered}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
