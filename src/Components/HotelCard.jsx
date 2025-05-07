
// import React from "react";
// import { Link } from "react-router-dom";

// const HotelCard = ({ hotel }) => {
//   if (!hotel) return null; // Prevents errors if hotel is undefined

//   const {
//     id,
//     name = "Unnamed Hotel",
//     image = "https://via.placeholder.com/400x250", // Fallback image
//     location = "Unknown location",
//     price = "N/A",
//     rating = "No rating",
//   } = hotel;

//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
//       <img src={image} alt={name} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <p className="text-sm text-gray-600">{location}</p>
//         <p className="text-green-600 font-bold mt-2">
//           ₹{price}{" "}
//           <span className="text-sm font-normal text-gray-500">per night</span>
//         </p>
//         <p className="text-yellow-500">⭐ {rating}</p>
//         <div className="mt-3 flex justify-between">
//           <Link to={`/hotel/detail/${id}`}>
//             <button className="bg-red-500 text-white px-3 py-1 rounded">
//               View Details
//             </button>
//           </Link>
//           <button className="bg-green-600 text-white px-3 py-1 rounded">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  if (!hotel) return null;

  const {
    id,
    name = "Unnamed Hotel",
    image = "https://via.placeholder.com/400x250",
    location = "Unknown location",
    price = "N/A",
  
    stars = 0, // <-- Add this to accept star value
  } = hotel;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Star Badge */}
      {stars > 0 && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded shadow">
          {stars}★
        </div>
      )}

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-green-600 font-bold mt-2">
          ₹{price}{" "}
          <span className="text-sm font-normal text-gray-500">per night</span>
        </p>

        <div className="flex items-center mt-1">
          {[...Array(hotel.stars || 0)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-sm">⭐</span>
         ))}
        </div>


        <div className="mt-3 flex justify-between">
          <Link to={`/hotel/detail/${id}`}>
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              View Details
            </button>
          </Link>
          <button className="bg-green-600 text-white px-3 py-1 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

