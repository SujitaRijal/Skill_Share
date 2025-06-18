import React, { useState } from 'react';

function MySkills() {
  const [offeredSkills, setOfferedSkills] = useState([
    { name: 'Web Development (React, Node.js)', level: 'Expert' },
    { name: 'Graphic Design (Adobe Photoshop)', level: 'Advanced'},
  ]);

  const [requiredSkills, setRequiredSkills] = useState([
    { name: 'DevOps (Docker, CI/CD)', level: 'Beginner' },
    { name: 'Blockchain Basics', level: 'Beginner' },
  ]);

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">My Skills</h1>
      <p className="text-gray-600 text-lg">
        Showcase the skills you're offering and what you're looking to learn from others.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills You Offer</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          {offeredSkills.length > 0 ? (
            <ul className="space-y-4">
              {offeredSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
                    <p className="text-sm text-gray-600">Level: {skill.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't offered any skills yet. Share your expertise!</p>
          )}
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all">
            Add Offered Skill
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills You Require</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          {requiredSkills.length > 0 ? (
            <ul className="space-y-4">
              {requiredSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
                    <p className="text-sm text-gray-600">Level: {skill.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't added any required skills yet. What do you want to learn?</p>
          )}
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition-all">
            Add Required Skill
          </button>
        </div>
      </section>
    </div>
  );
}

export default MySkills;
