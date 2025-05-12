import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import codepenlogo from "../assets/codepen_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/loader/Loader";

const Login = () => {
  const { loginWithEmail, googleSignIn, githubSignIn, authLoading } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate("/editor");
    } catch (err) {
      setError("Invalid email or password.");
      console.log(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/editor");
    } catch (err) {
      setError("Google sign-in failed.");
      console.log(err.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await githubSignIn();
      navigate("/editor");
    } catch (err) {
      setError("GitHub sign-in failed.");
      console.log(err.message);
    }
  };
  if (authLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1115] text-white relative">
      <div className="bg-[#1d1f27] p-8 rounded-xl w-full max-w-md shadow-md">
        <Link to={"/"}>
          <img src={codepenlogo} alt="logo" className="object-contain w-44" />
        </Link>
        <h2 className="text-2xl font-semibold mb-6 mt-2">Log In</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleEmailLogin}>
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
                required
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
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Create here
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition mb-3"
        >
          <FaGoogle /> Sign in with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="w-full bg-gray-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition"
        >
          <FaGithub /> Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
