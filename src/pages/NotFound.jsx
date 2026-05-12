import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Home, Terminal, AlertCircle } from "lucide-react";

// Custom SVG Illustration: Broken Code/Error Theme
const ErrorIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    className="w-64 md:w-80 h-48 md:h-60 text-[#1D546D]/10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5">
    {/* Browser Window */}
    <rect
      x="60"
      y="50"
      width="280"
      height="200"
      rx="10"
      className="stroke-current"
    />
    <circle
      cx="85"
      cy="75"
      r="6"
      className="opacity-30 fill-current stroke-none"
    />
    <circle
      cx="105"
      cy="75"
      r="6"
      className="opacity-30 fill-current stroke-none"
    />
    <circle
      cx="125"
      cy="75"
      r="6"
      className="opacity-30 fill-current stroke-none"
    />

    {/* Code Lines */}
    <motion.line
      x1="85"
      y1="110"
      x2="200"
      y2="110"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.line
      x1="85"
      y1="135"
      x2="160"
      y2="135"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
    />
    <motion.line
      x1="85"
      y1="160"
      x2="240"
      y2="160"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
    />

    {/* Glitch Effect Lines */}
    <line
      x1="60"
      y1="180"
      x2="340"
      y2="180"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <line
      x1="60"
      y1="185"
      x2="340"
      y2="185"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="8 8"
      opacity="0.5"
    />
  </svg>
);

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#F3F4F4] px-6 min-h-screen overflow-hidden text-center">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top-1/4 left-1/4 absolute bg-[#5F9598]/10 blur-[80px] rounded-full w-96 h-96 filter"></div>
        <div className="right-1/4 bottom-1/4 absolute bg-[#1D546D]/10 blur-[80px] rounded-full w-96 h-96 filter"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 relative flex flex-col items-center">
        {/* 404 Text Background */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute font-black text-[#061E29] text-[12rem] md:text-[18rem] leading-none whitespace-nowrap select-none">
          404
        </motion.h1>

        {/* Illustration Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mb-8">
          <ErrorIllustration />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-red-100 mb-4 px-4 py-1.5 rounded-full font-bold text-red-600 text-xs uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Resource Not Found</span>
          </div>

          <h2 className="mb-3 font-extrabold text-[#061E29] text-3xl md:text-4xl tracking-tight">
            Waduh! Halaman Hilang
          </h2>
          <p className="mx-auto max-w-md text-gray-500 text-sm md:text-base leading-relaxed">
            Sepertinya jalur yang kamu tempuh tidak terdaftar dalam kurikulum
            kami. Mari kembali ke jalur yang benar untuk lanjut belajar.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex sm:flex-row flex-col gap-4 mt-10">
          <NavLink
            to="/"
            className="group flex justify-center items-center gap-2 bg-[#061E29] hover:bg-[#1D546D] shadow-lg hover:shadow-xl px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-300">
            <Home className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </NavLink>

          <NavLink
            to="/courses"
            className="flex justify-center items-center gap-2 bg-white px-8 py-3.5 border border-gray-200 hover:border-[#5F9598] rounded-xl font-bold text-[#061E29] transition-all duration-300">
            <Terminal className="w-4 h-4" />
            Jelajahi Kursus
          </NavLink>
        </motion.div>
      </div>

      {/* Footer Decoration */}
      <div className="bottom-10 absolute flex gap-2">
        <div className="bg-[#1D546D] opacity-30 rounded-full w-2 h-2"></div>
        <div className="bg-[#5F9598] opacity-30 rounded-full w-2 h-2"></div>
        <div className="bg-[#061E29] opacity-30 rounded-full w-2 h-2"></div>
      </div>
    </div>
  );
}
