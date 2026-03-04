import { NavLink, useParams } from "react-router";
import data from "../data/courses";
import { useState } from "react";
import NotFound from "./NotFound";

export default function CourseDetail() {
  const { id } = useParams();
  const course = data.find((item) => item.id === Number(id));

  const [showMateri, setShowMateri] = useState(false);

  if (!course) {
    return <NotFound />;
  }

  return (
    <div className="bg-[#F3F4F4] px-6 md:px-10 py-28 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <NavLink
          to="/courses"
          className="font-medium text-[#1D546D] hover:text-[#5F9598] transition-colors">
          ← Kembali ke daftar
        </NavLink>

        <div className="mt-8">
          <div className="relative flex flex-col justify-center items-center">
            <div className="absolute bg-[#5F9598]/20 w-full h-px"></div>
            <div className="z-10 bg-[#F3F4F4] px-6 py-2">
              <h1 className="font-black text-[#061E29] text-3xl md:text-5xl text-center tracking-tight">
                {course.nama}
              </h1>
              <p className="mt-2 font-bold text-[#5F9598] text-sm text-center uppercase tracking-widest">
                {course.level}
              </p>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2 mt-12">
            <div
              onClick={() => setShowMateri(!showMateri)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border-2 duration-300 ${
                showMateri
                  ? "border-[#1D546D] bg-white shadow-inner"
                  : "bg-white shadow-sm border-transparent hover:border-[#5F9598]/50"
              }`}>
              <p className="mb-1 font-semibold text-[#5F9598] text-xs uppercase tracking-wider">
                Materi {showMateri ? "(Klik tutup)" : "(Klik detail)"}
              </p>
              <p className="font-bold text-[#061E29] text-xl md:text-2xl">
                {course.total} Pembelajaran
              </p>
            </div>

            <div className="flex flex-col justify-center bg-white shadow-sm p-6 border-2 border-transparent rounded-2xl">
              <p className="mb-1 font-semibold text-[#5F9598] text-xs uppercase tracking-wider">
                Total Durasi
              </p>
              <p className="font-bold text-[#061E29] text-xl md:text-2xl">
                {course.time} Jam
              </p>
            </div>
          </div>
          {showMateri && (
            <div className="bg-white/50 slide-in-from-top-4 mt-6 p-6 border border-[#5F9598]/20 rounded-3xl animate-in duration-500 fade-in">
              <h3 className="mb-4 font-bold text-[#1D546D]">
                Kurikulum Kursus
              </h3>
              <ul className="gap-3 grid grid-cols-1 md:grid-cols-2">
                {course.pembelajaran.map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-4 bg-white shadow-sm p-4 border border-gray-100 hover:border-[#1D546D]/30 rounded-xl transition-colors">
                    <p className="flex justify-center items-center bg-[#1D546D]/10 rounded-lg w-8 h-8 font-mono font-bold text-[#1D546D] text-sm">
                      {index + 1}
                    </p>
                    <p className="font-medium text-[#061E29]/80 text-sm">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-12 p-2">
            <p className="text-[#061E29]/70 text-lg leading-relaxed">
              {course.descPanjang}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
