import React from "react";

interface IconProps {
  className?: string;
}

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({
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
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a4.011 4.011 0 00-1.093-.471L12 17.25H8.25c-1.136 0-2.1-.847-2.193-1.98A15.318 15.318 0 016 14.25H3.75V9.75S3.75 9 4.5 9H8.25c1.136 0 2.1.847 2.193 1.98.066.502.156.986.275 1.447l.002.002.002.002.002.002.002.002c.01.042.02.083.03.124.02.082.04.164.06.245.04.166.08.332.13.495.07.232.15.46.24.682.1.24.21.473.33.698.13.24.27.472.42.693l.005.007.005.007.005.007.005.006.005.007c.16.228.33.447.51.657.18.21.38.408.59.59L15.75 15h.038c.313 0 .618-.103.86-.287L20.25 12V8.511zM8.25 9H4.5M3.75 14.25H6m10.5-2.25L15.75 9"
    />
  </svg>
);
