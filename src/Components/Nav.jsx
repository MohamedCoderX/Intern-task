import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-transparent w-full py-4 px-6 md:px-32 flex items-center justify-between fixed top-0 left-0 z-999 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}>
      {/* Logo */}
      <div className="text-3xl font-bold">
        <h1>SandoBox</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none gap-10 text-lg">
        <li><a href="#" className="hover:text-gray-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-gray-500 transition">About</a></li>
        <li><a href="#" className="hover:text-gray-500 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 w-48 bg-white shadow-md rounded-md md:hidden">
          <ul className="flex flex-col list-none p-4 text-lg">
            <li className="py-2 border-b"><a href="#">Home</a></li>
            <li className="py-2 border-b"><a href="#">About</a></li>
            <li className="py-2"><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
