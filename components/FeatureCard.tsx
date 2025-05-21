import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  IconComponent?: React.ComponentType<{ className?: string }>;
  imageUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  IconComponent,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out h-full flex flex-col">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          {IconComponent && (
            <IconComponent className="h-10 w-10 text-blue-600 mr-4" />
          )}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
