import React from "react";
import { useNavigate } from "react-router-dom";
const cities = [
  { name: "Chennai", image: "City/Chennai/chennai.jpeg" },
  { name: "Delhi", image: "City/Delhi/delhi.jpeg" },
  { name: "Gurgaon", image: "City/Gurgaon/gurgaon.jpeg" },
  { name: "Hyderabad", image: "City/Hyderabad/hyderabad.jpeg" },
  { name: "Kolkata", image: "City/Kolkata/kolkata.jpeg" },
  { name: "Banglore", image: "City/Banglore/banglore.jpeg" },
  { name: "Mumbai", image: "City/Mumbai/mumbai.jpeg" },
  { name: "Pune", image: "City/Pune/pune.jpeg" },
  { name: "Ahmedabad", image: "City/ahmedabad/ahmedabad.jpeg" },
  { name: "Jaipur", image: "City/Jaipur/jaipur.jpeg" },
  { name: "Chandigarh", image: "City/Chandigarh/chandigarh.jpeg" },
  { name: "Indore", image: "City/Indore/indore.jpeg" },
  { name: "Bhubaneswar", image: "City/Bhubaneswar/bhubaneswar.jpeg" },
  { name: "Coimbatore", image: "City/Coimbatore/coimbatore.jpeg" },
  { name: "Lucknow", image: "City/Lucknow/lucknow.jpeg" },
  { name: "Visakhapatnam", image: "City/Vizag/vizag.jpeg" },
  { name: "Ranchi", image: "City/Ranchi/ranchi.jpeg" },
  { name: "Cuttack", image: "City/Cuttack/cuttack.jpeg" },
  { name: "Puri", image: "City/Puri/puri.jpeg" },
  { name: "Ayodhya", image: "City/Ayodhya/ayodhya.jpeg" },
];

const CityScroller = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[80px] cursor-pointer hover:scale-105 transition-transform"
             onClick={() => navigate(`/city/${city.name.toLowerCase()}`)}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-20 h-20 rounded-full object-cover border"
            />
            <p className="mt-2 text-sm font-medium text-ce">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityScroller;
