import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const allHotels = {
  p1: {
    name: "Hotel Shanti Palace",
    images: [
      "/images/h1-1.jpg",
      "/images/h1-2.jpg",
      "/images/h1-3.jpg",
      "/images/h1-4.jpg",
      "/images/h1-5.jpg",
    ],
    price: 5727,
    unit: "night",
    description: "Comfortable stay with free WiFi, breakfast & city view.",
    amenities: ["Free WiFi", "City View", "Breakfast Included", "Online Payment"],
    location: "Plot No 45, Gali No 3, Near Railway Station, Paharganj, Delhi",
    rooms: [
      {
        name: "Classic",
        image: "/room-image.png",
        size: "9 sqm",
        amenities: ["🛁 Toiletries", "🚿 Washing Area", "🛏️ Comfortable Mattress", "🛋️ Sofa"],
        price: 1479,
        originalPrice: 6511,
      },
    ],
  },
  p2: {
    name: "Hotel Classic Deluxe",
    images: [
      "/images/h2-1.jpg",
      "/images/h2-2.jpg",
      "/images/h2-3.jpg",
      "/images/h2-4.jpg",
      "/images/h2-5.jpg",
    ],
    price: 4899,
    unit: "night",
    description: "Affordable and centrally located with AC rooms.",
    amenities: ["AC Rooms", "Free WiFi", "Elevator Access", "Parking Available"],
    location: "Arya Samaj Road, Karol Bagh, Delhi",
    rooms: [
      {
        name: "Premium",
        image: "/room-image.png",
        size: "12 sqm",
        amenities: ["🛁 Toiletries", "🚿 Washing Area", "🛏️ Comfortable Mattress"],
        price: 1899,
        originalPrice: 7500,
      },
    ],
  },
  p3: {
    name: "Hotel Sunrise Residency",
    images: [
      "/images/h3-1.jpg",
      "/images/h3-2.jpg",
      "/images/h3-3.jpg",
      "/images/h3-4.jpg",
      "/images/h3-5.jpg",
    ],
    price: 6300,
    unit: "night",
    description: "Luxury stay with pool, gym & spa services.",
    amenities: ["Swimming Pool", "Gym", "Free WiFi", "Spa"],
    location: "Jama Masjid Road, Old Delhi",
    rooms: [
      {
        name: "Royal Suite",
        image: "/room-image.png",
        size: "25 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🍽️ Dining Area", "🛋️ Sofa"],
        price: 4999,
        originalPrice: 13000,
      },
    ],
  },
  p4: {
    name: "The Royal stay",
    images: [
      "/images/h4-1.jpg",
      "/images/h4-2.jpg",
      "/images/h4-3.jpg",
      "/images/h4-4.jpg",
      "/images/h4-5.jpg",
    ],
    price: 4999,
    unit: "night",
    description: "A cozy stay with excellent service and food.",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "24/7 Reception"],
    location: "Connaught Place, New Delhi",
    rooms: [
      {
        name: "Economy",
        image: "/room-image.png",
        size: "10 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress", "🛋️ Sofa"],
        price: 1999,
        originalPrice: 6000,
      },
    ],
  },
  h1: {
    name: "OYO Banjara View",
    images: [
      "/images/h4-1.jpg",
      "/images/h4-2.jpg",
      "/images/h4-3.jpg",
      "/images/h4-4.jpg",
      "/images/h4-5.jpg",
    ],
    price: 4999,
    unit: "night",
    description: "A cozy stay with excellent service and food.",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "24/7 Reception"],
    location: "Connaught Place, New Delhi",
    rooms: [
      {
        name: "Economy",
        image: "/room-image.png",
        size: "10 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress", "🛋️ Sofa"],
        price: 1999,
        originalPrice: 6000,
      },
    ],
  },
  h2: {
    name: "Hotel Golkonda premium",
    images: [
      "/images/h4-1.jpg",
      "/images/h4-2.jpg",
      "/images/h4-3.jpg",
      "/images/h4-4.jpg",
      "/images/h4-5.jpg",
    ],
    price: 4700,
    unit: "night",
    description: "Affordable stay with a range of amenities for travelers.",
    amenities: ["Free WiFi", "24/7 Reception", "Room Service", "Parking Available"],
    location: "Saket, New Delhi",
    rooms: [
      {
        name: "Standard",
        image: "/room-image.png",
        size: "11 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress", "🛋️ Sofa"],
        price: 2300,
        originalPrice: 5200,
      },
    ],
  },
  h3: {
    name: "The City Pearl",
    images: [
      "/images/h4-1.jpg",
      "/images/h4-2.jpg",
      "/images/h4-3.jpg",
      "/images/h4-4.jpg",
      "/images/h4-5.jpg",
    ],
    price: 6000,
    unit: "night",
    description: "Escape the city with a luxurious stay and top-notch amenities.",
    amenities: ["Free WiFi", "Room Service", "Spa", "Restaurant"],
    location: "Vasant Kunj, New Delhi",
    rooms: [
      {
        name: "Deluxe",
        image: "/room-image.png",
        size: "20 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🍽️ Dining Area"],
        price: 3500,
        originalPrice: 10000,
      },
    ],
  },
  h4: {
    name: "Urban Nest Suites",
    images: [
      "/images/h4-1.jpg",
      "/images/h4-2.jpg",
      "/images/h4-3.jpg",
      "/images/h4-4.jpg",
      "/images/h4-5.jpg",
    ],
    price: 6500,
    unit: "night",
    description: "Luxurious rooms with scenic views and premium services.",
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Parking Available"],
    location: "Lajpat Nagar, New Delhi",
    rooms: [
      {
        name: "Premium Suite",
        image: "/room-image.png",
        size: "25 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🛋️ Sofa", "🍽️ Dining Area"],
        price: 5000,
        originalPrice: 12000,
      },
    ],
  },
  b1: {
    name: "Bella Vista Residency",
    images: [
      "/images/b1-1.jpg",
      "/images/b1-2.jpg",
      "/images/b1-3.jpg",
      "/images/b1-4.jpg",
    ],
    price: 3500,
    unit: "night",
    description: "Budget-friendly hotel with basic amenities.",
    amenities: ["Free WiFi", "24/7 Reception", "Room Service"],
    location: "Sector 15, Gurugram",
    rooms: [
      {
        name: "Standard",
        image: "/room-image.png",
        size: "8 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress"],
        price: 1200,
        originalPrice: 4000,
      },
    ],
  },
  b2: {
    name: "Green Tree Hotel",
    images: [
      "/images/b2-1.jpg",
      "/images/b2-2.jpg",
      "/images/b2-3.jpg",
      "/images/b2-4.jpg",
    ],
    price: 4200,
    unit: "night",
    description: "Comfortable rooms and a great location in the city.",
    amenities: ["Free WiFi", "Restaurant", "24/7 Reception", "Parking Available"],
    location: "MG Road, Gurugram",
    rooms: [
      {
        name: "Deluxe",
        image: "/room-image.png",
        size: "15 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress", "🍽️ Dining Area"],
        price: 2900,
        originalPrice: 8500,
      },
    ],
  },
  b3: {
    name: "Maple Woods Residency",
    images: [
      "/images/b3-1.jpg",
      "/images/b3-2.jpg",
      "/images/b3-3.jpg",
      "/images/b3-4.jpg",
    ],
    price: 5000,
    unit: "night",
    description: "A peaceful retreat with scenic views and modern amenities.",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Parking Available"],
    location: "Dwarka, Delhi",
    rooms: [
      {
        name: "Superior",
        image: "/room-image.png",
        size: "18 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress"],
        price: 3300,
        originalPrice: 11000,
      },
    ],
  },
  b4: {
    name: "Blue lagoon Hotel",
    images: [
      "/images/b4-1.jpg",
      "/images/b4-2.jpg",
      "/images/b4-3.jpg",
      "/images/b4-4.jpg",
    ],
    price: 4200,
    unit: "night",
    description: "Affordable stay with great service and comfortable rooms.",
    amenities: ["Free WiFi", "Room Service", "Gym", "Restaurant"],
    location: "Vasant Vihar, Delhi",
    rooms: [
      {
        name: "Basic",
        image: "/room-image.png",
        size: "10 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress"],
        price: 2000,
        originalPrice: 5000,
      },
    ],
  },
  j1: {
    name: "Ocean view Palace",
    images: [
      "/images/j1-1.jpg",
      "/images/j1-2.jpg",
      "/images/j1-3.jpg",
      "/images/j1-4.jpg",
    ],
    price: 6000,
    unit: "night",
    description: "Luxurious and modern stay with scenic views.",
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant"],
    location: "Connaught Place, New Delhi",
    rooms: [
      {
        name: "Luxury Suite",
        image: "/room-image.png",
        size: "22 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🛋️ Sofa", "🍽️ Dining Area"],
        price: 5000,
        originalPrice: 13000,
      },
    ],
  },
  j2: {
    name: "Jaipur Grand Suite",
    images: [
      "/images/j2-1.jpg",
      "/images/j2-2.jpg",
      "/images/j2-3.jpg",
      "/images/j2-4.jpg",
    ],
    price: 4600,
    unit: "night",
    description: "Affordable and cozy stay with friendly service.",
    amenities: ["Free WiFi", "24/7 Reception", "Room Service", "Restaurant"],
    location: "Rajouri Garden, New Delhi",
    rooms: [
      {
        name: "Standard",
        image: "/room-image.png",
        size: "10 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress"],
        price: 2200,
        originalPrice: 6500,
      },
    ],
  },
  j3: {
    name: "Sunset Residency",
    images: [
      "/images/j3-1.jpg",
      "/images/j3-2.jpg",
      "/images/j3-3.jpg",
      "/images/j3-4.jpg",
    ],
    price: 5700,
    unit: "night",
    description: "Premium stay with state-of-the-art facilities.",
    amenities: ["Free WiFi", "Room Service", "Spa", "Restaurant"],
    location: "Vasant Vihar, New Delhi",
    rooms: [
      {
        name: "Suite",
        image: "/room-image.png",
        size: "20 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🛋️ Sofa", "🍽️ Dining Area"],
        price: 3500,
        originalPrice: 9500,
      },
    ],
  },
  j4: {
    name: "Sapphire Palace",
    images: [
      "/images/j4-1.jpg",
      "/images/j4-2.jpg",
      "/images/j4-3.jpg",
      "/images/j4-4.jpg",
    ],
    price: 5200,
    unit: "night",
    description: "A premium stay with a perfect combination of luxury and comfort.",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Gym"],
    location: "Saket, New Delhi",
    rooms: [
      {
        name: "Luxury",
        image: "/room-image.png",
        size: "18 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🛋️ Sofa"],
        price: 2800,
        originalPrice: 9000,
      },
    ],
  },
  d1: {
    name: "ITC Grand Bharat Retreat",
    images: [
      "/images/d1-1.jpg",
      "/images/d1-2.jpg",
      "/images/d1-3.jpg",
      "/images/d1-4.jpg",
    ],
    price: 4000,
    unit: "night",
    description: "Great stay with modern amenities and great city views.",
    amenities: ["Free WiFi", "24/7 Reception", "Room Service", "Restaurant"],
    location: "Noida Sector 50, Noida",
    rooms: [
      {
        name: "Standard Room",
        image: "/room-image.png",
        size: "10 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress"],
        price: 1800,
        originalPrice: 7000,
      },
    ],
  },
  d2: {
    name: "Dehradun Hill Hotel",
    images: [
      "/images/d2-1.jpg",
      "/images/d2-2.jpg",
      "/images/d2-3.jpg",
      "/images/d2-4.jpg",
    ],
    price: 4800,
    unit: "night",
    description: "Cozy and comfortable with friendly service.",
    amenities: ["Free WiFi", "24/7 Reception", "Room Service", "Restaurant"],
    location: "Sector 63, Noida",
    rooms: [
      {
        name: "Luxury Room",
        image: "/room-image.png",
        size: "15 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress"],
        price: 2900,
        originalPrice: 8500,
      },
    ],
  },
  d3: {
    name: "Royal Orchid Suite",
    images: [
      "/images/d3-1.jpg",
      "/images/d3-2.jpg",
      "/images/d3-3.jpg",
      "/images/d3-4.jpg",
    ],
    price: 5500,
    unit: "night",
    description: "Elegant stay with luxurious rooms and top-class amenities.",
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant"],
    location: "Noida Sector 75, Noida",
    rooms: [
      {
        name: "Royal Suite",
        image: "/room-image.png",
        size: "25 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ King-size Mattress", "🛋️ Sofa", "🍽️ Dining Area"],
        price: 5000,
        originalPrice: 13000,
      },
    ],
  },
  d4: {
    name: "Moutain View Resort",
    images: [
      "/images/d4-1.jpg",
      "/images/d4-2.jpg",
      "/images/d4-3.jpg",
      "/images/d4-4.jpg",
    ],
    price: 4500,
    unit: "night",
    description: "Modern hotel with excellent services and amenities.",
    amenities: ["Free WiFi", "Room Service", "Restaurant", "24/7 Reception"],
    location: "Greater Noida",
    rooms: [
      {
        name: "Superior",
        image: "/room-image.png",
        size: "20 sqm",
        amenities: ["🛁 Toiletries", "🚿 Shower", "🛏️ Comfortable Mattress", "🍽️ Dining Area"],
        price: 2500,
        originalPrice: 8500,
      },
    ],
  },
 
};


const HotelDetail = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  
 
  const [user, setUser] = useState(null);  // For checking if the user is logged in
  const [loading, setLoading] = useState(true);

  // Simulate data loading with a timeout to avoid conditional hook errors
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const hotel = allHotels[hotelId];

  // Avoid using hooks inside conditional blocks
  useEffect(() => {
    // Only set document title when the hotel is available
    if (hotel) {
      document.title = hotel.name;
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute("content", hotel.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = hotel.description;
        document.head.appendChild(meta);
      }
    }
  }, [hotel]);  // This effect depends on `hotel`, but we ensure hooks run unconditionally.

  // Handle payment when clicked
  const handlePayNow = () => {
    if (!user) {
      // Redirect to login or show a message
      navigate("/login");
    } else {
      navigate(`/payment/${hotelId}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return <div className="p-6 text-red-500 text-lg">Hotel not found.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 gap-6">
      
      {/* Left Side - Hotel Details */}
      <div className="flex-1">

        {/* Images Slider */}
        <div className="mb-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-lg overflow-hidden"
          >
            {hotel.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

         {/* Hotel Title */}
         <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
        <p className="text-gray-600 mb-4">{hotel.location}</p>


        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-green-600 text-white font-bold px-2 py-1 rounded-md text-sm">4.5 ★</div>
          <span className="text-sm text-gray-500">(1549 Ratings)</span>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hotel.amenities.map((amenity, idx) => (
              <div key={idx} className="text-gray-700">✅ {amenity}</div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">About this Hotel</h2>
          <p className="text-gray-700">{hotel.description}</p>
        </div>

         {/* Room Section */}
         <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Choose your room</h2>
          {hotel.rooms.map((room, idx) => (
            <div key={idx} className="border p-4 rounded-md flex flex-col sm:flex-row gap-4">
              <img src={room.image} alt={room.name} className="w-full sm:w-40 rounded-md" />
              <div className="flex-1">
                <h3 className="font-bold mb-1">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Room size: {room.size}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {room.amenities.map((amenity, index) => (
                    <span key={index}>{amenity}</span>
                  ))}
                </div>
                <div className="mt-3 font-bold text-lg">
                  ₹{room.price} <span className="text-gray-400 line-through text-sm">₹{room.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

         {/* What's Nearby */}
         <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What's nearby?</h2>
          <div className="border p-4 rounded-md">
            <img src="/nearby-map.png" alt="Map" className="rounded-md mb-3" />
            <div className="space-y-2 text-gray-700 text-sm">
              <p>🚌 Silk Board Bus Stop - 3km</p>
              <p>🏥 Jayadeva Hospital Bus Stop - 3.3km</p>
              <p>🛫 Rajadhani Tours and Travels - 3.4km</p>
              <p>🍽️ Savoury Sea Shell - 2.7km</p>
            </div>
          </div>
        </div>
      </div>

        {/* Google Maps */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <iframe
            title="hotel map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
            width="100%"
            height="250"
            className="rounded-xl border shadow"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Ratings & Reviews (Static for now) */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ratings and Reviews</h2>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-green-600 text-white px-3 py-2 rounded-md font-bold text-2xl">4.5</div>
            <div>
              <p className="text-sm font-bold">EXCELLENT</p>
              <p className="text-gray-500 text-sm">(1549 ratings)</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Great location, friendly staff, clean rooms. Highly recommended for families and solo travelers!
          </p>
        </div>

        {/* Hotel Policies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hotel Policies</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Check-in after 12 PM</li>
            <li>Check-out before 11 AM</li>
            <li>Couples are welcome</li>
            <li>Guests must provide valid ID proof</li>
          </ul>
        </div>
      </div>

// {/* Right Side - Booking Box */}
// <div className="lg:w-1/3 w-full">
//   <div className="border p-6 rounded-lg shadow-md sticky top-6">
//     <div className="text-2xl font-bold mb-2">
//       ₹{hotel.price.toLocaleString("en-IN")}
//     </div>
//     <p className="text-gray-500 text-sm mb-4">per {hotel.unit} + taxes</p>

//     <div className="flex items-center justify-between mb-4">
//       <span className="text-sm">Price Surge</span>
//       <span className="font-bold">₹100</span>
//     </div>
//     <div className="flex items-center justify-between mb-4">
//       <span className="text-sm">Your Savings</span>
//       <span className="font-bold text-green-600">₹500</span>
//     </div>
//     <div className="flex items-center justify-between mb-6">
//       <span className="text-sm">Total Price</span>
//       <span className="font-bold">₹{(hotel.price + 100).toLocaleString("en-IN")}</span>
//     </div>

//     <button
//       onClick={handlePayNow}
//       className="bg-green-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//     >
//       Continue to Book
//     </button>

//     <p className="text-xs text-red-600 mt-3">
//       ⚡ 6 people booked this hotel in last 6 hours
//     </p>
//   </div>
// </div>

  );
};

export default HotelDetail;
