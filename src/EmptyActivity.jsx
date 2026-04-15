import React from 'react';

const EmptyActivity = () => {
    return (
        <div>
      <div className="flex flex-col items-center justify-center h-[600px] text-gray-600 text-center px-6">
  
  <div className="text-6xl mb-4">📭</div>

  <h2 className="text-3xl font-extrabold text-gray-800">
    No activity yet
  </h2>

  <p className="text-base font-medium text-gray-500 mt-2 max-w-md">
    Start logging Call, Text, or Video activities to see your analytics chart here.
  </p>

</div>
        </div>
    );
};

export default EmptyActivity;