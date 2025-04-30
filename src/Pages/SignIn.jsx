import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!emailOrPhone && !!password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Sign In Details:", {
     emailOrPhone,
     password,
    });

    
    setEmailOrPhone("");
    setPassword("");
    alert("Sign in successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
