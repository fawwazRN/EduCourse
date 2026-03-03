import React from "react";
import { NavLink, Outlet } from "react-router";

export default function HeaderFooter() {
  // Helper untuk styling NavLink dengan palet baru
  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 transition-all duration-300 hover:text-[#1D546D] ${
      isActive ? "text-[#1D546D] font-bold" : "text-[#1D546D]"
    }`;

  return (
    <div className="flex flex-col bg-[#F3F4F4] min-h-screen font-sans">
      {/* Header */}
      <header className="top-0 z-50 fixed border-[#5F9598]/10 border-b w-full">
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-md px-6 md:px-20 py-4 w-full">
          <div className="flex items-center gap-2">
            <h1 className="font-black text-[#061E29] text-2xl tracking-tighter">
              Edu<span className="text-[#1D546D]">Course</span>
            </h1>
          </div>

          <nav className="flex items-center space-x-8 font-medium text-sm uppercase tracking-wide">
            <NavLink to="/" end className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <p className="bottom-0 left-0 absolute bg-[#1D546D] rounded-full w-full h-0.5"></p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  About
                  {isActive && (
                    <p className="bottom-0 left-0 absolute bg-[#1D546D] rounded-full w-full h-0.5"></p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/courses" className={navLinkStyle}>
              {({ isActive }) => (
                <>
                  Courses
                  {isActive && (
                    <p className="bottom-0 left-0 absolute bg-[#1D546D] rounded-full w-full h-0.5"></p>
                  )}
                </>
              )}
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      {/* Footer */}
      <footer className="bg-[#061E29] px-6 md:px-20 pt-12 pb-6 text-[#F3F4F4]">
        <div className="flex md:flex-row flex-col justify-between items-center mb-8 pb-8 border-[#1D546D]/30 border-b">
          <img src="" alt="" />
          <div className="flex gap-6 text-[#5F9598] text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-gray-500 text-xs text-center">
          Copyright © 2026 Fawwaz Romzi Nagib.
        </div>
      </footer>
    </div>
  );
}
