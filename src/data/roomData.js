const rooms = [
  {
    type: "Standard",
    size: "10 sqm",
    features: ["AC", "TV", "Single Bed"],
    originalPrice: 1800,
    discountedPrice: 500,
    taxes: 120,
    image: "/images/standard.jpg",
  },
  {
    type: "Classic",
    size: "12 sqm",
    features: ["AC", "TV", "Queen Bed"],
    originalPrice: 2461,
    discountedPrice: 588,
    taxes: 140,
    image: "/images/classic.jpg",
  },
  {
    type: "Premium",
    size: "20 sqm",
    features: ["AC", "TV", "King Bed", "Balcony", "Mini Bar"],
    originalPrice: 3500,
    discountedPrice: 999,
    taxes: 170,
    image: "/images/premium.jpg",
  },
  {
    type: "Executive",
    size: "25 sqm",
    features: ["AC", "TV", "King Bed", "Balcony", "Mini Bar", "Desk"],
    originalPrice: 4200,
    discountedPrice: 1200,
    taxes: 180,
    image: "/images/executive.jpg",
  },
];

export default rooms;
