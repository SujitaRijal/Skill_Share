import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="justify-between w-full p-6 pt-10 overflow-hidden bg-purple-300 sm:px-6 lg:px-20">
      <div className="flex flex-col items-start justify-between w-full gap-4 md:flex-row">
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-8 text-lg font-bold text-black">SKILL SHARE</h3>
          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-base">
            Where Learning Meets Giving
          </p>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-black">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-800">
            <Link to="/" className=" hover:text-purple-500">
              Home
            </Link>
            <Link to="/About" className=" hover:text-purple-500">
              About
            </Link>
            <Link to="/Explore" className="hover:text-purple-500">
              Explore
            </Link>
            <Link to="/Testimonials" className="hover:text-purple-500">
              Testimonials
            </Link>
            <Link to="/Contact" className=" hover:text-purple-500">
              Contact
            </Link>
          </ul>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-black">Support</h3>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li className=" hover:text-purple-500">Help Centre</li>
            <li className="hover:text-purple-500">Contact Us</li>
            <li className=" hover:text-purple-500">Privacy Policy</li>
            <li className=" hover:text-purple-500">Terms of Service</li>
          </ul>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-black">Connect</h3>
          <ul className="flex flex-col gap-2 text-gray-800">
            <li className=" hover:text-purple-500">Community Forum</li>
            <li className=" hover:text-purple-500">Blog</li>
            <li className=" hover:text-purple-500">Newsletter</li>
            <li className="hover:text-purple-500">Social Media</li>
          </ul>
        </div>

        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="mb-4 text-lg font-bold text-black">
            Subscribe too our newsletter
          </h3>
          <p className="mb-4 text-gray-800 max-w-80">
            {" "}
            The latest news,articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              className="w-full p-2 text-gray-400 border border-gray-700 rounded focus:outline-none md:w-auto"
              type="email"
              placeholder="Enter your email"
            />
            <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-indigo-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-4 mx-auto mt-10 text-gray-800 border-t border-gray-400 md:flex-row max-w-7xl">
        <p>© 2025 SKILL SHARE. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
