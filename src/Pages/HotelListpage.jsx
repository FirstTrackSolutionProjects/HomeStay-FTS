// import React from "react";
// import { Link, useParams } from "react-router-dom";

// const hotelGroups = {
//   0: [
//     {
//       id: "p1",
//       name: "Hotel Shanti Palace",
//       image: "/images/h1.jpg",
//       price: 5727,
//       unit: "night",
//       stars: 5,
//     },
//     {
//       id: "p2",
//       name: "Hotel Classic Deluxe",
//       image: "/images/h2.jpg",
//       price: 4899,
//       unit: "night",
//       stars: 4,
//     },
//     {
//       id: "p3",
//       name: "Hotel Sunrise Residency",
//       image: "/images/h3.jpg",
//       price: 6120,
//       unit: "night",
//       stars: 3,
//     },
//     {
//       id: "p4",
//       name: "The Royal Stay",
//       image: "/images/h4.jpg",
//       price: 5400,
//       unit: "night",
//       stars: 5,
//     },
//   ],
//   1: [
//     {
//       id: "h1",
//       name: "OYO Banjara View",
//       image: "/images/h2.jpg",
//       price: 4067,
//       unit: "trip",
//       stars: 3,
//     },
//     {
//       id: "h2",
//       name: "Hotel Golkonda Premium",
//       image: "/images/h3.jpg",
//       price: 5000,
//       unit: "trip",
//       stars: 4,
//     },
//     {
//       id: "h3",
//       name: "The City Pearl",
//       image: "/images/h4.jpg",
//       price: 4500,
//       unit: "trip",
//       stars: 4,
//     },
//     {
//       id: "h4",
//       name: "Urban Nest Suites",
//       image: "/images/h5.jpg",
//       price: 4200,
//       unit: "trip",
//       stars: 3,
//     },
//   ],
//   2: [
//     {
//       id: "b1",
//       name: "Bella Vista Residency",
//       image: "/images/h3.jpg",
//       price: 24817,
//       unit: "session",
//       stars: 5,
//     },
//     {
//       id: "b2",
//       name: "Green Tree Hotel",
//       image: "/images/h1.jpg",
//       price: 21000,
//       unit: "session",
//       stars: 4,
//     },
//     {
//       id: "b3",
//       name: "Maple Woods Residency",
//       image: "/images/h2.jpg",
//       price: 22000,
//       unit: "session",
//       stars: 5,
//     },
//     {
//       id: "b4",
//       name: "Blue Lagoon Hotel",
//       image: "/images/h5.jpg",
//       price: 20000,
//       unit: "session",
//       stars: 4,
//     },
//   ],
//   3: [
//     {
//       id: "j1",
//       name: "Ocean View Palace",
//       image: "/images/h4.jpg",
//       price: 1577,
//       unit: "month",
//       stars: 3,
//     },
//     {
//       id: "j2",
//       name: "Jaipur Grand Suites",
//       image: "/images/h5.jpg",
//       price: 1899,
//       unit: "month",
//       stars: 4,
//     },
//     {
//       id: "j3",
//       name: "Sunset Residency",
//       image: "/images/h2.jpg",
//       price: 1750,
//       unit: "month",
//       stars: 3,
//     },
//     {
//       id: "j4",
//       name: "Sapphire Palace",
//       image: "/images/h3.jpg",
//       price: 2000,
//       unit: "month",
//       stars: 4,
//     },
//   ],
//   4: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   5: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   6: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   7: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   8: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   9: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
//   10: [
//     {
//       id: "d1",
//       name: "ITC Grand Bharat Retreat",
//       image: "/images/h5.jpg",
//       price: 4900,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d2",
//       name: "Dehradun Hill Hotel",
//       image: "/images/h3.jpg",
//       price: 4300,
//       unit: "suite",
//       stars: 4,
//     },
//     {
//       id: "d3",
//       name: "Royal Orchid Suites",
//       image: "/images/h4.jpg",
//       price: 4600,
//       unit: "suite",
//       stars: 5,
//     },
//     {
//       id: "d4",
//       name: "Mountain View Resort",
//       image: "/images/h1.jpg",
//       price: 4100,
//       unit: "suite",
//       stars: 4,
//     },
//   ],
// };


// const HotelListPage = () => {
//   const { locationId } = useParams();
//   const hotels = hotelGroups[locationId] || [];

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Available Hotels</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels.map((hotel) => (
//           <Link
//             to={`/hotel/detail/${hotel.id}`}
//             key={hotel.id}
//             className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-200 bg-white"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4 space-y-2">
//               <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
//               <div className="flex items-center space-x-0.5">
//                 {Array.from({ length: 7 }).map((_, i) => (
//                  <span
//                   key={i}
//                     className={`${
//                   i < hotel.stars ? "text-yellow-400 text-lg" : "text-gray-400 text-sm"
//                   }`}
//                 >
//               ★
//             </span>
//           ))}
//         </div>
          
//           <div className="flex items-center justify-between mt-2">
//                 <div>
//                   <p className="text-xl font-bold text-green-600">
//                     ₹{hotel.price.toLocaleString()}
//                   </p>
//                   <p className="text-xs text-gray-500">per {hotel.unit}</p>
//                 </div>
//                 <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default HotelListPage;

import React, { useState } from "react";
import HotelCard from "../Components/HotelCard";
import {hotels}  from "../data/hotels";


const HotelListPage = () => {
  const [price, setPrice] = useState(500);

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };
 

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center my-8">Available Hotels</h1>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-white shadow rounded-md mx-auto max-w-7xl">
        <input
          type="text"
          placeholder="Search hotels..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded mb-4 sm:mb-0"
        />
        <select className="border p-2 rounded w-full sm:w-auto">
          <option>Sort by Popularity</option>
          <option>Price Low to High</option>
          <option>Rating</option>
        </select>
      </div>

      {/* Filters + Hotel Cards */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 px-4 lg:px-10 py-6 max-w-7xl mx-auto">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="mb-9 font-extrabold">Price Range</h3>
            <div className="relative mb-1">
              <div
                className="absolute -top-7 text-sm font-semibold text-blue-600"
                style={{
                  left: `${((price - 445) / (10000 - 445)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                ₹{price} /day
              </div>
              <input
                type="range"
                min="445"
                max="10000"
                step="100"
                value={price}
                onChange={handlePriceChange}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>₹445</span>
              <span>₹10,000</span>
            </div>
            {/* <p className="text-sm text-gray-500 mt-1">Adjust price range</p> */}
          </div>

          {/* Collections */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Collections</h3>
            {["Couple Friendly", "International Guests", "Business Travellers", "Budget"].map((item) => (
              <label key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

           {/* Categories */}
           <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            {["Town House", "Flagship", "Home", "Hotel Rooms"].map((item) => (
              <label key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Accommodation Type */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Accommodation Type</h3>
            {["Hotel", "Guest House"].map((item) => (
              <label key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Hotel Facilities */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Hotel Facilities</h3>
            {["Seating area", "King Sized Bed", "Queen Sized Bed", "Swimming Pool"].map((item) => (
              <label key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Check-In Features */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Check-In Features</h3>
            {["24x7 Check-In", "Free Cancellation", "No ID Required"].map((item) => (
              <label key={item} className="flex items-center space-x-2 mb-2">
                <input type="checkbox" id={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Hotel Cards */}
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      

      </div>
    </div>
  );
};

export default HotelListPage;


