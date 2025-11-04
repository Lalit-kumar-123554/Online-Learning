import React from "react";
import { Clock, Flag, GraduationCap,  Lightbulb } from "lucide-react";

const stats = [
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    title: "Courses in progress",
    value: 3,
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
    title: "Active Prototypes",
    value: 7,
  },
  {
    icon:<Clock className="w-6 h-6 text-blue-500"/>,
    title:"Hours Learning",
    value:"3h 15m",
  },
  {
    icon:<Flag className="w-6 h-6 text-blue-500"/>,
    title:"Hours Learning",
    value:"240",
  }
];

const StatsCards = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center rounded-xl shadow-md bg-white px-6 py-4 w-64"
        >
          <div className="flex items-center gap-2 mb-3">
            {item.icon}
            <h3 className="text-gray-600 font-medium">{item.title}</h3>
          </div>
          <p className="text-5xl font-semibold text-gray-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
