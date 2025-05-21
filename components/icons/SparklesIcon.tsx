import React from "react";

interface IconProps {
  className?: string;
}

export const SparklesIcon: React.FC<IconProps> = ({
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
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188V12.002c0-.383.297-.696.676-.75L18.25 12zm1.5 0L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09L15 18.75l.813-2.846a4.5 4.5 0 013.09-3.09L21.75 12zm-3.282-3.052L15 5.25l.813 2.846a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09L15 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L8.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L15 5.25z"
    />
  </svg>
);
