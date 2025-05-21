import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { BriefcaseIcon } from "../components/icons/BriefcaseIcon";
import { SERVICES_DATA, NAV_LINKS } from "../constants";
import { Service } from "../types";
import { LightBulbIcon } from "../components/icons/LightBulbIcon";

const ServiceDetailCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 sm:h-56 object-cover"
        />
      )}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-2 sm:mb-3">
          {service.icon && (
            <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 mr-2 sm:mr-3" />
          )}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow text-sm sm:text-base">
          {service.description}
        </p>
        {service.details && (
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 leading-relaxed">
            {service.details}
          </p>
        )}
        <div className="mt-auto">
          <Link
            to={`${NAV_LINKS.REQUEST_QUOTE.path}?service=${encodeURIComponent(
              service.title
            )}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base"
          >
            Consult Us About This Service{" "}
            <LightBulbIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-10 md:space-y-12">
      <PageTitle
        title="Our Digital Solutions"
        Icon={BriefcaseIcon}
        subtitle="Explore how Cyberspace Buddy leverages SEO, Social Media, Custom Automations, App Development, and AI to create powerful solutions for your SMB."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceDetailCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 md:mt-12 p-6 sm:p-8 bg-blue-600 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your Digital Presence & Efficiency?
        </h2>
        <p className="text-base sm:text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
          Let's discuss your specific business challenges. We'll identify how
          our comprehensive digital solutions can save you time, attract more
          customers, and drive sustainable growth.
        </p>
        <Link
          to={NAV_LINKS.REQUEST_QUOTE.path}
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-md hover:bg-blue-50 transition-colors text-base sm:text-lg shadow-md"
        >
          Request Your Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
