// import { ChevronDown } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// const cities = [
//   'Bangalore', 'Chennai', 'Delhi', 'Gurgaon',
//   'Hyderabad', 'Kolkata', 'Mumbai', 'Noida', 'Pune'
// ];

// export default function Location() {
//   const [openCity, setOpenCity] = useState(null);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = (city) => {
//     setOpenCity(openCity === city ? null : city);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenCity(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="bg-white border-b shadow-md py-3 px-6">
//       <div className="flex flex-wrap justify-center items-center gap-4 relative">
//         {cities.map((city) => (
//           <div key={city} className="relative">
//             {/* City Button */}
//             <div
//               className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 ${
//                 openCity === city
//                   ? 'bg-white border border-gray-300 text-black shadow-sm'
//                   : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
//               }`}
//             >
//               <span>{city}</span>
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-200 ${
//                   openCity === city ? 'rotate-180' : ''
//                 }`}
//                 onClick={() => toggleDropdown(city)}
//               />
//             </div>

//             {/* Dropdown Panel */}
//             {openCity === city && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute top-12 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-4 z-50"
//               >
//                 <h4 className="font-semibold text-sm text-gray-900 mb-3">
//                   Popular Localities
//                 </h4>
//                 <a
//                   href="#"
//                   className="text-red-600 hover:text-red-700 text-sm font-semibold flex items-center justify-between"
//                 >
//                   All of {city}
//                   <span className="text-xl ml-1">›</span>
//                 </a>
//               </div>
//             )}
//           </div>
//         ))}

//         {/* All Cities Button */}
//         <div className="text-sm font-medium text-blue-700 cursor-pointer hover:underline hover:text-blue-800 transition-all duration-200">
//           All Cities
//         </div>
//       </div>
//     </div>
//   );
// }
