import React from 'react';

const Cancel = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-10 ">
      <div className="max-w-3xl w-full text-center font-sans">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Cancellation & Refund Policy
        </h1>
        <p className="text-xs md:text-sm lg:text-base mb-4 caret-blue-700">
          FirstHomestay values guest satisfaction and aims to provide a transparent and fair cancellation and refund process. By proceeding with a booking, guests agree to the following policy terms.
        </p>

        <ul className="list-disc list-inside text-left inline-block text-xs md:text-sm lg:text-base space-y-2 text-blue-1000">
          <li>
            Cancellations are accepted only if requested at least <strong>48 hours</strong> before the check-in time. No cancellations will be permitted beyond this period.
          </li>
          <li>
            Cancellations for non-refundable bookings, flash deals, and promotional packages are not allowed.
          </li>
          <li>
            Same-day bookings (bookings made within 24 hours of check-in) are <strong>non-cancellable</strong> and <strong>non-refundable</strong>.
          </li>
          <li>
            Refundable cancellations will be processed (after deducting service fees) within <strong>7–10 business days</strong>.
          </li>
          <li>
            If the stay is cut short after check-in due to personal reasons, the remaining nights are <strong>non-refundable</strong>.
          </li>
          <li>
            If there’s a major issue with the listing (e.g., no access, poor hygiene), notify us <strong>within 2 hours of check-in</strong> to be eligible for a resolution/refund.
          </li>
          <li>
            Amenities-related complaints will be resolved quickly, but refunds apply only if issues aren’t resolved in reasonable time.
          </li>
          <li>
            Bookings made through third-party platforms are subject to their respective policies.
          </li>
          <li>
            In emergencies or disputes, FirstHomestay support will evaluate and make a fair decision.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cancel;
