import React from "react";
import { Link } from "react-router-dom";

const hotels = [
  {
    id: 1,
    city: "delhi",
    name: "Hotels in Delhi",
    image: "/City/Delhi/delhi.jpeg",
    
  },
  {
    id: 2,
    city: "hyderabad",
    name: "Hotels in Hyderabad",
    image: "/City/Hyderabad/hyderabad.jpeg",
   
  },
];

const Nearby = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Nearby Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {hotels.map((hotel) => (
          <Link key={hotel.id} to={`/city/${hotel.city}`}>
            <div className="rounded-lg shadow-md  p-4 hover:shadow-lg  cursor-pointer">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-bold">{hotel.name}</h3>
              <div className="flex items-center text-sm mt-1">
             </div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nearby;
