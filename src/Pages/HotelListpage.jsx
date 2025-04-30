import React from "react";
import { Link, useParams } from "react-router-dom";

const hotelGroups = {
  0: [
    {
      id: "p1",
      name: "Hotel Shanti Palace",
      image: "/images/h1.jpg",
      price: 5727,
      unit: "night",
      stars: 5,
    },
    {
      id: "p2",
      name: "Hotel Classic Deluxe",
      image: "/images/h2.jpg",
      price: 4899,
      unit: "night",
      stars: 4,
    },
    {
      id: "p3",
      name: "Hotel Sunrise Residency",
      image: "/images/h3.jpg",
      price: 6120,
      unit: "night",
      stars: 3,
    },
    {
      id: "p4",
      name: "The Royal Stay",
      image: "/images/h4.jpg",
      price: 5400,
      unit: "night",
      stars: 5,
    },
  ],
  1: [
    {
      id: "h1",
      name: "OYO Banjara View",
      image: "/images/h2.jpg",
      price: 4067,
      unit: "trip",
      stars: 3,
    },
    {
      id: "h2",
      name: "Hotel Golkonda Premium",
      image: "/images/h3.jpg",
      price: 5000,
      unit: "trip",
      stars: 4,
    },
    {
      id: "h3",
      name: "The City Pearl",
      image: "/images/h4.jpg",
      price: 4500,
      unit: "trip",
      stars: 4,
    },
    {
      id: "h4",
      name: "Urban Nest Suites",
      image: "/images/h5.jpg",
      price: 4200,
      unit: "trip",
      stars: 3,
    },
  ],
  2: [
    {
      id: "b1",
      name: "Bella Vista Residency",
      image: "/images/h3.jpg",
      price: 24817,
      unit: "session",
      stars: 5,
    },
    {
      id: "b2",
      name: "Green Tree Hotel",
      image: "/images/h1.jpg",
      price: 21000,
      unit: "session",
      stars: 4,
    },
    {
      id: "b3",
      name: "Maple Woods Residency",
      image: "/images/h2.jpg",
      price: 22000,
      unit: "session",
      stars: 5,
    },
    {
      id: "b4",
      name: "Blue Lagoon Hotel",
      image: "/images/h5.jpg",
      price: 20000,
      unit: "session",
      stars: 4,
    },
  ],
  3: [
    {
      id: "j1",
      name: "Ocean View Palace",
      image: "/images/h4.jpg",
      price: 1577,
      unit: "month",
      stars: 3,
    },
    {
      id: "j2",
      name: "Jaipur Grand Suites",
      image: "/images/h5.jpg",
      price: 1899,
      unit: "month",
      stars: 4,
    },
    {
      id: "j3",
      name: "Sunset Residency",
      image: "/images/h2.jpg",
      price: 1750,
      unit: "month",
      stars: 3,
    },
    {
      id: "j4",
      name: "Sapphire Palace",
      image: "/images/h3.jpg",
      price: 2000,
      unit: "month",
      stars: 4,
    },
  ],
  4: [
    {
      id: "d1",
      name: "ITC Grand Bharat Retreat",
      image: "/images/h5.jpg",
      price: 4900,
      unit: "suite",
      stars: 5,
    },
    {
      id: "d2",
      name: "Dehradun Hill Hotel",
      image: "/images/h3.jpg",
      price: 4300,
      unit: "suite",
      stars: 4,
    },
    {
      id: "d3",
      name: "Royal Orchid Suites",
      image: "/images/h4.jpg",
      price: 4600,
      unit: "suite",
      stars: 5,
    },
    {
      id: "d4",
      name: "Mountain View Resort",
      image: "/images/h1.jpg",
      price: 4100,
      unit: "suite",
      stars: 4,
    },
  ],
};

const HotelListPage = () => {
  const { locationId } = useParams();
  const hotels = hotelGroups[locationId] || [];

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center text-purple-700 ">Available Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Link
            to={`/hotel/${hotel.id}`}
            key={hotel.id}
            className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-30">
              <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>

              {/* Show actual stars */}
              <p className="text-yellow-400 text-base">
                {"⭐".repeat(hotel.stars)}
              </p>

              <p className="text-blue-600 font-bold text-lg mt-2">
                ₹{hotel.price.toLocaleString()} <span className="text-sm font-medium text-gray-500">/ {hotel.unit}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotelListPage;