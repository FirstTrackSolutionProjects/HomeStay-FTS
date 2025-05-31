import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import cityHotelsData from "../data/cityHotelsData";
import hotelImg from "../data/hotelImg";

const CityHotels = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const hotelsFromImages = hotelImg[cityName?.toLowerCase()] || [];
  const hotelsFromData = cityHotelsData[cityName?.toLowerCase()] || [];
  const combinedHotels = [...hotelsFromData, ...hotelsFromImages];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("priceLowToHigh");
  const [maxPrice, setMaxPrice] = useState(10000);

  const [filters, setFilters] = useState({
    category: "",
    accommodationType: "",
    roomsSuites: "",
    hotelFacilities: "",
    checkInFeatures: "",
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

  const filterSections = [
    { title: "Rooms & Suites", key: "roomsSuites", options: ["Couple Friendly", "International Guests", "Business Travellers"], type: "radio", name: "roomsSuites" },
    { title: "Category", key: "category", options: ["Resort", "Executive", "Home", "Hotel Rooms"], type: "radio", name: "category" },
    { title: "Accommodation Type", key: "accommodationType", options: ["Hotel", "Guest House"], type: "radio", name: "accommodationType" },
    { title: "Hotel Facilities", key: "hotelFacilities", options: ["Seating Area", "Swimming Pool", "King Sized Bed", "Queen Sized Bed"], type: "radio", name: "hotelFacilities" },
    { title: "Check-in Features", key: "checkInFeatures", options: ["24*7 Check-in", "Free Cancellation", "ID Proof Required"], type: "radio", name: "checkInFeatures" },
  ];

  const filteredHotels = combinedHotels
    .filter((hotel) => hotel.name.toLowerCase().includes(search.toLowerCase()))
    .filter((hotel) => hotel.price <= maxPrice)
    .filter((hotel) => {
      if (filters.category && hotel.category !== filters.category) return false;
      if (filters.accommodationType && hotel.accommodationType !== filters.accommodationType) return false;
      if (filters.roomsSuites && hotel.roomsSuites !== filters.roomsSuites) return false;
      if (filters.hotelFacilities && hotel.hotelFacilities !== filters.hotelFacilities) return false;
      if (filters.checkInFeatures && hotel.checkInFeatures !== filters.checkInFeatures) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "priceLowToHigh") return a.price - b.price;
      if (sort === "priceHighToLow") return b.price - a.price;
      if (sort === "Guest Rating") return (b.rating || 0) - (a.rating || 0);
      if (sort === "Popularity") return (b.popularity || 0) - (a.popularity || 0);
      return 0;
    });

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Sidebar Filters */}
      <div className="w-full lg:w-1/4 space-y-4 mb-6 lg:mb-0">
        <h2 className="text-xl font-bold">Filters</h2>

        <div>
          <h4 className="font-semibold mb-2">Price Range</h4>
          <div className="relative">
            <input
              type="range"
              min="445"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full bg-gray-300 h-2 rounded-full outline-none"
            />
            <div
              className="absolute -top-6 text-xs px-2 py-1 rounded bg-gray-700 text-white shadow pointer-events-none"
                style={{
              left: `min(calc(${((maxPrice - 445) / (10000 - 445)) * 100}% - 20px), calc(100% - 70px))`,
                }}
            >
            ₹{maxPrice} per night/room
            </div>

          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>₹445</span>
            <span>₹10,000</span>
          </div>
        </div>

        {filterSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            {section.options.map((opt) => (
              <div key={opt} className="mb-1 text-sm">
                <input
                  type="radio"
                  name={section.name}
                  className="mr-2"
                  checked={filters[section.key] === opt}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      [section.key]: opt,
                    }))
                  }
                />
                {opt}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Hotel Listings */}
      <div className="w-full lg:w-3/4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <input
            type="text"
            placeholder="Search hotels..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-52"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm">Sort By:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Popularity">Popularity</option>
              <option value="Guest Rating">Guest Rating</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHotels.map((hotel, index) => (
              <div key={index} className="border rounded-xl shadow bg-white overflow-hidden">
                <img
                  src={hotel.image || hotel.images?.[0] || "/images/fallback.jpg"}
                  alt={hotel.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(hotel.rating || 0)}
                    <span className="text-xs text-gray-600">
                      ({hotel.rating || "0.0"})
                    </span>
                  </div>
                  <p className="text-green-600 font-bold text-lg mb-1">₹{hotel.price}</p>
                  <p className="text-sm text-gray-600 mb-3">per {hotel.unit || "night"}</p>
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
          <p>No hotels found for "{search}" under ₹{maxPrice}.</p>
        )}
      </div>
    </div>
  );
};

export default CityHotels;
