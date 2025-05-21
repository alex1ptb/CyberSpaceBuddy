import React from "react";

interface IconProps {
  className?: string;
}

export const ClipboardListIcon: React.FC<IconProps> = ({
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
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 2.25H9.75M15.75 2.25v3.375c0 .621.504 1.125 1.125 1.125h3.375M9 3.75H6.75A2.25 2.25 0 004.5 6v12.75c0 1.24 1.01 2.25 2.25 2.25h10.5c1.24 0 2.25-1.01 2.25-2.25V10.5M9 3.75a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 3.75M9 3.75V1.5"
    />
  </svg>
);
