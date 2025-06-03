import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Image Section */}
        <div className="h-96 md:h-auto">
          <img
            src="/images/aboutimg.jpg"
            alt="About Us"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Section */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            About Us
          </h2>
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
            travel planning. Whether you're traveling for work, leisure, or a quick weekend getaway, we've got the perfect
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
