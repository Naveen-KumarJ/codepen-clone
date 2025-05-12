import React, { useState } from "react";
import { FaEnvelope, FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import codepenlogo from "../assets/codepen_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/loader/Loader";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn, githubSignIn, signUpWithEmail, authLoading } =
    useAuth();
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await googleSignIn();
      navigate("/editor");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubSignin = async () => {
    try {
      await githubSignIn();
      navigate("/editor");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUpWithEmail(email, password);
      navigate("/editor");
    } catch (err) {
      setError(err.message);
    }
  };

  if (authLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1115] text-white">
      <div className="bg-[#1d1f27] p-8 rounded-xl w-full max-w-md shadow-md">
        <Link to={"/"}>
          <img src={codepenlogo} alt="" className="object-contain w-44" />
        </Link>
        <h2 className="text-2xl font-semibold mb-6 mt-2">
          Create your account
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Name</label>
            <div className="flex items-center bg-[#2a2d3a] rounded-md px-3">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent flex-1 py-2 text-sm outline-none text-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <div className="flex items-center bg-[#2a2d3a] rounded-md px-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 py-2 text-sm outline-none text-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Password</label>
            <div className="flex items-center bg-[#2a2d3a] rounded-md px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent flex-1 py-2 text-sm outline-none text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <button
          onClick={handleGoogleSignin}
          className="w-full bg-gray-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition mb-3"
        >
          <FaGoogle /> Sign up with Google
        </button>
        <button
          onClick={handleGithubSignin}
          className="w-full bg-gray-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition"
        >
          <FaGithub /> Sign up with GitHub
        </button>
      </div>
    </div>
  );
};

export default Signup;
