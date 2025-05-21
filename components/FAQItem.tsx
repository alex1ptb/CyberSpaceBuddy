import React, { useState } from "react";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { ChevronUpIcon } from "./icons/ChevronUpIcon";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-start justify-between text-left text-gray-700 group"
        >
          <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {question}
          </span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <ChevronUpIcon className="h-6 w-6 text-blue-600" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-600 leading-relaxed">{answer}</p>
        </dd>
      )}
    </div>
  );
};

export default FAQItem;
