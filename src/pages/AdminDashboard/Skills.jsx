import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

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
const Skills = () => {
  const [skills, setSkills] = useState(sampleSkills);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Skills Management</h2>
        <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
          Add New Skill
        </button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 font-semibold text-left">
                  Skill Name
                </th>
                <th className="px-4 py-3 font-semibold text-left">Category</th>
                <th className="px-4 py-3 font-semibold text-left">Providers</th>
                <th className="px-4 py-3 font-semibold text-left">Seekers</th>
                <th className="px-4 py-3 font-semibold text-left">
                  Popularity
                </th>
                <th className="px-4 py-3 font-semibold text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr
                  key={skill.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-medium">{skill.name}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full">
                      {skill.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-green-600">
                    {skill.offered}
                  </td>
                  <td className="px-4 py-3 font-medium text-blue-600">
                    {skill.wanted}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-16 h-2 mr-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-600 rounded-full"
                          style={{ width: `${skill.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">
                        {skill.popularity}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="p-1 text-green-600 rounded hover:bg-green-100">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 rounded hover:bg-red-100">
                        <Trash2 className="w-4 h-4" />
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

export default Skills;
