import React from 'react';
import { FileText } from 'lucide-react';

const BadgeEarningCriteria = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Earning Criteria</h2>
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-teal-600" />
        <a href="#" className="text-teal-600 hover:underline text-sm">
          Successful completion of Introduction to Artificial Intelligence (AI) on Coursera.org.
        </a>
      </div>
    </div>
  );
};

export default BadgeEarningCriteria;