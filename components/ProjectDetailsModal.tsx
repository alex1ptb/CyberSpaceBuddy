import React from "react";
// Fix: Correct import path for Project type from ../types.ts instead of ../pages/LoginPage.tsx.
import { Project } from "../types";
import { CloseIcon } from "./icons/CloseIcon";
// Corrected import path for icons:
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from "../constants";

const ProjectDetailsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes("completed"))
      return "text-green-600 bg-green-100";
    if (status.toLowerCase().includes("progress"))
      return "text-yellow-600 bg-yellow-100";
    if (
      status.toLowerCase().includes("awaiting") ||
      status.toLowerCase().includes("pending")
    )
      return "text-blue-600 bg-blue-100";
    if (status.toLowerCase().includes("delayed"))
      return "text-red-600 bg-red-100";
    return "text-gray-600 bg-gray-100";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <div className="flex items-center">
            <BriefcaseIcon className="w-7 h-7 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
            <p
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                project.status
              )}`}
            >
              {project.status}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-3 rounded-md">
              {project.fullDescription || "No detailed description available."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                <UserCircleIcon className="w-4 h-4 mr-1 text-gray-400" />{" "}
                Project Manager
              </h3>
              <p className="text-gray-700">{project.projectManager || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-1 text-gray-400" />{" "}
                Start Date
              </h3>
              <p className="text-gray-700">
                {project.startDate
                  ? new Date(project.startDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-1 text-gray-400" />{" "}
                Expected End Date
              </h3>
              <p className="text-gray-700">
                {project.expectedEndDate
                  ? new Date(project.expectedEndDate).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
            {/* ShieldCheckIcon example if used for a specific field - not currently in mock data for this modal
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-1 text-gray-400"/> Security Level
              </h3>
              <p className="text-gray-700">{project.securityLevel || "Standard"}</p>
            </div>
            */}
          </div>

          {/* Tasks and Milestones are viewed on the main dashboard page, so no need to repeat them here unless specifically requested */}
          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Full task list and timeline are available on your main dashboard.
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
