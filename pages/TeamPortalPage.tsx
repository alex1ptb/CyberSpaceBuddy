import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
// Fix: Import LockClosedIcon directly, other icons from constants
import {
  UserCircleIcon,
  BriefcaseIcon,
  LifebuoyIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  UserGroupIcon,
  SparklesIcon,
} from "../constants";
import { LockClosedIcon } from "../components/icons/LockClosedIcon";
// Fix: Import Project, Message, Notification types from ../types
import { Project, Message, Notification } from "../types";
// Fix: mockClientData is now correctly imported from constants
import {
  NAV_LINKS,
  APP_NAME,
  SERVICES_DATA,
  mockClientData as globalMockClientData,
} from "../constants";

// Simplified mock data for team context (can be expanded)
const mockTeamData = {
  teamMemberName: "Alex TeamLead",
  openTicketsCount: 3,
  unreadMessagesCount: 5,
};

// Mock support tickets (could be fetched or managed elsewhere in a real app)
const mockSupportTickets = [
  {
    id: "T001",
    subject: "Login Issue on Portal",
    client: "Example Corp Inc.",
    priority: "High",
    status: "Open",
    lastUpdate: "2024-08-15",
  },
  {
    id: "T002",
    subject: "Question about SEO report",
    client: "Another Client LLC",
    priority: "Medium",
    status: "In Progress",
    lastUpdate: "2024-08-14",
  },
  {
    id: "T003",
    subject: "Billing Inquiry INV-002",
    client: "Example Corp Inc.",
    priority: "Low",
    status: "Open",
    lastUpdate: "2024-08-16",
  },
];

const TeamPortalPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in a real app, this would be an API call
    if (username === "team@cyberspacebuddy.com" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert(
        "Invalid team credentials. Try team@cyberspacebuddy.com and password."
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <PageTitle
          title="Team Portal Login"
          Icon={UserGroupIcon}
          subtitle={`Internal access for ${APP_NAME} staff.`}
        />
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username_team"
              className="block text-sm font-medium text-gray-700"
            >
              Team Username/Email
            </label>
            <div className="mt-1">
              <input
                id="username_team"
                name="username"
                type="email"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="team_member@cyberspacebuddy.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password_team"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password_team"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <LockClosedIcon className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Team Dashboard View
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-200 pb-4 mb-4">
        <PageTitle
          title={`Welcome, ${mockTeamData.teamMemberName}!`}
          subtitle="Team Operations Dashboard"
          Icon={SparklesIcon}
        />
        <button
          onClick={handleLogout}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 bg-blue-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-blue-700 flex items-center">
            <BriefcaseIcon className="w-6 h-6 mr-2" />
            Active Projects
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {globalMockClientData.activeProjects.length}
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-700 flex items-center">
            <LifebuoyIcon className="w-6 h-6 mr-2" />
            Open Support Tickets
          </h3>
          <p className="text-3xl font-bold text-red-600">
            {mockSupportTickets.filter((t) => t.status === "Open").length}
          </p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-700 flex items-center">
            <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2" />
            Unread Client Messages
          </h3>
          <p className="text-3xl font-bold text-purple-600">
            {mockTeamData.unreadMessagesCount}
          </p>
        </div>
      </div>

      {/* Project Management */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <BriefcaseIcon className="w-7 h-7 mr-2 text-blue-600" />
          Client Project Management
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {globalMockClientData.activeProjects.map((project) => (
                <tr key={project.id}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {project.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {project.projectManager.includes("Alice")
                      ? "Example Corp Inc."
                      : "Another Client LLC"}
                  </td>{" "}
                  {/* Simplified client name based on PM */}
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        project.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Manage (Mock)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Client Support Tickets */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <LifebuoyIcon className="w-7 h-7 mr-2 text-red-600" />
          Client Support Tickets
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockSupportTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {ticket.id}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.subject}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.client}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ticket.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : ticket.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ticket.status === "Open"
                          ? "bg-red-100 text-red-800"
                          : ticket.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View/Assign (Mock)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admin Links */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <CogIcon className="w-7 h-7 mr-2 text-gray-600" />
          Admin & Settings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="#"
            className="block p-3 bg-white rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            <UserGroupIcon className="w-6 h-6 mr-2 text-indigo-500 inline-block" />{" "}
            Manage Clients (Mock)
          </Link>
          <Link
            to="#"
            className="block p-3 bg-white rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            <UserGroupIcon className="w-6 h-6 mr-2 text-indigo-500 inline-block" />{" "}
            Manage Team (Mock)
          </Link>
          <Link
            to="#"
            className="block p-3 bg-white rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            <BriefcaseIcon className="w-6 h-6 mr-2 text-indigo-500 inline-block" />{" "}
            Manage Services (Mock)
          </Link>
          <Link
            to="#"
            className="block p-3 bg-white rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            <CogIcon className="w-6 h-6 mr-2 text-indigo-500 inline-block" />{" "}
            System Settings (Mock)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamPortalPage;
