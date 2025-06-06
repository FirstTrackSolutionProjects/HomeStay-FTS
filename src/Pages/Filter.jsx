import React, { useState } from 'react';

const Filter = () => {
  const [price, setPrice] = useState(10000);

  return (
    <div className="w-full max-w-4xl p-4 rounded-lg shadow-md bg-white space-y-6
                    md:space-y-0 md:grid md:grid-cols-2 md:gap-6
                    lg:max-w-5xl lg:grid-cols-3">
      <h2 className="text-lg font-semibold col-span-full">Filters</h2>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-1">Price Range</h3>
        <input
          type="range"
          min="445"
          max="10000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>₹445</span>
          <span>₹{price}</span>
        </div>
      </div>

      {/* Rooms & Suites */}
      <div>
        <h3 className="font-medium mb-1">Rooms & Suites</h3>
        <div className="space-y-1 text-sm">
          <label><input type="radio" name="room" /> Couple Friendly</label><br />
          <label><input type="radio" name="room" /> International Guests</label><br />
          <label><input type="radio" name="room" /> Business Travellers</label>
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="font-medium mb-1">Category</h3>
        <div className="space-y-1 text-sm">
          <label><input type="radio" name="category" /> Resort</label><br />
          <label><input type="radio" name="category" /> Executive</label><br />
          <label><input type="radio" name="category" /> Home</label><br />
          <label><input type="radio" name="category" /> Hotel Rooms</label>
        </div>
      </div>

      {/* Accommodation Type */}
      <div>
        <h3 className="font-medium mb-1">Accommodation Type</h3>
        <div className="space-y-1 text-sm">
          <label><input type="radio" name="accommodation" /> Hotel</label><br />
          <label><input type="radio" name="accommodation" /> Guest House</label>
        </div>
      </div>

      {/* Hotel Facilities */}
      <div>
        <h3 className="font-medium mb-1">Hotel Facilities</h3>
        <div className="space-y-1 text-sm">
          <label><input type="radio" name="facility" /> Seating Area</label><br />
          <label><input type="radio" name="facility" /> Swimming Pool</label><br />
          <label><input type="radio" name="facility" /> King Sized Bed</label><br />
          <label><input type="radio" name="facility" /> Queen Sized Bed</label>
        </div>
      </div>

      {/* Check-in Features */}
      <div>
        <h3 className="font-medium mb-1">Check-in Features</h3>
        <div className="space-y-1 text-sm">
          <label><input type="radio" name="checkin" /> 24×7 Check-in</label><br />
          <label><input type="radio" name="checkin" /> Free Cancellation</label><br />
          <label><input type="radio" name="checkin" /> ID Proof Required</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
