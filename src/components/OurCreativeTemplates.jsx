import React from "react";
import bg1 from "../../src/assets/Image/bg1 (1).jpg"; // Import your background image
import { ArrowRight } from "lucide-react";
import cv1 from "../../src/assets/Image/demo-1.png";
import cv2 from "../../src/assets/Image/demo-2.png";
import cv3 from "../../src/assets/Image/demo-3.png";
import { Link } from "react-router-dom";
// Example icon

const OurCreativeTemplates = () => {
  return (
    <div
      className="py-16 md:py-24 bg-cover bg-center "
      style={{ backgroundImage: `url('${bg1}')` }}
    >
      <div className=" py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-center mb-8">
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
              Our Creative Templates
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Template Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={cv1} // Placeholder image
                alt="Creative Template 1"
                className="w-full h-auto"
              />
              <div className="p-4 flex justify-around">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center">
                  <Link> EXPLORE MORE</Link>
                </button>
              </div>
            </div>

            {/* Template Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={cv2} // Placeholder image
                alt="Creative Template 2"
                className="w-full h-auto"
              />
              <div className="p-4 flex justify-around">
                <button className="bg-white hover:bg-blue-700 text-black outline-1 font-semibold py-2 px-4 rounded-md flex items-center">
                  <Link> EXPLORE MORE</Link>
                </button>
              </div>
            </div>

            {/* Template Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={cv3}
                alt="Creative Template 3"
                className="w-full h-auto"
              />
              <div className="p-4 flex justify-around">
                <button className="bg-white hover:bg-blue-700 text-black outline-1 font-semibold py-2 px-4 rounded-md flex items-center">
                  <Link> EXPLORE MORE</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCreativeTemplates;
