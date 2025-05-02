import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Button } from "../Components/ui/button"; 

export default function HotelSearchBar() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-900 py-10 px-4 text-white mt-5">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Find Stays in 174,000+ Hotels & Homes Worldwide
      </h2>
      <div className="bg-white rounded-xl shadow-md p-4 md:flex md:items-center md:space-x-4 max-w-5xl mx-auto text-gray-800">
        {/* Location */}
        <div className="flex items-center border rounded-md p-2 w-full mb-2 md:mb-0 md:w-1/4">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter city or area"
            className="w-full outline-none"
          />
        </div>

        {/* Dates */}
        <div className="flex items-center border rounded-md p-2 w-full mb-2 md:mb-0 md:w-1/3">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="30 Apr - 1 May"
            className="w-full outline-none"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center border rounded-md p-2 w-full mb-2 md:mb-0 md:w-1/4">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="1 Room, 1 Guest"
            className="w-full outline-none"
          />
        </div>

        {/* Search */}
        <div className="w-full md:w-auto">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
