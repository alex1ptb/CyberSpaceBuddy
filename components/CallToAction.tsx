import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { SparklesIcon } from "./icons/SparklesIcon"; // Using Sparkles for general "bright idea/solution"

const CallToAction: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl p-8 md:p-12 text-center">
          <SparklesIcon className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Grow and Optimize Your Business?
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Partner with Cyberspace Buddy for expert SEO, Social Media
            strategies, Custom Automations, and App Development. Let's build
            solutions that drive efficiency and accelerate your growth.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to={NAV_LINKS.REQUEST_QUOTE.path}
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-indigo-50 transition-colors"
            >
              Get Your Free Consultation
            </Link>
            <Link
              to={NAV_LINKS.SERVICE_PACKAGES.path}
              className="inline-block px-8 py-3 border border-indigo-300 text-base font-medium rounded-md text-white bg-transparent hover:bg-indigo-700 hover:border-indigo-700 transition-colors"
            >
              View Service Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
