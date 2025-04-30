// import React, { useState } from 'react';

// const Hotelfilter = ({ onFilter }) => {
//   const [priceRange, setPriceRange] = useState('all');
//   const [rating, setRating] = useState('all');
//   const [amenities, setAmenities] = useState({
//     wifi: false,
//     pool: false,
//     gym: false,
//   });

//   const handleFilterChange = () => {
//     onFilter({ priceRange, rating, amenities });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Hotels</h2>

//       {/* Price Range */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Price Range</label>
//         <select
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="all">All Price Ranges</option>
//           <option value="low">Low ( $1000)</option>
//           <option value="medium">Medium ($1500 - $2000)</option>
//           <option value="high">High ( $3000)</option>
//         </select>
//       </div>

//       {/* Rating */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Rating</label>
//         <select
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         >
//           <option value="all"> Ratings</option>
//           <option value="1">1 Star</option>
//           <option value="2">2 Stars</option>
//           <option value="3">3 Stars</option>
//           <option value="4">4 Stars</option>
//           <option value="5">5 Stars</option>
//         </select>
//       </div>

//       {/* Amenities */}
//       {/* <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Amenities</label>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={amenities.wifi}
//             onChange={(e) => setAmenities({ ...amenities, wifi: e.target.checked })}
//             className="mr-2"
//           />
//           <label className="text-sm">Free WiFi</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={amenities.pool}
//             onChange={(e) => setAmenities({ ...amenities, pool: e.target.checked })}
//             className="mr-2"
//           />
//           <label className="text-sm">Swimming Pool</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={amenities.gym}
//             onChange={(e) => setAmenities({ ...amenities, gym: e.target.checked })}
//             className="mr-2"
//           />
//           <label className="text-sm">Gym</label>
//         </div>
//       </div> */}

//       <button
//         onClick={handleFilterChange}
//         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//       >
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default Hotelfilter;

import React, { useState } from 'react';

const Hotelfilter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [amenities, setAmenities] = useState({
    wifi: false,
    pool: false,
    gym: false,
  });

  const handleFilterChange = () => {
    onFilter({ priceRange, rating, amenities });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Hotels</h2>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Price Range</label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Price Ranges</option>
          <option value="low">Low ($1000)</option>
          <option value="medium">Medium ($1500 - $2000)</option>
          <option value="high">High ($3000+)</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={handleFilterChange}
        className="w-full bg-cyan-600 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Hotelfilter;
