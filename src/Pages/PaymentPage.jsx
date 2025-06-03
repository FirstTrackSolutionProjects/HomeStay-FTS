import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
   const navigate = useNavigate();
  if (!state) return <p>No booking data found.</p>;

  const { fullName, email, mobile, hotel, payableAmount } = state;
  const [paymentMethod, setPaymentMethod] = useState("payAtHotel");
  const [showBanner, setShowBanner] = useState(false);


const handleBookNow = () => {
  try {
    // Simulate random failure (for demo only)
    const isSuccess = Math.random() > 0.2; // 80% success rate

    if (!isSuccess) {
      throw new Error("Payment failed. Please contact support.");
    }

    const newBooking = {
      orderId: "ORDER" + Date.now(),
      fullName,
      email,
      mobile,
      hotel,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem("myBooking")) || [];
    localStorage.setItem("myBooking", JSON.stringify([...existing, newBooking]));

    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
      navigate("/mybooking");
    }, 3000);

  } catch (error) {
    // Booking failed, redirect to Contact Us
    navigate("/contact", {
      state: { 
          errorMessage: "Booking failed due to: " + error.message
         }
    });
  }
};





return (
    <>
      {/* Success Banner */}
      {showBanner && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded shadow z-50 flex items-center space-x-2 animate-fade-in-down">
          <span role="img" aria-label="party">🎉</span>
          <p><strong>Booking Confirmed!</strong> Your booking has been placed successfully.</p>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Your details</h2>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            
            <button
              onClick={() => navigate(`/booking/${hotel.city}/${hotel.id}`, {
                state: {
                  fullName,
                  email,
                  mobile,
                  hotel,
                  
                }
              })} 
              className="text-red-500 text-lg  hover:text-red-600"
            >
            ← Modify
            </button>
          </div>

          <h3 className="font-semibold text-lg mb-2">Choose payment method</h3>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <p>✅ 100% safe and secure payments</p>
          </div>

          <div className="space-y-4">
            {/* Pay At Hotel */}
            <button
              onClick={() => setPaymentMethod("payAtHotel")}
              className={`border p-4 w-full rounded shadow text-left ${
                paymentMethod === "payAtHotel" ? "bg-gray-100 font-bold" : ""
              }`}
            >
              Pay At Hotel
            </button>

            {/* Pay Now */}
            <button
              onClick={() => setPaymentMethod("payNow")}
              className={`border p-4 w-full rounded shadow text-left flex justify-between items-center ${
                paymentMethod === "payNow" ? "bg-gray-100 font-bold" : ""
              }`}
            >
              Pay Now
            </button>
          </div>

          {/* Conditional Sections */}
          <div className="mt-6">
            {paymentMethod === "payAtHotel" && (
              <div className="bg-yellow-50 p-4 rounded border mt-4">
                <p className="text-lg font-semibold text-yellow-700">⭐ No payment needed today</p>
                <p className="text-gray-700 mt-2">
                  We will confirm your stay without any charge. Pay directly at the hotel during your stay.
                </p>
                <button
                  className="bg-green-500 text-white px-6 py-2 rounded mt-4"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            )}

            {paymentMethod === "payNow" && (
              <div className="mt-4 space-y-4">
                <div className="border rounded p-4">
                  <h4 className="font-semibold mb-2">Pay by any UPI app</h4>
                  <p>Google Pay, PhonePe, Paytm, BHIM</p>
                </div>

                <div className="border rounded p-4">
                  <h4 className="font-semibold mb-2">Scan QR code using UPI app</h4>
                  <p>[Insert QR Code Image or Component Here]</p>
                </div>

                <div className="border rounded p-4">
                  <h4 className="font-semibold mb-2">Other Methods</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Credit/Debit Cards</li>
                    <li>Wallets</li>
                    <li>Netbanking</li>
                  </ul>
                  <button
                    className="bg-green-500 text-white px-6 py-2 rounded mt-4"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Booking Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">{hotel.name}</h3>
          <img
            src={hotel.images?.[0]}
            alt={hotel.name}
            className="w-full h-40 object-cover mb-2"
          />
          <p className="text-sm mb-1">1 Night · 1 Room, 1 Guest</p>
          <div className="text-sm space-y-1">
            <p>Room price: ₹{hotel.price}</p>
            <p>discount: -₹300</p>
            <p>Price surge: ₹50</p>
            <p>Taxes: 18%</p>
          </div>
          <hr className="my-2" />
          <div className="font-bold text-lg">Payable Amount: ₹{hotel.price - 300 - 250 + 50}</div>
          <p className="text-red-500 text-xs mt-2">
            ⚡ 8 people booked this hotel in last 6 hours
          </p>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

