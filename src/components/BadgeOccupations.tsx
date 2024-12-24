import React from 'react';

interface Occupation {
  title: string;
  description: string;
}

const BadgeOccupations = () => {
  const occupations: Occupation[] = [
    {
      title: 'AI Systems Engineers',
      description: 'Develop deep learning and computer vision applications for Autonomous Devices. Develop applications for AI devices using existing AI Platforms. Understand interplay of hardware and software architectures on future algorithms and applications to develop AI Platforms.',
    },
    {
      title: 'Machine Learning Engineers',
      description: 'Create artificial intelligence products. Create machine learning models and retraining systems using knowledge of statistics, programming, data science, and software engineering.',
    },
    {
      title: 'Software Application Developers',
      description: 'Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. May analyze and design databases within an application area, working individually or coordinating database development as part of a team. May coordinate computer programmers.',
    },
    {
      title: 'Machine Learning Researchers',
      description: 'Conceive, research, and prototype new machine learning and high-performance computing techniques. Develop relevant software and hardware technologies with the goal of converting these into products. May also participate in the development of intellectual property.',
    },
    {
      title: 'Solution Architects',
      description: 'Responsible for coordinating and designing the essential core building block\'s that make up a technical solution.',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Occupations</h2>
      <div className="space-y-4">
        {occupations.map((occupation, index) => (
          <div key={index} className="p-6 bg-white border rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{occupation.title}</h3>
                <p className="text-gray-600 mr-14 leading-relaxed">{occupation.description}</p>
              </div>
              <button className="px-4 py-2 text-nowrap text-teal-600 border border-teal-600 rounded hover:bg-teal-50">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeOccupations;