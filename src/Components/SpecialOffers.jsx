import React from "react";
import { Link } from "react-router-dom";

export const offers = [
  { id: "goa", title: "Goa - Beach Resorts",  image: "City/Goa/goa.jpg", offer: "20% Off" },
  { id: "udaipur", title: "Udaipur - Luxury Lake Resorts",  image: "City/Udaipur/udaipur.jpg", offer: "Limited Time Deal" },
  { id: "manali", title: "Manali - Summer Mountain Retreats",  image: "City/Manali/manali.jpg", offer: "Free Breakfast" },
];

const SpecialOffers = () => {
  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Best Offers of the Month</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offers.map((offer) => (
          <Link
            key={offer.id}
            to={`/offer/${offer.id}`} // city id used here
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Special Offer</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{offer.title}</h3>
              <p className="text-sm text-green-700 font-semibold">{offer.offer}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
