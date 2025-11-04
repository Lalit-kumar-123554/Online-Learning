import React from "react";
import Sidebar from "../components/Sidebar";
import OverviewCard from "../components/OverviewCard";
import ProgressChart from "../components/ProgressChart";
import CourseCard from "../components/CourseCard";
import Courses from "../components/courses";
import StatsCards from "../components/StatsCards";
import StudyStatsChart from "../components/StudyStatsChart";
import { Search, Bell, Settings } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
         <div className="flex justify-between items-center bg-white px-6 py-2 shadow-sm">
      {/* Left: Title */}
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-5">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Settings Icon */}
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>

        {/* Overview */}
        <StatsCards/>

        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-7 space-y-5">
          <div className="grid grid-cols-2 gap-4">
           <StudyStatsChart/>
            <ProgressChart />
           </div>
           <Courses/>
           {/* <CourseCard/> */}
          </div>

          <div className="flex flex-col gap-4">
           
            {/* <LiveEvents /> */}
            {/* <ActivitySection /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

