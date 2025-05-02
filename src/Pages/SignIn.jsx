import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [forgotMode, setForgotMode] = useState(false); // toggles between SignIn and Forgot Password

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Sign In Details:", { emailOrPhone, password });
    setEmailOrPhone("");
    setPassword("");
    alert("Sign in successful!");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      alert("Please enter your email or phone.");
      return;
    }

    console.log("Password Reset Request for:", emailOrPhone);
    alert("Password reset instructions sent to your email/phone.");
    setEmailOrPhone("");
    setForgotMode(false); // Return to sign-in after submitting
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {forgotMode ? "Forgot Password" : "Sign In"}
        </h2>

        <form onSubmit={forgotMode ? handleForgotSubmit : handleSignInSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {!forgotMode && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}

          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {forgotMode ? "Send Reset Link" : "Sign In"}
          </button>
        </form>

        {/* Forgot Password Toggle */}
        {!forgotMode ? (
          <p className="text-sm text-right mt-2 text-red-600 hover:underline cursor-pointer" onClick={() => setForgotMode(true)}>
            Forgot Password?
          </p>
        ) : (
          <p className="text-sm text-right mt-2 text-blue-600 hover:underline cursor-pointer" onClick={() => setForgotMode(false)}>
            Back to Sign In
          </p>
        )}

        {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

        {/* Google Sign-In Button */}
        <button
          onClick={() => alert("Google sign-in coming soon!")}
          className="flex items-center justify-center w-full gap-3 border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        {/* Register Link */}
        {!forgotMode && (
          <p className="text-center text-sm mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
