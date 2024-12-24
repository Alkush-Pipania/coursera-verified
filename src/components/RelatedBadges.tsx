import React from 'react';

interface RelatedBadge {
  image: string;
  title: string;
  subtitle?: string;
}

const RelatedBadges = () => {
  const badges: RelatedBadge[] = [
    {
      image: "https://images.credly.com/size/220x220/images/361be5aa-88ef-4060-9821-75fcded84b4e/SN_20Generative_20AI_20Essentials_20for_20Data_20Engineers.png",
      title: "Generative AI",
      subtitle: "Essentials for Data Engineers"
    },
    {
      image: "https://images.credly.com/size/110x110/images/e41c77a7-4668-44e4-a196-008235304a3d/image.png",
      title: "Generative AI for Software Developers",
      subtitle: "Specialization"
    },
    {
      image: "https://images.credly.com/size/220x220/images/407e0edf-ccf0-40cf-bc83-0030afa31066/watsonx_20ai_20Generative_20AI_20Tools_20TSI.png",
      title: "watsonx.ai",
      subtitle: "Generative AI Tools Technical Sales Intermediate"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Related</h2>
        <div className="grid grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={badge.image} alt={badge.title} className="w-32 h-32 object-contain" />
              <div>
                <h3 className="font-medium text-gray-800">{badge.title}</h3>
                {badge.subtitle && (
                  <p className="text-gray-600 text-sm">{badge.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBadges;