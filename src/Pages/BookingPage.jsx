import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import cityHotelsData from "../data/cityHotelsData";
import offerHotels from "../data/offer";

const BookingPage = () => {
  const { cityName, hotelId } = useParams();
   const location = useLocation();
  const navigate = useNavigate();

   let hotel = location.state?.hotel;
  if (!hotel) {
    hotel = cityName === "offer"
      ? offerHotels.find(h => h.id === Number(hotelId))
      : cityHotelsData[cityName?.toLowerCase()]?.find(h => h.id === Number(hotelId));
  }

  // const hotel = cityHotelsData[cityName.toLowerCase()]?.find(h => h.id === Number(hotelId));

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    navigate("/payment",  {
      state: {
        fullName,
        email,
        mobile,
        hotel,
        payableAmount: hotel.price - 300 - 250 + 50
      }
    });
  };

  return hotel ? (
    <div className="flex flex-col md:flex-row justify-between p-6 gap-6">
      {/* Left: Guest Details */}
      <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
        <form className="space-y-4">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border p-2 w-full rounded"
            />
          </div>
          <div>
            <label>Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Phone number"
              className="border p-2 w-full rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleContinue}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Right: Booking Summary */}
      <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
        <img src={hotel.images?.[0]} alt={hotel.name} className="w-full h-40 object-cover mb-2" />
        <p className="text-sm mb-1">1 Night · 1 Room, 1 Guest</p>
        <div className="text-sm space-y-1">
          <p>Room Price: ₹{hotel.price}</p>
          <p>Instant Discount: -₹300</p>
          <p>Coupon: -₹250</p>
          <p>Price Surge: +₹50</p>
        </div>
        <hr className="my-2" />
        <div className="font-bold text-lg">Payable Amount: ₹{hotel.price - 300 - 250 + 50}</div>
        <p className="text-red-500 text-xs mt-2">⚡ 8 people booked this hotel in the last 6 hours</p>
      </div>
    </div>
  ) : (
    <p>Hotel not found.</p>
  );
};

export default BookingPage;


