import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white min-h-[80vh] flex flex-col py-4 items-center justify-center px-4 sm:px-6 lg:flex-row md:justify-between md:px-20 gap-10 md:gap-0">

      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          The best place to build,
          <br />
          test, and discover front-end code.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          <strong className="text-white">CodePen</strong> is a{" "}
          <strong className="text-white">social development environment</strong>{" "}
          for front-end designers and developers...
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded"
        >
          Sign Up for Free
        </button>

        <button
          onClick={() => navigate("/editor")}
          className="mt-2 mb-10 ml-2 xl:hidden bg-black text-white border border-gray-500 hover:border-white py-2 px-6 rounded"
        >
          Start Coding
        </button>
      </div>

      <div className="relative bg-gradient-to-r from-gray-400 via-gray-700 to-gray-800 rounded-xl px-6 py-4 sm:px-10 sm:py-6">
        
        <div className="bg-gray-800 rounded-md shadow-xl p-4 text-left w-72 mb-4 mx-auto md:ml-16">
          <div className="font-semibold mb-2">HTML</div>
          <code className="text-sm text-gray-300">
            &lt;div class="rect"&gt;&lt;/div&gt;
          </code>
        </div>

      
        <div className="bg-gray-800 rounded-md shadow-xl p-4 text-left w-72 mb-4 mx-auto md:ml-2">
          <div className="font-semibold mb-2">CSS</div>
          <pre className="text-sm text-gray-300 whitespace-pre-wrap">
            {`.rect {
  background: linear-gradient(
    -119deg,
    red 0%,
    black 100%
  );
}`}
          </pre>
        </div>

        <div className="bg-gray-800 rounded-md shadow-xl p-4 text-left w-72 mx-auto md:ml-6">
          <div className="font-semibold mb-2">JS</div>
          <pre className="text-sm text-green-300 whitespace-pre-wrap">
            {`var colors = [
  "#748087", "#DE7300", "#748087"
];

function animate() {}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
