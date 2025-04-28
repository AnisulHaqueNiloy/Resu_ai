import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const OurMainFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Assuming your navbar has a fixed height, adjust this value accordingly (in pixels)
  const navbarHeight = 60; // Example height

  return (
    <div
      className={`bg-gray-50 py-16 md:py-24`}
      style={{ paddingTop: `${navbarHeight}px` }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex justify-center mb-8" data-aos="fade-down">
          <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-purple-400"></span>
        </div>
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
            Our Main Features
          </h2>
          <p className="text-gray-600">
            Discover the key features that make our resume builder the perfect
            tool to create your professional CV.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-right"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* Briefcase Icon */}
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
                  d="M21 13v10m-4-10v10M3 5v10M3 19v-6m0 0c0-1.306 1.307-2.398 2.602-2.398a3.99 3.99 0 003.987-3.602 3.99 3.99 0 00-3.987-3.602C4.307 5.398 3 6.49 3 7.806m18-4.806c0 1.306-1.307 2.398-2.602 2.398a3.99 3.99 0 01-3.987 3.602 3.99 3.99 0 013.987 3.602C19.693 14.602 21 13.51 21 12.194m-12-4.006v10m2-10v10m4-10v10m-6-10v10"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Proven CV Templates
            </h3>
            <p className="text-gray-600 text-sm">
              Select from a wide range of professionally designed templates that
              are proven to catch the eye of recruiters and increase your
              chances of landing an interview.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-up"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* Brush Icon */}
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
                  d="M12 18h.01M8 21h8m-4-9v4m-4-4h4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Modern & Clean Design
            </h3>
            <p className="text-gray-600 text-sm">
              Our templates offer a perfect balance of creativity and
              professionalism, ensuring your resume looks modern, is easy to
              read, and highlights your key qualifications.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-left"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* Download Icon */}
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Intuitive Online Builder
            </h3>
            <p className="text-gray-600 text-sm">
              Our user-friendly online builder guides you through each step of
              the resume creation process, making it easy to input your
              information and customize your design.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-right"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* Parachute Icon */}
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
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6-3-6-3-6 3 6 3zM12 14l-9 5 9 5 9-5-9-5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Expertly Developed
            </h3>
            <p className="text-gray-600 text-sm">
              Created with insights from hiring professionals, our platform
              ensures your resume includes the key elements and formatting that
              recruiters look for.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-up"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* Notification Bell Icon */}
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-6-6C6.91 5 5 6.91 5 11v3.158a2.032 2.032 0 01-1.595 1.437L4 17h5m8-12v5m-8 0v5m-8-6.73L9 12.27m0 0l4-4m4 4L15 12.27"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Smart Content Suggestions
            </h3>
            <p className="text-gray-600 text-sm">
              Get suggestions for impactful phrases and keywords relevant to
              your industry, helping you articulate your skills and experience
              effectively.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos="fade-left"
          >
            <div className="bg-blue-100 text-blue-500 rounded-xl p-4 inline-block mb-4">
              {/* File Upload Icon */}
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
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Easy Formatting & Export
            </h3>
            <p className="text-gray-600 text-sm">
              Enjoy hassle-free formatting and easily export your resume in
              various formats (PDF, DOC) to suit different application
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMainFeatures;
