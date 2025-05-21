import React from "react";

interface IconProps {
  className?: string;
}

export const LightBulbIcon: React.FC<IconProps> = ({
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
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a12.059 12.059 0 01-4.5 0M17.25 8.25A4.5 4.5 0 0012 3.75a4.5 4.5 0 00-5.25 4.5H17.25z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V18.75zm0 0v-5.25"
    />
  </svg>
);
