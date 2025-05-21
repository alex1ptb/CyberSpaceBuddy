import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import ThemeToggleButton from "./ThemeToggleButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mainNavLinks = [
    NAV_LINKS.HOME,
    NAV_LINKS.SERVICES,
    NAV_LINKS.SERVICE_PACKAGES,
    NAV_LINKS.CAREERS,
    NAV_LINKS.FAQ,
    NAV_LINKS.REQUEST_QUOTE,
    NAV_LINKS.CONTACT,
    NAV_LINKS.TEAM_PORTAL,
  ];

  const NavItem: React.FC<{
    link: (typeof NAV_LINKS)[keyof typeof NAV_LINKS];
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
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/logo/Cyber Space-FF.svg"
                alt="Cyber Space Buddy"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
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
            <ThemeToggleButton />
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <ThemeToggleButton />
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="ml-2 bg-white dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-gray-800 shadow-lg z-40"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavLinks.map(
              (link) =>
                link && (
                  <NavItem
                    key={link.name}
                    link={link}
                    onClick={() => setIsMobileMenuOpen(false)}
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
