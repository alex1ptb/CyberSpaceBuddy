import React from "react";
import { CheckIcon } from "./icons/CheckIcon";
import { ArrowPathIcon } from "./icons/ArrowPathIcon";
import { LockClosedIcon } from "./icons/LockClosedIcon";

interface Milestone {
  id: string;
  name: string;
  targetDate: string;
  status: "Pending" | "In Progress" | "Completed" | "Delayed";
}

interface ProjectTimelineItemProps {
  milestone: Milestone;
  isLast: boolean;
}

const getStatusStyles = (status: Milestone["status"]) => {
  switch (status) {
    case "Completed":
      return {
        bgColor: "bg-green-500",
        textColor: "text-green-700",
        borderColor: "border-green-500",
        icon: <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
      };
    case "In Progress":
      return {
        bgColor: "bg-yellow-500",
        textColor: "text-yellow-700",
        borderColor: "border-yellow-500",
        icon: (
          <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-spin-slow" />
        ),
      };
    case "Delayed":
      return {
        bgColor: "bg-red-500",
        textColor: "text-red-700",
        borderColor: "border-red-500",
        icon: <LockClosedIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
      };
    case "Pending":
    default:
      return {
        bgColor: "bg-gray-400",
        textColor: "text-gray-600",
        borderColor: "border-gray-400",
        icon: <LockClosedIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />,
      };
  }
};

const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({
  milestone,
  isLast,
}) => {
  const { bgColor, textColor, borderColor, icon } = getStatusStyles(
    milestone.status
  );

  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-3 sm:mr-4">
        <div
          className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${bgColor} flex items-center justify-center`}
        >
          {icon}
        </div>
        {!isLast && (
          <div
            className={`w-px h-12 sm:h-16 mt-1 ${borderColor} opacity-50`}
          ></div>
        )}
      </div>

      <div
        className={`p-2 sm:p-3 rounded-md shadow-sm border ${borderColor} bg-white w-full`}
      >
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1 sm:mb-0">
          <h4 className="text-sm sm:text-md font-semibold text-gray-800 break-words">
            {milestone.name}
          </h4>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${bgColor} text-white mt-1 sm:mt-0 self-start sm:self-center`}
          >
            {milestone.status}
          </span>
        </div>
        <p className={`text-xs sm:text-sm ${textColor}`}>
          Target Date: {milestone.targetDate}
        </p>
      </div>
    </div>
  );
};

export default ProjectTimelineItem;
