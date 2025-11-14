import React from "react";

export default function CourseCard({ title, author, color }) {
  return (
    <div className={`rounded-2xl p-4 shadow ${color} w-60`}>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">{author}</p>
      <div className="w-16 h-16 bg-white/40 rounded-full mx-auto"></div>
    </div>
  );
}
