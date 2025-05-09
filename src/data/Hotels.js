const hotels = [
  {
    id: "p1",
    name: "Hotel Shanti Palace",
    image: "/images/h1.jpg",
    price: 5727,
    unit: "night",
    stars: 5,
    locationId: "0",
  },
  {
    id: "p2",
    name: "Hotel Classic Deluxe",
    image: "/images/h2.jpg",
    price: 4899,
    unit: "night",
    stars: 4,
    locationId: "0",
  },
  {
    id: "p3",
    name: "Hotel Sunrise Residency",
    image: "/images/h3.jpg",
    price: 6120,
    unit: "night",
    stars: 3,
    locationId: "0",
  },
  {
    id: "p4",
    name: "The Royal Stay",
    image: "/images/h4.jpg",
    price: 5400,
    unit: "night",
    stars: 5,
    locationId: "0",
  },

  {
    id: "h1",
    name: "OYO Banjara View",
    image: "/images/h2.jpg",
    price: 4067,
    unit: "trip",
    stars: 3,
    locationId: "1",
  },
  {
    id: "h2",
    name: "Hotel Golkonda Premium",
    image: "/images/h3.jpg",
    price: 5000,
    unit: "trip",
    stars: 4,
    locationId: "0",
  },
  {
    id: "h3",
    name: "The City Pearl",
    image: "/images/h4.jpg",
    price: 4500,
    unit: "trip",
    stars: 4,
    locationId: "0",
  },
  {
    id: "h4",
    name: "Urban Nest Suites",
    image: "/images/h5.jpg",
    price: 4200,
    unit: "trip",
    stars: 3,
    locationId: "0",
  },

  {
    id: "b1",
    name: "Bella Vista Residency",
    image: "/images/h3.jpg",
    price: 24817,
    unit: "session",
    stars: 5,
    locationId: "0",
  },
  {
    id: "b2",
    name: "Green Tree Hotel",
    image: "/images/h1.jpg",
    price: 21000,
    unit: "session",
    stars: 4,
    locationId: "0",
  },
  {
    id: "b3",
    name: "Maple Woods Residency",
    image: "/images/h2.jpg",
    price: 22000,
    unit: "session",
    stars: 5,
    locationId: "0",
  },
  {
    id: "b4",
    name: "Blue Lagoon Hotel",
    image: "/images/h5.jpg",
    price: 20000,
    unit: "session",
    stars: 4,
    locationId: "0",
  },

  {
    id: "j1",
    name: "Ocean View Palace",
    image: "/images/h4.jpg",
    price: 1577,
    unit: "month",
    stars: 3,
    locationId: "0",
  },
  {
    id: "j2",
    name: "Jaipur Grand Suites",
    image: "/images/h5.jpg",
    price: 1899,
    unit: "month",
    stars: 4,
    locationId: "0",
  },
  {
    id: "j3",
    name: "Sunset Residency",
    image: "/images/h2.jpg",
    price: 1750,
    unit: "month",
    stars: 3,
    locationId: "0",
  },
  {
    id: "j4",
    name: "Sapphire Palace",
    image: "/images/h3.jpg",
    price: 2000,
    unit: "month",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },

  {
    id: "d1",
    name: "ITC Grand Bharat Retreat",
    image: "/images/h5.jpg",
    price: 4900,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d2",
    name: "Dehradun Hill Hotel",
    image: "/images/h3.jpg",
    price: 4300,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
  {
    id: "d3",
    name: "Royal Orchid Suites",
    image: "/images/h4.jpg",
    price: 4600,
    unit: "suite",
    stars: 5,
    locationId: "0",
  },
  {
    id: "d4",
    name: "Mountain View Resort",
    image: "/images/h1.jpg",
    price: 4100,
    unit: "suite",
    stars: 4,
    locationId: "0",
  },
];

export default hotels;
