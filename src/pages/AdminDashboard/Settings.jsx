import React from "react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Platform Settings</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Platform Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue="Skill Share"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Admin Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue="admin@skillshare.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Max Session Duration (minutes)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue="180"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Two-Factor Authentication
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Auto-suspend inactive users
              </span>
              <button className="px-3 py-1 text-xs text-gray-700 bg-gray-300 rounded-full">
                Disabled
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Email verification required
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                New user notifications
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Session completion alerts
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                System error notifications
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold">Matching Algorithm</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Minimum Match Score
              </label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="70"
                className="w-full"
              />
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>0%</span>
                <span>70%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Use Cosine Similarity
              </span>
              <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
                Enabled
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
