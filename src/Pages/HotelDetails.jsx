import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import cityHotelsData from "../data/cityHotelsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CheckCircle, Star } from "lucide-react";
import roomData from "../data/roomdata";

const HotelDetails = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const allHotels = Object.values(cityHotelsData).flat();
  const hotel = allHotels.find(h => h.id === parseInt(hotelId));
  const [selectedRoom, setSelectedRoom] = React.useState(false);
  const [showAllAmenities, setShowAllAmenities] = React.useState(false);

  if (!hotel) return <div className="p-4">Hotel not found</div>;

  const handlePayNow = () => {
    if (!selectedRoom) {
      alert("Please select a room type first");
      return;
    }
    const totalAmount = selectedRoom.price + selectedRoom.taxes;
    navigate("/payment", {
      state: {
        hotel,
        selectedRoom,
        totalAmount,
      },
    });
  };

  const basePrice = selectedRoom?.originalPrice || hotel.price;
  const discountedPrice = selectedRoom?.price || hotel.discountedPrice || hotel.price;
  const discountPercent = selectedRoom
    ? Math.round(((basePrice - discountedPrice) / basePrice) * 100)
    : hotel.discountPercent || 0;
  const discountAmount = basePrice - discountedPrice;
  const taxes = selectedRoom?.taxes || hotel.taxes || 140;
  const totalPrice = discountedPrice + taxes;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Title and Badge */}
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
        loop={true}
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
            {(showAllAmenities ? hotel.amenities : hotel.amenities.slice(0, 4)).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" /> {item}
              </li>
            ))}
          </ul>
          {hotel.amenities.length > 4 && (
            <button
              onClick={() => setShowAllAmenities(prev => !prev)}
              className="mt-2 text-lg text-red-500 hover:underline"
            >
              {showAllAmenities ? "Show less" : "Show More"}
            </button>
          )}

          {/* About */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-1">About this hotel</h3>
            <p className="text-sm text-gray-700">{hotel.description}</p>
          </div>

          {/* Room Selection */}
          <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Choose Your Room Type</h1>

            <select
              value={selectedRoom?.type || ""}
              onChange={(e) =>
                setSelectedRoom(roomData.find(room => room.type === e.target.value))
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
                <p><strong>Room Size:</strong> {selectedRoom.size}</p>
                <p><strong>Features:</strong> {selectedRoom.features.join(", ")}</p>
                <p><strong>Price:</strong> ₹{selectedRoom.discountedPrice}</p>
                <p><strong>Taxes:</strong> ₹{selectedRoom.taxes}</p>
                <p className="font-bold mt-2">
                  Total: ₹{selectedRoom.discountedPrice + selectedRoom.taxes}
                </p>
              </div>
            )}
          </div>

          {/* Nearby */}
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

          {/* Location Map */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
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
              <li>Only Indian nationals are allowed</li>
              <li>Couples are welcome</li>
              <li>Check-in with local or outstation ID (PAN not accepted)</li>
              <li>
                This hotel is serviced under the trade name of Amethyst Business Hotel as
                per quality standards of OYO
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Summary */}
        <div>
          <div className="border rounded-lg p-4 shadow-md bg-white mt-2 sticky top-4">
            <div className="text-2xl font-bold text-green-600 mb-1">
              ₹{discountedPrice}
              {discountedPrice !== basePrice && (
                <>
                  <span className="line-through text-sm text-gray-500 ml-2">₹{basePrice}</span>
                  <span className="text-orange-500 text-sm ml-1">({discountPercent}% off)</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500">+ taxes & fees: ₹{taxes}</p>

            <div className="my-3">
              <p className="font-semibold">Mon, 12 May – Tue, 13 May</p>
              <p className="text-sm text-gray-600">1 Room, 1 Guest</p>
            </div>

            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span>Discount applied</span>
                <span className="text-green-600">– ₹{discountAmount}</span>
              </div>
            </div>

            <div className="border-t mt-3 pt-3 text-sm">
              <div className="flex justify-between">
                <span>Total savings</span>
                <span className="text-green-700 font-semibold">₹{discountAmount}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total price</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button
              onClick={handlePayNow}
              className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
