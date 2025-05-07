import React from "react";

const GuestPolicy = () => {
  return (
    <div className="flex justify-center items-center py-10 min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Guest Policy 
        </h1>

        <div className="text-sm font-sans space-y-6">
          <div>
            <h5 className="text-base font-semibold text-orange-700">
              1. Check-In and Check-Out
            </h5>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                Check-in time: <strong>[11 AM]</strong>
              </li>
              <li>
                Check-out time: <strong>[11 PM]</strong>
              </li>
              <li>
                Sometimes Check-In and Check-Out times depends upon the hotel policy.
              </li>
              <li>
                Early check-in or late check-out may be available on request,
                subject to availability and additional charges.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              2. Identification
            </h5>
            <p className="mt-1">
              Valid government-issued photo identification is required at the time of check-in for all guests.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              3. Occupancy Limits
            </h5>
            <p className="mt-1">
              The maximum number of guests per room must not exceed the number
              booked. Additional guests may incur extra charges.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              4. House Rules
            </h5>
            <ul className="list-disc ml-6 mt-1 space-y-1">
             
              <li>No pets allowed unless specified.</li>
              <li>Visitors are not to be allowed to stay overnight.</li>
              
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              5. Payment Terms
            </h5>
            <p className="mt-1">
              Full payment is required before or at check-in. We accept{" "}
              <strong>cash, cards, or online payments</strong>.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              6. Cancellations and Refunds
            </h5>
            <p className="mt-1">
              Cancellation policies vary. Refunds, if applicable, will be
              processed within <strong>[Insert days]</strong> business days.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              7. Damages and Loss
            </h5>
            <p className="mt-1">
              Guests are responsible for any damage caused during their stay. A
              damage deposit may be required at check-out.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              8. Safety and Security
            </h5>
            <p className="mt-1">
              Please lock doors and windows when leaving the property. We are
              not responsible for lost belongings.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              9. Right to Refuse Service
            </h5>
            <p className="mt-1">
              We reserve the right to remove guests who violate policies or
              behave in a disruptive or unsafe manner.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-orange-700">
              10. Contact
            </h5>
            <p className="mt-1">
              For assistance, please contact our support team or call us at{" "}
              <strong>9040170727</strong>or email us <strong>support@firsthomestay.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestPolicy;
