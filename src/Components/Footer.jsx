import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white  pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700 ">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo.jpg"
            alt="First HomeStay Logo"
            className="w-16 mb-4"
          />
         <p className="text-sm text-white">
          <span className="text-black font-bold">First</span>{" "}
          <span className="text-green-700 font-bold">Home</span>{" "}
          <span className="text-red-950 font-bold">Stay</span>
          </p>
          <p className="text-sm text-gray-200 mt-2">
            Experience comfort, convenience, and a touch of home at First Home Stay. Whether you're traveling for business or leisure, our spaces are designed to give you a relaxing and memorable stay.
          </p>
        </div>


        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@firsthomestay.com"
              className="text-blue-400 hover:underline"
            >
              support@firsthomestay.site
            </a>
          </p>
          <p className="text-sm">
            Helpline:{" "}
            <a
              href="tel:9040170727"
              className="text-blue-400 hover:underline"
            >
              +91-9040170727
            </a>
          </p>
        </div>

        {/* Feedback Button */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Feedback</h4>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
            onClick={() => {
              const message = encodeURIComponent(
                "Hi, I would like to share my feedback."
              );
              const phoneNumber = "919040170727";
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
            }}
          >
            Send Feedback
          </button>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-2xl mt-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        {/* Hotels */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-500">Hotels Near Me</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li><Link to="/offer/Manali" className="hover:text-yellow-600">Hotels in Manali</Link></li>
            <li><Link to="/city/Puri" className="hover:text-yellow-600">Hotels in Puri</Link></li>
            <li><Link to="/city/Jaipur" className="hover:text-yellow-600">Hotels in Jaipur</Link></li>
            <li><Link to="/city/Ranchi" className="hover:text-yellow-600">Hotels in Ranchi</Link></li>
            <li><Link to="/offer/Goa" className="hover:text-yellow-600">Hotels in Goa</Link></li>
            <li><Link to="/city/Ayodhya" className="hover:text-yellow-600">Hotels in Ayodhya</Link></li>
          </ul>

        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-500">Company</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li><Link to="/aboutus" className="hover:text-yellow-600">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-yellow-600">Blogs</Link></li>
            <li><Link to="/support" className="hover:text-yellow-600">Support</Link></li>
            <li><Link to="/partner" className="hover:text-yellow-600">Partner</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-500">Policies</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li><Link to="/terms" className="hover:text-yellow-600">Terms and Conditions</Link></li>
            <li><Link to="/cancel" className="hover:text-yellow-600">Refund And Cancellation</Link></li>
            <li><Link to="/guest-policy" className="hover:text-yellow-600">Guest Policy</Link></li>
            <li><Link to="/policy" className="hover:text-yellow-600">Privacy Policy</Link></li>
            <li><Link to="/safety" className="hover:text-yellow-600">Trust and Safety</Link></li>
            <li><Link to="/security" className="hover:text-yellow-600">Cyber Security</Link></li>
            <li><Link to="/security-awareness" className="hover:text-yellow-600">Cyber Security Awareness</Link></li>
            <li><Link to="/disclosure" className="hover:text-yellow-600">Responsible Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-white border-t">
        Copyright©2025 <span className="text-black font-bold">First</span> <span className="text-green-700 font-bold">Home</span> <span className="text-red-950 font-bold">Stay</span> .  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
