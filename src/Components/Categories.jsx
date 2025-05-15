import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const usdToInr = 83;

export const categories = [
  {
    image: "City/Delhi/delhi.jpeg",
    rating: 4.5,
    price: 10,
    unit: "night",
    hotel: "Hotels in Delhi",
  },
  {
    image: "City/Hyderabad/hyderabad.jpeg",
    rating: 3.2,
    price: 15,
    unit: "trip",
    hotel: "Hotels in Hyderabad",
  },
  {
    image: "City/Kolkata/kolkata.jpeg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Kolkata",
  },
  {
    image: "City/Banglore/banglore.jpeg",
    rating: 4.7,
    price: 299,
    unit: "session",
    hotel: "Hotels in Bangalore",
  },
  {
    image: "City/bhubaneswar/bhubaneswar.jpeg",
    rating: 3.9,
    price: 19,
    unit: "month",
    hotel: "Hotels in Bhubaneswar",
  },
  {
    image: "City/Indore/indore.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Indore",
  },
  {
    image: "City/Chandigarh/chandigarh.jpeg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Chandigarh",
  },
  {
    image: "City/Pune/pune.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Pune",
  },
  {
    image: "City/Coimbatore/coimbatore.jpeg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in  Coimbatore",
  },
  {
    image: "City/Jaipur/jaipur.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Jaipur",
  },
  {
    image: "City/Ayodhya/ayodhya.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Ayodhya",
  },
  {
    image: "City/Ranchi/ranchi.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Ranchi",
  },
  {
    image: "City/Surat/surat.jpeg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Surat",
  },
];

const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="text-yellow-500 text-sm">
      {"★".repeat(fullStars)}
      {hasHalfStar ? "½" : ""}
      {"☆".repeat(emptyStars)}
      <span className="text-gray-600 ml-1">({rating})</span>
    </span>
  );
};

const Categories = () => {
  const [showMoreHotels, setShowMoreHotels] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (hotelName) => {
    const city = hotelName.replace("Hotels in", "").trim().toLowerCase();
    navigate(`/city/${city}`);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">Choose Your Hotel</h1>
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((cat, index) => {
          if (!showMoreHotels && index >= 10) return null;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(cat.hotel)}
              className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cat.image}
                alt={cat.hotel}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">
                  {cat.hotel}
                </p>
                <div className="mt-2 mb-1">{getStarRating(cat.rating)}</div>
                <p className="text-blue-600 font-bold text-md">
                  ₹{(cat.price * usdToInr).toLocaleString("en-IN")}/
                  <span className="text-sm text-gray-600">{cat.unit}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowMoreHotels((prev) => !prev)}
        className="bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition duration-200"
      >
        <span className="text-lg">{showMoreHotels ? "Show Less" : "Show More"}</span>
      </button>
    </div>
  );
};

export default Categories;



