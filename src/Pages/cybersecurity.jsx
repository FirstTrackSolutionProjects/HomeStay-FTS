import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-2xl text-left">
      <h2 className="text-xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const CyberSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-black">Cyber</span>{' '}
          <span className="text-orange-700">Security</span>
        </h1>
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
