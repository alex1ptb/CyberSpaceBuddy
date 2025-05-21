import React from "react";

interface IconProps {
  className?: string;
}

export const UserGroupIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
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
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.008M15 15.75a3 3 0 11-6 0 3 3 0 016 0zm6 2.25a8.966 8.966 0 01-5.982 2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0zM21 13.5A11.952 11.952 0 0013.5 6C9.358 6 6 9.358 6 13.5s3.358 7.5 7.5 7.5c2.097 0 3.99-.863 5.403-2.275M3 13.5a8.966 8.966 0 015.982-2.275M6.462 15.056a8.966 8.966 0 01-5.982-2.275"
    />
  </svg>
);
