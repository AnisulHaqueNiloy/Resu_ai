import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-12 md:py-16 rounded-tl-[40px]">
      <div className="container mx-auto px-4 md:px-8 lg:grid lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            {/* Replace with your actual logo */}
            <svg
              className="w-8 h-8 text-blue-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.808 5c-1.657 0-2.825.84-3.167 2.018m-.099 9.8a3 3 0 01.172-2.018m0 0c.65 1.199 2.072 2.007 3.22 2.007 1.398 0 2.292-.844 2.607-2.058m0 0a3 3 0 01-1.538-1.1a3 3 0 01-1.537 1.1m0 0L9.813 7.139m0 0C10.83 5.477 12.418 5 13.856 5c1.658 0 2.826.84 3.168 2.018m.099 9.8a3 3 0 01-.172-2.018m0 0c-.65 1.199-2.071 2.007-3.22 2.007-1.398 0-2.291-.844-2.606-2.058m0 0a3 3 0 011.538-1.1a3 3 0 011.537 1.1m0 0L14.187 7.139"
              />
            </svg>
            <span className="text-xl font-semibold">Resu-AI</span>
          </div>
          <p className="text-sm mb-4">
            Resu-AI: Crafting your future with intelligent resume solutions.
            Empowering job seekers with AI-driven tools for standout CVs.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Privacy & TOS */}
        <div>
          <h6 className="text-gray-400 font-semibold mb-4">PRIVACY & TOS</h6>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Advertiser Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Acceptable Use Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Technology Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Developer Agreement
              </a>
            </li>
          </ul>
        </div>

        {/* Navigate */}
        <div>
          <h6 className="text-gray-400 font-semibold mb-4">NAVIGATE</h6>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Advertisers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h6 className="text-gray-400 font-semibold mb-4">CONTACT US</h6>
          <ul className="text-sm space-y-2">
            <li>
              <p>
                Visiting Address: <br />
                Level 5, House 123, Road 4 <br />
                Banani, Dhaka 1213
              </p>
            </li>
            <li>
              <p>
                Suite 7B, Infinity Tower <br />
                Tejgaon, Dhaka 1208
              </p>
            </li>
            <li>
              <p>Phone: +880 17XXXXXXXX</p>
            </li>
            <li>
              <p>Email: support@resu-ai.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-8 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Resu-AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
