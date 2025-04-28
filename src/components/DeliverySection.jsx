import React from "react";
import Cv from "../../src/assets/Image/cv.png";
function DeliverySection() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left Column: Text Content */}
        <div>
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6">
            We Deliver The Best
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Proven CV Templates to Increase Hiring Chance
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Creative and Clean Templates Design
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Easy and Intuitive Online CV Builder
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free to use. Developed by hiring professionals.
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Fast Easy CV and Resume Formatting
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Recruiter Approved Phrases.
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="">
          <img
            src={Cv} // Replace with the actual path to your image
            alt="CV Templates"
            className="w-350px h-350px shadow-lg rounded-md"
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg py-6 px-8 md:py-8 md:px-12 flex items-center justify-between mb-16 container mx-auto">
        <div className="flex items-center">
          <div className="bg-blue-100 text-blue-500 rounded-xl p-3 mr-4">
            {/* Paint Brush Icon (Replace with your actual icon) */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.828 10 13.999l-2.828 2.828a2 2 0 11-2.828-2.828L8.172 8.172 10 10.001l2.828-2.828z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700">
              Do you Need a Complete Custom CV Template?
            </h3>
          </div>
        </div>
        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-semibold py-3 px-6 rounded-md">
          Send a Request
        </button>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
        {/* Left Column: Pricing Introduction */}
        <div>
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6">
            Our Pricing
          </h2>
          <p className="text-gray-600 mb-8">
            Our resume builder offers flexible pricing plans: choose monthly for
            short-term needs or yearly for the best value. Access all templates,
            features, and unlimited resume edits with any plan.
          </p>
          <div className="bg-blue-100 text-blue-600 font-semibold py-3 px-6 rounded-md inline-block mb-4 cursor-pointer">
            Lets Build CV <br />
            <span className="text-sm">(with 7days of Free Trial)</span>
          </div>
          <div>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Terms & Conditions
            </a>
            <p className="text-gray-500 text-xs">
              subject to change with prior notice
            </p>
          </div>
        </div>

        {/* Right Column: Pricing Cards */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          {/* Monthly Pack */}
          <div className=" relative bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0 hover:scale-105 transition-all">
            <div className=" bg-blue-100 rounded-t-lg py-4 text-center mt-28">
              <div className="absolute top-0 right-0 bg-blue-500 border-8 text-white rounded-bl-full rounded-br-4xl py-6 px-5 text-lg ">
                <span className="font-bold">$9.99</span> /month
              </div>
              <h4 className="text-xl font-semibold text-blue-700 ">
                Monthly Pack
              </h4>
            </div>
            <div className="py-4 text-gray-600 text-sm">
              You will be billed per month, and get unlimited access to all
              resume Templates and new added ones
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-full cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Yearly Pack */}
          <div className=" relative bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0 hover:scale-105 transition-all">
            <div className=" bg-blue-100 rounded-t-lg py-4 text-center mt-28">
              <div className="absolute top-0 right-0 bg-blue-500 border-8 text-white rounded-bl-full rounded-br-4xl py-6 px-5 text-lg ">
                <span className="font-bold">$7.99</span> /month
              </div>
              <h4 className="text-xl font-semibold text-blue-700 ">
                Yearly Pack
              </h4>
            </div>
            <div className="py-4 text-gray-600 text-sm">
              You will be billed per Year, and get unlimited access to all
              resume Templates and new added ones
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md w-full cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverySection;
