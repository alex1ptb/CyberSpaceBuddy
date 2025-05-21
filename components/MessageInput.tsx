import React from "react";
import { PaperAirplaneIcon } from "./icons/PaperAirplaneIcon";

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex items-center p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
      <textarea
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        rows={1}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
      />
      <button
        onClick={onSend}
        className="ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Send message"
      >
        <PaperAirplaneIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MessageInput;
