import React, { useState } from "react";

import { useParams, useNavigate, } from "react-router-dom";
import cityHotelsData from "../data/cityHotelsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CheckCircle, Star, Minus, Plus, Trash2 } from "lucide-react";
import roomData from "../data/roomData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RatingsAndReviews from "../Components/RatingAndReviews";

const HotelDetails = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const allHotels = Object.values(cityHotelsData).flat();
  const hotel = allHotels.find((h) => h.id === parseInt(hotelId));

  const [selectedRoom, setSelectedRoom] = React.useState(null);
  const [showAllAmenities, setShowAllAmenities] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );
  const [showGuestsPicker, setShowGuestsPicker] = React.useState(false);
  const [bookingName, setBookingName] = React.useState("Adya");

  const [roomsData, setRoomsData] = React.useState([{ adults: 1, children: 0 }]);
  const [hasGST, setHasGST] = useState(false);

  if (!hotel) return <div className="p-4">Hotel not found</div>;

  // Calculate number of nights
  const nights = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const guests = `${roomsData.length} Room${roomsData.length > 1 ? "s" : ""}, ${
    roomsData.reduce((acc, room) => acc + room.adults + room.children, 0)
  } Guest${
    roomsData.reduce((acc, room) => acc + room.adults + room.children, 0) > 1
      ? "s"
      : ""
  }`;

  const basePrice = selectedRoom?.originalPrice ?? hotel.price;
  const discountedPrice =
    selectedRoom?.discountedPrice ?? hotel.discountedPrice ?? hotel.price;
  const discountAmount = basePrice - discountedPrice;
  const discountPercent = Math.round((discountAmount / basePrice) * 100);
  const taxes = selectedRoom?.taxes ?? hotel.taxes ?? 140;

  // Calculate total price based on rooms and nights
  const totalRooms = roomsData.length;
  const totalRoomPrice = discountedPrice * nights * totalRooms;
  const totalTaxes = taxes * totalRooms; // taxes assumed per room
  const totalPrice = totalRoomPrice + totalTaxes;

  const handlePayNow = () => {
    if (!selectedRoom) {
      alert("Please select a room type first");
      return;
    }

    navigate("/payment", {
      state: {
        hotel,
        selectedRoom,
        totalAmount: totalPrice,
        bookingDates: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
        guests,
        bookingName,
      },
    });
  };

  const handleRoomChange = (index, type, delta) => {
    setRoomsData((prev) => {
      const updated = [...prev];
      updated[index][type] = Math.max(0, updated[index][type] + delta);
      return updated;
    });
  };

  const addRoom = () => {
    setRoomsData([...roomsData, { adults: 1, children: 0 }]);
  };

  const removeRoom = (index) => {
    setRoomsData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hotel Header */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold">{hotel.name}</h1>
        <p className="text-gray-600">{hotel.location}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="bg-gray-200 text-sm px-2 py-1 rounded">Super Hotel</span>
        </div>
        <div className="flex items-center text-sm mt-1 text-green-600">
          <Star className="w-4 h-4 fill-green-600 mr-1" />
          {hotel.rating} • Check-in rating • Delightful experience
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg mb-4"
      >
        {hotel.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Hotel image ${idx + 1}`}
              className="w-full h-84 object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2">
          {/* Amenities */}
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {(showAllAmenities ? hotel.amenities : hotel.amenities.slice(0, 4)).map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                </li>
              )
            )}
          </ul>
          {hotel.amenities.length > 4 && (
            <button
              onClick={() => setShowAllAmenities((prev) => !prev)}
              className="mt-2 text-lg text-red-500 hover:underline"
            >
              {showAllAmenities ? "Show less" : "Show More"}
            </button>
          )}

          {/* Description */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-700">{hotel.description}</p>
          </div>

          {/* Room Selection */}
          <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Choose Your Room Type</h1>
            <select
              value={selectedRoom?.type || ""}
              onChange={(e) =>
                setSelectedRoom(roomData.find((room) => room.type === e.target.value))
              }
              className="w-full border p-2 rounded"
            >
              <option value="">Select a room type</option>
              {roomData.map((room, index) => (
                <option key={index} value={room.type}>
                  {room.type}
                </option>
              ))}
            </select>

            {selectedRoom && (
              <div className="mt-4 border rounded p-4 shadow">
                <h2 className="text-lg font-semibold mb-2">{selectedRoom.type} Room</h2>
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.type}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <p>
                  <strong>Room Size:</strong> {selectedRoom.size}
                </p>
                <p>
                  <strong>Features:</strong> {selectedRoom.features.join(", ")}
                </p>
                <p>
                  <strong>Price:</strong> ₹{selectedRoom.discountedPrice}
                </p>
                <p>
                  <strong>Taxes:</strong> ₹{selectedRoom.taxes}
                </p>
                <p className="font-bold mt-2">
                  Total: ₹{selectedRoom.discountedPrice + selectedRoom.taxes}
                </p>
              </div>
            )}
          </div>

          {/* Booking Inputs */}
          <div className="p-4 border rounded w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Booking Details</h3>

            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
              <label className="block mb-1 font-medium text-sm">Check-in Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  if (endDate <= date) {
                    setEndDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
                  }
                }}
                minDate={new Date()}
                className="w-full border p-2 rounded"
                dateFormat="dd MMM yyyy"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">Check-out Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={new Date(startDate.getTime() + 24 * 60 * 60 * 1000)}
                className="w-full border p-2 rounded"
                dateFormat="dd MMM yyyy"
              />
            </div>
            </div>
            

            {/* Guest Selector */}
            <div className="relative">
              <input
                type="text"
                value={guests}
                onClick={() => setShowGuestsPicker(!showGuestsPicker)}
                readOnly
                className="w-full border p-2 rounded cursor-pointer"
              />
              {showGuestsPicker && (
                <div className="absolute z-20 bg-white border rounded p-4 shadow mt-1 w-full">
                  {roomsData.map((room, idx) => (
                    <div key={idx} className="mb-4 border-b pb-3">
                      <div className="flex justify-between items-center mb-2 font-semibold">
                        <span>Room {idx + 1}</span>
                        {roomsData.length > 1 && (
                          <button
                            onClick={() => removeRoom(idx)}
                            className="text-red-600 text-sm flex items-center"
                          >
                            <Trash2 className="w-4 h-4 mr-1" /> Remove
                          </button>
                        )}
                      </div>
                      <div className="mb-2">
                        <p className="text-sm font-medium">Adults (Ages 5+)</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleRoomChange(idx, "adults", -1)}
                            className="border px-2 py-1 rounded"
                          >
                            <Minus size={14} />
                          </button>
                          <span>{room.adults}</span>
                          <button
                            onClick={() => handleRoomChange(idx, "adults", 1)}
                            className="border px-2 py-1 rounded"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Children (Ages 0-5)</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleRoomChange(idx, "children", -1)}
                            className="border px-2 py-1 rounded"
                          >
                            <Minus size={14} />
                          </button>
                          <span>{room.children}</span>
                          <button
                            onClick={() => handleRoomChange(idx, "children", 1)}
                            className="border px-2 py-1 rounded"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addRoom}
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                  >
                    Add Room
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

              {/* Ratings and Reviews */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>
                  <RatingsAndReviews hotelId={hotel.id} />
              </div>

              {/* Right Section */}
         <div className="md:col-span-1 space-y-8">
                {/* Nearby Locations */}
              <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What's nearby?</h2>
                <div className="border p-4 rounded-md">
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>🚌 Silk Board Bus Stop - 3km</p>
                    <p>🏥 Jayadeva Hospital - 3.3km</p>
                    <p>🛫 Rajadhani Tours - 3.4km</p>
                    <p>🍽️ Savoury Sea Shell - 2.7km</p>
                </div>
              </div>
          </div>

         {/* Location Section */}
<div className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">Location</h2>
  <p className="mb-4 text-gray-700">{hotel.location}</p>
  <iframe
    title="hotel map"
    src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
    width="100%"
    height="250"
    className="rounded-xl border shadow"
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>

              {/* GST Section */}
               <div className="p-4 border rounded-xl shadow-sm space-y-4 text-sm">
       {/* GST Checkbox */}
      <label className="flex items-center gap-2 text-sm font-medium">
        <span>I have a GST number (optional)?</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={hasGST}
            onChange={() => setHasGST(!hasGST)}
            className="peer appearance-none w-5 h-5 border border-red-500 rounded bg-white checked:bg-red-500 checked:border-red-500"
          />
          {/* White Tick */}
          <svg
            className="absolute inset-0 w-5 h-5 text-white pointer-events-none hidden peer-checked:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </label>

      {/* GST Fields */}
      {hasGST && (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="GSTIN"
            className="w-full border p-2 rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Business Name"
            className="w-full border p-2 rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Business Address"
            className="w-full border p-2 rounded-md text-sm"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border p-2 rounded-md text-sm"
          />
          <p className="text-sm text-red-700 bg-red-100 p-2 rounded-md">
            In case of invalid/cancelled GSTIN, this booking shall be considered as personal booking
          </p>
        </div>
      )}
    </div>



          {/* Policies */}
         <div className="mt-10">
  <h2 className="text-2xl font-semibold mb-4">Hotel policies</h2>
  <div className="flex items-center gap-12 mb-4">
    <div>
      <p className="text-xs text-gray-500">Check-in</p>
      <div className="border rounded-md px-4 py-2 text-center font-semibold text-sm shadow-sm w-28">
        12:00 PM
      </div>
    </div>
    <div>
      <p className="text-xs text-gray-500">Check-out</p>
      <div className="border rounded-md px-4 py-2 text-center font-semibold text-sm shadow-sm w-28">
        11:00 AM
      </div>
    </div>
  </div>
  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
    <li>Guests of all nationalities are welcome with valid ID proof</li>
    <li>Couples are welcome</li>
    <li>Valid government-issued photo ID required at check-in (PAN card not accepted)</li>
    <li>
      This hotel is independently managed and operated under a licensed hospitality brand.
    </li>
    <li>Services like early check-in, extra guest etc are chargeable extra.</li>
  </ul>
</div>

        {/* (Price Summary & Pay Now) */}
        <div>
          <div className="border p-6 rounded-xl shadow-sm sticky top-4">
            <h3 className="text-xl font-bold mb-4">Price Summary</h3>
            {selectedRoom ? (
              <>
                <div className="flex justify-between mb-1">
                  <span>
                    Base Price (₹{discountedPrice} × {nights} night
                    {nights > 1 ? "s" : ""} × {totalRooms} room
                    {totalRooms > 1 ? "s" : ""}):
                  </span>
                  <span>₹{totalRoomPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-1 text-green-600">
                  <span>Discount:</span>
                  <span>
                    -₹
                    {(discountAmount * nights * totalRooms).toLocaleString()} (
                    {discountPercent}%)
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Taxes & Charges:</span>
                  <span>₹{totalTaxes.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Price:</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </>
            ) : (
              <p className="text-red-600">Please select a room type to see pricing</p>
            )}

            <button
              onClick={handlePayNow}
              disabled={!selectedRoom}
              className={`mt-6 w-full py-3 text-white font-semibold rounded ${
                selectedRoom ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HotelDetails;