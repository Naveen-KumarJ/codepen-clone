import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <ClipLoader size={50} color={"#4645F6"} />
    </div>
  );
};

export default Loader;
