import React from "react";

interface IconProps {
  className?: string;
}

export const CogIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.036-7.026A7.5 7.5 0 004.5 12v0A7.5 7.5 0 0019.5 12v0a7.5 7.5 0 00-15.036-7.026zM6.343 17.657l-1.414-1.414M17.657 6.343l-1.414-1.414m0 11.314l1.414 1.414m-11.314 0l1.414 1.414M12 6.75v.007v-.007M12 12.75v.007v-.007m0 4.5v.007v-.007M12 9.75A2.25 2.25 0 0114.25 12A2.25 2.25 0 0112 14.25A2.25 2.25 0 019.75 12A2.25 2.25 0 0112 9.75z"
    />
  </svg>
);
