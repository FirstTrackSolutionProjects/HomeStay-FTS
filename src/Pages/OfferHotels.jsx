
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import offerHotels from "../data/offer";

const OfferHotels = () => {
  const navigate = useNavigate();

  const handleBookNow = (hotel) => {
    navigate(`/booking/offer/${hotel.id}`, {
      state: {
        hotel,
        payableAmount: hotel.price - 300 - 250 + 50,
      },
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {offerHotels.map((hotel) => (
        <div key={hotel.id} className="bg-white p-4 rounded shadow">
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-2">{hotel.name}</h3>
          <p className="text-green-600 font-bold">₹{hotel.price} / night</p>
          <div className="flex justify-between items-center mt-4 w-full px-4">
            <Link to={`/offer-details/${hotel.id}`}>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </Link>
            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleBookNow(hotel)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferHotels;
