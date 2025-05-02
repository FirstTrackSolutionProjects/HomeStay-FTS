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
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Available Hotels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Link
            to={`/hotel/detail/${hotel.id}`}
            key={hotel.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-200 bg-white"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
              <div className="flex items-center space-x-0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                 <span
                  key={i}
                    className={`${
                  i < hotel.stars ? "text-yellow-400 text-lg" : "text-gray-400 text-sm"
                  }`}
                >
              ★
            </span>
          ))}
        </div>
          
          <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-xl font-bold text-green-600">
                    ₹{hotel.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">per {hotel.unit}</p>
                </div>
                <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default HotelListPage;

// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";


// const hotelGroups = {
//   delhi: [
//     {
//       id: "delhi-1",
//       name: "Hotel Sunshine Inn",
//       image: "https://source.unsplash.com/400x300/?hotel,room",
//       stars: 5,
//       price: 1200,
//       unit: "night",
//     },
//     {
//       id: "delhi-2",
//       name: "Elite Stay Delhi",
//       image: "https://source.unsplash.com/400x300/?luxury,hotel",
//       stars: 4,
//       price: 1800,
//       unit: "night",
//     },
//   ],
//   mumbai: [
//     {
//       id: "mumbai-1",
//       name: "Mumbai Comfort Stay",
//       image: "https://source.unsplash.com/400x300/?mumbai,hotel",
//       stars: 4,
//       price: 2000,
//       unit: "night",
//     },
//   ],
// };

// const HotelListPage = () => {
//   const { locationId } = useParams();
//   const hotels = hotelGroups[locationId] || [];

//   const [selectedCollections, setSelectedCollections] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState([500, 10000]);

//   const handleCheckboxChange = (type, value) => {
//     const current = type === "collections" ? selectedCollections : selectedCategories;
//     const setter = type === "collections" ? setSelectedCollections : setSelectedCategories;
//     if (current.includes(value)) {
//       setter(current.filter((item) => item !== value));
//     } else {
//       setter([...current, value]);
//     }
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Available Hotels</h2>

//       {/* Filters */}
//       <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
//         <h3 className="text-xl font-semibold mb-4">Filters</h3>

//         {/* Price Range */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Price Range</label>
//           <input
//             type="range"
//             min="400"
//             max="15000"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([400, Number(e.target.value)])}
//             className="w-full"
//           />
//           <div className="flex justify-between text-sm mt-1">
//             <span>₹{priceRange[0]}</span>
//             <span>₹{priceRange[1]}</span>
//           </div>
//         </div>

//         {/* Collections */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Collections</label>
//           <div className="flex flex-wrap gap-3">
//             {["Family OYOs", "Group Travellers", "Local IDs", "Couples", "International Guests"].map((item) => (
//               <label key={item} className="flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedCollections.includes(item)}
//                   onChange={() => handleCheckboxChange("collections", item)}
//                 />
//                 <span className="text-sm">{item}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="mb-2">
//           <label className="block mb-1 font-medium">Categories</label>
//           <div className="flex flex-wrap gap-3">
//             {["OYO Rooms", "Premium", "Townhouse", "Flagship", "Home"].map((item) => (
//               <label key={item} className="flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={selectedCategories.includes(item)}
//                   onChange={() => handleCheckboxChange("categories", item)}
//                 />
//                 <span className="text-sm">{item}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Hotel Listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels
//           .filter((hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1])
//           .map((hotel) => (
//             <Link
//               to={`/hotel/detail/${hotel.id}`}
//               key={hotel.id}
//               className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-200 bg-white"
//             >
//               <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
//                 <div className="flex items-center space-x-0.5">
//                   {Array.from({ length: 7 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={`${
//                         i < hotel.stars ? "text-yellow-400 text-lg" : "text-gray-300 text-sm"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex items-center justify-between mt-2">
//                   <div>
//                     <p className="text-xl font-bold text-green-600">
//                       ₹{hotel.price.toLocaleString()}
//                     </p>
//                     <p className="text-xs text-gray-500">per {hotel.unit}</p>
//                   </div>
//                   <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default HotelListPage;
