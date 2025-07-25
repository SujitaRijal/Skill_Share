import React, { useState } from "react";
import { PlusCircle, Edit, Trash2, BookOpen, Star } from "lucide-react";
import AddSkillModal from "./AddSkillModal";

const initialUserSkills = {
  offered: [
    { id: 1, name: "React.js", proficiency: "Advanced", sessions: 8 },
    { id: 2, name: "Node.js", proficiency: "Intermediate", sessions: 4 },
    { id: 3, name: "MongoDB", proficiency: "Beginner", sessions: 0 },
    { id: 4, name: "Tailwind CSS", proficiency: "Advanced", sessions: 6 },
  ],
  wanted: [
    { id: 5, name: "Machine Learning", interest: "High" },
    { id: 6, name: "Cloud Computing (AWS)", interest: "Medium" },
  ],
};

const UserMySkills = () => {
  const [skills, setSkills] = useState(initialUserSkills);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillTypeToAdd, setSkillTypeToAdd] = useState(""); // 'offered' or 'wanted'

  const handleOpenModal = (type) => {
    setSkillTypeToAdd(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSkillTypeToAdd("");
  };

  const handleAddSkill = (newSkill, type) => {
    console.log(`Adding new ${type} skill:`, newSkill);

    setSkills((prevSkills) => ({
      ...prevSkills,
      [type]: [...prevSkills[type], newSkill],
    }));
  };

  const handleEditSkill = (skillId, type) => {
    alert(
      `Edit skill ID: ${skillId} (${type}) - This would open an edit modal.`
    );
  };

  const handleDeleteSkill = (skillId, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type} skill?`)) {
      if (type === "offered") {
        setSkills((prev) => ({
          ...prev,
          offered: prev.offered.filter((s) => s.id !== skillId),
        }));
      } else {
        setSkills((prev) => ({
          ...prev,
          wanted: prev.wanted.filter((s) => s.id !== skillId),
        }));
      }

      alert("Skill deleted!");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Skills</h2>

      {/* Skills Offered Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center text-lg font-semibold">
            <Star className="w-5 h-5 mr-2 text-yellow-600" />
            Skills I Can Offer
          </h3>
          <button
            onClick={() => handleOpenModal("offered")}
            className="flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Add Skill
          </button>
        </div>
        {skills.offered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Skill
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Proficiency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Sessions Taught
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {skills.offered.map((skill) => (
                  <tr key={skill.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {skill.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {skill.proficiency}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {skill.sessions}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEditSkill(skill.id, "offered")}
                          className="p-1 text-indigo-600 rounded hover:text-indigo-900 hover:bg-indigo-50"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSkill(skill.id, "offered")}
                          className="p-1 text-red-600 rounded hover:text-red-900 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="py-4 text-center text-gray-500">
            You haven't listed any skills yet. Click "Add Skill" to start
            sharing your knowledge!
          </p>
        )}
      </div>

      {/* Skills Wanted Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center text-lg font-semibold">
            <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
            Skills I Want to Learn
          </h3>
          <button
            onClick={() => handleOpenModal("wanted")}
            className="flex items-center px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Add Skill
          </button>
        </div>
        {skills.wanted.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Skill
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Interest Level
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {skills.wanted.map((skill) => (
                  <tr key={skill.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {skill.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {skill.interest}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEditSkill(skill.id, "wanted")}
                          className="p-1 text-indigo-600 rounded hover:text-indigo-900 hover:bg-indigo-50"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSkill(skill.id, "wanted")}
                          className="p-1 text-red-600 rounded hover:text-red-900 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="py-4 text-center text-gray-500">
            What do you want to learn? Add skills you're interested in!
          </p>
        )}
      </div>

      {/* The Add Skill Modal */}
      <AddSkillModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddSkill={handleAddSkill}
        skillType={skillTypeToAdd}
      />
    </div>
  );
};

export default UserMySkills;
