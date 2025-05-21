import React from "react";
import { Link } from "react-router-dom";
// Fix: Correct import path for Notification type from ../types.ts instead of ../pages/LoginPage.tsx.
import { Notification } from "../types";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
}) => {
  const content = (
    <>
      <p
        className={`text-sm ${
          notification.isRead ? "text-gray-600" : "text-gray-800 font-medium"
        }`}
      >
        {notification.text}
      </p>
      <p
        className={`text-xs ${
          notification.isRead ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {new Date(notification.timestamp).toLocaleDateString()} -{" "}
        {new Date(notification.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </>
  );

  const itemClasses = `block px-4 py-3 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 ${
    !notification.isRead ? "bg-blue-50" : "bg-white"
  }`;

  const handleItemClick = () => {
    if (!notification.isRead) {
      onMarkAsRead(notification.id);
    }
    // Navigation will be handled by Link component if link exists
  };

  if (notification.link && notification.link !== "#") {
    return (
      <Link
        to={notification.link}
        className={itemClasses}
        onClick={handleItemClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={itemClasses}
      onClick={handleItemClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && handleItemClick()}
    >
      {content}
      {!notification.isRead && (
        <span
          className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"
          title="Unread"
        ></span>
      )}
    </div>
  );
};

export default NotificationItem;
