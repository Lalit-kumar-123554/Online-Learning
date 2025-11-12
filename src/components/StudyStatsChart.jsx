import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "SAT", hours: 2 },
  { day: "SUN", hours: 7 },
  { day: "MON", hours: 4 },
  { day: "TUE", hours: 5 },
  { day: "WED", hours: 9 },
  { day: "THU", hours: 5 },
  { day: "FRI", hours: 5 },
];

const monthlyData = [
  { day: "W1", hours: 20 },
  { day: "W2", hours: 30 },
  { day: "W3", hours: 15 },
  { day: "W4", hours: 25 },
];

const StudyStatsChart = () => {
  const [view, setView] = useState("week");

  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold">STUDY STATISTICS</h2>
        <div className="flex bg-gray-100 rounded-md text-sm">
          <button
            className={`px-3 py-1 rounded-md ${
              view === "week"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500"
            }`}
            onClick={() => setView("week")}
          >
            week
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              view === "month"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500"
            }`}
            onClick={() => setView("month")}
          >
            month
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={view === "week" ? weeklyData : monthlyData}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="hours"
            radius={[5, 5, 0, 0]}
            barSize={35}
            fill="#5AB6F8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudyStatsChart;
