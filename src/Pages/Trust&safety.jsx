import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full max-w-2xl text-left">
      <h2 className="text-xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const TrustAndSafety = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-black">Trust</span>{' '}
          <span className="text-orange-700">and Safety</span>
        </h1>
      </div>

      {/* Policy Sections */}
      <div className="flex flex-col items-center w-full">
        <PolicySection
          title="1. Our Commitment"
          content="We are committed to creating a safe, secure, and reliable environment for all our guests and hosts. We take proactive steps to ensure that every booking experience is trustworthy and transparent."
        />
        <PolicySection
          title="2. Guest Verification"
          content="We verify the identity of our guests through multiple layers of security checks to build a safe community and protect our hosts and properties."
        />
        <PolicySection
          title="3. Host Standards"
          content="All hosts must adhere to strict quality, safety, and hospitality standards to maintain a trusted experience for guests. We regularly review listings for accuracy and quality."
        />
        <PolicySection
          title="4. Safety Measures"
          content="Emergency contact information, safety instructions, and property safety features like smoke detectors are required for every listing to ensure guest security."
        />
        <PolicySection
          title="5. Reporting Issues"
          content="If any guest or host encounters unsafe conditions or suspicious activity, we encourage immediate reporting. Our dedicated Trust & Safety team responds swiftly to investigate and take action."
        />
        <PolicySection
          title="6. Continuous Improvement"
          content="We continuously update our trust and safety practices based on feedback, new technologies, and evolving standards to offer the highest levels of protection for our community."
        />
      </div>
    </div>
  );
};

export default TrustAndSafety;
