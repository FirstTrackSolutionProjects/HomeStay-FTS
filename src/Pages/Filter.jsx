// import { useState } from "react";

// const Filter = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     breakfast: false,
//     wifi: false,
//     pool: false,
//     lowToHigh: false,
//     highToLow: false,
//     topRated: false,
//   });

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     const updatedFilters = { ...filters, [name]: checked };
//     setFilters(updatedFilters);
//     onFilterChange(updatedFilters); // Propagate changes to parent
//   };

//   return (
//     <div className="w-full max-w-sm p-4 border rounded-lg shadow-md bg-white space-y-4">
//       <h2 className="text-lg font-semibold">Filters</h2>

//       <div className="space-y-3">
//         <div className="font-medium text-sm text-gray-600">Amenities</div>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="breakfast"
//             checked={filters.breakfast}
//             onChange={handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           Free Breakfast
//         </label>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="wifi"
//             checked={filters.wifi}
//             onChange={handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           Free Wi-Fi
//         </label>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="pool"
//             checked={filters.pool}
//             onChange={handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           Swimming Pool
//         </label>
//       </div>

//       <div className="space-y-3 pt-2 border-t">
//         <div className="font-medium text-sm text-gray-600">Sort By</div>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="lowToHigh"
//             checked={filters.lowToHigh}
//             onChange={handleChange}
//             className="form-checkbox text-green-600"
//           />
//           Price: Low to High
//         </label>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="highToLow"
//             checked={filters.highToLow}
//             onChange={handleChange}
//             className="form-checkbox text-green-600"
//           />
//           Price: High to Low
//         </label>
//         <label className="flex items-center gap-2 text-sm">
//           <input
//             type="checkbox"
//             name="topRated"
//             checked={filters.topRated}
//             onChange={handleChange}
//             className="form-checkbox text-green-600"
//           />
//           Top Rated
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Filter;

import React from 'react'

const Filter = () => {
  return (
    <div>Filter</div>
  )
}

export default Filter
