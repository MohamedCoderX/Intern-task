import React from "react";
import { FaCheck, FaVolumeUp } from "react-icons/fa";

const Who = () => {
  return (
    <section className="container mx-auto px-6 md:px-16 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left Section - Text & Features */}
      <div className="flex-1 text-center md:text-left">
        <FaVolumeUp className="text-blue-500 text-5xl mx-auto md:mx-0" />
        <h2 className="py-4 text-4xl md:text-5xl font-bold text-black">Who We Are</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We are a digital and branding company that believes in the power of
          creative strategy along with great design.
        </p>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          We help businesses grow by providing innovative design solutions that
          captivate audiences and drive engagement.
        </p>

        {/* Feature List */}
        <ul className="mt-6 space-y-4">
          {[
            "Creative and strategic branding solutions.",
            "A dedicated team of professionals.",
            "Customer satisfaction is our priority.",
            "We deliver high-quality, result-driven solutions."
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-green-500 text-2xl" />
              <span className="text-gray-500 text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Images */}
      <div className="flex-1 flex justify-center relative">
        <img
          src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about3@2x.jpg"
          alt="Who we are"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />
        <img
          src="https://sandbox-tailwind-template.netlify.app/assets/img/photos/about2@2x.jpg"
          alt="Our team"
          className="w-64 md:w-80 rounded-lg shadow-lg absolute bottom-1.5 right-10  md:left-5 md:top-20 "
        />
      </div>
    </section>
  );
};

export default Who;