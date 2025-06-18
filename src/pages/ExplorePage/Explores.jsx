import React, { useState } from 'react';
import { Search, Star, MapPin, UserCircle } from 'lucide-react';

const dummyUsers = [
  {
    id: 1,
    name: 'Sita Dahal',
    avatar: '',
    rating: 4.5,
    location: 'Pokhara, Gandaki',
    offers: ['Yoga', 'Web Design'],
    wants: ['Python Programming'],
    match: true,
  },
  {
    id: 2,
    name: 'Bibek Sharma',
    avatar: '',
    rating: 4.8,
    location: 'Kathmandu, Bagmati',
    offers: ['React', 'Node.js'],
    wants: ['Public Speaking', 'Guitar'],
    match: false,
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('learn');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.offers.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    user.wants.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Find Your Skill Partner</h1>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center w-full md:w-1/2 border border-gray-300 rounded-md px-4 py-2">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for a skill (e.g., 'React', 'Cooking')..."
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="border p-2 rounded-md" value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="learn">I want to learn</option>
          <option value="teach">I want to teach</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded-md"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <select className="border p-2 rounded-md" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="tech">Technology</option>
          <option value="arts">Arts</option>
          <option value="languages">Languages</option>
          <option value="life">Life Skills</option>
        </select>
        <select className="border p-2 rounded-md" value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white p-5 rounded-xl shadow-sm space-y-3">
            <div className="flex items-center gap-4">
              {user.avatar ? (
                <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
              ) : (
                <UserCircle className="w-12 h-12 text-gray-300" />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {user.location}
                </p>
                <p className="text-sm text-yellow-600 flex items-center">
                  <Star className="w-4 h-4 mr-1" /> {user.rating}/5.0
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-700">Offers:</p>
              <div className="flex flex-wrap gap-2">
                {user.offers.map((skill, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-700">Wants:</p>
              <div className="flex flex-wrap gap-2">
                {user.wants.map((skill, idx) => (
                  <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {user.match && (
              <p className="text-sm text-pink-600 font-semibold mt-2">🎯 Mutual Skill Match!</p>
            )}

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md">View Profile</button>
              <button className="px-4 py-2 text-sm bg-indigo-500 text-white hover:bg-indigo-600 rounded-md">Connect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;