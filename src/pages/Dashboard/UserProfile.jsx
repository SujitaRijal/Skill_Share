import React, { useState } from "react";
import {
  Edit,
  Save,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

const sampleUserProfile = {
  name: "Sujita Rijal",
  email: "sujita@example.com",
  phone: "987-654-3210",
  location: "Kathmandu, Nepal",
  bio: "Passionate MERN stack developer with a strong interest in UI/UX design and data visualization. Looking to connect with fellow learners and share knowledge on modern web technologies.",
  joinDate: "2024-01-15",
  skillsOffered: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
  ],
  skillsWanted: ["Advanced Python", "Machine Learning", "AWS Deployment"],
  sessionsCompleted: 12,
  rating: 4.8,
  isProfileComplete: true, // Example field
};

const UserProfile = () => {
  const [profile, setProfile] = useState(sampleUserProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setFormData(profile); // Reset form data if canceling edit
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // In a real app, you'd send formData to your backend API here
    console.log("Saving profile:", formData);
    setProfile(formData); // Update local state with saved data
    setIsEditing(false);
    // Add success/error feedback
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Profile</h2>
        {!isEditing ? (
          <button
            onClick={handleEditToggle}
            className="flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Edit className="w-4 h-4 mr-2" /> Edit Profile
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-2" /> Save
            </button>
            <button
              onClick={handleEditToggle}
              className="flex items-center px-4 py-2 text-white transition-colors bg-gray-400 rounded-lg hover:bg-gray-500"
            >
              <XCircle className="w-4 h-4 mr-2" /> Cancel
            </button>
          </div>
        )}
      </div>

      <div className="p-8 bg-white rounded-lg shadow-md">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 mb-8 md:flex-row md:items-start">
          <div className="flex items-center justify-center w-24 h-24 text-4xl font-bold text-gray-500 bg-gray-200 rounded-full">
            {profile.name[0]}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900">{profile.name}</h3>
            <p className="text-gray-600">{profile.bio}</p>
            <div className="flex items-center mt-2 text-yellow-500">
              <Star className="w-5 h-5 mr-1" />
              <span className="font-semibold">{profile.rating}</span>
              <span className="ml-2 text-sm text-gray-500">
                ({profile.sessionsCompleted} sessions)
              </span>
            </div>
          </div>
        </div>

        {/* Profile Details / Edit Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="flex items-center font-medium text-gray-800">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                {profile.email}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="flex items-center font-medium text-gray-800">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                {profile.phone}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Location
            </label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="flex items-center font-medium text-gray-800">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                {profile.location}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Member Since
            </label>
            <p className="flex items-center font-medium text-gray-800">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              {new Date(profile.joinDate).toLocaleDateString()}
            </p>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            ) : (
              <p className="text-gray-800">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="pt-6 mt-8 border-t border-gray-200">
          <h4 className="mb-4 text-lg font-semibold">Skills Offered</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skillsOffered.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <h4 className="mt-6 mb-4 text-lg font-semibold">Skills Wanted</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skillsWanted.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          {isEditing && (
            <p className="mt-4 text-sm text-gray-500">
              Note: Skill management (add/remove) would require separate UI
              elements.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
