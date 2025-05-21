import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import MyBookings from "./Pages/MyBooking";

import Home from "./Pages/HomePage";
import CityHotels from "./Pages/CityHotels";
import HotelDetails from "./Pages/HotelDetails";
import BookingPage from "./Pages/BookingPage";
import PaymentPage from "./Pages/PaymentPage";

import OfferHotels from "./Pages/OfferHotels";
import OfferDetails from "./Pages/OfferDetails";

import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

import ContactUs from "./Pages/ContactUs";
import Partner from "./Pages/Partner";
import PartnerForm from "./Pages/PartnerForm";

import Aboutus from "./Pages/Aboutus";
import Blog from "./Pages/Blog";
import Support from "./Pages/Support";

import Terms from "./Pages/Terms";
import Cancel from "./Pages/Cancel";
import GuestPolicy from "./Pages/Guestpolicy";
import Policy from "./Pages/Policy";
import TrustAndSafety from "./Pages/TrustAndSafety";
import CyberSecurity from "./Pages/CyberSecurity";
import CyberSecurityAwareness from "./Pages/CyberAwareness";
import ResponsibleDisclosure from "./Pages/ResponsibleDisclosure";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mybookings" element={<MyBookings />} />

        <Route path="/city/:cityName" element={<CityHotels />} />
        <Route path="/city/hotel/:hotelId" element={<HotelDetails />} />
        <Route path="/booking/:cityName/:hotelId" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/offer/:city" element={<OfferHotels />} />
        <Route path="/offer-details/:id" element={<OfferDetails />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner/:propertyType" element={<PartnerForm />} />
        <Route path="/aboutus" element={<Aboutus />} />
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
};

export default App;
