import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const hotelsDetails = {
  "Ocean View Suite": {
    price: 7500,
    images: ["/images/hotel1.jpg", "/images/hotel1_2.jpg", "/images/hotel1_3.jpg"],
    description: "Enjoy breathtaking ocean views and luxury amenities in our Ocean View Suite.",
  },
  "Romantic Getaway": {
    price: 8800,
    images: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
    description: "Perfect for couples, a cozy and romantic experience awaits you.",
  },
  "Luxury Villa": { 
     price: 12000, 
     image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
     description: "Experience premium comfort and private pools in our luxury villas." 
    },
    "Sunset Paradise": { 
        price: 9500, 
        image:["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
        description: "Witness magical sunsets from your private balcony." 
      },
      "Sea Breeze Resort": { 
        price: 4200, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
        description: "Feel the fresh sea breeze while enjoying our top-notch service." 
      },
      "Golden Sands Inn": { 
        price: 4600, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"], 
        description: "Stay right on the golden beaches with cozy amenities." 
      },
      "Coral Beach Hotel": { 
        price: 5000, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
        description: "Explore coral reefs and beach fun at Coral Beach Hotel." 
      },
      "Sunset Shores": { 
        price: 5500, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"], 
        description: "Relax in beautiful beachside rooms with sunset views." 
      },
      "Mountain Top Hotel": { 
        price: 9100, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],
        description: "Breathtaking mountain views and peace await you." 
      },
      "Highland Escape": { 
        price: 9700, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"], 
        description: "Reconnect with nature in our Highland Escape cottages." 
      },
      "Alpine Retreat": { 
        price: 10000, 
        image: ["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"], 
        description: "Luxury retreat with snow-capped mountains around." 
      },
      "Skyview Resort": { 
        price: 11000, 
        image:["/images/hotel2.jpg", "/images/hotel2_2.jpg", "/images/hotel2_3.jpg"],  
        description: "Stay in style at the highest peak resorts with Skyview Resort." 
      }
    };



const OfferDetails = () => {
  const { hotelName } = useParams();
  const decodedName = decodeURIComponent(hotelName);
  const hotel = hotelsDetails[decodedName];

  if (!hotel) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Hotel not found</h2>;
  }

  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // Change image every 3 seconds
    pauseOnHover: true,  // Pause the slider when hovering
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>{decodedName}</h1>
      <Slider {...settings}>
        {hotel.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${decodedName} ${index + 1}`}
              style={{ width: "70%", maxWidth: "600px", borderRadius: "10px", margin: "20px 0" }}
            />
          </div>
        ))}
      </Slider>
      <h2>₹{hotel.price} / night</h2>
      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px" }}>
        {hotel.description}
      </p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default OfferDetails;
