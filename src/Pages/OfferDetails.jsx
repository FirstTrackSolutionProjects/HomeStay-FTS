// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import Slider from "react-slick";

// // const hotelsDetails = {
// //   "The Astor - All Suites Hotel Candolim": {
// //     price: 7500,
// //     images: ["/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg"],
// //     description: "Enjoy breathtaking ocean views and luxury amenities in our Ocean View Suite.",
// //   },
// //   "Taj Cidade de Goa Horizon": {
// //     price: 8800,
// //     images: ["/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg"],
// //     description: "Perfect for couples, a cozy and romantic experience awaits you.",
// //   },
// //   "Mandrem Beach Resort": { 
// //      price: 12000, 
// //      images: ["/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg"],
// //      description: "Experience premium comfort and private pools in our luxury villas." 
// //     },
// //     "The Crescent": { 
// //         price: 9500, 
// //         images:["/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg"],
// //         description: "Witness magical sunsets from your private balcony." 
// //       },
// //       "Mistral by the sea": { 
// //         price: 4200, 
// //         images: ["/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg", "/Goa/Goa-1.jpg"],
// //         description: "Feel the fresh sea breeze while enjoying our top-notch service." 
// //       },
// //       "Heritage Haveli Guest House": { 
// //         price: 4600, 
// //         images: ["/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg"], 
// //         description: "Stay right on the golden beaches with cozy amenities." 
// //       },
// //       "The Grand Fateh": { 
// //         price: 5000, 
// //         images: ["/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg"],
// //         description: "Explore coral reefs and beach fun at Coral Beach Hotel." 
// //       },
// //       "Hotel Kalpshree": { 
// //         price: 5500, 
// //         images:["/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg"],
// //         description: "Relax in beautiful beachside rooms with sunset views." 
// //       },
// //       "Hotel Siddhartha Inn": { 
// //         price: 9100, 
// //         images: ["/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg"],
// //         description: "Breathtaking mountain views and peace await you." 
// //       },
// //       "Hotel Taviral Regency": { 
// //         price: 9700, 
// //         images: ["/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg", "/Udaipur/Udaipur-2.jpg"],
// //         description: "Reconnect with nature in our Highland Escape cottages." 
// //       },
// //       "Hotel Suryansh Regency": { 
// //         price: 10000, 
// //         images: ["/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg"], 
// //         description: "Luxury retreat with snow-capped mountains around." 
// //       },
// //       "Hotel Touch Wood Inn": { 
// //         price: 11000, 
// //         images:["/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg"], 
// //         description: "Stay in style at the highest peak resorts with Skyview Resort." 
// //       },
// //       "Echor Himalayan Aurum": { 
// //         price: 11000, 
// //         images:["/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg"],  
// //         description: "Stay in style at the highest peak resorts with Skyview Resort." 
// //       },
// //       "Mountain Galaxy": { 
// //         price: 11000, 
// //         images:["/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg"],
// //         description: "Stay in style at the highest peak resorts with Skyview Resort." 
// //       },
// //       "Tripli Hotels stone House Cottages": { 
// //         price: 11000, 
// //         images:["/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg", "/Manali/Manali-2.jpg"],  
// //         description: "Stay in style at the highest peak resorts with Skyview Resort." 
// //       }
// //     };



// // const OfferDetails = () => {
// //   const { hotelName } = useParams();
// //   const decodedName = decodeURIComponent(hotelName);
// //   const hotel = hotelsDetails[decodedName];

// //   if (!hotel) {
// //     return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Hotel not found</h2>;
// //   }

// //   const settings = {
// //     dots: true,  // Show navigation dots
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,  // Change image every 3 seconds
// //     pauseOnHover: true,  // Pause the slider when hovering
// //   };

// //   return (
// //     <div style={{ padding: "30px", textAlign: "center" }}>
// //       <h1>{decodedName}</h1>
// //       <Slider {...settings}>
// //       {hotel.images.map((image, index) => (
// //   <div key={index}>
// //     <img
// //       src={image}
// //       alt={`${decodedName} ${index + 1}`}
// //       style={{ width: "70%", maxWidth: "600px", borderRadius: "10px", margin: "20px 0" }}
// //     />
// //   </div>
// // ))}

// //       </Slider>
// //       <h2>₹{hotel.price} / night</h2>
// //       <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "18px" }}>
// //         {hotel.description}
// //       </p>
// //       <button
// //         style={{
// //           padding: "10px 20px",
// //           backgroundColor: "#ff4d4d",
// //           color: "white",
// //           border: "none",
// //           borderRadius: "5px",
// //           cursor: "pointer",
// //           fontSize: "18px",
// //         }}
// //       >
// //         Book Now
// //       </button>
// //     </div>
// //   );
// // };

// // export default OfferDetails;


// import { useParams } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import hotels from '../data/hotels';

// // const hotels = [
// //   {
// //     id: '1',
// //     name: 'The Astor Hotel',
// //     price: 5000,
// //     images: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
// //     description: 'Luxury hotel near Candolim beach.',
// //   },
// //   {
// //     id: '2',
// //     name: 'Sea View Resort',
// //     price: 4200,
// //     images: ['/img4.jpg', '/img5.jpg', '/img6.jpg'],
// //     description: 'Relaxing sea view resort.',
// //   },
// // ];

// const OfferDetails = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === id);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (!hotel) return <p className="text-center mt-10 text-xl">Hotel not found.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 text-center">
//       <h2 className="text-2xl font-semibold mb-4">{hotel.name}</h2>

//       <div className="mb-8">
//         <Slider {...settings}>
//           {hotel.images.map((src, index) => (
//             <div key={index}>
//               <img
//                 src={src}
//                 alt={`Slide ${index}`}
//                 className="rounded-xl mx-auto h-[400px] w-full object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <p className="text-xl font-medium text-gray-700 mb-4">₹{hotel.price} / night</p>
//       <p className="text-gray-600 mb-6 max-w-xl mx-auto">{hotel.description}</p>

//       <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default OfferDetails;

import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import offerHotels from '../data/offer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OfferDetails = () => {
  const { id } = useParams();
  const hotel = offerHotels.find((h) => h.id === id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  if (!hotel) return <p className="text-center text-xl mt-10">Hotel not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2 text-center">{hotel.name}</h2>
      <Slider {...settings}>
        {hotel.images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-96 object-cover rounded-md" />
          </div>
        ))}
      </Slider>
      <p className="text-xl mt-4 text-green-600 font-bold text-center">₹{hotel.price} / night</p>
      <p className="mt-2 text-center">{hotel.description}</p>
      
    </div>
  );
};

export default OfferDetails;
