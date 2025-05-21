import React from "react";
import PageTitle from "../components/PageTitle";
import { BuildingOffice2Icon } from "../components/icons/BuildingOffice2Icon";
import { APP_NAME } from "../constants";

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string; // e.g., Full-time, Contract
  description: string;
}

const mockJobOpenings: JobOpening[] = [
  {
    id: "lead-auto-eng",
    title: "Lead Automation Engineer",
    location: "Remote / Tech City, TC",
    type: "Full-time",
    description: `Seeking an experienced Lead Automation Engineer to design and implement innovative automation solutions for our SMB clients, focusing on Google Workspace and custom workflows.`,
  },
  {
    id: "dm-strategist",
    title: "Digital Marketing Strategist",
    location: "Remote",
    type: "Full-time",
    description: `Join our team as a Digital Marketing Strategist to develop and execute comprehensive SEO and Social Media campaigns that drive growth for our clients.`,
  },
  {
    id: "client-success-mgr",
    title: "Client Success Manager",
    location: "Tech City, TC",
    type: "Full-time",
    description: `We're looking for a proactive Client Success Manager to build strong relationships with our clients, ensuring their satisfaction and success with our digital solutions.`,
  },
];

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl space-y-10 md:space-y-12">
      <PageTitle
        title={`Join Our Team at ${APP_NAME}`}
        Icon={BuildingOffice2Icon}
        subtitle={`We're passionate about helping businesses thrive through innovative digital solutions. Explore opportunities to grow with us.`}
      />

      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-2">
              Innovative Environment
            </h3>
            <p>
              Be at the forefront of digital transformation, working with
              cutting-edge technologies and diverse SMB clients.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-2">
              Growth & Learning
            </h3>
            <p>
              We invest in our team's development with opportunities for
              learning, skill enhancement, and career progression.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-2">
              Collaborative Culture
            </h3>
            <p>
              Join a supportive and collaborative team where your ideas are
              valued, and teamwork is key to our success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-600 mb-2">
              Impactful Work
            </h3>
            <p>
              Make a real difference for small and medium businesses, helping
              them achieve their goals through your expertise.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Open Positions
        </h2>
        {mockJobOpenings.length > 0 ? (
          <div className="space-y-8">
            {mockJobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-1">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-3">
                  <span>📍 {job.location}</span>
                  <span>🕒 {job.type}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <a
                  href={`mailto:careers@cyberspacebuddy.com?subject=Application for ${encodeURIComponent(
                    job.title
                  )} - ${job.id}`}
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            We currently don't have any open positions, but we're always looking
            for talented individuals. Feel free to send your resume to{" "}
            <a
              href="mailto:careers@cyberspacebuddy.com"
              className="text-blue-600 hover:underline"
            >
              careers@cyberspacebuddy.com
            </a>
            .
          </p>
        )}
      </section>

      <section className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-700">
          {APP_NAME} is an equal opportunity employer. We celebrate diversity
          and are committed to creating an inclusive environment for all
          employees.
        </p>
      </section>
    </div>
  );
};

export default CareersPage;
