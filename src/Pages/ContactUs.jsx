import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobeAsia, FaHotel } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 space-y-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-purple-700 drop-shadow-sm mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-6">We’d love to hear from you. Reach out for support or inquiries!</p>

        <div className="space-y-4 text-gray-800 text-sm sm:text-base">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-pink-600 mt-1 mr-3" />
            <div>
              <span className="font-semibold text-purple-700">Address:</span><br />
              BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha - 751007
            </div>
          </div>

          <div className="flex items-center">
            <FaPhoneAlt className="text-red-500 mr-3" />
            <span>
              <span className="font-semibold text-purple-700">Phone:</span>{" "}
              <a href="tel:+919040170727" className="text-blue-600 hover:underline">+91-9040170727</a>
            </span>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-3" />
            <span>
              <span className="font-semibold text-purple-700">Email:</span>{" "}
              <a href="mailto:support@firsthomestay.com" className="text-blue-600 hover:underline">support@firsthomestay.com</a>
            </span>
          </div>

          <div className="flex items-start">
            <FaGlobeAsia className="text-green-600 mt-1 mr-3" />
            <div>
              <span className="font-semibold text-purple-700">Service Coverage:</span><br />
              We offer top-tier hotel booking services all over India, ensuring comfort and convenience for all our customers.
            </div>
          </div>

          <div className="flex items-start">
            <FaHotel className="text-orange-500 mt-1 mr-3" />
            <div>
              <span className="font-semibold text-purple-700">About Us:</span><br />
              FirstHomeStay is a premier hotel booking platform committed to providing seamless and reliable travel experiences across India. Our mission is to make bookings hassle-free with a user-friendly interface and exceptional customer support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
