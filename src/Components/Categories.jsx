import React, {useState} from "react";
import { Link } from "react-router-dom";

const usdToInr = 83;

export const categories = [
  {
    image: "/images/h1.jpg",
    rating: 4.5,
    price: 10,
    unit: "night",
    hotel: "Hotels in Delhi",
  },
  {
    image: "/images/h2.jpg",
    rating: 3.2,
    price: 15,
    unit: "trip",
    hotel: "Hotels in Hyderabad",
  },
  {
    image: "/images/h2.jpg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Kolkata",
  },
  {
    image: "/images/h3.jpg",
    rating: 4.7,
    price: 299,
    unit: "session",
    hotel: "Hotels in Bengaluru",
  },
  {
    image: "/images/h4.jpg",
    rating: 3.9,
    price: 19,
    unit: "month",
    hotel: "Hotels in Bhubaneswar",
  },
  {
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Indore",
    
  },
  {
    image: "/images/h2.jpg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Patna",
  },
  {
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Lucknow",
  },
  {
    image: "/images/h2.jpg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Patiala",
  },
  {
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Jaipur",
  },
  {
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Jaipur",
  },
  {
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Jaipur",
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


  return (
    <div className="bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">
        Choose Your Hotel
      </h1>
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categories.map((cat, index) =>  {
        if (!showMoreHotels && index >= 10) return null; 
        return (
        <Link
          key={index}
          to={`/hotels/${index}`}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >

          <img
            src={cat.image}
            alt={cat.hotel}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-lg font-semibold text-gray-800">{cat.hotel}</p>
            <div className="mt-2 mb-1">{getStarRating(cat.rating)}</div>
            <p className="text-blue-600 font-bold text-md">
              ₹{(cat.price * usdToInr).toLocaleString("en-IN")}/
              <span className="text-sm text-gray-600">{cat.unit}</span>
            </p>
          </div>
         
        </Link>
        
      )})}
      </div>
      <button onClick={() => setShowMoreHotels((prev) => !prev)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition duration-200"><span className="text-lg">
        {showMoreHotels ? "Show Less": "Show More"} </span></button>
    </div>
  )
};

export default Categories;

