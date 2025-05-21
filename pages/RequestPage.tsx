import React, { useState, useCallback } from "react";
import PageTitle from "../components/PageTitle";
import { LightBulbIcon } from "../components/icons/LightBulbIcon";
import { PaperAirplaneIcon } from "../components/icons/PaperAirplaneIcon";
import { SERVICES_DATA } from "../constants";
import LoadingSpinner from "../components/LoadingSpinner";

const RequestQuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    services: [] as string[],
    projectDescription: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentServices = prev.services;
      if (checked) {
        return { ...prev, services: [...currentServices, value] };
      } else {
        return {
          ...prev,
          services: currentServices.filter((service) => service !== value),
        };
      }
    });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
      setSuccessMessage(null);

      if (
        !formData.fullName ||
        !formData.companyName ||
        !formData.workEmail ||
        !formData.projectDescription ||
        formData.services.length === 0
      ) {
        setError(
          "Please fill in all required fields and select at least one service of interest."
        );
        setIsLoading(false);
        return;
      }

      console.log("Consultation Request Data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsLoading(false);
      setSuccessMessage(
        "Thank you for your consultation request! We will review your information and get back to you within 1-2 business days to discuss your digital solution needs."
      );
      setFormData({
        fullName: "",
        companyName: "",
        workEmail: "",
        phoneNumber: "",
        services: [],
        projectDescription: "",
      });
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach(
          (checkbox) => ((checkbox as HTMLInputElement).checked = false)
        );
    },
    [formData]
  );

  const servicesForCheckbox = SERVICES_DATA.filter(
    (service) =>
      service.id !== "digital-strategy-consultation" &&
      service.id !== "automation-consultation"
  );

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
      <PageTitle
        title="Request a Consultation"
        Icon={LightBulbIcon}
        subtitle="Let's discuss your business. Tell us about your challenges and goals, and we'll explore how our digital solutions can help."
      />

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <p className="font-semibold">Request Sent!</p>
          <p>{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="workEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="workEmail"
            id="workEmail"
            value={formData.workEmail}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Which Services Are You Interested In?{" "}
            <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Select all that apply. We can discuss specifics during the
            consultation.
          </p>
          <div className="mt-2 space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {servicesForCheckbox.map((service) => (
              <div key={service.id} className="flex items-center">
                <input
                  id={`service-${service.id}`}
                  name="services"
                  type="checkbox"
                  value={service.title}
                  checked={formData.services.includes(service.title)}
                  onChange={handleServiceChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`service-${service.id}`}
                  className="ml-2 block text-sm text-gray-900"
                >
                  {service.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Tell us about your project, goals, or current challenges{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows={5}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., Improve search engine ranking, grow social media engagement, automate internal reporting, develop a custom client portal, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" />
              <span className="ml-2">Submitting Request...</span>
            </>
          ) : (
            <>
              <PaperAirplaneIcon className="w-5 h-5 mr-2" />
              Submit Consultation Request
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default RequestQuotePage;
