import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { CreditCardIcon } from "../components/icons/CreditCardIcon";
import { CheckIcon } from "../components/icons/CheckIcon";
import { SERVICE_PACKAGES_DATA, NAV_LINKS } from "../constants";
import { PricingPlan } from "../types";

const ServicePackageCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div
      className={`rounded-xl shadow-lg p-4 sm:p-6 border-2 flex flex-col h-full ${
        plan.isPopular
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-white"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider text-white bg-blue-600">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-4 sm:mb-6 pt-3 sm:pt-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {plan.name}
        </h3>
        <p className="mt-1 sm:mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          {plan.price}
          {plan.price !== "Custom" && plan.frequency && (
            <span className="text-base sm:text-lg font-normal text-gray-500">
              {plan.frequency}
            </span>
          )}
        </p>
        {plan.price === "Custom" && (
          <p className="text-xs sm:text-sm text-gray-500">{plan.frequency}</p>
        )}
      </div>
      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5" />
            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={
          plan.ctaText.toLowerCase().includes("talk to sales") ||
          plan.price === "Custom"
            ? NAV_LINKS.CONTACT.path
            : NAV_LINKS.REQUEST_QUOTE.path
        }
        className={`block w-full text-center py-2.5 sm:py-3 px-4 rounded-md font-medium transition-colors text-sm sm:text-base
                    ${
                      plan.isPopular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-blue-700 hover:bg-gray-200"
                    }`}
      >
        {plan.ctaText}
      </Link>
    </div>
  );
};

const ServicePackagesPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
      <PageTitle
        title="Our Subscription Plans"
        Icon={CreditCardIcon}
        subtitle="Choose a subscription plan that provides ongoing value and support for your digital growth and efficiency."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {SERVICE_PACKAGES_DATA.map((plan) => (
          <div key={plan.id} className="relative">
            <ServicePackageCard plan={plan} />
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 text-center text-gray-600 p-4 sm:p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
          Need a Custom Annual Retainer or Large Project?
        </h3>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
          Our "Business Elite" plan is highly customizable for annual
          commitments. For specific large-scale projects or unique long-term
          needs, we offer tailored solutions. Let's build a plan that perfectly
          fits your enterprise.
        </p>
        <Link
          to={NAV_LINKS.CONTACT.path}
          className="font-medium text-blue-600 hover:text-blue-700 hover:underline text-sm sm:text-base"
        >
          Contact Sales for Custom Solutions &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ServicePackagesPage;
