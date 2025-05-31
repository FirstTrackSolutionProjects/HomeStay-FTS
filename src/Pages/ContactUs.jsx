import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobeAsia,
  FaHotel,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const location = useLocation();
  const errorMessage = location.state?.errorMessage;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    alert("Thank you for reaching out! We'll get back to you soon.");
  };
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 space-y-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-purple-700 drop-shadow-sm mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-4">We’d love to hear from you. Reach out for support or inquiries!</p>

        {/* Error Banner if redirected after booking failure */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong className="font-bold">Booking Failed:</strong> <span>{errorMessage}</span>
          </div>
        )}

        {errorMessage && (
          <button
            onClick={() => window.history.back()}
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Go Back & Try Again
          </button>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-600 transition-all duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Static Contact Info */}
        <div className="space-y-4 text-gray-800 text-sm sm:text-base mt-6">
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
              <a href="mailto:support@firsthomestay.site" className="text-blue-600 hover:underline">support@firsthomestay.site</a>
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
              <span className="font-bold text-black">First Home Stay</span> is a premier hotel booking platform committed to providing seamless and reliable travel experiences across India. Our mission is to make bookings hassle-free with a user-friendly interface and exceptional customer support.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
