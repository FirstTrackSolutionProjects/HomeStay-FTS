import React from "react";
import { useParams, Link } from "react-router-dom";

const hotelsByOffer = {
  honeymoon: [
    { name: "Ocean View Suite", price: 7500, image: "/images/hotel1.jpg" },
    { name: "Romantic Getaway", price: 8800, image: "/images/hotel2.jpg" },
    { name: "Luxury Villa", price: 12000, image: "/images/hotel3.jpg" },
    { name: "Sunset Paradise", price: 9500, image: "/images/hotel4.jpg" },
  ],
  beach: [
    { name: "Sea Breeze Resort", price: 4200, image: "/images/beach1.jpg" },
    { name: "Golden Sands Inn", price: 4600, image: "/images/beach2.jpg" },
    { name: "Coral Beach Hotel", price: 5000, image: "/images/beach3.jpg" },
    { name: "Sunset Shores", price: 5500, image: "/images/beach4.jpg" },
  ],
  mountain: [
    { name: "Mountain Top Hotel", price: 9100, image: "/images/mountain1.jpg" },
    { name: "Highland Escape", price: 9700, image: "/images/mountain2.jpg" },
    { name: "Alpine Retreat", price: 10000, image: "/images/mountain3.jpg" },
    { name: "Skyview Resort", price: 11000, image: "/images/mountain4.jpg" },
  ],
};

const OfferHotels = () => {
  const { offerId } = useParams();
  const hotels = hotelsByOffer[offerId] || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        {offerId.charAt(0).toUpperCase() + offerId.slice(1)} Hotels
      </h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
        {hotels.map((hotel, index) => (
          <Link 
            to={`/hotel/offer/${encodeURIComponent(hotel.name)}`} 
            key={index} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{
              width: "250px",
              background: "#f8f8f8",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}>
              <img src={hotel.image} alt={hotel.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{hotel.name}</h3>
                <p><strong>₹{hotel.price}</strong> / night</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfferHotels;
