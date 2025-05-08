import React from "react";

const cities = [
  { name: "Chennai", image: "/Chennai/chennai.jpeg" },
  { name: "Delhi", image: "/Delhi/delhi.jpeg" },
  { name: "Gurgaon", image: "/Gurgaon/gurgaon.jpeg" },
  { name: "Hyderabad", image: "/Hyderabad/hyderabad.jpeg" },
  { name: "Kolkata", image: "/Kolkata/kolkata.jpeg" },
  { name: "Bangalore", image: "/Bangalore/bangalore.jpeg" },
  // Add more cities here
];

const CityScroller = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[80px] cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-20 h-20 rounded-full object-cover border"
            />
            <span className="mt-2 text-sm">{city.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityScroller;
