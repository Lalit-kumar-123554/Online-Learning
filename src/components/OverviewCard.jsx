import React from "react";

export default function OverviewCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
}
