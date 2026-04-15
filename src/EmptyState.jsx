import React from 'react';

const EmptyState = ({title,message}) => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 text-center">
      <div className="text-6xl mb-4">🔍</div>

      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        {title}
      </h2>

      <p className="text-sm text-gray-500 max-w-sm">
        {message}
      </p>
    </div>
        </div>
    );
};

export default EmptyState;