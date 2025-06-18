import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';

function Profile({ userId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    avatar: '', // URL or empty
    name: 'Aashish Shrestha',
    location: 'Rampur, Nepal',
    rating: 4.8,
    bio: 'Passionate about web development. Looking to learn React.js and happy to teach Python basics.',
    teachSkills: [
      { name: 'Python Programming', level: 'Advanced', method: 'Video Call' },
      { name: 'Figma Design', level: 'Intermediate', method: 'Chat' }
    ],
    learnSkills: [
      { name: 'React.js Web Development', level: 'Beginner' },
      { name: 'Public Speaking', level: 'Beginner' }
    ],
    github: { linked: false, username: '', repos: 0, stars: 0 },
    contactPref: 'App Chat',
    availability: 'Weekends',
    interactions: [
      { with: 'Ram Nepal', rating: 5 },
      { with: 'Sita Thapa', rating: 4.5 }
    ]
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Save profile', profile);
    setIsEditing(false);
    // TODO: call API to save
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      {/* ── Header ── */}
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {profile.avatar
            ? <img src={profile.avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover" />
            : <UserCircle className="w-20 h-20 text-gray-400" />}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-600">{profile.location}</p>
            <p className="mt-1 text-yellow-500 font-semibold">{profile.rating.toFixed(1)} / 5.0 ★</p>
          </div>
        </div>
        <button
          onClick={isEditing ? handleSave : handleEditToggle}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>
      </header>

      {/* ── Bio ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bio / About Me</h2>
        {isEditing
          ? <textarea
              name="bio"
              rows="3"
              value={profile.bio}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          : <p className="p-3 bg-white rounded-md shadow-sm">{profile.bio}</p>
        }
      </section>

      {/* ── Skills I can teach ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills I Can Teach</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {profile.teachSkills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {s.name} ({s.level}) via {s.method}
            </span>
          ))}
          {isEditing && (
            <button className="px-3 py-1 bg-indigo-200 text-indigo-600 rounded-full text-sm">
              + Add Skill
            </button>
          )}
        </div>
      </section>

      {/* ── Skills I want to learn ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills I Want to Learn</h2>
        <div className="flex flex-wrap gap-2 mb-2">
          {profile.learnSkills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {s.name} ({s.level})
            </span>
          ))}
          {isEditing && (
            <button className="px-3 py-1 bg-green-200 text-green-600 rounded-full text-sm">
              + Add Skill
            </button>
          )}
        </div>
      </section>

      {/* ── GitHub Integration ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">GitHub Profile</h2>
        {profile.github.linked ? (
          <div className="flex items-center space-x-4">
            <a
              href={`https://github.com/${profile.github.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium underline"
            >
              @{profile.github.username}
            </a>
            <span className="text-gray-600">{profile.github.repos} repos, {profile.github.stars} ★</span>
          </div>
        ) : isEditing ? (
          <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">
            Link GitHub Account
          </button>
        ) : (
          <p className="text-gray-600 italic">Not linked</p>
        )}
      </section>

      {/* ── Contact Preferences ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Preferences</h2>
        {isEditing ? (
          <div className="space-y-3">
            <label className="block">
              Preferred Contact:
              <input
                name="contactPref"
                value={profile.contactPref}
                onChange={handleInputChange}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              />
            </label>
            <label className="block">
              Availability:
              <input
                name="availability"
                value={profile.availability}
                onChange={handleInputChange}
                className="ml-2 p-1 border border-gray-300 rounded-md"
              />
            </label>
          </div>
        ) : (
          <p className="text-gray-600">
            {profile.contactPref}, Avail: {profile.availability}
          </p>
        )}
      </section>

      {/* ── Past Interactions ── */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Past Interactions & Ratings</h2>
        <ul className="space-y-2">
          {profile.interactions.map((i, idx) => (
            <li key={idx} className="flex justify-between bg-white p-3 rounded-md shadow-sm">
              <span>{i.with}</span>
              <span className="font-semibold">{i.rating} ★</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Profile;
