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
    <footer className="bg-gray-900 text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/images/companylogo.jpg"
            alt="First HomeStay Logo"
            className="w-16 mb-4"
          />
          <p className="text-sm text-gray-400">First HomeStay</p>
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
              support@firsthomestay.com
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
          <h4 className="text-lg font-semibold mb-2">Hotels Near Me</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/manali" className="hover:text-white">Hotels in Manali</Link></li>
            <li><Link to="/nainital" className="hover:text-white">Hotels in Nainital</Link></li>
            <li><Link to="/agra" className="hover:text-white">Hotels in Agra</Link></li>
            <li><Link to="/haridwar" className="hover:text-white">Hotels in Haridwar</Link></li>
            <li><Link to="/goa" className="hover:text-white">Hotels in Goa</Link></li>
            <li><Link to="/mysore" className="hover:text-white">Hotels in Mysore</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/aboutus" className="hover:text-white">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
            <li><Link to="/contactus" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Policies</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/terms" className="hover:text-white">Terms and Conditions</Link></li>
            <li><Link to="/cancel" className="hover:text-white">Refund And Cancellation</Link></li>
            <li><Link to="/guest-policy" className="hover:text-white">Guest Policy</Link></li>
            <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/safety" className="hover:text-white">Trust and Safety</Link></li>
            <li><Link to="/security" className="hover:text-white">Cyber Security</Link></li>
            <li><Link to="/security-awareness" className="hover:text-white">Cyber Security Awareness</Link></li>
            <li><Link to="/disclosure" className="hover:text-white">Responsible Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-700">
        Copyright©2025 First HomeStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
