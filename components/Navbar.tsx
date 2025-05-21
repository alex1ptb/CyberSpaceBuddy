import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, APP_NAME } from "../constants";
import { NavLinkItem } from "../types";
import { MenuIcon } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { SparklesIcon } from "./icons/SparklesIcon";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainNavLinks = [
    NAV_LINKS.HOME,
    NAV_LINKS.SERVICES,
    NAV_LINKS.SERVICE_PACKAGES, // Name will update from "Service Packages" to "Subscription Plans" via constants.ts
    NAV_LINKS.CAREERS, // New Link
    NAV_LINKS.FAQ,
    NAV_LINKS.REQUEST_QUOTE, // Moved for logical flow
    NAV_LINKS.CONTACT,
    NAV_LINKS.TEAM_PORTAL,
  ];

  const NavItem: React.FC<{
    link: NavLinkItem;
    onClick?: () => void;
    isPrimaryCTA?: boolean;
    isMobile?: boolean;
  }> = ({ link, onClick, isPrimaryCTA = false, isMobile = false }) => {
    const isActive = location.pathname === link.path;
    const baseClasses = `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
      isMobile ? "w-full justify-start text-base" : "md:text-base"
    }`;
    const activeClasses = isPrimaryCTA
      ? "bg-yellow-500 text-gray-900"
      : "bg-blue-700 text-white";
    const inactiveClasses = isPrimaryCTA
      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
      : "text-gray-700 hover:bg-blue-500 hover:text-white";

    const IconComponent = link.icon;

    return (
      <Link
        to={link.path}
        onClick={onClick}
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {IconComponent && (
          <IconComponent
            className={`w-5 h-5 mr-2 ${
              isPrimaryCTA && isActive
                ? "text-gray-900"
                : isPrimaryCTA
                ? "text-gray-900"
                : isActive
                ? "text-white"
                : ""
            }`}
          />
        )}
        {link.name}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <SparklesIcon className="h-8 w-8 mr-1 sm:mr-2" />
              <span className="font-bold text-lg sm:text-xl">{APP_NAME}</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {mainNavLinks.map(
                (link) => link && <NavItem key={link.name} link={link} />
              )}
              <div className="ml-1 lg:ml-2">
                {NAV_LINKS.CLIENT_PORTAL && (
                  <NavItem
                    link={NAV_LINKS.CLIENT_PORTAL}
                    isPrimaryCTA={false}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {NAV_LINKS.CLIENT_PORTAL && (
              <Link
                to={NAV_LINKS.CLIENT_PORTAL.path}
                className="text-gray-700 hover:bg-blue-500 hover:text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium mr-1 sm:mr-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {NAV_LINKS.CLIENT_PORTAL.icon && (
                  <NAV_LINKS.CLIENT_PORTAL.icon className="w-4 h-4 sm:w-5 sm:h-5 inline sm:mr-1" />
                )}
                <span className="hidden sm:inline">
                  {NAV_LINKS.CLIENT_PORTAL.name}
                </span>
                <span className="sm:hidden">Portal</span>
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-40"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavLinks.map(
              (link) =>
                link && (
                  <NavItem
                    key={link.name}
                    link={link}
                    onClick={() => setIsOpen(false)}
                    isMobile={true}
                  />
                )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
