import React from "react";
import NotificationItem from "./NotificationItem";
// Fix: Correct import path for Notification type from ../types.ts instead of ../pages/LoginPage.tsx.
import { Notification } from "../types";

interface NotificationDropdownProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClose: () => void; // Added for closing dropdown
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClose,
}) => {
  return (
    <div className="absolute right-0 mt-2 w-80 max-w-sm bg-white rounded-md shadow-xl z-20 border border-gray-200">
      <div className="p-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-md font-semibold text-gray-700">Notifications</h3>
        {notifications.some((n) => !n.isRead) && (
          <button
            onClick={() => {
              onMarkAllAsRead();
            }}
            className="text-xs text-blue-600 hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="text-sm text-gray-500 p-4 text-center">
            No new notifications.
          </p>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onMarkAsRead={onMarkAsRead}
            />
          ))
        )}
      </div>
      <div className="p-2 border-t border-gray-200 text-center">
        <button
          onClick={onClose}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
