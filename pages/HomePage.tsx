import React from "react";
import { Link } from "react-router-dom"; // Import Link
import HeroSection from "../components/HeroSection";
import ServiceShowcase from "../components/ServiceShowcase";
import CallToAction from "../components/CallToAction";
import { FAQ_DATA, NAV_LINKS } from "../constants";
import FAQItem from "../components/FAQItem";
import { QuestionMarkCircleIcon } from "../components/icons/QuestionMarkCircleIcon";

const HomePage: React.FC = () => {
  const displayedFAQs = FAQ_DATA.slice(0, 3); // Displays the first 3 FAQs, which are now more diverse

  return (
    <div className="space-y-16">
      <HeroSection />
      <ServiceShowcase />

      <div className="py-16 bg-white rounded-lg shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <QuestionMarkCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Digital Solutions Questions Answered
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Find information on how Cyberspace Buddy can help your business
              with SEO, Social Media, Automation, App Development, and more.
            </p>
          </div>
          <dl className="space-y-6 divide-y divide-gray-200">
            {displayedFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </dl>
          <div className="mt-10 text-center">
            <Link
              to={NAV_LINKS.FAQ.path}
              className="text-base font-medium text-blue-600 hover:text-blue-500"
            >
              See all FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default HomePage;
