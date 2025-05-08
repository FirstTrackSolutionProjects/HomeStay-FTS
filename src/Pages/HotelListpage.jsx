import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import hotels from "../data/Hotels";

const HotelListPage = () => {
  const { locationId } = useParams();
  const hotelsInLocation = hotels.filter(hotel => hotel.locationId === locationId);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filteredHotels = hotelsInLocation
  .filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) &&
      hotel.price <= maxPrice
  )
  .sort((a, b) => {
    if (sort === "popularity") return b.stars - a.stars;
    return 0;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Available Hotels</h2>

      {/* Search and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="default">Sort By</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="col-span-1 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Price Range</h4>
          <div className="relative">
            <input
              type="range"
              min="445"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full appearance-none bg-gray-300 h-2 rounded-full outline-none"
            />
            <div
              className="absolute -top-6 text-xs px-2 py-1 rounded bg-gray-700 text-white left-1/2 transform -translate-x-1/2 shadow"
            style={{
              left: `calc(${((maxPrice - 445) / (10000 - 445)) * 100}%)`,
              transform: `translateX(-50%)`,
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


          <div>
            <h4 className="font-semibold mb-2">Rooms & Suites</h4>
            {['Couple Friendly', 'International Guests', 'Business Travellers'].map(item => (
              <div key={item}>
                <input type="checkbox" id={item} className="mr-2" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Category</h4>
            {['Resort', 'Executive', 'Home', 'Hotel Rooms'].map(item => (
              <div key={item}>
                <input type="checkbox" id={item} className="mr-2" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Accommodation Type</h4>
            {['Hotel', 'Guest House'].map(item => (
              <div key={item}>
                <input type="checkbox" id={item} className="mr-2" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Hotel Facilities</h4>
            {['Seating Area', 'Swimming Pool', 'King Sized Bed', 'Queen Sized Bed'].map(item => (
              <div key={item}>
                <input type="checkbox" id={item} className="mr-2" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Check-in Features</h4>
            {['24*7 Check-in', 'Free Cancellation', 'No ID Required'].map(item => (
              <div key={item}>
                <input type="checkbox" id={item} className="mr-2" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel List */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <Link
              to={`/hotel/detail/${hotel.id}`}
              key={hotel.id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-200 bg-white"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
                <div className="flex items-center space-x-0.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < hotel.stars ? "text-yellow-400 text-lg" : "text-gray-400 text-sm"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xl font-bold text-green-600">
                      ₹{hotel.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">per {hotel.unit}</p>
                  </div>
                  <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    View Details
                  </button>
                  <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-cyan-600">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelListPage;

