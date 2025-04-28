import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-500 py-20 relative overflow-hidden">
        {/* Background Triangles (using Tailwind CSS patterns or custom SVG) */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20V40Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-200">
            <a href="/" className="text-white hover:underline">
              Home
            </a>{" "}
            / Contact Us
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
              Contact With Us
            </h2>
            <p className="text-gray-600">
              We're here to help and answer any questions you might have. Feel
              free to reach out to us through the contact form below.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
