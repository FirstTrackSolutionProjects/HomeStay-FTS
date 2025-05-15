import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import cityHotelsData from "../data/cityHotelsData";



const CityHotels = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const originalHotels = cityHotelsData[cityName.toLowerCase()] || [];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("priceLowToHigh");
  const [maxPrice, setMaxPrice] = useState(445);
  const [showTooltip, setShowTooltip] = useState(false);

  const filteredHotels = originalHotels
    .filter(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "priceLowToHigh") return a.price - b.price;
      if (sort === "priceHighToLow") return b.price - a.price;
      if (sort === "Guest Rating") return b.rating - a.rating;
      if (sort === "Popularity") return b.popularity - a.popularity
      return 0;
    });

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array(full).fill().map((_, i) => <span key={`f-${i}`}>★</span>)}
        {half && <span>☆</span>}
        {Array(empty).fill().map((_, i) => <span key={`e-${i}`}>☆</span>)}
      </div>
    );
  };

  return (
    
    <div className="flex flex-col lg:flex-row gap-6 p-4">
        <h2 className="text-2xl font-bold capitalize text-center">Available Hotels</h2>
    
        {/* Filters */}
       <div className="w-full lg:w-1/4 space-y-4 mb-6 lg:mb-0">
            {/* Price Range Filter */}
        <div>
          <h4 className="font-semibold mb-2">Price Range</h4>
          <div className="relative group">
            <input
              type="range"
              min="445"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full bg-gray-300 h-2 rounded-full outline-none"
            />          
          <div
            className="absolute -top-6 text-xs px-2 py-1 rounded bg-gray-700 text-white left-1/2 -translate-x-1/2 shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              left: `calc(${((maxPrice - 445) / (10000 - 445)) * 100}%)`,
              }}
            >
          ₹{maxPrice} per night/room
        </div>
</div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>₹445</span>
            <span>₹10,000</span>
          </div>
        </div>


        <div className="mb-4">
          <h4 className="font-semibold mb-2">Rooms & Suites</h4>
          {["Couple Friendly", "International Guests", "Business Travellers"].map(opt => (
            <div key={opt} className="mb-1"><input type="checkbox" /> {opt}</div>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Category</h4>
          {["Resort", "Executive", "Home", "Hotel Rooms"].map(opt => (
            <div key={opt} className="mb-1"><input type="checkbox" /> {opt}</div>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Accommodation Type</h4>
          {["Hotel", "Guest House"].map(opt => (
            <div key={opt} className="mb-1"><input type="checkbox" /> {opt}</div>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Hotel Facilities</h4>
          {["Seating Area", "Swimming Pool", "King Sized Bed", "Queen Sized Bed"].map(opt => (
            <div key={opt} className="mb-1"><input type="checkbox" /> {opt}</div>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Check-in Features</h4>
          {["24*7 Check-in", "Free Cancellation", "No ID Required"].map(opt => (
            <div key={opt} className="mb-1"><input type="checkbox" /> {opt}</div>
          ))}
        </div>
      </div>

      {/* Hotel Results + Top Bar */}
      <div className="w-full lg:w-3/4">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search hotels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded w-52"
            />
             <div className="flex items-center gap-2 w-full md:w-1/4">
              <div className="text-sm leading-tight">
                <div>Sort</div>
                <div>By</div>
              </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Popularity">Popularity</option>
              <option value="Guest Rating">Guest Rating</option>
              <option value="priceLowToHigh"> Low to High</option>
              <option value="priceHighToLow"> High to Low</option>
             
            </select>
          </div>
        </div>
        </div>

        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHotels.map((hotel, index) => (
              <div key={index} className="border rounded-xl shadow bg-white overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(hotel.rating)}
                    <span className="text-xs text-gray-600">({hotel.rating})</span>
                  </div>
                  <p className="text-green-600 font-bold text-lg mb-1">₹{hotel.price}</p>
                  <p className="text-sm text-gray-600 mb-3">per night</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/city/hotel/${hotel.id}`)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => navigate(`/booking/${cityName}/${hotel.id}`)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
  </div>
  );
};

export default CityHotels;
