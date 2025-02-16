import React from "react";
import { FaUsers,FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Coriss Ambady",
    role: "Financial Analyst",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Cory Zamora",
    role: "Marketing Specialist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Nikolas Brooten",
    role: "Sales Manager",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    role: "Investment Planner",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
        <FaUsers className="text-gray-600 text-4xl" /> 
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:w-200">
        Save your time and money by choosing our professional team.
      </h2>

      {/* Team Container */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mt-6 ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col  bg-white shadow-lg rounded-lg p-6 w-70 transition-transform hover:scale-105 py-10 border"
          >
            {/* Avatar */}
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            {/* Name & Role */}
            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 py-3">{member.role}</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-3 text-gray-500 pb-5">
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              <FaDribbble className="cursor-pointer hover:text-pink-500 transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
