import React from 'react';
import { FileCheck, Layers, Clock, DollarSign } from 'lucide-react';

const BadgeCategories = () => {
  const categories = [
    { icon: <FileCheck className="w-4 h-4" />, text: 'Validation' },
    { icon: <Layers className="w-4 h-4" />, text: 'Foundational' },
    { icon: <Clock className="w-4 h-4" />, text: 'Hours' },
    { icon: <DollarSign className="w-4 h-4" />, text: 'Paid' },
  ];

  return (
    <div className="flex gap-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded text-gray-600 text-sm font-medium"
        >
          {category.icon}
          <span>{category.text}</span>
        </div>
      ))}
    </div>
  );
};

export default BadgeCategories;