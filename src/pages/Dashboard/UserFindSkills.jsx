import React, { useState } from "react";
import {
  Search,
  User,
  MessageSquare,
  Star,
  BookOpen,
  Award,
} from "lucide-react";

const sampleAvailableSkills = [
  {
    id: 1,
    name: "Web Development Basics",
    teachers: [
      {
        id: 101,
        name: "Prakriti Sharma",
        rating: 4.9,
        sessions: 25,
        bio: "Experienced full-stack developer.",
      },
      {
        id: 102,
        name: "Rohan Gurung",
        rating: 4.5,
        sessions: 18,
        bio: "Frontend enthusiast with a passion for teaching.",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Design (UI/UX)",
    teachers: [
      {
        id: 103,
        name: "Anjali Basnet",
        rating: 4.8,
        sessions: 10,
        bio: "Product designer focusing on user-centered design.",
      },
    ],
  },
  {
    id: 3,
    name: "Digital Marketing Fundamentals",
    teachers: [
      {
        id: 104,
        name: "Srijana Poudel",
        rating: 4.7,
        sessions: 15,
        bio: "Digital marketing strategist with SEO expertise.",
      },
      {
        id: 105,
        name: "Bishal Thapa",
        rating: 4.2,
        sessions: 8,
        bio: "Content marketing and social media specialist.",
      },
    ],
  },
  {
    id: 4,
    name: "Public Speaking",
    teachers: [
      {
        id: 106,
        name: "Binod Koirala",
        rating: 5.0,
        sessions: 30,
        bio: "Professional public speaker and communication coach.",
      },
    ],
  },
];

const UserFindSkills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null); // Stores the skill object when a skill is clicked

  const filteredSkills = sampleAvailableSkills.filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleRequestSession = (teacherName, skillName) => {
    alert(
      `Requesting session with ${teacherName} for "${skillName}"! (Dummy action)`
    );
    // In a real app, this would open a form or send a request to the backend.
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Find New Skills</h2>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="relative mb-6">
          <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search for skills you want to learn..."
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedSkill(null); // Clear selected skill when searching
            }}
          />
        </div>

        {selectedSkill ? (
          // Display teachers for selected skill
          <div>
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <Award className="w-6 h-6 mr-2 text-green-600" /> Teachers for "
              {selectedSkill.name}"
            </h3>
            <button
              onClick={() => setSelectedSkill(null)}
              className="flex items-center px-4 py-2 mb-4 text-gray-800 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              <BookOpen className="w-4 h-4 mr-2" /> Back to Skills
            </button>

            {selectedSkill.teachers.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {selectedSkill.teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="flex items-start p-4 space-x-4 rounded-lg shadow-sm bg-gray-50"
                  >
                    <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-blue-600 bg-blue-100 rounded-full">
                      {teacher.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold">{teacher.name}</p>
                      <p className="text-sm text-gray-600">{teacher.bio}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-700">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />{" "}
                        {teacher.rating} ({teacher.sessions} sessions)
                      </div>
                      <button
                        onClick={() =>
                          handleRequestSession(teacher.name, selectedSkill.name)
                        }
                        className="flex items-center px-4 py-2 mt-3 text-sm text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" /> Request
                        Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center text-gray-500">
                <User className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">
                  No teachers found for "{selectedSkill.name}" yet.
                </p>
                <p className="mt-2 text-sm">
                  You can express interest in this skill to help us find
                  teachers!
                </p>
              </div>
            )}
          </div>
        ) : (
          // Display list of skills
          <div className="space-y-4">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 transition-colors rounded-lg shadow-sm cursor-pointer bg-gray-50 hover:bg-blue-50"
                  onClick={() => handleSkillClick(skill)}
                >
                  <p className="flex items-center text-lg font-semibold text-gray-800">
                    <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                    {skill.name}
                  </p>
                  <p className="text-sm text-gray-600 ml-7">
                    {skill.teachers.length} teachers available
                  </p>
                </div>
              ))
            ) : (
              <div className="py-10 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">No skills found matching your search.</p>
                <p className="mt-2 text-sm">
                  Try a different keyword or suggest a new skill!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserFindSkills;
