import React, { useState } from "react";
import { Service } from "../types"; // Assuming Service type is in types.ts
import { CloseIcon } from "./icons/CloseIcon";
import { PaperAirplaneIcon } from "./icons/PaperAirplaneIcon";
import LoadingSpinner from "./LoadingSpinner";

interface NewServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    selectedServices: string[],
    description: string
  ) => Promise<boolean>;
  clientName: string;
  availableServices: Service[];
  error: string | null;
  successMessage: string | null;
}

const NewServiceRequestModal: React.FC<NewServiceRequestModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  clientName,
  availableServices,
  error: propError, // Renaming to avoid conflict with local error state
  successMessage: propSuccessMessage, // Renaming
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [localSuccess, setLocalSuccess] = useState<string | null>(null);

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0 || !description.trim()) {
      setLocalError(
        "Please select at least one service and provide a description."
      );
      setLocalSuccess(null);
      return;
    }
    setLocalError(null);
    setLocalSuccess(null);
    setIsLoading(true);

    const success = await onSubmit(selectedServices, description);

    setIsLoading(false);
    if (success) {
      // Success message is handled by the parent component via props
      // Reset form locally if needed after parent signals success
      setSelectedServices([]);
      setDescription("");
    } else {
      // Error message is handled by parent component via props
      // Or set a generic local error if parent doesn't provide one
      if (!propError) {
        setLocalError("Failed to submit request. Please try again.");
      }
    }
  };

  // Use prop messages if available, otherwise local messages
  const displayError = propError || localError;
  const displaySuccess = propSuccessMessage || localSuccess;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Request New Service
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {displaySuccess && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
            {displaySuccess}
          </div>
        )}
        {displayError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
            {displayError}
          </div>
        )}

        {!displaySuccess && ( // Only show form if no success message is active
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">
                Submitting as: <span className="font-medium">{clientName}</span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Services of Interest <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 border rounded-md">
                {availableServices
                  .filter(
                    (service) =>
                      service.id !== "digital-strategy-consultation" &&
                      service.id !== "automation-consultation"
                  )
                  .map((service) => (
                    <div key={service.id} className="flex items-center">
                      <input
                        id={`modal-service-${service.id}`}
                        type="checkbox"
                        value={service.title}
                        checked={selectedServices.includes(service.title)}
                        onChange={handleServiceChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`modal-service-${service.id}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {service.title}
                      </label>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="modal_projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project Description / Requirements{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="modal_projectDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Briefly describe what you're looking to achieve..."
              />
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm flex items-center justify-center transition-colors disabled:bg-gray-400"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Submitting...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4 mr-2" />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewServiceRequestModal;
