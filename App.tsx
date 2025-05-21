import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ClientPortalPage from "./pages/LoginPage";
import RequestQuotePage from "./pages/RequestPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import ServicePackagesPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import PayInvoicePage from "./pages/PaymentPage";
import NotFoundPage from "./pages/NotFoundPage";
import SubmitTicketPage from "./pages/SubmitTicketPage";
import TeamPortalPage from "./pages/TeamPortalPage";
import CareersPage from "./pages/CareersPage"; // New Page
import { NAV_LINKS } from "./constants";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path={NAV_LINKS.CLIENT_PORTAL.path}
              element={<ClientPortalPage />}
            />
            <Route
              path={NAV_LINKS.REQUEST_QUOTE.path}
              element={<RequestQuotePage />}
            />
            <Route path={NAV_LINKS.CONTACT.path} element={<ContactPage />} />
            <Route path={NAV_LINKS.FAQ.path} element={<FAQPage />} />
            <Route
              path={NAV_LINKS.SERVICE_PACKAGES.path}
              element={<ServicePackagesPage />}
            />
            <Route path={NAV_LINKS.SERVICES.path} element={<ServicesPage />} />
            {NAV_LINKS.CAREERS && (
              <Route path={NAV_LINKS.CAREERS.path} element={<CareersPage />} />
            )}{" "}
            {/* New Route */}
            <Route
              path={NAV_LINKS.PAY_INVOICE.path}
              element={<PayInvoicePage />}
            />
            <Route
              path={NAV_LINKS.SUBMIT_TICKET.path}
              element={<SubmitTicketPage />}
            />
            <Route path="/team-admin-portal" element={<TeamPortalPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
