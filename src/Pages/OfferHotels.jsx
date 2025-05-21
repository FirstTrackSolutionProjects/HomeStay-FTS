import { useParams, useNavigate } from "react-router-dom";
import offerHotelsByCity from "../data/offer";

const OfferHotels = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const hotels = offerHotelsByCity[city.toLowerCase()] || [];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 capitalize text-center">{city} - Available Hotels</h2>

      {hotels.length === 0 ? (
        <p>No hotels found in {city}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden border">
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <div className="flex items-center text-yellow-500 text-sm mb-1">
                  {"★".repeat(Math.floor(hotel.rating))}
                  {hotel.rating % 1 !== 0 && "½"}
                  <span className="text-gray-600 ml-2">({hotel.rating})</span>
                </div>
                <p className="text-green-600 text-lg font-bold">₹{hotel.price}</p>
                <p className="text-gray-500 text-sm mb-3">per night</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/offer-details/${hotel.id}`)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => navigate(`/booking/${city}/${hotel.id}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfferHotels;
