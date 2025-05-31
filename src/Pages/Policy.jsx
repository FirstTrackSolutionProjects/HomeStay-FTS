import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full max-w-2xl text-left">
      <h2 className="text-xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

const Policy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold">
          <span className="text-black">Privacy</span>{' '}
          <span className="text-orange-700">Policy</span>
        </h1>
      </div>

      {/* Policy Sections */}
      <div className="flex flex-col items-center w-full">
        <PolicySection
          title="1. Information We Collect"
          content="We collect personal information like your name, contact details, and payment information when you book a stay. We also collect non-personal data like browser type and device information."
        />
        <PolicySection
          title="2. How We Use Your Information"
          content="Your information is used to manage bookings, process payments, improve services, and fulfill legal requirements. We do not sell or rent your information to third parties."
        />
        <PolicySection
          title="3. Data Security"
          content="We implement strong security measures to protect your data. However, no internet transmission or storage system can be guaranteed to be 100% secure."
        />
        <PolicySection
          title="4. Your Rights"
          content="You can request access, correction, or deletion of your personal information by contacting us directly."
        />
        <PolicySection
          title="5. Changes to This Policy"
          content="We may update this policy occasionally. Any changes will be posted on this page with an updated date."
        />
       <PolicySection
          title="6. Contact Us"
          content={
            <>
            For questions about this policy, please contact us at:{" "}
            <strong>support@firsthomestay.site</strong> or{" "}
            <strong>+91-9040170727</strong>.
            </>
          } 
          />

      </div>
    </div>
  );
};

export default Policy;
