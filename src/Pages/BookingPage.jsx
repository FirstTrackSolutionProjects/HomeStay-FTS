// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import cityHotelsData from "../data/cityHotelsData";
// import offerHotels from "../data/offer";

// const BookingPage = () => {
//   const { cityName, hotelId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   let hotel = location.state?.hotel;
//   if (!hotel) {
//     hotel =
//       cityName === "offer"
//         ? offerHotels.find((h) => h.id === Number(hotelId))
//         : cityHotelsData[cityName?.toLowerCase()]?.find(
//             (h) => h.id === Number(hotelId)
//           );
//   }
//   const { state } = location;
//   const [fullName, setFullName] = useState(state?.fullName || "");
//   const [email, setEmail] = useState(state?.email || "");
//   const [mobile, setMobile] = useState(state?.mobile || "");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [nights, setNights] = useState(1);
//   const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);

//   const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

//   useEffect(() => {
//     if (checkIn && checkOut) {
//       const inDate = new Date(checkIn);
//       const outDate = new Date(checkOut);
//       const diff = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
//       setNights(diff > 0 ? diff : 1);
//     }
//   }, [checkIn, checkOut]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setRoomDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const totalGuests = rooms.reduce(
//     (sum, room) => sum + room.adults + room.children,
//     0
//   );

//   // Get price based on day (e.g. higher on Fri/Sat)
//   const getNightlyPrice = (date) => {
//     const d = new Date(date);
//     const day = d.getDay(); // 0 = Sunday, 6 = Saturday
//     if (day === 5 || day === 6) {
//       return hotel?.weekendPrice || hotel?.price * 1.5; // 50% more
//     }
//     return hotel?.price;
//   };

//   const getDateRange = (start, end) => {
//     const date = new Date(start);
//     const dates = [];
//     while (date < new Date(end)) {
//       dates.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return dates;
//   };

//   const getTotalRoomPrice = () => {
//     if (!checkIn || !checkOut || !hotel) return 0;
//     const dates = getDateRange(checkIn, checkOut);
//     const totalPerRoom = dates.reduce(
//       (sum, date) => sum + getNightlyPrice(date),
//       0
//     );
//     return totalPerRoom * rooms.length;
//   };

//   const basePrice = getTotalRoomPrice();
//   const discount = 300 + 250;
//   const taxes = 50;
//   const payableAmount = basePrice - discount + taxes;

//   const handleContinue = () => {
//     navigate("/payment", {
//       state: {
//         fullName,
//         email,
//         mobile,
//         checkIn,
//         checkOut,
//         nights,
//         hotel,
//         payableAmount,
//         rooms,
//       },
//     });
//   };

//   const updateRoom = (index, field, value) => {
//     setRooms((prev) => {
//       const updated = [...prev];
//       updated[index][field] = value;
//       return updated;
//     });
//   };

//   const addRoom = () => {
//     setRooms((prev) => [...prev, { adults: 1, children: 0 }]);
//   };

//   const removeRoom = (index) => {
//     setRooms((prev) => prev.filter((_, i) => i !== index));
//   };

//   return hotel ? (
//     <div className="flex flex-col md:flex-row justify-between p-6 gap-6">
//       {/* Left: Guest Details */}
//       <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
//           <div>
//             <label>Full Name</label>
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="border p-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border p-2 w-full rounded"
//             />
//           </div>
//           <div>
//            <div>

//             <label>Mobile</label>
//               <div className="flex">
//                 <select className="border p-2 rounded-l w-24">
//                 <option value="+91">+91 🇮🇳</option>
//                 <option value="+1">+1 🇺🇸</option>
//                 <option value="+44">+44 🇬🇧</option>
//                 <option value="+61">+61 🇦🇺</option>
//                 <option value="+971">+971 🇦🇪</option>
//             {/* Add more country codes if needed */}
//                 </select>
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Phone number"
//               className="border border-l-0 p-2 w-full rounded-r"
//     />
//   </div>
// </div>

//           </div>

//           {/* Guests Dropdown */}
//           <div className="relative md:col-span-2" ref={dropdownRef}>
//             <label>Guests</label>
//             <div
//               onClick={() => setRoomDropdownOpen(!roomDropdownOpen)}
//               className="border p-2 w-full rounded cursor-pointer"
//             >
//               {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
//               {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
//             </div>

//             {roomDropdownOpen && (
//               <div className="absolute bg-white border rounded shadow-md p-4 z-10 w-full top-20 space-y-4">
//                 {rooms.map((room, index) => (
//                   <div key={index} className="border p-3 rounded">
//                     <div className="flex justify-between items-center mb-2">
//                       <h4 className="font-semibold">Room {index + 1}</h4>
//                       {index > 0 && (
//                         <button
//                           type="button"
//                           className="text-red-500 text-sm"
//                           onClick={() => removeRoom(index)}
//                         >
//                           Remove
//                         </button>
//                       )}
//                     </div>
//                     <div className="flex justify-between items-center mb-2">
//                       <span>Adults (Ages 5+)</span>
//                       <div className="flex items-center gap-2">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             updateRoom(index, "adults", Math.max(1, room.adults - 1))
//                           }
//                           className="px-2 py-1 border rounded"
//                         >
//                           −
//                         </button>
//                         <span>{room.adults}</span>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             updateRoom(index, "adults", room.adults + 1)
//                           }
//                           className="px-2 py-1 border rounded"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span>Children (Ages 0–5)</span>
//                       <div className="flex items-center gap-2">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             updateRoom(index, "children", Math.max(0, room.children - 1))
//                           }
//                           className="px-2 py-1 border rounded"
//                         >
//                           −
//                         </button>
//                         <span>{room.children}</span>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             updateRoom(index, "children", room.children + 1)
//                           }
//                           className="px-2 py-1 border rounded"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 <button
//                   type="button"
//                   onClick={addRoom}
//                   className="w-full bg-gray-100 border rounded py-2 hover:bg-gray-200 text-sm"
//                 >
//                   + Add Another Room
//                 </button>

//                 <button
//                   type="button"
//                   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//                   onClick={() => setRoomDropdownOpen(false)}
//                 >
//                   Done
//                 </button>
//               </div>
//             )}
//           </div>

//           <div>
//             <label>Check-in</label>
//             <input
//               type="date"
//               value={checkIn}
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="border p-2 w-full rounded"
//             />
//           </div>
//           <div>
//             <label>Check-out</label>
//             <input
//               type="date"
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="border p-2 w-full rounded"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="button"
//               onClick={handleContinue}
//               className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mt-2"
//             >
//               Continue
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Right: Booking Summary */}
//       <div className="w-full md:w-1/3 bg-white p-4 rounded shadow">
//         <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
//         <img
//           src={hotel.images?.[0]}
//           alt={hotel.name}
//           className="w-full h-40 object-cover mb-2"
//         />
//         {checkIn && checkOut && (
//           <p className="text-sm mb-1">
//             {checkIn} to {checkOut}
//           </p>
//         )}
        

//         <div className="text-sm space-y-1">
//         <p className="text-sm mb-1">
//           {nights} Night{nights > 1 ? "s" : ""} · {rooms.length} Room
//           {rooms.length > 1 ? "s" : ""} · {totalGuests} Guest
//           {totalGuests > 1 ? "s" : ""}
//         </p>

//           <p className="font-medium">Total Base Price: ₹{basePrice}</p>
//           <p>Discount: -₹300</p>
          
//           <p>Taxes: +₹50</p>
//         </div>

//         <hr className="my-2" />
//         <div className="font-bold text-lg">Payable Amount: ₹{payableAmount}</div>
//       </div>
//     </div>
//   ) : (
//     <p>Hotel not found.</p>
//   );
// };

// export default BookingPage;

import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import cityHotelsData from "../data/cityHotelsData";
import offerHotelsByCity from "../data/offer";

const BookingPage = () => {
  const { cityName, hotelId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  let hotel = state?.hotel;

  if (!hotel) {
    if (cityName === "offer") {
      const allOfferHotels = Object.values(offerHotelsByCity).flat();
      hotel = allOfferHotels.find((h) => String(h.id) === String(hotelId));
    } else {
      hotel = cityHotelsData[cityName?.toLowerCase()]?.find(
        (h) => String(h.id) === String(hotelId)
      );
    }
  }

  useEffect(() => {
    console.log("Hotel Object:", hotel);
    console.log("Hotel Images:", hotel?.images);
    console.log("Hotel Price:", hotel?.price);
  }, []);

  const [fullName, setFullName] = useState(state?.fullName || "");
  const [email, setEmail] = useState(state?.email || "");
  const [mobile, setMobile] = useState(state?.mobile || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(1);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  useEffect(() => {
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);
      const diff = Math.ceil((outDate - inDate) / (1000 * 60 * 60 * 24));
      setNights(diff > 0 ? diff : 1);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRoomDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalGuests = rooms.reduce(
    (sum, room) => sum + room.adults + room.children,
    0
  );

  const getNightlyPrice = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const base = Number(hotel?.price) || 1000; // fallback price
    const weekend = Number(hotel?.weekendPrice) || base * 1.5;
    return day === 5 || day === 6 ? weekend : base;
  };

  const getDateRange = (start, end) => {
    const date = new Date(start);
    const dates = [];
    while (date < new Date(end)) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const getTotalRoomPrice = () => {
    if (!checkIn || !checkOut || !hotel) return 0;
    const dates = getDateRange(checkIn, checkOut);
    const totalPerRoom = dates.reduce(
      (sum, date) => sum + getNightlyPrice(date),
      0
    );
    return totalPerRoom * rooms.length;
  };

  const basePrice = getTotalRoomPrice();
  const discount = 300 + 250;
  const taxes = 50;
  const payableAmount = basePrice - discount + taxes;

  const handleContinue = () => {
    navigate("/payment", {
      state: {
        fullName,
        email,
        mobile,
        checkIn,
        checkOut,
        nights,
        hotel,
        payableAmount,
        rooms,
      },
    });
  };

  const updateRoom = (index, field, value) => {
    setRooms((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const addRoom = () => {
    setRooms((prev) => [...prev, { adults: 1, children: 0 }]);
  };

  const removeRoom = (index) => {
    setRooms((prev) => prev.filter((_, i) => i !== index));
  };

  if (!hotel) return <p className="text-center mt-8">Hotel not found.</p>;

  return (
    <div className="max-w-6xl w-full mx-auto mt-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Enter your details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="mt-4 flex">
            <select className="border p-2 rounded-l w-28">
              <option value="+91">+91 🇮🇳</option>
              <option value="+1">+1 🇺🇸</option>
              <option value="+44">+44 🇬🇧</option>
              <option value="+61">+61 🇦🇺</option>
              <option value="+971">+971 🇦🇪</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border border-l-0 p-2 rounded-r w-full"
            />
          </div>

          {/* Guests Dropdown */}
          <div className="mt-4 relative" ref={dropdownRef}>
            <div
              onClick={() => setRoomDropdownOpen(!roomDropdownOpen)}
              className="border p-2 w-full rounded cursor-pointer"
            >
              {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
              {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
            </div>
            {roomDropdownOpen && (
              <div className="absolute bg-white border rounded shadow-md p-4 z-10 w-full top-16 space-y-4">
                {rooms.map((room, index) => (
                  <div key={index} className="border p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Room {index + 1}</h4>
                      {index > 0 && (
                        <button
                          type="button"
                          className="text-red-500 text-sm"
                          onClick={() => removeRoom(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Adults (5+)</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateRoom(index, "adults", Math.max(1, room.adults - 1))
                          }
                          className="px-2 py-1 border rounded"
                        >
                          −
                        </button>
                        <span>{room.adults}</span>
                        <button
                          type="button"
                          onClick={() => updateRoom(index, "adults", room.adults + 1)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Children (0–5)</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateRoom(index, "children", Math.max(0, room.children - 1))
                          }
                          className="px-2 py-1 border rounded"
                        >
                          −
                        </button>
                        <span>{room.children}</span>
                        <button
                          type="button"
                          onClick={() => updateRoom(index, "children", room.children + 1)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addRoom}
                  className="w-full bg-gray-100 border rounded py-2 hover:bg-gray-200 text-sm"
                >
                  + Add Another Room
                </button>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  onClick={() => setRoomDropdownOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={checkIn}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <button
            onClick={handleContinue}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Continue
          </button>
        </div>

        {/* Hotel Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">{hotel.name}</h2>
          <img
  src={hotel.images?.[0]}
  alt={hotel.name}
  onError={(e) => (e.target.src = "/fallback.jpg")}
  className="w-full h-40 object-cover rounded"
/>

          {checkIn && checkOut && (
            <p className="text-sm mt-2">
              {checkIn} to {checkOut}
            </p>
          )}
          <p className="text-sm mt-2">
            {nights} Night{nights > 1 ? "s" : ""} · {rooms.length} Room
            {rooms.length > 1 ? "s" : ""} · {totalGuests} Guest
            {totalGuests > 1 ? "s" : ""}
          </p>
          <div className="text-sm mt-2 space-y-1">
            <p>Total Base Price: ₹{basePrice}</p>
            <p className="text-green-600">Discount: -₹{discount}</p>
            <p className="text-red-600">Taxes: +₹{taxes}</p>
          </div>
          <hr className="my-3" />
          <p className="font-bold text-lg">
            Payable Amount: ₹{payableAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
