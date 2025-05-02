// import React from 'react';

// const Filter = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-6 space-y-8">
//       <h1 className="text-2xl font-bold">Filters</h1>

//       {/* Price Filter */}
//       <div>
//         <label className="block font-semibold mb-2">Price</label>
//         <input type="range" min="486" max="2670" className="w-full accent-red-500" />
//         <div className="flex justify-between text-sm text-gray-600 mt-1">
//           <span>₹486</span>
//           <span>₹2670</span>
//         </div>
//       </div>

//       {/* Collections */}
//       <div>
//         <label className="block font-semibold mb-2">Collections</label>
//         <div className="space-y-2">
//           {[
//             'Family OYOs',
//             'For Group Travellers',
//             'Local IDs accepted',
//             'OYOs welcomes couples',
//             'International Guests',
//           ].map((item, idx) => (
//             <label key={idx} className="flex items-center gap-2 text-gray-700">
//               <input type="checkbox" className="accent-red-500" />
//               {item}
//             </label>
//           ))}
//         </div>
//         <button className="text-red-600 text-sm mt-2">+ View More</button>
//       </div>

//       {/* Categories */}
//       <div>
//         <label className="block font-semibold mb-2">Categories</label>
//         <div className="space-y-2 text-sm text-gray-700">
//           {[
//             { title: 'OYO Rooms', desc: 'Super affordable stays with essential amenities' },
//             { title: 'Premium', desc: 'Hotels at prime location and premium amenities' },
//             { title: 'Townhouse', desc: 'Your friendly, premium neighbourhood hotel- Serviced by OYO' },
//             { title: 'Flagship', desc: 'Affordable hotels at Prime locations- Serviced by OYO' },
//             { title: 'Home', desc: 'Villas and apartments with extra space and privacy' },
//           ].map((item, idx) => (
//             <label key={idx} className="flex items-start gap-2">
//               <input type="checkbox" className="mt-1 accent-red-500" />
//               <span>
//                 <strong>{item.title}</strong> - {item.desc}
//               </span>
//             </label>
//           ))}
//         </div>
//         <button className="text-red-600 text-sm mt-2">+ View More</button>
//       </div>

//       {/* Accommodation Type */}
//       <div>
//         <label className="block font-semibold mb-2">Accommodation Type</label>
//         <div className="space-y-2 text-gray-700">
//           {['OYO Home', 'Hotel'].map((type, idx) => (
//             <label key={idx} className="flex items-center gap-2">
//               <input type="checkbox" className="accent-red-500" />
//               {type}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Hotel Facilities */}
//       <div>
//         <label className="block font-semibold mb-2">Hotel Facilities</label>
//         <div className="space-y-2 text-gray-700">
//           {['Seating area', 'AC', 'King Sized Bed', 'Queen Sized Bed', 'TV'].map((facility, idx) => (
//             <label key={idx} className="flex items-center gap-2">
//               <input type="checkbox" className="accent-red-500" />
//               {facility}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Wizard Member */}
//       <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-black text-yellow-400 flex items-center justify-center font-bold rounded-sm">
//             W
//           </div>
//           <div>
//             <p className="text-sm font-semibold">Wizard Member OYOs</p>
//             <p className="text-xs text-gray-500">Get 5% off on member hotels</p>
//           </div>
//         </div>
//         <button className="w-full text-sm bg-gray-200 hover:bg-gray-300 rounded px-3 py-1">
//           Show Only Wizard Member OYOs
//         </button>
//       </div>
    // </div>
//   );
// };

// export default Filter;
