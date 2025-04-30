import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";



import HotelDetail from "./pages/HotelDetail";
import HotelListPage from "./pages/HotelListpage";
import OfferHotels from "./pages/OfferHotels";
import OfferDetails from "./pages/OfferDetails";

import SignIn from "./pages/SignIn";
import Register from"./pages/Register";

import ContactUs from "./pages/ContactUs";
import Partner from "./pages/Partner";
// import Payment from "./pages/Payment";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Support from "./pages/Support";

import Terms from"./pages/Terms";
import Cancel from "./pages/Cancel";
import GuestPolicy from "./pages/Guestpolicy";
import Policy from "./pages/Policy";
import TrustAndSafety from "./pages/Trust&safety";
import CyberSecurity from "./pages/cybersecurity";
import CyberSecurityAwareness from "./pages/CyberAwareness";
import ResponsibleDisclosure from "./pages/ResponsibleDisclosure";
import Footer from "./Components/Footer";

const ScrollToTop = () => {
  const location = useLocation();  // Get the current location (path)

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on location change
  }, [location.pathname]); // Dependency array ensures it runs on route change

  return null;  // This component doesn’t render anything, it just handles scroll
};

const App = () => {
 return (
    <Router>
      <ScrollToTop/> {/* Router should wrap everything */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/hotels/:locationId" element={<HotelListPage />} />
        <Route path="/hotel/detail/:hotelId" element={<HotelDetail />} />
        <Route path="/offer/:offerId" element={<OfferHotels />} />
        <Route path="/hotel/offer/:hotelName" element={<OfferDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/payment" element={<Payment />} />  */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/Home" element={<App />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/terms" element={<Terms />} /> 
        <Route path="/cancel" element={<Cancel />} /> 
        <Route path="/blogs" element={<Blog />} />
        <Route path="/policy" element={<Policy />} /> 
        <Route path="/guest-policy" element={<GuestPolicy />} /> 
        <Route path="/support" element={<Support />} /> 
        <Route path="/safety" element={<TrustAndSafety />} />
        <Route path="/security" element={<CyberSecurity />} />
        <Route path="/security-awareness" element={<CyberSecurityAwareness />} />
        <Route path="/disclosure" element={<ResponsibleDisclosure />} />
      
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;




