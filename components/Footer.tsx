import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../constants";
import { NavLinkItem, SocialLink } from "../types";

// Placeholder for SOCIAL_LINKS if not yet defined in constants
// If SOCIAL_LINKS is undefined in constants.ts, this will default to an empty array.
const currentSocialLinks: SocialLink[] = SOCIAL_LINKS || [];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Convert FOOTER_LINKS object into an array of sections for easier mapping
  const footerSections = Object.keys(FOOTER_LINKS).map((key) => {
    // Type assertion for individual sections if necessary, or ensure FOOTER_LINKS has a more specific type
    const sectionLinks = (FOOTER_LINKS as any)[key] as NavLinkItem[];
    return {
      title: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(), // Capitalize title from key
      links: sectionLinks,
    };
  });

  return (
    <footer className="bg-gray-200 dark:bg-secondary-end border-t border-gray-300 dark:border-secondary-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/logo/Cyber Space-FF.svg"
                alt="Cyber Space Buddy"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your trusted partner for digital transformation and online
              success.
            </p>
            {/* Social Links */}
            {currentSocialLinks.length > 0 && (
              <div className="flex space-x-4">
                {currentSocialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-start dark:text-gray-400 dark:hover:text-primary-start"
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Ensure social.icon is a valid component */}
                    {social.icon && (
                      <social.icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-base text-gray-600 hover:text-primary-start dark:text-gray-300 dark:hover:text-primary-start"
                      >
                        {item.name}{" "}
                        {/* Use item.name which is the original property */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-secondary-start pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 xl:text-center">
            &copy; {currentYear} Cyber Space Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
