import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden ">
      <img
        src="/images/herosectionimg.jpg"
        alt="Hero"
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover object-center"
      />
      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 leading-snug">
          <span className="text-green-200">Discover Your Extraordinary</span>{" "}
          <span className="text-orange-500"> Comfort Hotel</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
