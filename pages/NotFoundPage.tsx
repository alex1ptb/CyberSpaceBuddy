import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../components/icons/HomeIcon";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <img
        src="https://picsum.photos/seed/404page/300/200"
        alt="Confused Robot"
        className="w-48 h-auto mb-8 rounded-lg shadow-md"
      />
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-3">
        Oops! Page Not Found.
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        It seems the page you're looking for has wandered off into the digital
        ether. Don't worry, our Cyberspace Buddy is on the case!
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
