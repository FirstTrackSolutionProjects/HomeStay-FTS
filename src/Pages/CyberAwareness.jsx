import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-2xl text-left">
      <h2 className="text-xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const CyberSecurityAwareness = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-black">Cyber Security</span>{' '}
          <span className="text-orange-700">Awareness</span>
        </h1>
      </div>

      {/* Awareness Sections */}
      <div className="flex flex-col items-center w-full">
        <PolicySection
          title="1. Importance of Cyber Security"
          content="Cyber security is essential to protect your personal information, prevent identity theft, and secure online transactions. Staying vigilant helps protect both individuals and businesses from cyber threats."
        />
        <PolicySection
          title="2. Recognizing Phishing Attempts"
          content="Be cautious of unexpected emails, links, and attachments. Always verify the sender’s information and avoid clicking suspicious links or sharing personal information."
        />
        <PolicySection
          title="3. Strong Password Practices"
          content="Use complex, unique passwords for different accounts. Consider using a reputable password manager to store and generate strong passwords securely."
        />
        <PolicySection
          title="4. Device Security"
          content="Keep your devices updated with the latest security patches. Install trusted antivirus software and enable two-factor authentication (2FA) wherever possible."
        />
        <PolicySection
          title="5. Safe Browsing Habits"
          content="Only visit secure websites (look for HTTPS), avoid downloading files from untrusted sources, and be mindful of public Wi-Fi networks when accessing sensitive information."
        />
        <PolicySection
          title="6. Reporting Cyber Threats"
          content="If you encounter suspicious activity, immediately report it to the concerned authority or cyber security team. Prompt reporting helps prevent potential breaches."
        />
      </div>
    </div>
  );
};

export default CyberSecurityAwareness;
