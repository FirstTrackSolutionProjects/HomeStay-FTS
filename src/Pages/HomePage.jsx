import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import HotelSearchBar from "../Components/HotelSearchBar";
// import BookingForm from "./Components/BookingForm";
//import Hotelfilter from "../Components/Hotelfilter";
import HotelCard from "../Components/HotelCard";


import Categories from "../Components/Categories";
import SpecialOffers from "../Components/SpecialOffers";
import Review from "../Components/Review";
const HomePage = () => {
  return (
   <>
        <HeroSection />
        <div className="app-container">
          <HotelSearchBar />
          {/* <BookingForm /> */}
          {/* <Hotelfilter/> */}
          <HotelCard />
          
          <Categories />
         <SpecialOffers />
         <Review/> 
         </div>
   </>
  );
};

export default HomePage;