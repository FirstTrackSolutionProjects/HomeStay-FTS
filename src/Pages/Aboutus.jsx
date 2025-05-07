// import React from 'react';
// import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
// import Footer from "../Components/Footer";

// const AboutUs = () => {
//   return (
//     <div className="flex flex-col items-center text-center">
//       {/* Full-Width Image */}
//       <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
//         <img 
//           src="/images/b1.jpg" 
//           alt="About Us Banner" 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Mission Statement */}
//       <div className="max-w-3xl mx-auto my-8 p-6 ">
//         <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//         <p className="text-lg text-gray-700">
//           FirstHomeStay is dedicated to empowering businesses and entrepreneurs with cutting-edge technology solutions that 
//           enhance efficiency, maximize earnings, and simplify operations. We strive to deliver innovative, reliable, 
//           and scalable services that drive growth and create lasting value, ensuring seamless experiences for both 
//           businesses and their customers.
//         </p>
//       </div>

//       {/* Three Images in a Column */}
//       <div className="grid grid-cols-1 gap-6 max-w-3xl w-full ">
//         <img src="/images/b5.webp" alt="Image 1" className="w-full h-60 object-cover" />
//         <img src="/images/b2.jpg" alt="Image 2" className="w-full h-60 object-cover" />
//       </div>

//       {/* Full-Width Footer */}
//       <div className="w-full bg-gray-800 text-white mt-10">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/aboutimg.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
          <p className="text-gray-600 text-md md:text-base mb-4">
            <span className="font-bold text-black">First Home Stay</span> is a trusted platform that connects travelers with quality accommodations across India.
            Whether you're a solo adventurer, a couple, or a family on vacation, we are here to ensure your stay is
            safe, affordable, and unforgettable.
          </p>
          <p className="text-gray-600 text-md md:text-base mb-4">
            Our mission is to provide hygienic, reliable lodging solutions equipped with essential amenities such as Wi-Fi,
            clean bedding, private bathrooms, and more. We handpick properties to maintain high standards of hospitality
            and customer satisfaction. From heritage homes to modern apartments, we offer a diverse selection of stays.
          </p>
          <p className="text-gray-600 text-md md:text-base mb-4">
            Founded with the vision of making travel more personal and accessible, <span className="font-semibold text-black">First Home Stay</span> partners with local hosts
            and property owners to bring authentic experiences to our guests. We take pride in supporting the local economy
            while helping travelers feel at home, wherever they go.
          </p>
          <p className="text-gray-600 text-md md:text-base mb-4">
            With a dedicated support team available 24/7 and an easy-to-use booking interface, we remove the stress from
            travel planning. Whether you're traveling for work, leisure, or a quick weekend gateway, we've got the perfect
            stay for you.
          </p>
          <p className="text-gray-600 text-md md:text-base">
            Discover a better way to travel—comfortable, affordable, and always welcoming. Choose <span className="font-semibold text-black">First Home Stay</span> for your
            next journey and experience hospitality like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
