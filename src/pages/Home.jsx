import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  Clock,
  BookOpen,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import data from "../data/courses";

export default function Home() {
  const topCourse = [...data]
    .sort((a, b) => b.pengunjung - a.pengunjung)
    .slice(0, 3);

  const getLevelColor = (level) => {
    const l = level.toLowerCase();
    if (l.includes("pemula"))
      return "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20";
    else if (l.includes("menengah"))
      return "bg-amber-500/10 text-amber-600 border border-amber-500/20";
    else return "bg-rose-500/10 text-rose-600 border border-rose-500/20";
  };

  return (
    <div className="bg-[#F3F4F4] min-h-screen font-sans">
      {/* Hero Section - Modern & Clean */}
      <div className="relative flex flex-col justify-center items-center bg-[#061E29] w-full min-h-screen overflow-hidden text-[#F3F4F4]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="top-1/2 left-1/2 absolute bg-[#1D546D] opacity-30 blur-[150px] rounded-full w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse filter"></div>
          <div className="top-1/4 right-0 absolute bg-[#5F9598] opacity-20 blur-[120px] rounded-full w-96 h-96 translate-x-1/2 filter"></div>
          <div className="bottom-0 left-0 absolute bg-[#1D546D] opacity-20 blur-[120px] rounded-full w-96 h-96 -translate-x-1/2 translate-y-1/2 filter"></div>
        </div>

        {/* Floating Decorative Lines */}
        <div className="top-20 left-10 absolute bg-gradient-to-r from-transparent via-[#5F9598]/50 to-transparent w-32 h-px rotate-45"></div>
        <div className="right-20 bottom-40 absolute bg-gradient-to-r from-transparent via-[#5F9598]/50 to-transparent w-48 h-px -rotate-12"></div>

        <div className="z-10 relative mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm mb-6 px-4 py-2 border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-[#5F9598]" />
            <span className="font-medium text-[#F3F4F4]/80 text-sm">
              Platform Belajar Terbaik
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            Tingkatkan <br />
            <span className="bg-clip-text bg-gradient-to-r from-[#5F9598] to-[#8CBCC0] text-transparent">
              Skill IT
            </span>
            mu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-2 max-w-xl text-[#F3F4F4]/60 text-lg md:text-xl tracking-wide">
            Belajar dari nol hingga mahir bersama mentor berpengalaman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10">
            <Link
              to="/courses"
              className="group flex items-center gap-3 bg-white shadow-lg shadow-white/10 hover:shadow-white/20 hover:shadow-xl px-8 py-4 rounded-2xl font-bold text-[#061E29] transition-all hover:-translate-y-1 duration-300">
              Mulai Belajar
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-2xl font-semibold text-[#F3F4F4] transition-colors">
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Top Course Section - Enhanced Cards */}
      <div className="relative mx-auto px-6 lg:px-20 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center">
          <span className="inline-flex items-center gap-2 bg-[#1D546D]/10 mb-4 px-3 py-1 rounded-full font-bold text-[#1D546D] text-xs uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />
            Populer
          </span>
          <h2 className="font-extrabold text-[#061E29] text-3xl md:text-4xl">
            Top 3 Kursus Favorit
          </h2>
          <p className="mt-3 max-w-md text-gray-500">
            Pilihan terbaik yang paling diminati para pejuang talenta digital.
          </p>
        </motion.div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {topCourse.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white shadow-sm hover:shadow-xl border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300">
              {/* Accent Line Top */}
              <div className="bg-gradient-to-r from-[#1D546D] to-[#5F9598] h-1.5"></div>

              <div className="flex flex-col flex-grow p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getLevelColor(item.level)}`}>
                    {item.level}
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-400 text-xs">
                    <Users className="w-3.5 h-3.5" />
                    {item.pengunjung.toLocaleString()}
                  </div>
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
                    <BookOpen className="w-3.5 h-3.5 text-[#5F9598]" />
                    <span>{item.total} Materi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#5F9598]" />
                    <span>{item.time} Jam</span>
                  </div>
                </div>

                {/* Button CTA */}
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
        </div>
      </div>
    </div>
  );
}
