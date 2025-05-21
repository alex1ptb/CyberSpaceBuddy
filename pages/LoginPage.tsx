import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { UserCircleIcon } from "../components/icons/UserCircleIcon";
import { LockClosedIcon } from "../components/icons/LockClosedIcon";
import { NAV_LINKS, APP_NAME, SERVICES_DATA } from "../constants";
import { DocumentTextIcon } from "../components/icons/DocumentTextIcon";
import { BriefcaseIcon } from "../components/icons/BriefcaseIcon";
import { CreditCardIcon } from "../components/icons/CreditCardIcon";
import { LightBulbIcon } from "../components/icons/LightBulbIcon";
import { ChatBubbleIcon } from "../components/icons/ChatBubbleIcon";
import { ExternalLinkIcon } from "../components/icons/ExternalLinkIcon";
import { ClipboardListIcon } from "../components/icons/ClipboardListIcon";
import { CalendarDaysIcon } from "../components/icons/CalendarDaysIcon";
import { LifebuoyIcon } from "../components/icons/LifebuoyIcon";
import KanbanBoard from "../components/KanbanBoard";
import ProjectTimeline from "../components/ProjectTimeline";
import NewServiceRequestModal from "../components/NewServiceRequestModal";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import NotificationBell from "../components/NotificationBell";
import MessageItem from "../components/MessageItem";
import MessageInput from "../components/MessageInput";
import { ChatBubbleLeftRightIcon } from "../components/icons/ChatBubbleLeftRightIcon";
// Fix: Import Project, Message, Notification, Task, Milestone interfaces from types.ts
import { Project, Message, Notification, Task, Milestone } from "../types";
// Fix: mockClientData has been moved to constants.ts, so it will be available via constants import if needed by other parts of the app. This page will use a prop or context if it needs to display this data from a central source. For now, we assume it's fetched or part of a larger state. The existing code structure suggests it was defining its own mock data. For this fix, we'll re-add it here for now as it's used heavily on this page. If it's meant to be global, it would come from constants.
// For the purpose of this fix, to keep LoginPage working with its current logic and avoid larger refactoring, we are re-instating a local mockClientData.
// The error specified 'mockClientData' was not exported from 'constants', so it means another file (TeamPortalPage) was trying to import it from constants.
// That part is fixed by moving mockClientData to constants.ts. This file (LoginPage) originally defined it.
// To keep LoginPage self-contained with its mock data for its own rendering:
const mockClientData: {
  companyName: string;
  clientEmail: string;
  activeProjects: Project[];
  recentInvoices: {
    id: string;
    amount: string;
    status: string;
    dueDate: string;
    link: string;
  }[];
  messages: Message[];
  notifications: Notification[];
} = {
  companyName: "Example Corp Inc.",
  clientEmail: "client@examplecorp.com",
  activeProjects: [
    {
      id: 1,
      name: "SEO Overhaul for example.com",
      status: "In Progress",
      link: "#",
      fullDescription:
        "A comprehensive SEO strategy implementation including keyword research, on-page optimization, technical SEO audit, content creation, and link building initiatives to significantly improve organic search rankings and drive qualified traffic for example.com.",
      projectManager: "Alice Wonderland",
      startDate: "2024-07-01",
      expectedEndDate: "2024-10-31",
      tasks: [
        {
          id: "task-1",
          name: "Keyword Research & Analysis",
          status: "Completed",
          assignee: "Alice",
        },
        {
          id: "task-2",
          name: "On-Page Optimization (Meta, Headers, Content)",
          status: "In Progress",
          assignee: "Bob",
        },
        {
          id: "task-3",
          name: "Technical SEO Audit & Fixes",
          status: "In Progress",
          assignee: "Alice",
        },
        {
          id: "task-4",
          name: "Content Plan & Brief Creation (5 Articles)",
          status: "To Do",
          assignee: "Charlie",
        },
        {
          id: "task-5",
          name: "Initial Link Building Outreach",
          status: "To Do",
        },
      ],
      milestones: [
        {
          id: "m1-1",
          name: "Project Kick-off & Initial Audit",
          targetDate: "2024-07-15",
          status: "Completed",
        },
        {
          id: "m1-2",
          name: "Keyword Strategy Finalized & Approved",
          targetDate: "2024-07-30",
          status: "Completed",
        },
        {
          id: "m1-3",
          name: "Core On-Page Implementation Complete",
          targetDate: "2024-08-25",
          status: "In Progress",
        },
        {
          id: "m1-4",
          name: "Content Rollout - Phase 1 (2 Articles)",
          targetDate: "2024-09-15",
          status: "Pending",
        },
        {
          id: "m1-5",
          name: "Project Review & Reporting - Month 1",
          targetDate: "2024-09-30",
          status: "Pending",
        },
      ],
    },
    {
      id: 2,
      name: "Custom Sales Dashboard Development",
      status: "Awaiting Feedback",
      link: "#",
      fullDescription:
        "Development of a custom web-based sales dashboard to provide real-time insights into sales performance, key metrics, and trends. Includes integration with existing CRM and sales data sources.",
      projectManager: "Bob The Builder",
      startDate: "2024-08-01",
      expectedEndDate: "2024-11-15",
      tasks: [
        {
          id: "task-6",
          name: "Detailed Requirements Gathering & Sign-off",
          status: "Completed",
        },
        {
          id: "task-7",
          name: "UI/UX Design Mockups & Prototyping",
          status: "Completed",
        },
        {
          id: "task-8",
          name: "Backend API Development (Data Aggregation)",
          status: "In Progress",
          assignee: "David",
        },
        {
          id: "task-9",
          name: "Frontend Dashboard Implementation (Charts, Tables)",
          status: "To Do",
          assignee: "Eve",
        },
        {
          id: "task-10",
          name: "Client UAT & Feedback Collection",
          status: "To Do",
        },
      ],
      milestones: [
        {
          id: "m2-1",
          name: "Design & User Stories Approved",
          targetDate: "2024-08-10",
          status: "Completed",
        },
        {
          id: "m2-2",
          name: "Development Sprint 1 (Backend Core)",
          targetDate: "2024-08-30",
          status: "In Progress",
        },
        {
          id: "m2-3",
          name: "Alpha Version Release for Internal Review",
          targetDate: "2024-09-20",
          status: "Pending",
        },
        {
          id: "m2-4",
          name: "Beta Version for Client UAT",
          targetDate: "2024-10-15",
          status: "Pending",
        },
      ],
    },
  ],
  recentInvoices: [
    {
      id: "INV-001",
      amount: "$1,200.00",
      status: "Paid",
      dueDate: "2024-07-15",
      link: NAV_LINKS.PAY_INVOICE.path,
    },
    {
      id: "INV-002",
      amount: "$850.00",
      status: "Due Soon",
      dueDate: "2024-08-01",
      link: NAV_LINKS.PAY_INVOICE.path,
    },
  ],
  messages: [
    {
      id: "msg1",
      sender: "Cyberspace Buddy Team",
      text: "Welcome to your client portal! How can we help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "msg2",
      sender: "Client",
      text: "Just checking in on Project X.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "msg3",
      sender: "Cyberspace Buddy Team",
      text: "Project X is on track. We just updated the timeline.",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      isReadByClient: false,
    },
  ],
  notifications: [
    {
      id: "notif1",
      text: "Invoice INV-002 is due soon.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      isRead: false,
      link: NAV_LINKS.PAY_INVOICE.path,
    },
    {
      id: "notif2",
      text: 'Task "Keyword Research" for SEO Overhaul completed.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: false,
      link: "#",
    },
    {
      id: "notif3",
      text: "New message from Cyberspace Buddy Team.",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      isRead: true,
      link: "#" /* could link to messages section */,
    },
  ],
};

const ClientPortalPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);
  const [newServiceError, setNewServiceError] = useState<string | null>(null);
  const [newServiceSuccess, setNewServiceSuccess] = useState<string | null>(
    null
  );

  const [isProjectDetailsModalOpen, setIsProjectDetailsModalOpen] =
    useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] =
    useState<Project | null>(null);

  // State for Messaging
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [showMessagesSection, setShowMessagesSection] = useState(false);

  // State for Notifications
  const [currentNotifications, setCurrentNotifications] = useState<
    Notification[]
  >([]);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      if (!selectedProjectId && mockClientData.activeProjects.length > 0) {
        setSelectedProjectId(mockClientData.activeProjects[0].id);
      }
      setCurrentMessages(mockClientData.messages);
      setCurrentNotifications(mockClientData.notifications);
    }
  }, [isLoggedIn, selectedProjectId]);

  const selectedProjectForDisplay =
    mockClientData.activeProjects.find((p) => p.id === selectedProjectId) ||
    (mockClientData.activeProjects.length > 0
      ? mockClientData.activeProjects[0]
      : null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1000);
    } else {
      alert("Please enter email and password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setSelectedProjectId(null);
    setIsNewServiceModalOpen(false);
    setIsProjectDetailsModalOpen(false);
    setSelectedProjectForModal(null);
    setCurrentMessages([]);
    setCurrentNotifications([]);
    setIsNotificationDropdownOpen(false);
    setShowMessagesSection(false);
    navigate(NAV_LINKS.CLIENT_PORTAL.path);
  };

  const handleOpenNewServiceModal = () => {
    setNewServiceError(null);
    setNewServiceSuccess(null);
    setIsNewServiceModalOpen(true);
  };

  const handleCloseNewServiceModal = () => setIsNewServiceModalOpen(false);

  const handleNewServiceSubmit = async (
    services: string[],
    description: string
  ) => {
    console.log("New Service Request from Client:", mockClientData.companyName);
    console.log("Services:", services);
    console.log("Description:", description);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setNewServiceSuccess(
      "Your new service request has been submitted! We'll be in touch shortly."
    );
    setTimeout(() => {
      handleCloseNewServiceModal();
      setNewServiceSuccess(null); // Clear success message after modal closes or timeout
    }, 3000);
    return true;
  };

  const handleOpenProjectDetailsModal = (project: Project) => {
    setSelectedProjectForModal(project);
    setIsProjectDetailsModalOpen(true);
    if (selectedProjectId !== project.id) {
      setSelectedProjectId(project.id);
    }
  };
  const handleCloseProjectDetailsModal = () => {
    setIsProjectDetailsModalOpen(false);
  };

  const handleSendMessage = () => {
    if (!newMessageText.trim()) return;
    const clientMessage: Message = {
      id: `msg${Date.now()}`,
      sender: "Client",
      text: newMessageText,
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, clientMessage]);
    setNewMessageText("");
    setTimeout(handleMockTeamReply, 2000);
  };

  const handleMockTeamReply = () => {
    const teamReply: Message = {
      id: `msg${Date.now()}`,
      sender: "Cyberspace Buddy Team",
      text: "Thanks for your message! We received it and will get back to you soon.",
      timestamp: new Date(),
      isReadByClient: false,
    };
    setCurrentMessages((prev) => [...prev, teamReply]);
    const newMsgNotification: Notification = {
      id: `notif-msg-${Date.now()}`,
      text: `New message from Cyberspace Buddy Team.`,
      timestamp: new Date(),
      isRead: false,
      link: "#messages",
    };
    setCurrentNotifications((prev) => [
      newMsgNotification,
      ...prev.filter((n) => n.id !== newMsgNotification.id),
    ]);
  };

  const toggleMessagesSection = () => {
    setShowMessagesSection((prev) => !prev);
    if (!showMessagesSection) {
      setCurrentMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.sender === "Cyberspace Buddy Team"
            ? { ...msg, isReadByClient: true }
            : msg
        )
      );
    }
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
  };

  const handleMarkNotificationAsRead = (id: string) => {
    setCurrentNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setCurrentNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <PageTitle
          title="Client Portal Login"
          Icon={UserCircleIcon}
          subtitle={`Access your ${APP_NAME} account.`}
        />
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email_client_portal"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email_client_portal"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password_client_portal"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password_client_portal"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your password"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="remember-me-client"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me-client"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <LockClosedIcon className="w-5 h-5 mr-2" />
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="mt-6 text-center text-sm text-gray-600">
            New client?{" "}
            <Link
              to={NAV_LINKS.REQUEST_QUOTE.path}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Request a consultation
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-200 pb-4 mb-4">
        {/* Adjust PageTitle for responsiveness */}
        <div className="mb-4 sm:mb-0">
          <div className="flex items-center mb-1">
            {UserCircleIcon && (
              <UserCircleIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-2 sm:mr-3" />
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Welcome, {mockClientData.companyName}!
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Your client dashboard for projects, billing, and support.
          </p>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 self-start sm:self-center">
          <NotificationBell
            notifications={currentNotifications}
            isOpen={isNotificationDropdownOpen}
            onToggle={toggleNotificationDropdown}
            onMarkAsRead={handleMarkNotificationAsRead}
            onMarkAllAsRead={handleMarkAllNotificationsAsRead}
          />
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-gray-500" />
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <button
          onClick={handleOpenNewServiceModal}
          className="block p-4 sm:p-6 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-md transition-all transform hover:scale-105 text-left"
        >
          <div className="flex items-center text-blue-700">
            <LightBulbIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                Request New Service
              </h3>
              <p className="text-xs sm:text-sm text-blue-600">
                Start a new project.
              </p>
            </div>
          </div>
        </button>
        <Link
          to={NAV_LINKS.PAY_INVOICE.path}
          className="block p-4 sm:p-6 bg-green-50 hover:bg-green-100 rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          <div className="flex items-center text-green-700">
            <CreditCardIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                Manage Billing
              </h3>
              <p className="text-xs sm:text-sm text-green-600">
                View & pay invoices.
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={NAV_LINKS.SUBMIT_TICKET.path}
          className="block p-4 sm:p-6 bg-red-50 hover:bg-red-100 rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          <div className="flex items-center text-red-700">
            <LifebuoyIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                Submit Support Ticket
              </h3>
              <p className="text-xs sm:text-sm text-red-600">
                Report an issue.
              </p>
            </div>
          </div>
        </Link>
        <button
          onClick={toggleMessagesSection}
          className="block p-4 sm:p-6 bg-purple-50 hover:bg-purple-100 rounded-lg shadow-md transition-all transform hover:scale-105 text-left"
        >
          <div className="flex items-center text-purple-700">
            <ChatBubbleLeftRightIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                Secure Messages
              </h3>
              <p className="text-xs sm:text-sm text-purple-600">
                {showMessagesSection ? "Hide Messages" : "View Messages"}
                {!showMessagesSection &&
                  currentMessages.some(
                    (msg) =>
                      msg.sender === "Cyberspace Buddy Team" &&
                      !msg.isReadByClient
                  ) && (
                    <span className="ml-1 sm:ml-2 inline-flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      NEW
                    </span>
                  )}
              </p>
            </div>
          </div>
        </button>
      </div>

      {showMessagesSection && (
        <div
          id="messages"
          className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 text-purple-600" />
            Secure Message Center
          </h2>
          <div className="max-h-80 sm:max-h-96 overflow-y-auto space-y-3 sm:space-y-4 mb-4 p-2 sm:p-3 border rounded-md bg-white">
            {currentMessages.length > 0 ? (
              currentMessages.map((msg) => (
                <MessageItem key={msg.id} message={msg} />
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                No messages yet. Start a conversation!
              </p>
            )}
          </div>
          <MessageInput
            value={newMessageText}
            onChange={(e) => setNewMessageText(e.target.value)}
            onSend={handleSendMessage}
          />
        </div>
      )}

      {mockClientData.activeProjects.length > 1 && (
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow-inner">
          <label
            htmlFor="projectSelector"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Currently Viewing Details For:
          </label>
          <select
            id="projectSelector"
            value={selectedProjectId || ""}
            onChange={(e) => {
              const newProjectId = Number(e.target.value);
              setSelectedProjectId(newProjectId);
            }}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {mockClientData.activeProjects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <BriefcaseIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 text-blue-600" />
          All Active Projects
        </h2>
        {mockClientData.activeProjects.length > 0 ? (
          <ul className="space-y-3">
            {mockClientData.activeProjects.map((project) => (
              <li
                key={project.id}
                className={`p-3 sm:p-4 bg-white rounded-md shadow hover:shadow-lg transition-all cursor-pointer border-l-4 ${
                  selectedProjectId === project.id
                    ? "border-blue-500 ring-1 ring-blue-500"
                    : "border-transparent hover:border-blue-300"
                }`}
                onClick={() => handleOpenProjectDetailsModal(project)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleOpenProjectDetailsModal(project)
                }
              >
                <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                  {project.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    project.status === "In Progress"
                      ? "text-yellow-600"
                      : project.status === "Completed"
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {project.status}
                </p>
                <button
                  className="text-xs text-blue-500 hover:underline mt-1"
                  aria-label={`View details for project ${project.name}`}
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No active projects at the moment.</p>
        )}
      </div>

      {selectedProjectForDisplay ? (
        <>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <ClipboardListIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 text-purple-600" />
              Project Tasks:{" "}
              <span className="truncate ml-1">
                {selectedProjectForDisplay.name}
              </span>
            </h2>
            {selectedProjectForDisplay.tasks.length > 0 ? (
              <KanbanBoard tasks={selectedProjectForDisplay.tasks} />
            ) : (
              <p className="text-gray-600">
                No tasks defined for this project yet.
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <CalendarDaysIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 text-teal-600" />
              Project Timeline / Milestones:{" "}
              <span className="truncate ml-1">
                {selectedProjectForDisplay.name}
              </span>
            </h2>
            {selectedProjectForDisplay.milestones.length > 0 ? (
              <ProjectTimeline
                milestones={selectedProjectForDisplay.milestones}
              />
            ) : (
              <p className="text-gray-600">
                No milestones defined for this project yet.
              </p>
            )}
          </div>
        </>
      ) : (
        mockClientData.activeProjects.length > 0 && (
          <p className="text-gray-600 text-center py-4">
            Select a project to view its tasks and timeline.
          </p>
        )
      )}

      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <DocumentTextIcon className="w-6 h-6 sm:w-7 sm:h-7 mr-2 text-green-600" />
          Recent Invoices
        </h2>
        {mockClientData.recentInvoices.length > 0 ? (
          <ul className="space-y-3">
            {mockClientData.recentInvoices.map((invoice) => (
              <li
                key={invoice.id}
                className="p-3 sm:p-4 bg-white rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                      {invoice.id} - {invoice.amount}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm ${
                        invoice.status === "Paid"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      Status: {invoice.status} (Due: {invoice.dueDate})
                    </p>
                  </div>
                  <Link
                    to={invoice.link}
                    className={`text-xs sm:text-sm px-3 py-1 rounded-full self-start sm:self-auto ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    }`}
                  >
                    {invoice.status === "Paid" ? "View" : "Pay Now"}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recent invoices.</p>
        )}
        <div className="mt-4">
          <Link
            to={NAV_LINKS.PAY_INVOICE.path}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View Billing History & Pay Invoices &rarr;
          </Link>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Need changes to your account?{" "}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-blue-600 hover:underline"
          >
            My Account Settings (mock)
          </a>
        </p>
      </div>

      {isNewServiceModalOpen && (
        <NewServiceRequestModal
          isOpen={isNewServiceModalOpen}
          onClose={handleCloseNewServiceModal}
          onSubmit={handleNewServiceSubmit}
          clientName={mockClientData.companyName}
          availableServices={SERVICES_DATA}
          error={newServiceError}
          successMessage={newServiceSuccess}
        />
      )}

      {isProjectDetailsModalOpen && selectedProjectForModal && (
        <ProjectDetailsModal
          isOpen={isProjectDetailsModalOpen}
          onClose={handleCloseProjectDetailsModal}
          project={selectedProjectForModal}
        />
      )}
    </div>
  );
};

export default ClientPortalPage;
