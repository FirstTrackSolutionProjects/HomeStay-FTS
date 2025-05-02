import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PartnerForm from "./PartnerForm";

const Partner = () => {
  const [propertyType, setPropertyType] = useState(null); // Hotel or Home
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelect = (type) => {
    setPropertyType(type);
    navigate(`/partner/${type}`); // Navigate to Partner Form page with selected type
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {!propertyType ? (
        // Step 1: Show property selection
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Are you a property owner?</h2>
          <p className="text-xl font-semibold mb-6">What type of property do you want to register?</p>

          <div className="space-y-4">
            <div
              onClick={() => handleSelect("Hotel")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🏨 Hotel</h3>
              <p className="text-gray-600 text-sm">  A commercial property offering private rooms, suites, and other accommodations for guests.</p>
            </div>

            <div
              onClick={() => handleSelect("Home")}
              className="cursor-pointer border p-4 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">🏡 Home</h3>
              <p className="text-gray-600 text-sm">A residential space where guests can book individual rooms or the entire home for short stays.</p>
            </div>
          </div>
        </div>
      ) : (
        // Step 2: Show full form after property type selected
        <PartnerForm selectedType={propertyType} />
      )}
    </div>
  );
};

export default Partner;
