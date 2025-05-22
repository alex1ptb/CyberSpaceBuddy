import React from "react";
import PageTitle from "../components/PageTitle";
import { PaperAirplaneIcon } from "../components/icons/PaperAirplaneIcon";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl">
      <PageTitle
        title="Contact Us"
        Icon={PaperAirplaneIcon}
        subtitle="We'd love to hear from you! Send us a message or find our contact details below."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="max-w-lg w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name_contact"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name_contact"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email_contact"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email_contact"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject_contact"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject_contact"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message_contact"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message_contact"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600">
              As a digital-first company, we primarily operate online. Please
              reach out to us via email or phone for any inquiries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Email Us</h3>
            <a
              href="mailto:support@cyberspacebuddy.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              support@cyberspacebuddy.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Call Us</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Business Hours
            </h3>
            <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM (EST)</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
