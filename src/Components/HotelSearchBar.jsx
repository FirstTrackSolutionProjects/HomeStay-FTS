import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Button from "./ui/Button";

export default function HotelSearchBar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const totalGuests = rooms.reduce((sum, room) => sum + room.adults + room.children, 0);

  const toggleGuestDropdown = () => setGuestDropdownOpen(!guestDropdownOpen);

  const updateRoomCount = (index, type, delta) => {
    setRooms((prevRooms) =>
      prevRooms.map((room, i) =>
        i === index
          ? {
              ...room,
              [type]: Math.max(type === "adults" ? 1 : 0, room[type] + delta),
            }
          : room
      )
    );
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };
  const deleteRoom = (index) => {
    if (rooms.length > 1) {
      setRooms((prevRooms) => prevRooms.filter((_, i) => i !== index));
    }
  };
  

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

        {/* Date Picker */}
        <div className="flex w-full mb-2 md:mb-0 md:w-1/3 gap-2">
          {/* Check-in */}
          <div className="flex items-center border-2 border-gray-400 rounded-md p-2 w-1/2 bg-white">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setDateRange([date, endDate])}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Check-in"
              dateFormat="EEE, d MMM"
              className="w-full outline-none bg-transparent text-gray-800"
              calendarClassName="!border !rounded-lg !p-4"
            />
          </div>

          {/* Check-out */}
          <div className="flex items-center border-2 border-gray-400 rounded-md p-2 w-1/2 bg-white">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <DatePicker
              selected={endDate}
              onChange={(date) => setDateRange([startDate, date])}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="Check-out"
              minDate={startDate}
              dateFormat="EEE, d MMM"
              className="w-full outline-none bg-transparent text-gray-800"
              calendarClassName="!border !rounded-lg !p-4"
            />
          </div>
        </div>


        {/* Guests */}
        <div className="relative w-full md:w-1/4 mb-2 md:mb-0">
          <div
            onClick={toggleGuestDropdown}
            className="flex items-center border rounded-md p-2 cursor-pointer"
          >
            <FaUser className="text-gray-500 mr-2" />
            <span>
              {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
              {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
            </span>
          </div>

          {/* Dropdown */}
          {guestDropdownOpen && (
            <div className="absolute z-10 w-full bg-white rounded-md shadow-lg mt-2 p-4 text-sm text-gray-800">
              {rooms.map((room, index) => (
                <div key={index} className="border rounded-md p-3 mb-3">
                <div className="flex justify-between mb-2 font-semibold">
                <div className="flex items-center">
                  <span>Room {index + 1}</span>
                    {rooms.length > 1 && (
                  <button
                    onClick={() => deleteRoom(index)}
                    className="text-red-500 text-xs hover:underline ml-4"
                      >
                    Remove
                  </button>
                    )}
                </div>
                  <span>
                  {room.adults + room.children} Guest
                  {room.adults + room.children > 1 ? "s" : ""}
                  </span>
                </div>


                  {/* Adults */}
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="font-medium">Adults</div>
                      <div className="text-gray-500 text-xs">Ages 5 or above</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateRoomCount(index, "adults", -1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                        disabled={room.adults <= 1}
                      >
                        −
                      </button>
                      <span>{room.adults}</span>
                      <button
                        onClick={() => updateRoomCount(index, "adults", 1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Children</div>
                      <div className="text-gray-500 text-xs">Ages 0–5</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateRoomCount(index, "children", -1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                        disabled={room.children <= 0}
                      >
                        −
                      </button>
                      <span>{room.children}</span>
                      <button
                        onClick={() => updateRoomCount(index, "children", 1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addRoom}
                className="text-blue-600 font-medium w-full py-2 border rounded mb-2"
              >
                + Add another room
              </button>

              <button
                onClick={() => setGuestDropdownOpen(false)}
                className="w-full bg-black text-white py-2 rounded"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
