import React from "react";

interface IconProps {
  className?: string;
}

export const BriefcaseIcon: React.FC<IconProps> = ({
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
      d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6.075A2.25 2.25 0 015.25 3.825H12m8.25 10.325V6.075a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v12.15A2.25 2.25 0 005.25 20.55h12a2.25 2.25 0 002.25-2.25V14.15z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.062V3.825m0 11.237V3.825m0 11.237a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V3.825M12 15.062a.75.75 0 00.75.75h3.75a.75.75 0 00.75-.75V3.825M12 3.825H9.75v11.237H12M12 3.825h2.25v11.237H12"
    />
  </svg>
);
