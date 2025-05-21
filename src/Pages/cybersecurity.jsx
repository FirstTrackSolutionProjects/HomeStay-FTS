import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-6 mb-6 w-full max-w-3xl text-left border-l-4 border-orange-500">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const CyberSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gradient-to-b from-white to-slate-100">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-gray-900">Cyber</span>{' '}
          <span className="text-orange-600">Security</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          Your safety is our top priority. Here's how we protect your data and keep your online experience secure.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="flex flex-col items-center w-full">
        <PolicySection
          title="1. Data Protection"
          content="We prioritize the protection of your personal and financial data through encryption, secure servers, and advanced cybersecurity protocols."
        />
        <PolicySection
          title="2. Secure Transactions"
          content="All payment transactions are processed through secure and trusted platforms with end-to-end encryption to prevent unauthorized access."
        />
        <PolicySection
          title="3. Threat Monitoring"
          content="Our systems are continuously monitored for suspicious activities, and we employ advanced threat detection tools to proactively respond to potential risks."
        />
        <PolicySection
          title="4. Account Security"
          content="We encourage users to use strong, unique passwords and offer two-factor authentication (2FA) to enhance account protection."
        />
        <PolicySection
          title="5. Incident Response"
          content="In the event of a cybersecurity breach, we have an incident response plan to immediately contain, investigate, and resolve any threats while keeping affected users informed."
        />
        <PolicySection
          title="6. Your Role in Security"
          content="We recommend that users regularly update passwords, avoid sharing login details, and report any suspicious activities immediately to our support team."
        />
      </div>
    </div>
  );
};

export default CyberSecurity;
