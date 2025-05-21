// import React, { useState, useEffect } from "react";

// const Review = () => {
//   // Sample data for reviews
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       rating: 4,
//       comment: "Great experience! Clean rooms and excellent service.",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       rating: 5,
//       comment: "Amazing hotel! Would love to visit again.",
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       rating: 3,
//       comment: "Good location, but the room service could be better.",
//     },
//     {
//         id: 4,
//         name: "Sarah Lee",
//         rating: 3,
//         comment: "Nice place, but the amenities could use some improvement.",
//       }
      
//   ]);

//   // States for review form
//   const [newReview, setNewReview] = useState({
//     name: "",
//     rating: 0,
//     comment: "",
//   });

//   // Scroll to the latest review periodically (auto-scroll effect)
//   useEffect(() => {
//     const reviewContainer = document.getElementById("review-container");
//     const autoScroll = setInterval(() => {
//       reviewContainer.scrollTop = reviewContainer.scrollHeight;
//     }, 5000); // Scroll every 5 seconds

//     return () => clearInterval(autoScroll);
//   }, []);

//   // Handle review form submission
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     setReviews([
//       ...reviews,
//       { id: reviews.length + 1, ...newReview },
//     ]);
//     setNewReview({ name: "", rating: 0, comment: "" });
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl shadow-xl">
//       {/* Hotel Information */}
//       {/* <div className="text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-900">Hotel Name</h1>
//         <p className="text-xl text-gray-700 mt-2">Location: City, Country</p>
//       </div> */}

//       {/* Reviews Section */}
//       <div className="mb-10">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Guest Reviews</h2>
//         <div
//           id="review-container"
//           className="space-y-6 max-h-80 overflow-y-auto p-4 bg-white rounded-lg shadow-md"
//         >
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="p-6 bg-gray-50 border-l-4 border-blue-500 rounded-lg shadow-md"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-medium text-lg text-gray-800">{review.name}</h3>
//                 <div className="text-yellow-500">
//                   {/* Display stars based on rating */}
//                   {"★".repeat(review.rating)}
//                   {"☆".repeat(5 - review.rating)}
//                 </div>
//               </div>
//               <p className="text-sm text-gray-600">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* New Review Form */}
//       <div className="bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Submit Your Review</h2>
//         <form onSubmit={handleReviewSubmit} className="space-y-6">
//           <div>
//             <label className="block text-lg font-medium text-gray-700">Your Name</label>
//             <input
//               type="text"
//               value={newReview.name}
//               onChange={(e) =>
//                 setNewReview({ ...newReview, name: e.target.value })
//               }
//               className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">Rating</label>
//             <select
//               value={newReview.rating}
//               onChange={(e) =>
//                 setNewReview({ ...newReview, rating: parseInt(e.target.value) })
//               }
//               className="w-full p-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             >
//               <option value={0}>Select Rating</option>
//               <option value={1}>1 Star</option>
//               <option value={2}>2 Stars</option>
//               <option value={3}>3 Stars</option>
//               <option value={4}>4 Stars</option>
//               <option value={5}>5 Stars</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">Your Review</label>
//             <textarea
//               value={newReview.comment}
//               onChange={(e) =>
//                 setNewReview({ ...newReview, comment: e.target.value })
//               }
//               className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-gray-700"
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Review;

import React, { useState, useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 4, comment: "Great experience! Clean rooms and excellent service." },
    { id: 2, name: "Jane Smith", rating: 5, comment: "Amazing hotel! Would love to visit again." },
    { id: 3, name: "Mike Johnson", rating: 3, comment: "Good location, but the room service could be better." },
    { id: 4, name: "Sarah Lee", rating: 3, comment: "Nice place, but the amenities could use some improvement." }
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  useEffect(() => {
    const reviewContainer = document.getElementById("review-container");
    const autoScroll = setInterval(() => {
      if (reviewContainer) {
        reviewContainer.scrollTop = reviewContainer.scrollHeight;
      }
    }, 5000);
    return () => clearInterval(autoScroll);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="mx-auto py-10 px-4 sm:px-6 lg:px-0 max-w-[80%] bg-gradient-to-br from-blue-100 to-green-100 rounded-none lg:rounded-2xl shadow-xl mt-5">

      {/* Reviews Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Guest Reviews</h2>
        <div
          id="review-container"
          className="space-y-6 max-h-96 overflow-y-auto p-4 bg-white rounded-xl shadow-inner scroll-smooth"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
                <div className="text-yellow-500 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">Submit Your Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value={0}>Select Rating</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Review</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-md hover:bg-cyan-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
