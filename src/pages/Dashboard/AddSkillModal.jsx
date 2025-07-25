import React, { useState, useEffect } from "react";
import { X, PlusCircle, Star, BookOpen } from "lucide-react";

const AddSkillModal = ({ isOpen, onClose, onAddSkill, skillType }) => {
  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState("Beginner"); // For offered skills
  const [interest, setInterest] = useState("Medium"); // For wanted skills
  const [error, setError] = useState("");

  // Reset form fields when modal opens/closes or skillType changes
  useEffect(() => {
    if (isOpen) {
      setSkillName("");
      setProficiency("Beginner");
      setInterest("Medium");
      setError("");
    }
  }, [isOpen, skillType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (skillName.trim() === "") {
      setError("Skill name cannot be empty.");
      return;
    }

    const newSkill = {
      id: Date.now(), // Simple unique ID for demo. Use backend-generated ID in real app.
      name: skillName.trim(),
    };

    if (skillType === "offered") {
      newSkill.proficiency = proficiency;
      newSkill.sessions = 0; // New offered skill starts with 0 sessions
    } else if (skillType === "wanted") {
      newSkill.interest = interest;
    }

    onAddSkill(newSkill, skillType);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600 bg-opacity-50">
      <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-800"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
          {skillType === "offered" ? (
            <Star className="w-6 h-6 mr-3 text-yellow-600" />
          ) : (
            <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
          )}
          Add {skillType === "offered" ? "Offered" : "Wanted"} Skill
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="skillName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., React.js, Python, Digital Marketing"
              required
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          {skillType === "offered" && (
            <div>
              <label
                htmlFor="proficiency"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Proficiency Level
              </label>
              <select
                id="proficiency"
                value={proficiency}
                onChange={(e) => setProficiency(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          )}

          {skillType === "wanted" && (
            <div>
              <label
                htmlFor="interest"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Interest Level
              </label>
              <select
                id="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          )}

          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 font-medium text-gray-800 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-5 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <PlusCircle className="w-4 h-4 mr-2" /> Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
