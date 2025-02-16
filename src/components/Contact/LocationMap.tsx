import React from 'react';

const LocationMap = () => {
  const locations = [
    { x: '20%', y: '30%', label: 'Kolkata' },
    { x: '40%', y: '20%', label: 'Pune' },
    { x: '70%', y: '25%', label: 'Delhi' },
    { x: '80%', y: '35%', label: 'Bangalore' },
  ];

  return (
    <div className="relative w-full h-64 bg-blue-50 rounded-lg overflow-hidden">
      {/* World Map Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600" />
      </div>

      {/* Location Dots */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: location.x, top: location.y }}
        >
          <div className="relative">
            <div className="animate-ping absolute h-3 w-3 rounded-full bg-blue-400 opacity-75" />
            <div className="relative h-3 w-3 rounded-full bg-blue-500" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-700">
              {location.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationMap;