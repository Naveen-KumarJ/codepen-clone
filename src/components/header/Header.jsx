import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FaPen } from "react-icons/fa";
import defaultLogo from "../../assets/default-profile.jpg";
import codepenLogo from "../../assets/codepen_logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [fileName, setFileName] = useState("Untitled Project");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center bg-black p-3 md:p-4 border-b border-b-gray-500 text-white">
      
      <div className="flex items-center gap-3 w-full md:w-auto">
        <img
          src={codepenLogo}
          alt="CodePen Logo"
          className="w-24 h-full cursor-pointer"
        />
        {user && (
          <div className="flex items-center gap-2">
            {isEditing ? (
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                onBlur={handleSave}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
                className="bg-secondary px-2 py-1 rounded text-white outline-none"
                autoFocus
              />
            ) : (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                <span className="text-lg font-semibold">{fileName}</span>
                <FaPen size={14} className="text-gray-400 hover:text-white" />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3 ml-auto w-full md:w-auto mt-4 md:mt-0">
        {!user ? (
          <>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-green-500 text-black hover:text-white hover:bg-green-800 rounded text-sm"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-secondary rounded text-white hover:bg-[#444857] text-sm"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || defaultLogo}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-300">
                Hello, {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-sm rounded cursor-pointer mt-2 md:mt-0"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
