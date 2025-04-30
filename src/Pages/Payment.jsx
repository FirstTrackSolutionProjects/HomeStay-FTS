// import React, { useState } from "react";

// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardHolder, setCardHolder] = useState("");
//   const [upiNumber, setUpiNumber] = useState("");

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-10 flex flex-col h-[440px]"> {/* Decreased height here */}
//         <h1 className="text-3xl font-bold text-center  mb-6">Payment Page</h1> 
//         <p className="text-center  mb-8">Complete your payment to secure your booking.</p> 

//         <div className="flex-grow space-y-6">
//           {/* Email Input */}
//           <div className="m-4">
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Phone Number Input */}
//           <div className="m-4">
//             <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Name Input */}
//           <div className="m-4">
//             <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name:</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Payment Method Dropdown */}
//           <div className="m-4">
//             <label htmlFor="payment-method" className="block text-lg font-medium text-gray-700">Payment Method:</label>
//             <select
//               id="payment-method"
//               onChange={handlePaymentMethodChange}
//               className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select payment method</option>
//               <option value="card">Credit/Debit Card</option>
//               <option value="upi">UPI</option>
//             </select>
//           </div>

//           {/* Credit/Debit Card Inputs */}
//           {paymentMethod === "card" && (
//             <>
//               <div className="m-4">
//                 <label htmlFor="card-number" className="block text-lg font-medium text-gray-700">Card Number:</label>
//                 <input
//                   type="text"
//                   id="card-number"
//                   placeholder="Enter card number"
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="m-4">
//                 <label htmlFor="card-holder" className="block text-lg font-medium text-gray-700">Card Holder Name:</label>
//                 <input
//                   type="text"
//                   id="card-holder"
//                   placeholder="Enter card holder name"
//                   value={cardHolder}
//                   onChange={(e) => setCardHolder(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </>
//           )}

//           {/* UPI Input */}
//           {paymentMethod === "upi" && (
//             <div className="m-4">
//               <label htmlFor="upi-number" className="block text-lg font-medium text-gray-700">UPI Number:</label>
//               <input
//                 type="text"
//                 id="upi-number"
//                 placeholder="Enter UPI ID"
//                 value={upiNumber}
//                 onChange={(e) => setUpiNumber(e.target.value)}
//                 className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           )}
//         </div>

//         {/* Pay Button with Adjusted Size and Margin */}
//         <div className="mt-auto">
//           <button className="w-full py-2 px-6 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Pay
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
