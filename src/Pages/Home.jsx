import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
// import BookingForm from "./Components/BookingForm";
import Hotelfilter from "../Components/Hotelfilter";
import Categories from "../Components/Categories";
import SpecialOffers from "../Components/SpecialOffers";
import Review from "../Components/Review";
const HomePage = () => {
  return (
   <>
        <HeroSection />
        <div className="app-container">
          {/* <BookingForm /> */}
          <Hotelfilter/>
          <Categories />
         <SpecialOffers />
         <Review/> 
         </div>
   </>
  );
};

export default HomePage;
