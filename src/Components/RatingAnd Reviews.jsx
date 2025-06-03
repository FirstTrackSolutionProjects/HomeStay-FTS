import React, { useState } from "react";

const RatingsAndReviews = () => {
  const ratingSummary = {
    average: 4.3,
    totalRatings: 250,
    breakdown: {
      5: 60,
      4: 25,
      3: 10,
      2: 3,
      1: 2,
    },
  };

  const reviews = [
    {
      id: 1,
      name: "Alice",
      date: "May 2025",
      rating: 5,
      comment: "Amazing stay! Clean rooms and great service.",
        avatar: "/images/Gavatar.png",
    },
    {
      id: 2,
      name: "Bob",
      date: "April 2025",
      rating: 4,
      comment: "Good value for money. Would recommend.",
      avatar: "/images/Bavatar.png",

    },
    {
      id: 3,
      name: "Charlie",
      date: "March 2025",
      rating: 3,
      comment: "Average experience. Could be cleaner.",
      avatar: "/images/Bavatar.png",
    
    },
    {
      id: 4,
      name: "Diana",
      date: "February 2025",
      rating: 5,
      comment: "Exceptional service and ambiance!",
      avatar: "/images/Gavatar.png",

    },
    {
      id: 5,
      name: "Ethan",
      date: "January 2025",
      rating: 4,
      comment: "Comfortable and budget-friendly.",
      avatar: "/images/Bavatar.png",

    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="mt-10">

      {/* Rating Bars */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow p-4">
        {Object.entries(ratingSummary.breakdown)
          .sort((a, b) => b[0] - a[0])
          .map(([star, percent]) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <span className="w-5 text-sm font-medium">{star}★</span>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <span className="text-xs w-6 text-right">{percent}%</span>
            </div>
          ))}
      </div>

      {/* Reviews */}
      <div className="mt-6 space-y-4">
        {visibleReviews.map((review) => (
          <div key={review.id} className="border-b py-4">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
               <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="bg-green-600 text-white text-sm px-2 py-1 rounded">
                {review.rating}★
              </div>
            </div>
           {review.comment && (
              <p className="text-sm text-gray-700">{review.comment}</p>
            )}
          </div>
        ))}
      </div>

      {/* Toggle Reviews */}
      <div className="mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium hover:underline"
        >
          {showAll ? "Show less reviews" : "See all reviews"}
        </button>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
