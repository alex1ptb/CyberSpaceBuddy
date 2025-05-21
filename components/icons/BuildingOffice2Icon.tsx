import React from "react";

interface IconProps {
  className?: string;
}

export const BuildingOffice2Icon: React.FC<IconProps> = ({
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
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3.75h.168a2.25 2.25 0 000-4.5h-.168a2.25 2.25 0 000 4.5zM4.5 16.5M19.5 16.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l6.28-2.285A48.354 48.354 0 0112 9.083a48.354 48.354 0 013.47-1.368L21.75 12M2.25 12v6.75a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V12m-19.5 0v-2.625c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125V12"
    />
  </svg>
);
