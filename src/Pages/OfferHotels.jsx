import React from "react";
import { useParams, Link } from "react-router-dom";
import { offers } from "../Components/SpecialOffers"; // Ensure named export in SpecialOffers.jsx

const offerHotelsMap = {
  "Goa - Beach Resorts": [
    { name: "The Astor - All Suites Hotel Candolim", price: 5000, image: "/Goa/Goa-1.jpg", stars: 5, locationId: "Goa" },
    { name: "Taj Cidade de Goa Horizon", price: 5300, image: "/Goa/Goa-2.jpg",  stars: 5, locationId: "Goa"  },
    { name: "Mandrem Beach Resort", price: 4800, image: "/Goa/Goa-3.jpg",  stars: 4, locationId: "Goa"  },
    { name: "The Crescent", price: 4800, image: "/Goa/Goa-4.jpg",  stars: 4, locationId: "Goa"  },
    { name: "Mistral by the sea", price: 4800, image: "/Goa/Goa-5.jpg",  stars: 4, locationId: "Goa"  },
  ],
  "Udaipur - Luxury Lake Resorts": [
    { name: "Heritage Haveli Guest House", price: 4500, image: "/Udaipur/udaipur-1.jpg",  stars: 3 },
    { name: "The Grand Fateh", price: 4700, image: "/Udaipur/udaipur-2.jpg",  stars: 3 },
    { name: "Hotel Kalpshree", price: 4900, image: "/Udaipur/udaipur-3.jpg",  stars: 4 },
    { name: "Hotel Siddhartha Inn", price: 4900, image: "/Udaipur/udaipur-4.jpg",  stars: 4 },
    { name: "Hotel Taviral Regency", price: 4900, image: "/Udaipur/udaipur-5.jpg",  stars: 4 },
  ],
  "Manali - Summer Mountain Retreats": [
    { name: "Hotel Suryansh Regency", price: 9900, image: "/Manali/manali-1.jpg",  stars: 4 },
    { name: "Hotel Touch Wood Inn", price: 9900, image: "/Manali/manali-2.jpg",  stars: 5 },
    { name: "Echor Himalayan Aurum", price: 9900, image: "/Manali/manali-3.jpg",  stars: 4 },
    { name: "Mountain Galaxy", price: 9900, image: "/Manali/manali-4.jpg",  stars: 4 },
    { name: "Tripli Hotels stone House Cottages", price: 2144, image: "/Manali/manali-5.jpg",  stars: 4 },
  ],
};

const OfferHotels = () => {
  const { offerId } = useParams();
  const decodedId = decodeURIComponent(offerId);
  const selectedOffer = offers.find((o) => o.id === decodedId);
  const hotels = offerHotelsMap[decodedId] || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        {decodedId} Hotels
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {hotels.map((hotel, index) => (
          <Link
            to={`/offers/${encodeURIComponent(hotel.locationId)}/${encodeURIComponent(hotel.name)}`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "250px",
                background: "#f8f8f8",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                  <h3>{hotel.name}</h3>
                  <p>
                    <strong>₹{hotel.price}</strong> / night
                  </p>
                  <div style={{ color: "#FFD700", fontSize: "18px",                 marginTop: "5px" }}>
                    {"★".repeat(hotel.stars)}
                    {"☆".repeat(5 - hotel.stars)}
                  </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfferHotels;
