// import React, { useState } from "react"

// const Support = () => {
//   const [bookingId, setBookingId] = useState("")
//   const [error, setError] = useState("")

//   const companyWhatsAppNumber = "9040170727"

//   const handleProceed = () => {
//     if (!bookingId.trim()) {
//       setError("Please enter a booking ID")
//       return
//     }

//     setError("")
//     const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=Hello, I need support for my booking ID: ${bookingId}`
//     window.open(whatsappUrl, "_blank")
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg" style={{ height: '300px' }}>
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src="/images/companylogo.jpg"
//             alt="FirstHomeStayLogo"
//             className="w-16 h-16 mb-2 rounded-full"
//           />
//           <h1 className="text-lg font-semibold text-gray-900">FirstHomeStay's Help Assistant</h1>
//           <p className="text-sm text-gray-500">We're here for your queries</p>
//         </div>

//         <div className="flex justify-center items-center mb-4">
//           <div className="w-90">
//             <label
//               htmlFor="booking-id"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Booking ID
//             </label>
//             <input
//               id="booking-id"
//               type="text"
//               placeholder="What is your booking ID?"
//               value={bookingId}
//               onChange={(e) => setBookingId(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//           </div>
//         </div>

//         <div className="mt-6 flex justify-center transform translate-y-6">
//           <button
//             onClick={handleProceed}
//             className="w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-medium"
//           >
//             Proceed
//           </button>
//         </div>

//         <p className="text-center text-sm text-gray-600 mt-6 transform translate-y-20">
//           To make new booking contact{" "}
//           <a href="tel:9040170727" className="text-blue-500 hover:underline font-medium">
//             +91-9040170727
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Support

import React, { useState } from "react";

const Support = () => {
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  const companyWhatsAppNumber = "9040170727";

  const handleProceed = () => {
    if (!bookingId.trim()) {
      setError("Please enter your Booking ID.");
      return;
    }

    setError("");
    const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=Hello, I need support for my booking ID: ${bookingId}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6 md:p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/images/companylogo.jpg"
            alt="First Home Stay Logo"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Help Assistant</h1>
          <p className="text-sm text-gray-500 mt-1">
            We’re here to help you with your bookings.
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label
            htmlFor="booking-id"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Booking ID
          </label>
          <input
            id="booking-id"
            type="text"
            placeholder="Enter your booking ID"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center">
          <button
            onClick={handleProceed}
            className="w-full md:w-1/2 bg-cyan-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Get WhatsApp Support
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Need help with a new booking? Call us at{" "}
          <a href="tel:9040170727" className="text-blue-600 font-medium hover:underline">
            +91-9040170727
          </a>
        </p>
      </div>
    </div>
  );
};

export default Support;
