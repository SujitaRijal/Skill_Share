import React, { useState } from "react";
import { User, Bell, Lock, Save, XCircle, Edit } from "lucide-react";

const sampleUserSettings = {
  fullName: "Sujita Rijal",
  email: "sujita@example.com",
  notifications: {
    sessionReminders: true,
    newMessages: true,
    skillUpdates: false,
  },
  // No password stored here, only for form handling
};

const UserSettings = () => {
  const [settings, setSettings] = useState(sampleUserSettings);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState(settings);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChangeMessage, setPasswordChangeMessage] = useState("");

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({ ...profileFormData, [name]: value });
  };

  const handleProfileSave = () => {
    // In a real app, send profileFormData to API
    console.log("Saving profile settings:", profileFormData);
    setSettings((prev) => ({ ...prev, ...profileFormData })); // Update main settings state
    setIsEditingProfile(false);
    alert("Profile settings updated successfully!");
  };

  const handleToggleNotification = (notificationType) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [notificationType]: !prev.notifications[notificationType],
      },
    }));
    // In a real app, send API request to update notification preferences
    alert(`Notification preference for ${notificationType} toggled!`);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordChangeMessage(""); // Clear previous messages

    if (newPassword !== confirmNewPassword) {
      setPasswordChangeMessage("New passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      // Example validation
      setPasswordChangeMessage(
        "New password must be at least 6 characters long."
      );
      return;
    }

    // In a real app, send old and new password to API for validation and update
    console.log("Changing password:", { currentPassword, newPassword });
    // Simulate API call
    setTimeout(() => {
      if (currentPassword === "correct_old_password") {
        // Dummy check
        setPasswordChangeMessage("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setPasswordChangeMessage("Incorrect current password.");
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      {/* Profile Settings */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center text-lg font-semibold">
            <User className="w-5 h-5 mr-2 text-blue-600" /> Personal Information
          </h3>
          {!isEditingProfile ? (
            <button
              onClick={() => setIsEditingProfile(true)}
              className="flex items-center px-3 py-1 text-sm text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <Edit className="w-4 h-4 mr-2" /> Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleProfileSave}
                className="flex items-center px-3 py-1 text-sm text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
              >
                <Save className="w-4 h-4 mr-2" /> Save
              </button>
              <button
                onClick={() => {
                  setIsEditingProfile(false);
                  setProfileFormData(settings);
                }}
                className="flex items-center px-3 py-1 text-sm text-white transition-colors bg-gray-400 rounded-lg hover:bg-gray-500"
              >
                <XCircle className="w-4 h-4 mr-2" /> Cancel
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            {isEditingProfile ? (
              <input
                type="text"
                name="fullName"
                value={profileFormData.fullName}
                onChange={handleProfileChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 text-gray-900">{settings.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            {isEditingProfile ? (
              <input
                type="email"
                name="email"
                value={profileFormData.email}
                onChange={handleProfileChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 text-gray-900">{settings.email}</p>
            )}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="flex items-center mb-4 text-lg font-semibold">
          <Bell className="w-5 h-5 mr-2 text-orange-600" /> Notification
          Preferences
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-800">Session Reminders</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.sessionReminders}
                onChange={() => handleToggleNotification("sessionReminders")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800">New Message Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.newMessages}
                onChange={() => handleToggleNotification("newMessages")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800">Skill Update Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications.skillUpdates}
                onChange={() => handleToggleNotification("skillUpdates")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="flex items-center mb-4 text-lg font-semibold">
          <Lock className="w-5 h-5 mr-2 text-red-600" /> Change Password
        </h3>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          {passwordChangeMessage && (
            <p
              className={`text-sm ${
                passwordChangeMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {passwordChangeMessage}
            </p>
          )}
          <button
            type="submit"
            className="flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
