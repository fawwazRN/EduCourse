import React from "react";
import { NavLink, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  BarChart3,
  PlayCircle,
  CheckCircle2,
  ChevronDown,
  Award,
} from "lucide-react";
import { useState } from "react";
import data from "../data/courses";
import NotFound from "./NotFound";

export default function CourseDetail() {
  const { id } = useParams();
  const course = data.find((item) => item.id === Number(id));
  const [showMateri, setShowMateri] = useState(false);

  if (!course) {
    return <NotFound />;
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-[#F3F4F4] pb-20 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-[#061E29] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="top-0 right-0 absolute bg-[#1D546D] blur-[100px] rounded-full w-[500px] h-[500px] -translate-y-1/2 translate-x-1/3 filter"></div>
        </div>

        <div className="z-10 relative mx-auto px-6 md:px-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}>
            <NavLink
              to="/courses"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 mb-8 px-4 py-2 border border-white/10 rounded-full font-medium text-[#F3F4F4]/70 hover:text-white text-sm transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Kursus
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 bg-[#5F9598]/20 mb-4 px-3 py-1 border border-[#5F9598]/30 rounded-full font-bold text-[#5F9598] text-xs uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              {course.level}
            </div>

            <h1 className="font-extrabold text-[#F3F4F4] text-3xl md:text-5xl leading-tight tracking-tight">
              {course.nama}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 relative mx-auto -mt-8 px-6 md:px-10 max-w-5xl">
        {/* Meta Cards Grid */}
        <motion.div
          variants={itemVariants}
          className="gap-4 grid grid-cols-1 md:grid-cols-3">
          {/* Card 1: Total Materi */}
          <div className="group bg-white shadow-sm hover:shadow-lg p-6 border border-gray-100 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="mb-1 font-semibold text-[#5F9598] text-xs uppercase tracking-wider">
                  Total Pembelajaran
                </p>
                <p className="font-bold text-[#061E29] text-2xl md:text-3xl">
                  {course.total} Materi
                </p>
              </div>
              <div className="bg-[#F3F4F4] group-hover:bg-[#5F9598] p-3 rounded-xl transition-colors duration-300">
                <BookOpen className="w-5 h-5 text-[#1D546D] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 2: Durasi */}
          <div className="group bg-white shadow-sm hover:shadow-lg p-6 border border-gray-100 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="mb-1 font-semibold text-[#5F9598] text-xs uppercase tracking-wider">
                  Estimasi Waktu
                </p>
                <p className="font-bold text-[#061E29] text-2xl md:text-3xl">
                  {course.time} Jam
                </p>
              </div>
              <div className="bg-[#F3F4F4] group-hover:bg-[#5F9598] p-3 rounded-xl transition-colors duration-300">
                <Clock className="w-5 h-5 text-[#1D546D] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Card 3: Sertifikat (Illustrative) */}
          <div className="group bg-white shadow-sm hover:shadow-lg p-6 border border-gray-100 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="mb-1 font-semibold text-[#5F9598] text-xs uppercase tracking-wider">
                  Sertifikasi
                </p>
                <p className="font-bold text-[#061E29] text-2xl md:text-3xl">
                  Resmi
                </p>
              </div>
              <div className="bg-[#F3F4F4] group-hover:bg-[#5F9598] p-3 rounded-xl transition-colors duration-300">
                <Award className="w-5 h-5 text-[#1D546D] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm mt-10 p-8 border border-gray-100 rounded-2xl">
          <h2 className="flex items-center gap-3 mb-4 font-bold text-[#061E29] text-xl">
            <span className="bg-[#5F9598] rounded-full w-1.5 h-6"></span>
            Deskripsi Kursus
          </h2>
          <p className="text-[#061E29]/70 text-base leading-relaxed">
            {course.descPanjang}
          </p>
        </motion.div>

        {/* Curriculum Accordion Section */}
        <motion.div variants={itemVariants} className="mt-6">
          <button
            onClick={() => setShowMateri(!showMateri)}
            className="group flex justify-between items-center bg-white shadow-sm p-6 border border-gray-100 hover:border-[#5F9598]/30 rounded-2xl w-full transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-[#061E29] p-3 rounded-xl">
                <PlayCircle className="w-6 h-6 text-[#5F9598]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#061E29] text-lg">
                  Lihat Kurikulum Lengkap
                </h3>
                <p className="text-gray-500 text-sm">
                  {course.total} modul pembelajaran interaktif
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showMateri ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#1D546D]" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {showMateri && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: 16 },
                  collapsed: { opacity: 0, height: 0, marginTop: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden">
                <div className="bg-[#F9FAFB] p-6 border border-gray-200/50 rounded-2xl">
                  <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                    {course.pembelajaran.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex items-center gap-3 bg-white p-4 border border-gray-100 hover:border-[#5F9598] rounded-xl transition-colors cursor-default">
                        <div className="flex flex-shrink-0 justify-center items-center bg-[#061E29]/5 group-hover:bg-[#5F9598] rounded-lg w-8 h-8 font-bold text-[#1D546D] group-hover:text-white text-sm transition-all">
                          {index + 1}
                        </div>
                        <p className="font-medium text-[#061E29]/80 text-sm">
                          {item}
                        </p>
                        <CheckCircle2 className="ml-auto w-4 h-4 text-gray-200 group-hover:text-[#5F9598] transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Action (Optional but good for UX) */}
        <motion.div variants={itemVariants} className="mt-10 text-center">
          <button className="bg-[#061E29] hover:bg-[#1D546D] shadow-[#061E29]/20 shadow-lg px-10 py-4 rounded-2xl w-full md:w-auto font-bold text-white hover:scale-[1.02] transition-all duration-300">
            Mulai Belajar Sekarang
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
