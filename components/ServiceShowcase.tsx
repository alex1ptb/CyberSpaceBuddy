import React from "react";
import { Link } from "react-router-dom";
import { SERVICES_DATA, NAV_LINKS } from "../constants";
import FeatureCard from "./FeatureCard";
import { ArrowPathIcon } from "./icons/ArrowPathIcon";

const ServiceShowcase: React.FC = () => {
  const displayedServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transform Your Business with Our Digital Expertise
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO and Social Media Growth to Custom Automations and App
            Development, discover how we can help your business thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service) => (
            <FeatureCard
              key={service.id}
              title={service.title}
              description={service.description}
              IconComponent={service.icon}
              imageUrl={service.image}
            />
          ))}
        </div>
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to={NAV_LINKS.SERVICES.path}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <ArrowPathIcon className="w-5 h-5 mr-2" />
            Explore All Our Digital Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
