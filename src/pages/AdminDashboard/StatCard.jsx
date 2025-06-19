import { Icon, TrendingUp } from "lucide-react";
import React from "react";

const StatCard = ({ icon: Icon, title, value, trend, color = "blue" }) => (
  <div className="p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
        {trend && (
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
            <span className="text-sm text-green-500">{trend}</span>
          </div>
        )}
      </div>
      <Icon className={`w-8 h-8 text-{color}-500`} />
    </div>
  </div>
);

export default StatCard;
