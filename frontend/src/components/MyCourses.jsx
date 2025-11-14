import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Trophy,
  FileText,
  ChevronDown,
  ChevronUp,
  Search,
  Bell,
  Settings,
} from "lucide-react";
import { getCourses } from "../api/courseApi";
export default function MyCourses() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // ✅ Fetch courses from backend
  const API = import.meta.env.VITE_API_URL;

useEffect(() => {
  getCourses().then((data) => {
    console.log("Data inside MyCourses:", data);
    setCourses(data);
  });
}, []);


  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const today = new Date();

  const handlePrev = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const handleNext = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col lg:flex-row justify-between gap-6 p-6">
      {/* LEFT SECTION */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>

          {/* Search + Notification + Settings */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
            </div>

            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="font-semibold text-gray-700 mb-3">Progress</p>
          <div className="relative bg-purple-100 rounded-xl h-32 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[30%] h-3 bg-purple-500 rounded-full bottom-5 left-5"></div>
            <div className="absolute left-[30%] bottom-3 text-sm font-semibold bg-white px-2 py-0.5 rounded shadow">
              30%
            </div>
            <div className="absolute bottom-5 right-5 flex items-center gap-2">
              <Trophy className="text-purple-500" />
              <span className="font-medium">Beginner</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <GraduationCap className="mx-auto text-blue-500" />
            <p className="font-semibold mt-1">3/7 courses</p>
          </div>
          <div>
            <FileText className="mx-auto text-green-500" />
            <p className="font-semibold mt-1">30/70 quizzes</p>
          </div>
          <div>
            <BookOpen className="mx-auto text-purple-500" />
            <p className="font-semibold mt-1">2 prototypes</p>
          </div>
          <div>
            <Clock className="mx-auto text-orange-500" />
            <p className="font-semibold mt-1">2 hours learning</p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Enrolled Courses</h2>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              Course Catalog
            </button>
          </div>

          {/* Course List */}
          <div className="space-y-4">
            {courses.length > 0 ? (
              courses.map((course, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
                >
                  <div
                    onClick={() => setExpandedCourse(expandedCourse === i ? null : i)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-gray-700">{course.title}</p>
                      <p className="text-sm text-gray-500">{course.progress}</p>
                    </div>
                    {expandedCourse === i ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>

                  {/* Expanded Course Details */}
                  {expandedCourse === i && (
                    <div className="mt-3 border-t pt-3 text-sm text-gray-600 space-y-2">
                      {course.topics?.length > 0 && (
                        <div>
                          <p className="font-semibold text-gray-700">Topics Covered:</p>
                          <ul className="list-disc list-inside ml-2">
                            {course.topics.map((topic, index) => (
                              <li
                                key={index}
                                className="cursor-pointer text-blue-600 hover:underline"
                                onClick={() => setSelectedTopic(topic)}
                              >
                                {topic.title}
                              </li>
                            ))}
                          </ul>

                          {/* ✅ Show selected topic details */}
                          {selectedTopic && (
                            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-2">
                                {selectedTopic.title}
                              </h3>
                              <p className="text-gray-700 text-sm">
                                {selectedTopic.content}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No courses found.</p>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - CALENDAR */}
      <div className="w-full lg:w-80 space-y-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-700 text-lg">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                ›
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center text-gray-700">
            {daysArray.map((day, i) => (
              <div
                key={i}
                className={`py-1.5 ${
                  day === today.getDate() &&
                  currentDate.getMonth() === today.getMonth() &&
                  currentDate.getFullYear() === today.getFullYear()
                    ? "bg-blue-500 text-white rounded-full"
                    : ""
                }`}
              >
                {day || ""}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="font-semibold text-gray-700">Due Date</p>
            <p className="text-sm text-gray-500 mt-1">
              Assignment 04 – {monthNames[currentDate.getMonth()]}{" "}
              {Math.min(15, daysInMonth)}, {currentDate.getFullYear()}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              “Nisi venenatis id cursus volutpat cursus interdum enim mauris.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
