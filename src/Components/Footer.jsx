import React from "react";
import { FaTwitter, FaFacebookF, FaDribbble, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Logo and Copyright */}
        <div className="">
          <h2 className="text-2xl font-bold">Sandbox</h2>
          <p className="text-gray-400 mt-2">© 2024 Sandbox. All rights reserved.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaDribbble className="cursor-pointer hover:text-pink-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
          </div>
        </div>

       <div className="flex flex-wrap gap-20 justify-center ">
         {/* Need Help Section */}
         <div>
          <h3 className="text-lg font-semibold">Need Help?</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Get Started</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Learn More</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About-us</a></li>
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
          </ul>
        </div>
        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-gray-400 mt-2">
            Moonshine St. 14/05 <br />
            Light City, London, United Kingdom
          </p>
          <p className="text-gray-400 mt-2">info@email.com</p>
          <p className="text-gray-400">00 (123) 456 78 90</p>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
