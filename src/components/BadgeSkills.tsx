import React from 'react';

const BadgeSkills = () => {
  const skills = [
    'AI for business',
    'Artificial Intelligence',
    'Careers in AI',
    'Ethics for AI',
    'Generative AI',
    'PWID-B0955900'
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 text-sm cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BadgeSkills;