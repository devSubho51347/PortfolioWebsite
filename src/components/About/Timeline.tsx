import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200">
        <div className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-blue-600 rounded-full" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          {year}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm font-medium text-blue-600">{company}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;