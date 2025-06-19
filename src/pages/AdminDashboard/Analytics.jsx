import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample Data (replace with actual data fetched from your backend)
const userGrowthData = [
  { name: "Jan", "New Users": 400 },
  { name: "Feb", "New Users": 300 },
  { name: "Mar", "New Users": 600 },
  { name: "Apr", "New Users": 800 },
  { name: "May", "New Users": 700 },
  { name: "Jun", "New Users": 900 },
];

const sessionCompletionData = [
  { name: "Jan", Completed: 100, Scheduled: 120, "In Progress": 30 },
  { name: "Feb", Completed: 110, Scheduled: 130, "In Progress": 25 },
  { name: "Mar", Completed: 150, Scheduled: 160, "In Progress": 35 },
  { name: "Apr", Completed: 180, Scheduled: 200, "In Progress": 40 },
  { name: "May", Completed: 170, Scheduled: 190, "In Progress": 38 },
  { name: "Jun", Completed: 200, Scheduled: 220, "In Progress": 45 },
];

const skillsByCategoryData = [
  { name: "Programming", value: 400 },
  { name: "Design", value: 300 },
  { name: "Marketing", value: 200 },
  { name: "Languages", value: 278 },
  { name: "Business", value: 189 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const userSatisfactionData = [
  { name: "Week 1", "Avg Rating": 4.5 },
  { name: "Week 2", "Avg Rating": 4.7 },
  { name: "Week 3", "Avg Rating": 4.6 },
  { name: "Week 4", "Avg Rating": 4.8 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics & Reports</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* User Growth Chart */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">User Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={userGrowthData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="New Users"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Session Completion Rate Chart */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">
            Session Status Overview
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={sessionCompletionData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Completed" fill="#82ca9d" />
              <Bar dataKey="Scheduled" fill="#8884d8" />
              <Bar dataKey="In Progress" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Skills by Category Chart (Pie Chart) */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Skills by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillsByCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {skillsByCategoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* User Satisfaction (Average Rating) Chart */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">
            User Satisfaction (Average Rating)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={userSatisfactionData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[3.0, 5.0]} /> {/* Adjust Y-axis for ratings */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Avg Rating"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
