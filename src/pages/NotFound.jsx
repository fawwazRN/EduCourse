import React from "react";
import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F3F4F4] px-6 min-h-screen text-center">
      <div className="relative">
        <h1 className="opacity-10 font-black text-[#061E29] text-[10rem] md:text-[15rem] leading-none select-none">
          404
        </h1>
        <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://illustrations.popsy.co/white/falling.svg"
            alt="Page Not Found Illustration"
            className="w-64 md:w-80 h-auto"
          />
        </div>
      </div>
      <div className="z-10 mt-8">
        <h2 className="font-extrabold text-[#061E29] text-3xl md:text-4xl tracking-tight">
          Waduh! Halaman Hilang
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#5F9598] leading-relaxed">
          Sepertinya jalur yang kamu tempuh tidak terdaftar dalam kurikulum
          kami. Mari kembali ke jalur yang benar untuk lanjut belajar.
        </p>
      </div>
      <NavLink
        to="/"
        className="bg-[#1D546D] hover:bg-[#061E29] shadow-lg hover:shadow-[#1D546D]/20 mt-10 px-8 py-3 rounded-full font-bold text-[#F3F4F4] transition-all hover:-translate-y-1 duration-300 transform">
        Kembali ke Beranda
      </NavLink>
      <div className="bottom-10 absolute flex gap-4 opacity-20">
        <div className="bg-[#1D546D] rounded-full w-3 h-3"></div>
        <div className="bg-[#5F9598] rounded-full w-3 h-3"></div>
        <div className="bg-[#061E29] rounded-full w-3 h-3"></div>
      </div>
    </div>
  );
}
