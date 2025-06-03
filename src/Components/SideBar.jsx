import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggleMenu }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleMenu(); // Close if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  if (!isOpen) return null;

  return (
    <div
      ref={sidebarRef}
      className="absolute top-16 right-0 w-64 bg-cyan-100 text-black rounded-lg shadow-lg p-4 z-50 space-y-2 max-h-[90vh] overflow-y-auto"
    >
      <Link to="/" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>🏠 Home</Link>
      <Link to="/aboutus" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>ℹ️ About Us</Link>
      <Link to="/mybooking" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>📘 My Booking</Link>
      <Link to="/location" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>📌 Your Location</Link>
      <Link to="/filter" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>💼 Business Plan</Link>
      <Link to="/contact" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>☎️ Contact Us</Link>
      <Link to="/partner" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>🤝 Partner</Link>
      <Link to="/sign-in" className="block px-3 py-2 rounded hover:bg-white/40" onClick={toggleMenu}>🔐 Sign In</Link>
      <button
        onClick={() => {
          toggleMenu();
          window.open("https://wa.me/919040170727", "_blank");
        }}
        className="block text-left w-full px-3 py-2 rounded hover:bg-white/40"
      >
        💬 Chat
      </button>
    </div>
  );
};

export default SideBar;
