import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ProgressChart = () => {
  const coursesProgress = 45; // inner progress (dark)
  const prototypeProgress = 80; // outer progress (light blue)

  const data1 = [
    { name: "completed", value: coursesProgress },
    { name: "remaining", value: 100 - coursesProgress },
  ];

  const data2 = [
    { name: "completed", value: prototypeProgress },
    { name: "remaining", value: 100 - prototypeProgress },
  ];

  const COLORS1 = ["#0f172a", "#e5e7eb"]; // dark + gray
  const COLORS2 = ["#38bdf8", "#e5e7eb"]; // light blue + gray

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[260px] h-[295px] flex flex-col justify-center items-center">
      <h2 className="text-gray-600 text-sm font-semibold mb-4">PROGRESS</h2>

      <div className="relative">
        {/* Outer Ring */}
        <PieChart width={180} height={180}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
            ))}
          </Pie>

          {/* Inner Ring */}
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={65}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center text */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-semibold text-gray-800">45%</p>
          <p className="text-sm text-sky-400 font-medium">80%</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-900"></span>
          <span>courses</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          <span>Prototypes</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
