import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  SlidersHorizontal,
  BookOpen,
  Clock,
  Users,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Link } from "react-router"; // Menggunakan Link untuk SPA behavior
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

  // Variants for Grid Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const mainCategories = ["Semua", "Web", "App", "Design"];
  const subCategories = ["Semua", "HTML", "CSS", "JS", "React"];

  return (
    <div className="bg-[#F3F4F4] pb-20 min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-[#061E29] pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="top-1/2 left-1/2 absolute bg-[#1D546D] blur-[120px] rounded-full w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 filter"></div>
        </div>

        <div className="z-10 relative mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-[#F3F4F4] text-4xl md:text-5xl tracking-tight">
            Koleksi <span className="text-[#5F9598]">Kursus</span> Terbaik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-[#F3F4F4]/60 text-lg">
            Temukan jalur belajar yang sesuai dengan kebutuhan karirmu.
          </motion.p>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="z-20 relative mx-auto -mt-16 px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-xl p-4 md:p-6 border border-gray-100 rounded-2xl">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              placeholder="Cari nama kursus atau teknologi..."
              className="bg-[#F3F4F4] focus:bg-white py-3.5 pr-12 pl-12 border border-transparent focus:border-[#5F9598] rounded-xl outline-none w-full font-medium text-[#061E29] transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="top-1/2 right-4 absolute hover:bg-gray-200 p-1 rounded-full transition-colors -translate-y-1/2">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 mr-2 font-semibold text-gray-400 text-sm">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Kategori:</span>
              </div>
              {mainCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSubCategory("Semua");
                  }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeCategory === cat
                      ? "text-white"
                      : "text-gray-600 hover:text-[#1D546D] hover:bg-gray-100"
                  }`}>
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#1D546D] rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="z-10 relative">{cat}</span>
                </button>
              ))}
            </div>

            {/* Sub Category Filters (Only for Web) */}
            <AnimatePresence>
              {activeCategory === "Web" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2 ml-2 pl-8 border-gray-100 border-l-2 overflow-hidden">
                  {subCategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubCategory(sub)}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                        activeSubCategory === sub
                          ? "bg-[#5F9598]/10 text-[#5F9598]"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}>
                      {sub}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Courses Grid */}
      <div className="mx-auto mt-12 px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                exit="exit"
                className="group relative flex flex-col bg-white shadow-sm hover:shadow-xl border border-gray-100 rounded-2xl overflow-hidden transition-shadow duration-300">
                {/* Card Header / Accent */}
                <div className="bg-gradient-to-r from-[#1D546D] to-[#5F9598] h-2"></div>

                <div className="flex flex-col flex-grow p-6">
                  {/* Category Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-[#061E29]/5 px-3 py-1 rounded-full font-bold text-[#1D546D] text-[10px] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-[10px] text-gray-400">
                      <Users className="w-3 h-3" />
                      {item.pengunjung.toLocaleString()}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mb-2 font-bold text-[#061E29] group-hover:text-[#1D546D] text-xl leading-tight transition-colors">
                    {item.nama}
                  </h3>
                  <p className="flex-grow mb-6 text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6 pt-4 border-gray-50 border-t font-medium text-gray-500 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#5F9598]" />
                      <span>{item.total} Materi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#5F9598]" />
                      <span>{item.time} Jam</span>
                    </div>
                    <div className="ml-auto">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] ${
                          item.level === "Pemula"
                            ? "bg-green-100 text-green-700"
                            : item.level === "Menengah"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}>
                        {item.level}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/courses/${item.id}`}
                    className="flex justify-between items-center bg-[#F3F4F4] group-hover:bg-[#061E29] px-4 py-3 rounded-xl transition-colors duration-300">
                    <span className="font-semibold text-[#061E29] group-hover:text-white text-sm transition-colors">
                      Lihat Detail
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#5F9598] group-hover:text-white transition-all group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center">
            <Search className="mx-auto mb-4 w-12 h-12 text-gray-300" />
            <h3 className="font-bold text-gray-700 text-xl">
              Kursus tidak ditemukan
            </h3>
            <p className="mt-2 text-gray-500">
              Coba kata kunci atau filter lainnya.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
