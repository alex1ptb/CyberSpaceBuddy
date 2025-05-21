import React from "react";
import PageTitle from "../components/PageTitle";
import { DocumentTextIcon } from "../components/icons/DocumentTextIcon";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { CreditCardIcon } from "../components/icons/CreditCardIcon";

const PayInvoicePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl text-center">
      <PageTitle
        title="Pay Your Invoice"
        Icon={DocumentTextIcon}
        subtitle="Securely pay your outstanding invoices for Cyberspace Buddy services."
      />

      <div className="my-6 sm:my-8 p-4 sm:p-6 border border-gray-200 rounded-lg">
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_H_H_rgb_pos.png"
          alt="PayPal Logo"
          className="h-10 sm:h-12 md:h-16 mx-auto mb-4 sm:mb-6"
        />
        <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4">
          We use PayPal for secure and easy invoice payments.
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Please have your invoice number ready. Click the button below to
          proceed to PayPal. This is a placeholder for actual PayPal
          integration.
        </p>

        <div className="mb-4">
          <label
            htmlFor="invoiceNumber"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Invoice Number (Optional)
          </label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your invoice number"
          />
        </div>

        <button
          onClick={() =>
            alert(
              "PayPal integration for invoice payment is not yet implemented. This is a placeholder."
            )
          }
          className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out text-base sm:text-lg"
        >
          <CreditCardIcon className="w-5 h-5 mr-2" />
          Proceed with PayPal (Mock)
        </button>
      </div>

      <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
          Questions about your invoice?
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
          Please don't hesitate to contact our support team if you have any
          questions regarding your invoice or payment.
        </p>
        <Link
          to={NAV_LINKS.CONTACT.path}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base"
        >
          Contact Support
        </Link>
      </div>
      <div className="mt-4 sm:mt-6">
        <Link
          to={NAV_LINKS.CLIENT_PORTAL.path}
          className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          &larr; Back to Client Portal
        </Link>
      </div>
    </div>
  );
};

export default PayInvoicePage;
