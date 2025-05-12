import React, { useState } from "react";
import logo from "../../assets/codepen_logo.svg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleSideBarMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleStartCoding = () => {
    if (user) {
      navigate("/editor");
    } else {
      navigate("/login");
    }
  };

  return (
    <section
      className={`bg-secondary ${
        isSideMenuOpen ? "w-60" : "w-10"
      } min-h-screen relative transition-all ease-in-out duration-1000 px-2 py-6 group hidden xl:block`}
    >
      <div
        className="w-8 h-8 bg-[#444857] rounded-md cursor-pointer absolute z-100 -right-8 top-3 flex justify-center items-center text-xl text-neutral-300 hover:bg-[#70768E] transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100"
        onClick={toggleSideBarMenu}
      >
        {isSideMenuOpen ? (
          <MdKeyboardDoubleArrowLeft />
        ) : (
          <MdKeyboardDoubleArrowRight />
        )}
      </div>
      {isSideMenuOpen && (
        <div className="overflow-hidden w-full flex flex-col gap-4">
          <div>
            <img
              src={logo}
              alt="codepen logo"
              className="object-contain w-44 h-auto"
            />
            <p className="uppercase text-gray-400 text-xs mt-4 font-semibold">
              Try Our Online Editor
            </p>
          </div>

          <div
            className="bg-black mt-5 cursor-pointer transition-all ease-in-out place-items-center rounded-md px-6 py-3 border-1 border-gray-400 hover:border-gray-200 group"
            onClick={handleStartCoding}
          >
            <p className="text-gray-400 group-hover:text-gray-200">
              Start Coding
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidebar;
