import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const WhyChooseUs = () => {
  return (
    <div className=" text-white py-24 p-6 mx-auto w-full bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
        {/* Left Column: Features */}
        <div className="space-y-14">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-500 rounded-md p-3">
              {/* Thumbs Up Icon (Replace with your actual icon component or SVG) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2.5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Easy Online Resume Builder
              </h3>
              <p className="text-gray-600 text-sm">
                Create your professional resume effortlessly with our intuitive
                online builder.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-500 rounded-md p-3">
              {/* Lightbulb/Tips Icon (Replace with your actual icon) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1m-9 0h-1m-3 4l-2-2M6 13l-2-2m12 0l2-2m-3-4l2 2M6 7l2 2m12 0l-2 2m-3 4l-2-2M6 13l2 2m-12-3h1m18 0h-1m-2-6h1m-16 0h1m2 6h-1m16 0h-1"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Step-By-Step Expert Tips
              </h3>
              <p className="text-gray-600 text-sm">
                Get expert guidance at every stage of your resume creation
                process.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-teal-100 text-teal-500 rounded-md p-3">
              {/* Shopping Cart/Approved Icon (Replace with your actual icon) */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Recruiter Approved Presets
              </h3>
              <p className="text-gray-600 text-sm">
                Choose from our library of resume templates proven to impress
                recruiters.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Why Choose Us Text */}
        <div className="pt-8 md:pt-0">
          <div className="flex space-x-2 pb-6">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Why Choose Our Platform?
          </h2>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Stop struggling with resume creation. Our platform offers an easy
              and guided process to build a professional CV in minutes.
            </p>
            <p className="text-gray-600">
              Gain a competitive edge with our expert tips and
              recruiter-approved strategies, ensuring your resume makes a
              lasting impression.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
            <Link to={"/dashboard"}> LET'S BUILD YOUR CV</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
