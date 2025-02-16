import React from "react";
import { FaCheckCircle, FaUserShield, FaBriefcase, FaAward } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaCheckCircle className="text-blue-500 text-5xl" />,
    value: "7518",
    label: "Completed Projects",
  },
  {
    id: 2,
    icon: <FaUserShield className="text-blue-500 text-5xl" />,
    value: "3472",
    label: "Satisfied Customers",
  },
  {
    id: 3,
    icon: <FaBriefcase className="text-blue-500 text-5xl" />,
    value: "2184",
    label: "Expert Employees",
  },
  {
    id: 4,
    icon: <FaAward className="text-blue-500 text-5xl" />,
    value: "4523",
    label: "Awards Won",
  },
];

const Stats= () => {
  return (
    <div className="stats bg-blue-50 py-20 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            {stat.icon}
            <h2 className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</h2>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
