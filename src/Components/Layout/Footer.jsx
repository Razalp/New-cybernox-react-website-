import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { PiYoutubeLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="bottom-0 bg-black text-white w-full h-auto p-6">
      <div className="flex justify-center">
        <nav className="space-x-4 text-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
      </div>

      {/* <div className="flex justify-center mt-2">
        <p className="text-center">
          Locations: India | UAE | UK | USA | Saudi | Oman | Qatar | Ireland | Singapore
        </p>
      </div> */}
{/* 
      <div className="flex justify-center mt-2">
        <nav className="space-x-4 text-center">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Corporate Matters</a>
        </nav>
      </div> */}

      <div className="flex justify-center mt-6 space-x-4">
        <a href="#" aria-label="Instagram" className="text-black rounded-full bg-white p-2 hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
        {/* <a href="#" aria-label="Facebook" className="text-black rounded-full bg-white p-2 hover:text-gray-400">
          <BiLogoFacebook size={24} />
        </a> */}
        {/* <a href="#" aria-label="YouTube" className="text-black rounded-full bg-white p-2 hover:text-gray-400">
          <PiYoutubeLogoLight size={24} />
        </a> */}
        <a href="#" aria-label="LinkedIn" className="text-black rounded-full bg-white p-2 hover:text-gray-400">
          <FaLinkedinIn size={24} />
        </a>
        {/* <a href="#" aria-label="Twitter" className="text-black rounded-full bg-white p-2 hover:text-gray-400">
          <FaTwitter size={24} />
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
