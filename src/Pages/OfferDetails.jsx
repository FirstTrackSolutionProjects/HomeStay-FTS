import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import offerHotelsByCity from '../data/offer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OfferDetails = () => {
  const { id } = useParams();

  // Convert object to array and find the hotel
  const hotel = Object.values(offerHotelsByCity).flat().find((h) => h.id === id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  if (!hotel) return <p className="text-center text-xl mt-10">Hotel not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2 text-center">{hotel.name}</h2>
      <Slider {...settings}>
        {hotel.images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-96 object-cover rounded-md" />
          </div>
        ))}
      </Slider>
      <p className="text-xl mt-4 text-green-600 font-bold text-center">₹{hotel.price} / night</p>
      <p className="mt-2 text-center">{hotel.description}</p>
    </div>
  );
};

export default OfferDetails;
