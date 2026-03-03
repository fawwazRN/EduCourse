import React, { useState, useMemo } from "react";
import panah from "../assets/panah.svg";
import data from "../data/courses";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeSubCategory, setActiveSubCategory] = useState("Semua");

  const filteredCourses = useMemo(() => {
    return data
      .filter((item) => {
        const matchesSearch = item.nama
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        const matchesCategory =
          activeCategory === "Semua" || item.category === activeCategory;

        const matchesSubCategory =
          activeSubCategory === "Semua" ||
          item.subCategory === activeSubCategory;

        return matchesSearch && matchesCategory && matchesSubCategory;
      })
      .sort((a, b) => b.pengunjung - a.pengunjung);
  }, [searchTerm, activeCategory, activeSubCategory]);

  return (
    <div className="bg-[#F3F4F4] py-10 min-h-screen">
      <div className="mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="font-extrabold text-[#061E29] text-4xl tracking-tight">
            Eksplorasi <span className="text-[#1D546D]">Kursus IT</span>
          </h1>
          <div className="bg-[#5F9598] mx-auto mt-4 rounded-full w-24 h-1"></div>
        </div>

        <div className="flex flex-col gap-6 mb-12">
          <div className="relative mx-auto w-full max-w-2xl">
            <input
              type="text"
              placeholder="Cari nama kursus..."
              className="bg-white shadow-sm px-6 py-4 border border-[#5F9598]/20 rounded-2xl focus:outline-none focus:ring-[#1D546D]/50 focus:ring-2 w-full font-mono text-[#061E29]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 font-mono">
            {["Semua", "Web", "App", "Design"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSubCategory("Semua");
                }}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#1D546D] text-white"
                    : "bg-white text-[#1D546D] border border-[#1D546D]/10 hover:bg-[#1D546D]/5"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {activeCategory === "Web" && (
            <div className="flex flex-wrap justify-center gap-2 slide-in-from-top-2 font-mono animate-in duration-300 fade-in">
              {["Semua", "HTML", "CSS", "JS", "React"].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeSubCategory === sub
                      ? "bg-[#5F9598] text-white"
                      : "bg-white text-[#5F9598] border border-[#5F9598]/20 hover:bg-[#5F9598]/10"
                  }`}>
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white shadow-sm hover:shadow-2xl p-6 border border-[#5F9598]/10 rounded-2xl overflow-hidden font-mono transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-bold text-[#061E29] group-hover:text-[#1D546D] text-xl leading-tight transition-colors">
                    {item.nama}
                  </h2>
                </div>

                <p className="mb-6 text-gray-500 text-sm line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <p className="bg-[#5F9598]/10 px-3 py-1 rounded-full font-medium text-[#5F9598] text-xs italic">
                    {item.level}
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-[#1D546D] text-xs uppercase tracking-wider">
                    <p>{item.total} Materi</p>
                    <p className="text-gray-300">•</p>
                    <p>{item.time} Jam</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-gray-50 border-t">
                  <div className="text-xs">
                    <p className="text-gray-400 uppercase tracking-tighter">
                      pengunjung
                    </p>
                    <p className="font-bold text-[#061E29]/80">
                      {item.pengunjung.toLocaleString()} Pengunjung
                    </p>
                  </div>
                </div>
                <a
                  href={`/courses/${item.id}`}
                  className="top-0 right-0 absolute flex justify-center items-center bg-[#1D546D] w-14 h-full transition-all translate-x-full group-hover:translate-x-0 duration-300">
                  <img
                    src={panah}
                    alt="Go"
                    className="brightness-0 invert size-6"
                  />
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 italic">Kursus tidak ditemukan...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
