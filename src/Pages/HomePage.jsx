import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import HotelSearchBar from "../Components/HotelSearchBar";

import CityScroller from "../Components/CityScroller";
import Nearby from "../Components/NearBy";
import Categories from "../Components/Categories";
import SpecialOffers from "../Components/SpecialOffers";
import Review from "../Components/Review";
const HomePage = () => {
  return (
   <>
        <HeroSection />
        <div className="app-container">
          <HotelSearchBar />
          
          <CityScroller />
          <Nearby/>
          <Categories />
         <SpecialOffers />
         <Review/> 
         </div>
   </>
  );
};

export default HomePage;