import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-2xl text-left">
      <h2 className="text-xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const ResponsibleDisclosure = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-black">Responsible</span>{' '}
          <span className="text-orange-700">Disclosure</span>
        </h1>
      </div>

      {/* Disclosure Sections */}
      <div className="flex flex-col items-center w-full">
        <PolicySection
          title="1. Our Commitment"
          content="We are committed to maintaining the security and privacy of our users' data. We value the contributions of security researchers and welcome responsible disclosure of vulnerabilities."
        />
        <PolicySection
          title="2. Reporting Vulnerabilities"
          content="If you discover a security vulnerability, please report it to us promptly by contacting [Insert Security Email Address]. Provide a detailed description so we can quickly reproduce and address the issue."
        />
        <PolicySection
          title="3. Guidelines for Responsible Disclosure"
          content="Do not publicly disclose vulnerabilities before we have had an opportunity to fix them. Avoid exploiting the vulnerability or accessing data beyond what is necessary for demonstration."
        />
        <PolicySection
          title="4. What You Can Expect"
          content="We will acknowledge your report within a reasonable time frame, keep you updated on the progress of fixing the issue, and may recognize your contribution if appropriate."
        />
        <PolicySection
          title="5. Scope"
          content="Our Responsible Disclosure policy covers vulnerabilities related to our websites, applications, and APIs. Issues related to third-party services are not included."
        />
        <PolicySection
          title="6. Thank You"
          content="We appreciate your efforts in making our platform safer. Your contributions help protect our community and enhance overall trust."
        />
      </div>
    </div>
  );
};

export default ResponsibleDisclosure;
