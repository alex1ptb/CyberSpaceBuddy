import React from "react";

interface IconProps {
  className?: string;
}

export const LifebuoyIcon: React.FC<IconProps> = ({
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
      d="M12 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5zm0 0L7.807 8.193m4.386-3.693L16.193 8.193m-4.386-3.693V1.5m0 3v4.5m0 0L7.807 11.807m4.386-3.693L16.193 11.807m-4.386-3.693c-1.252 0-2.38.343-3.307.919m6.614 0c.927-.576 2.055-.919 3.307-.919m0 0V1.5m0 3v4.5m0 0L19.5 11.807M4.5 12l3.307 3.693m0-7.386L4.5 12m3.307 3.693L12 19.5m0-4.5l3.693 3.693m-7.386 0L12 19.5m0-4.5l-3.693-3.693m7.386 0L12 4.5"
    />
  </svg>
);
