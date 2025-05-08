import React from 'react';

const Cancel = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 py-10">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md font-sans">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cancellation & Refund Policy
        </h1>
        <p className="text-gray-700 mb-6 text-justify">
          <span className="font-semibold">First Home Stay</span> values guest satisfaction and aims to provide a transparent and fair cancellation and refund process. By proceeding with a booking, guests agree to the following policy terms:
        </p>

        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li>
            Cancellations are accepted only if requested at least <span className="font-semibold">48 hours</span> before the check-in time. No cancellations will be permitted beyond this period.
          </li>
          <li>
            Cancellations for <span className="font-semibold">non-refundable bookings</span>, flash deals, and promotional packages are not allowed.
          </li>
          <li>
            Same-day bookings (within 24 hours of check-in) are <span className="font-semibold text-red-600">non-cancellable</span> and <span className="font-semibold text-red-600">non-refundable</span>.
          </li>
          <li>
            Refundable cancellations will be processed (after deducting service fees) within <span className="font-semibold">7–10 business days</span>.
          </li>
          <li>
            If the stay is cut short after check-in due to personal reasons, the remaining nights are <span className="font-semibold text-red-600">non-refundable</span>.
          </li>
          <li>
            If there’s a major issue with the listing (e.g., no access, poor hygiene), notify us <span className="font-semibold">within 2 hours of check-in</span> to be eligible for a resolution/refund.
          </li>
          <li>
            Amenities-related complaints will be resolved quickly, but refunds apply only if issues aren’t resolved in reasonable time.
          </li>
          <li>
            Bookings made through third-party platforms are subject to their respective policies.
          </li>
          <li>
            In emergencies or disputes, <span className="font-semibold">First Home Stay support</span> will evaluate and make a fair decision.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cancel;
