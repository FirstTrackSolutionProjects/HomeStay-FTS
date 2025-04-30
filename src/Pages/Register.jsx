import React, { useState } from "react";
import { Link } from "react-router-dom"; 
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    console.log("Registered:", { fullName, email, password });
    alert("Registration successful!");
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-yellow-100 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
           <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
    
        <p className="text-center text-sm mt-4 text-gray-600">
           Have an account?{" "}
          <Link to="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
