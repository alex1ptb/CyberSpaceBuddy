import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, Icon }) => {
  return (
    <div className="mb-10 text-center border-b border-gray-200 pb-8">
      <div className="flex items-center justify-center mb-2">
        {Icon && <Icon className="h-10 w-10 text-blue-600 mr-3" />}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="mt-2 text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
