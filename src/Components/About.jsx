import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-12 px-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <img
          src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about4@2x.jpg"
          alt="img"
          className="rounded-md w-full max-w-sm md:max-w-md lg:max-w-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
        <MdSupportAgent className="text-blue-500 text-5xl mb-5 mx-auto md:mx-0" />
        <h3 className="text-3xl md:text-4xl font-semibold pb-8">
          Convinced Yet? Let's make something great together
        </h3>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <FaMapMarkerAlt className="text-blue-600 text-3xl sm:mt-1.5 sm:mr-3" />
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <FaPhoneAlt className="text-blue-600 text-3xl sm:mt-1.5 sm:mr-3" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>00 (123) 456 78 90</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <FaEnvelope className="text-blue-600 text-3xl sm:mt-1.5 sm:mr-3" />
            <div>
              <h2 className="text-xl font-semibold">E-Mail</h2>
              <p>sandbox@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
