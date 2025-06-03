// import { Funnel } from "lucide-react";
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ onFilterClick }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
    
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const closeMenu = () => setMenuOpen(false);
  
//   // const handleFilterClick = () => {
//   //   navigate("/cityhotels"); // 👈 Filter page path
//   // };

//   return (
//     <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-sky-200 via-cyan-100 to-teal-100 shadow-md">
//       {/* Logo + Brand */}
//       <div className="flex items-center gap-2">
//         <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
//           <img src="/images/logo.jpg" alt="Hotel Logo" className="w-12 h-12 rounded-full" />
//           <h1 className="text-lg font-bold">
//             <span className="text-gray-800">First Home</span>{" "}
//             <span className="text-orange-600">Stay</span>
//           </h1>
//         </Link>
//       </div>

//       {/* Filter + Menu */}
//       {/* <div className="flex items-center gap-2 relative" ref={menuRef}> */}
//         {/* Filter Button */}
//         {/* <button
//           onClick={handleFilterClick}
//           className="flex items-center justify-center px-2 text-2xl mt-1"
//         >
//           <Funnel className="w-6 h-6"/>
//         </button> */}

//         {/* Hamburger Menu Button */}
//         <button
//           className="text-3xl font-bold text-black focus:outline-none"
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           ☰
//         </button>

//         {/* Dropdown Menu */}
//         {menuOpen && (
//          <div className="absolute right-0 top-full mt-2 w-64 bg-gradient-to-r from-cyan-200 to-cyan-100 text-black rounded-lg shadow-lg p-4 z-50 space-y-2 max-h-[90vh] overflow-y-auto">

//             <Link to="/" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🏠 Home</Link>
//             <Link to="/aboutus" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>ℹ️ About Us</Link>
//             <Link to="/mybooking" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>📘 My Booking</Link>
//             <Link to="/location" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>📌 Your Location</Link>
//             <Link to="/business" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>💼 Business Plan</Link>
//             <Link to="/contactus" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>☎️ Contact Us</Link>
//             <Link to="/partner" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🤝 Partner</Link>
//             <Link to="/sign-in" className="block px-3 py-2 rounded hover:bg-white/40" onClick={closeMenu}>🔐 Sign In</Link>
//             <button
//               onClick={() => window.open("https://wa.me/919040170727", "_blank")}
//               className="block text-left w-full px-3 py-2 rounded hover:bg-white/40"
//             >
//               💬 Chat
//             </button>
//           </div>
//         )}
//       {/* </div> */}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/aboutus" className="hover:underline">About Us</Link>
          <Link to="/mybooking" className="hover:underline">My Booking</Link>
          <Link to="/location" className="hover:underline">Location</Link>
          <Link to="/filter" className="hover:underline">Business</Link>
          <Link to="/contactus" className="hover:underline">Contact</Link>
          <Link to="/partner" className="hover:underline">Partner</Link>
          <Link to="/sign-in" className="hover:underline">Sign In</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-black p-2 rounded">
          <Menu size={40} />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <SideBar isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavBar;
