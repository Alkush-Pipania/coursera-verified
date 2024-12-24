import React from 'react';
import BadgeCategories from './BadgeCategories';
import BadgeSkills from './BadgeSkills';
import BadgeEarningCriteria from './BadgeEarningCriteria';
import BadgeOccupations from './BadgeOccupations';

const BadgeContent = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="grid grid-cols-2 gap-16 mb-12">
        <div className="flex justify-center">
          <img
            src="https://images.credly.com/size/680x680/images/3e199561-bc4a-4621-9361-340fc43d997e/Coursera_20Artificial_20Intelligence_20Essentials_20V2.png"
            alt="IBM AI Badge"
            className="w-[332px] h-[332px] "
          />
        </div>
        <div>
          <h1 className="text-3xl font-serif mb-6">Artificial Intelligence Essentials V2</h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              Issued by <a href="#" className="text-teal-600 hover:underline">Coursera</a>
            </p>
            <p className="text-gray-600">
              Authorized by <a href="#" className="text-teal-600 hover:underline">IBM</a>
            </p>
            <p className="mt-6 text-gray-700 leading-relaxed">
              The badge earner possesses the skills to harness AI, particularly generative AI, for career and 
              business transformation. They understand the key concepts and terminology of AI and can apply 
              this knowledge in their everyday work. They are also aware of the ethical considerations related 
              to AI and the importance of AI governance. Additionally, the badge earner has explored common 
              generative AI tools and can write prompts to obtain relevant outputs for various personal and 
              professional use cases.
            </p>
            <a href="#" className="inline-block mt-4 text-teal-600 hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
      
      <div className="space-y-12">
        <BadgeCategories />
        <BadgeSkills />
        <BadgeEarningCriteria />
        <BadgeOccupations />
      </div>
    </div>
  );
};

export default BadgeContent;