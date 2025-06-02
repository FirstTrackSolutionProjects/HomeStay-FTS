import { Funnel } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onFilterClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  
  const handleFilterClick = () => {
    navigate("/cityhotels"); // 👈 Filter page path
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-sky-200 via-cyan-100 to-teal-100 shadow-md">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/images/logo.jpg" alt="Hotel Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-lg font-bold">
            <span className="text-gray-800">First Home</span>{" "}
            <span className="text-orange-600">Stay</span>
          </h1>
        </Link>
      </div>

      {/* Filter + Menu */}
      <div className="flex items-center gap-2" ref={menuRef}>
        {/* Filter Button */}
        <button
          onClick={handleFilterClick}
          className="flex items-center justify-center px-2 text-2xl mt-1"
        >
          <Funnel className="w-6 h-6"/>
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="text-3xl font-bold text-black focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-gradient-to-r from-cyan-200 to-cyan-100 text-black rounded-lg shadow-lg p-4 z-50 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🏠 Home</Link>
            <Link to="/aboutus" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>ℹ️ About Us</Link>
            <Link to="/mybooking" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>📘 My Booking</Link>
            <Link to="/location" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>📌 Your Location</Link>
            <Link to="/business" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>💼 Business Plan</Link>
            <Link to="/contactus" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>☎️ Contact Us</Link>
            <Link to="/partner" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🤝 Partner</Link>
            <Link to="/sign-in" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🔐 Sign In</Link>
            <button
              onClick={() => window.open("https://wa.me/919040170727", "_blank")}
              className="block text-left w-full px-3 py-2 rounded hover:bg-white/40"
            >
              💬 Chat
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
