import React, { useEffect, useState } from "react";
import { FaReceipt, FaHotel, FaMoneyBillWave, FaClock } from "react-icons/fa";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myBooking")) || [];
    setBooking(data);
  }, []);

  const handleCancelBooking = (orderId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      const updatedBookings = booking.filter((b) => b.orderId !== orderId);
      setBooking(updatedBookings);
      localStorage.setItem("myBooking", JSON.stringify(updatedBookings));
      alert("Booking cancelled.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">My Booking</h2>

        {booking.length === 0 ? (
          <p className="text-gray-600 text-lg">No booking yet.</p>
        ) : (
          <ul className="space-y-6">
            {booking.map((b, index) => (
              <li
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all"
              >
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <FaReceipt className="text-blue-500" />
                    <span>
                      <strong className="text-purple-700">Order ID:</strong> {b.orderId}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHotel className="text-pink-500" />
                    <span>
                      <strong className="text-purple-700">Hotel:</strong> {b.hotel.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMoneyBillWave className="text-green-600" />
                    <span>
                      <strong className="text-purple-700">Payment:</strong>{" "}
                      {b.paymentMethod === "payNow" ? "Paid Online" : "Pay at Hotel"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-yellow-500" />
                    <span>
                      <strong className="text-purple-700">Booking Time:</strong> {b.date}
                    </span>
                  </div>

                  {/* Cancel Booking Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleCancelBooking(b.orderId)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
