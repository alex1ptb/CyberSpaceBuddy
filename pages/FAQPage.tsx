import React from "react";
import { FAQ_DATA } from "../constants";
import FAQItem from "../components/FAQItem";
import PageTitle from "../components/PageTitle";
import { QuestionMarkCircleIcon } from "../components/icons/QuestionMarkCircleIcon";

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-xl">
      <PageTitle
        title="Digital Solutions FAQs"
        Icon={QuestionMarkCircleIcon}
        subtitle="Answers to common questions about Cyberspace Buddy's SEO, Social Media, Custom Automation, App Development, and Consultation services."
      />
      <dl className="divide-y divide-gray-200">
        {FAQ_DATA.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </dl>
    </div>
  );
};

export default FAQPage;
