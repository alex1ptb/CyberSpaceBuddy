import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, APP_TAGLINE } from "../constants";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { LightBulbIcon } from "./icons/LightBulbIcon";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 rounded-lg shadow-xl">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Elevate Your Business with{" "}
          <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
            Digital Solutions
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
          {`Cyberspace Buddy empowers SMBs with expert SEO, Social Media Growth, Custom Automations, and App Development. Streamline operations, attract more clients, and achieve sustainable growth.`}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <Link
            to={NAV_LINKS.REQUEST_QUOTE.path}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-indigo-50 transition-colors duration-150 ease-in-out transform hover:scale-105"
          >
            <LightBulbIcon className="w-5 h-5 mr-2" />
            Request a Free Consultation
          </Link>
          <Link
            to={NAV_LINKS.SERVICES.path}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-indigo-300 text-base font-medium rounded-md text-white hover:bg-indigo-500 hover:border-indigo-500 transition-colors duration-150 ease-in-out"
          >
            <BriefcaseIcon className="w-5 h-5 mr-2" />
            Explore Our Digital Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
