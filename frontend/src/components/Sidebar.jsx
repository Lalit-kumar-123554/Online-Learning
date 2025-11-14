import React from "react";
import {
  LayoutDashboard,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 h-screen w-20 bg-[#081a2d] text-white flex flex-col justify-between items-center py-6">
      <div className="space-y-8">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          OLP
        </div>

        {/* Sidebar Icons */}
        <LayoutDashboard
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/dashboard")}
        />

        <GraduationCap
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/mycourses")}   // 🔥 lowercase route
        />

        <Lightbulb
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/ideas")}
        />

        <MessageSquare
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/messages")}
        />

        <Settings
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/settings")}
        />
      </div>

      {/* User Profile */}
      <div className="mb-2 flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/50"
          alt="user"
          className="w-10 h-10 rounded-full mb-2"
        />
        <p className="text-xs">Lalit Kumar</p>
      </div>
    </div>
  );
}
