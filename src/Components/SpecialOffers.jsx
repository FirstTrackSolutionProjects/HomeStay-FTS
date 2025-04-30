import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const offers = [
  { id: "honeymoon", title: "Honeymoon", price: "₹5,000 /night", image: "/images/honeymoon.jpg", offer: "20% Off" },
  { id: "beach", title: "Beach Retreat", price: "₹4,500 /night", image: "/images/room.jpg", offer: "Limited Time Deal" },
  { id: "mountain", title: "Mountain Escape", price: "₹9,900 /night", image: "/images/dining.jpeg", offer: "Free Breakfast" },
];

const bulletins = [
  { hotel: "Sunrise Resort", review: "An unforgettable experience! The ocean view was stunning, and the service was impeccable.", color: "rgba(255, 99, 132, 0.4)" },
  { hotel: "Mountain Bliss Hotel", review: "A perfect getaway in the hills. The cozy rooms and fresh air made our stay magical.", color: "rgba(54, 162, 235, 0.4)" },
  { hotel: "Paradise Beach Resort", review: "The best beachside retreat! Crystal-clear waters, delicious food, and a relaxing ambiance.", color: "rgba(75, 192, 192, 0.4)" },
  { hotel: "Elite Grand Hotel", review: "Luxury at its finest! The rooms were spacious, and the spa treatments were top-notch.", color: "rgba(255, 206, 86, 0.4)" },
];

const SpecialOffers = () => {
  const [currentBulletin, setCurrentBulletin] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBulletin((prev) => (prev + 1) % bulletins.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Best Offers of the Month</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <Link key={index} to={`/offer/${offer.id}`} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Special Offer</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{offer.title}</h3>
              <p className="text-gray-600">{offer.price}</p>
              <p className="text-sm text-green-700 font-semibold">{offer.offer}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* <div
        className="mt-8 max-w-3xl mx-auto p-4 rounded-lg backdrop-blur-md text-center transition-colors duration-500"
        style={{
          backgroundColor: bulletins[currentBulletin].color,
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <p className="text-md md:text-lg font-medium text-gray-800">
          <strong>📢 {bulletins[currentBulletin].hotel}</strong>: "{bulletins[currentBulletin].review}"
        </p>
      </div> */}
    </div>
  );
};

export default SpecialOffers;
