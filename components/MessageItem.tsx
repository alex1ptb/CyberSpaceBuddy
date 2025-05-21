import React from "react";
// Fix: Correct import path for Message type from ../types.ts instead of ../pages/LoginPage.tsx.
import { Message } from "../types";

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isClient = message.sender === "Client";
  const unreadTeamMessage =
    message.sender === "Cyberspace Buddy Team" && !message.isReadByClient;

  return (
    <div className={`flex ${isClient ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${
          isClient
            ? "bg-blue-500 text-white rounded-br-none"
            : `bg-gray-200 text-gray-800 rounded-bl-none ${
                unreadTeamMessage ? "border-l-4 border-purple-500" : ""
              }`
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            isClient ? "text-blue-200" : "text-gray-500"
          } text-right`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {unreadTeamMessage && (
            <span className="ml-2 font-semibold">(New)</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
