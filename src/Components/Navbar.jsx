import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const menuRef = useRef(null);

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

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (emailOrPhone.trim() && name.trim() && mobile.trim()) {
      console.log("Sign in details:", { emailOrPhone, name, mobile });
      setShowSignIn(false);
      setEmailOrPhone("");
      setName("");
      setMobile("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-sky-200 via-cyan-100 to-teal-100 shadow-md">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <img 
          src="/images/companylogo.jpg" 
          alt="Hotel Logo" 
          className="w-12 h-12 rounded-full" 
        />
        <h1 className="text-lg font-bold">
          <span className="text-gray-800">First Home</span>{" "}
          <span className="text-orange-600">Stay</span>
        </h1>
      </div>

      {/* Hamburger Menu */}
      <div ref={menuRef} className="relative">
        <button
          className="text-3xl font-bold text-black focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-gradient-to-r from-cyan-200 to-cyan-100 text-black rounded-lg shadow-lg p-4 z-50 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-white/40">🏠 Home</Link>
            <Link to="/aboutus" className="block px-3 py-2 rounded hover:bg-white/40">ℹ️ About Us</Link>
            <Link to="/mybooking" className="block px-3 py-2 rounded hover:bg-white/40">📘 My Booking</Link>
            <Link to="/location" className="block px-3 py-2 rounded hover:bg-white/40">📌 Your Location</Link>
            <Link to="/personal-account" className="block px-3 py-2 rounded hover:bg-white/40">👤 Personal Account</Link>
            <Link to="/contactus" className="block px-3 py-2 rounded hover:bg-white/40">☎️ Contact Us</Link>
            <Link to="/partner" className="block px-3 py-2 rounded hover:bg-white/40">🤝 Partner</Link>
            <Link to="/sign-in" className="block px-3 py-2 rounded hover:bg-white/40">🔐 Sign In</Link>
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
