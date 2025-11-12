import React from "react";

export default function Courses() {
  const courses = [
    { title: "Basic of English Language", author: "Shams Tabrez", color: "bg-purple-100" },
    { title: "Introduction to web Development", author: "Shams Tabrez", color: "bg-blue-100" },
    { title: "Basic Data Structures", author: "Shams Tabrez", color: "bg-sky-100" },
  ];

  return (
    <div>
      <h2 className="text-gray-700 font-semibold mb-4">My Courses</h2>
      <div className="flex gap-4">
        {courses.map((c, i) => (
          <div key={i} className={`${c.color} p-4 rounded-xl w-1/3 shadow`}>
            <p className="font-medium mb-1">{c.title}</p>
            <p className="text-sm text-gray-500">{c.author}</p>
            <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
