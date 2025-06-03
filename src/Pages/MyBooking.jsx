import React, { useEffect, useState } from "react";
import {
  FaReceipt,
  FaHotel,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myBooking")) || [];
    setBooking(data);
  }, []);

  const handleCancelBooking = (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
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
                    <MdLocationOn className="text-red-500" />
                    <span>
                      <strong className="text-purple-700">Location:</strong> {b.hotel.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <AiOutlineUser className="text-green-600" />
                    <span>
                      <strong className="text-purple-700">Guest:</strong> {b.fullName}
                    </span>
                  </div>
                   <div className="flex items-center gap-3">
                    <AiOutlineMail className="text-green-600" />
                    <span>
                      <strong className="text-purple-700">Guest:</strong> {b.email}
                    </span>
                  </div>
                   <div className="flex items-center gap-3">
                    <AiOutlinePhone className="text-green-600" />
                    <span>
                      <strong className="text-purple-700">Guest:</strong> {b.mobile}
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
                  <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => handleCancelBooking(b.orderId)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Cancel Booking
                  </button>
                  <button
                    onClick={() =>
                    navigate("/payment", {
                    state: {
                      fullName: b.fullName,
                      email: b.email,
                      mobile: b.mobile,
                      hotel: b.hotel,
                      payableAmount: b.hotel.price - 300 - 250 + 50, // same logic as in PaymentPage
                      },
                    })
                  }
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                > 
                Pay Now
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
