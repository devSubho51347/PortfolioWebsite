import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;