import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Sidebar from "./components/Sidebar";
import MyCourses from "./components/MyCourses";


function App() {
  return (
    <div className="flex">
      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Page content */}
      <div className="ml-20 flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mycourses" element={<MyCourses />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
