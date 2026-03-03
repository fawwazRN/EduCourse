import React from "react";
import panah from "../assets/panah.svg";
import data from "../data/courses";

export default function Home() {
  const topCourse = [...data]
    .sort((a, b) => b.pengunjung - a.pengunjung)
    .slice(0, 3);

  // Helper untuk warna badge level menggunakan palet baru
  const getLevelColor = (level) => {
    const l = level.toLowerCase();
    if (l.includes("pemula")) return "bg-[#5F9598]/20 text-[#5F9598]";
    else if (l.includes("menengah")) return "bg-[#1D546D]/20 text-[#1D546D]";
    else return "bg-red-500/20 text-red-600";
  };

  return (
    <div className="bg-[#F3F4F4] min-h-screen font-sans">
      {/* hero */}
      <div className="relative flex flex-col justify-center items-center bg-[#061E29] w-full h-screen overflow-hidden text-[#F3F4F4]">
        <div className="top-1/2 left-1/2 absolute bg-[#1D546D]/30 blur-[120px] rounded-full w-125 h-125 -translate-x-1/2 -translate-y-1/2"></div>

        <h1 className="top-1/2 left-1/2 absolute opacity-5 font-black text-[#F3F4F4] text-[20rem] -translate-x-1/2 -translate-y-1/2 select-none">
          1
        </h1>

        <div className="z-10 relative text-center">
          <p className="bg-[#1D546D] px-4 py-1 rounded-full font-semibold text-[#F3F4F4] text-sm uppercase tracking-widest">
            Platform Belajar Terbaik
          </p>
          <h1 className="mt-4 font-extrabold text-7xl tracking-tight">
            Kursus <span className="text-[#5F9598]">IT</span>
          </h1>
          <p className="mt-2 font-light text-[#5F9598] text-xl tracking-[0.3em]">
            NOMOR 1 DI INDONESIA
          </p>
        </div>
      </div>

      {/* top course */}
      <div className="relative mt-20 px-6 lg:px-20 pb-20">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-bold text-[#061E29] text-3xl">
            Top 3 Kursus Favorit
          </h2>
          <div className="bg-[#1D546D] mt-2 rounded-full w-20 h-1"></div>
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-8">
          {topCourse.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-white shadow-lg hover:shadow-2xl p-6 border border-gray-100 rounded-2xl w-full overflow-hidden font-mono transition-all hover:-translate-y-2 duration-300">
              <div
                className={`mb-4 self-start px-3 py-1 rounded-md text-xs font-bold uppercase ${getLevelColor(item.level)}`}>
                {item.level}
              </div>

              <h2 className="font-bold text-[#061E29] group-hover:text-[#1D546D] text-2xl transition-colors">
                {item.nama}
              </h2>
              <p className="mt-3 text-gray-500 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-auto pt-6 border-gray-50 border-t">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    Pengunjung
                  </p>
                  <p className="font-bold text-[#061E29] text-lg">
                    {item.pengunjung}
                  </p>
                </div>
              </div>
              <a
                href={`/courses/${item.id}`}
                className="top-0 right-0 absolute flex justify-center items-center bg-[#1D546D] w-16 h-full transition-all translate-x-full group-hover:translate-x-0 duration-300 ease-in-out">
                <img
                  src={panah}
                  alt=""
                  className="brightness-0 invert size-8"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
