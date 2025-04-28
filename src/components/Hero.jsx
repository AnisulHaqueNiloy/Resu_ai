import React from "react";
import Hero1 from "../../src/assets/Image/hero1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="mb-8 lg:mb-0">
          <div className="bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-full inline-block mb-4">
            <span className="mr-1">$</span> Discover The Easiest Ways to Build
            Your CV!
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Online CV Builder With{" "}
            <span className="text-blue-600">Creative Templates</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Our perfect resume builder takes the hassle out of resume writing.
            Choose from several templates and follow easy prompts to create the
            perfect job-ready resume.
          </p>
          <div className="flex space-x-4">
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
              CHOOSE TEMPLATE
            </button> */}
            <button className="bg-gray-100 hover:bg-gray-200 text-blue-600 font-semibold py-3 px-6 rounded-md">
              <Link to={"/contact-us"}>Contact Us</Link>
            </button>
          </div>
        </div>

        {/* Right Column: Image/Illustration */}
        <div className="">
          <img
            src={Hero1} // Replace with the actual path to your image
            alt="CV Builder Illustration"
            className="w-full h-auto"
          />
          {/* You can add the floating elements here as absolute positioned divs */}

          {/* Add other floating elements similarly */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
