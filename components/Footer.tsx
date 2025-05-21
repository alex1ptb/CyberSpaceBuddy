import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME, FOOTER_LINKS, APP_TAGLINE } from "../constants";
import { SparklesIcon } from "./icons/SparklesIcon";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center text-white hover:text-blue-400 transition-colors mb-3 sm:mb-4"
            >
              <SparklesIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-2 text-blue-500" />
              <span className="font-bold text-lg sm:text-xl">{APP_NAME}</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400">{APP_TAGLINE}</p>
          </div>
          <div>
            <h5 className="text-md sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Company
            </h5>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.COMPANY.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-md sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Resources
            </h5>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.RESOURCES.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-md sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Support & Legal
            </h5>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.SUPPORT.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.LEGAL.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
