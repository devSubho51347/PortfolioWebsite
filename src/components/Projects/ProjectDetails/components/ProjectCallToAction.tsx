import React from 'react';

const ProjectCallToAction = () => {
  const handleConnect = () => {
    window.location.href = 'mailto:choudhurysubhadeep51347@gmail.com?subject=Project%20Collaboration%20Inquiry';
  };

  return (
    <div className="bg-primary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Interested in collaborating?
        </h2>
        <button
          onClick={handleConnect}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default ProjectCallToAction;