// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function BookingForm({ hotel }) {
//   const [guestName, setGuestName] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("payNow");
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     const orderId = "ORDER" + Date.now();

//     const bookingData = {
//       orderId,
//       hotel: {
//         name: hotel.name,
//         location: hotel.location,
//       },
//       guestName,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };

//     const existing = JSON.parse(localStorage.getItem("myBooking")) || [];
//     existing.push(bookingData);
//     localStorage.setItem("myBooking", JSON.stringify(existing));

//     alert("Booking successful!");
//     navigate("/my-booking");
//   };

//   return (
//     <div className="space-y-4 border p-5 rounded-lg shadow-md bg-white">
//       <h3 className="text-xl font-semibold">Guest Details</h3>

//       <input
//         type="text"
//         placeholder="Guest Name"
//         value={guestName}
//         onChange={(e) => setGuestName(e.target.value)}
//         className="w-full border px-3 py-2 rounded"
//       />

//       <select
//         value={paymentMethod}
//         onChange={(e) => setPaymentMethod(e.target.value)}
//         className="w-full border px-3 py-2 rounded"
//       >
//         <option value="payNow">Pay Now</option>
//         <option value="payAtHotel">Pay at Hotel</option>
//       </select>

//       <button
//         onClick={handleBookNow}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// }
