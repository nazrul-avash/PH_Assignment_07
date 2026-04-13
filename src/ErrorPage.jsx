import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      {/* Big error code */}
      <h1 className="text-7xl font-bold text-gray-800 mb-4">
        404
      </h1>

      {/* Message */}
      <p className="text-xl text-gray-600 mb-6">
        Oops... this page doesn’t exist.
      </p>

      {/* Extra vibe */}
      <p className="text-sm text-gray-500 mb-8">
        Either you typed something wrong or this page is playing hide and seek.
      </p>

      {/* Button */}
      <NavLink
        to="/"
        className="px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition"
      >
        Go Home
      </NavLink>
    </div>
        </div>
    );
};

export default ErrorPage;