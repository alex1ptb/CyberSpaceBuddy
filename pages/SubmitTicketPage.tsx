import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { LifebuoyIcon } from "../components/icons/LifebuoyIcon";
import { PaperAirplaneIcon } from "../components/icons/PaperAirplaneIcon";
import LoadingSpinner from "../components/LoadingSpinner";
import { NAV_LINKS } from "../constants";

type PriorityLevel = "Low" | "Medium" | "High" | "Urgent";

interface TicketFormData {
  name: string;
  email: string;
  subject: string;
  associatedProject: string;
  priority: PriorityLevel;
  description: string;
  attachment?: File | null;
}

const SubmitTicketPage: React.FC = () => {
  const [formData, setFormData] = useState<TicketFormData>({
    name: "",
    email: "",
    subject: "",
    associatedProject: "",
    priority: "Medium",
    description: "",
    attachment: null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }));
    } else {
      setFormData((prev) => ({ ...prev, attachment: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.description
    ) {
      setError(
        "Please fill in all required fields: Name, Email, Subject, and Description."
      );
      setIsLoading(false);
      return;
    }

    console.log("Support Ticket Data:", {
      ...formData,
      attachmentName: formData.attachment?.name,
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setSuccessMessage(
      `Thank you, ${formData.name}! Your support ticket (Subject: "${formData.subject}") has been submitted. We will get back to you at ${formData.email} as soon as possible.`
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      associatedProject: "",
      priority: "Medium",
      description: "",
      attachment: null,
    });
    const fileInput = document.getElementById("attachment") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
      <PageTitle
        title="Submit a Support Ticket"
        Icon={LifebuoyIcon}
        subtitle="Experiencing an issue or need help? Fill out the form below."
      />

      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <p className="font-semibold">Ticket Submitted!</p>
          <p>{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name_ticket"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email_ticket"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="subject_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject_ticket"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="associatedProject_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Associated Project/Service (Optional)
          </label>
          <input
            type="text"
            name="associatedProject"
            id="associatedProject_ticket"
            value={formData.associatedProject}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., SEO Campaign, Website Maintenance"
          />
        </div>
        <div>
          <label
            htmlFor="priority_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Priority Level
          </label>
          <select
            name="priority"
            id="priority_ticket"
            value={formData.priority}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="description_ticket"
            className="block text-sm font-medium text-gray-700"
          >
            Detailed Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            id="description_ticket"
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Please describe the issue in detail. Include steps to reproduce if applicable."
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="attachment"
            className="block text-sm font-medium text-gray-700"
          >
            Attachment (Optional)
          </label>
          <input
            type="file"
            name="attachment"
            id="attachment"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500 mt-1">
            Max file size: 5MB. Allowed types: JPG, PNG, PDF, ZIP (Mock
            functionality).
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" />
              <span className="ml-2">Submitting Ticket...</span>
            </>
          ) : (
            <>
              <PaperAirplaneIcon className="w-5 h-5 mr-2" />
              Submit Ticket
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
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Alternatively, you can{" "}
          <Link
            to={NAV_LINKS.CONTACT.path}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            contact us directly
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SubmitTicketPage;
