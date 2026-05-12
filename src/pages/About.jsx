import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Award,
  Briefcase,
  Target,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";

export default function About() {
  // Data Status dengan Ikon
  const status = [
    {
      label: "Siswa Aktif",
      value: "10K+",
      icon: Users,
      description: "Pembelajar aktif setiap bulan",
    },
    {
      label: "Kursus IT",
      value: "50+",
      icon: BookOpen,
      description: "Kurikulum terstruktur",
    },
    {
      label: "Mentor Ahli",
      value: "30+",
      icon: Award,
      description: "Praktisi industri bersertifikat",
    },
    {
      label: "Alumni Bekerja",
      value: "95%",
      icon: Briefcase,
      description: "Tingkat kesuksesan karir",
    },
  ];

  const misi = [
    {
      text: "Menyediakan kurikulum IT yang selalu relevan dengan tren industri global.",
      icon: Target,
    },
    {
      text: "Membangun ekosistem belajar yang interaktif bagi semua tingkat kemahiran.",
      icon: Sparkles,
    },
    {
      text: "Memberikan sertifikasi kompetensi yang diakui secara luas oleh mitra industri.",
      icon: Award,
    },
  ];

  // Variants untuk Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-[#F3F4F4] pb-20 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#061E29] pt-32 pb-40 overflow-hidden text-white">
        {/* Background Gradients for Depth */}
        <div className="absolute inset-0 opacity-50">
          <div className="top-0 left-1/4 absolute bg-[#5F9598] opacity-30 blur-[128px] rounded-full w-96 h-96 filter"></div>
          <div className="right-1/4 bottom-0 absolute bg-[#1D546D] opacity-30 blur-[128px] rounded-full w-96 h-96 filter"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 relative mx-auto px-6 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[#5F9598]/20 mb-6 px-4 py-1.5 border border-[#5F9598]/30 rounded-full font-medium text-[#5F9598] text-sm tracking-wider">
            TENTANG KAMI
          </motion.span>

          <h1 className="mb-6 font-extrabold text-4xl md:text-6xl leading-tight tracking-tight">
            Mencetak Talent Digital <br />
            <span className="bg-clip-text bg-gradient-to-r from-[#5F9598] to-[#8CBCC0] text-transparent">
              Kelas Dunia
            </span>
          </h1>

          <p className="mx-auto max-w-2xl font-light text-[#F3F4F4]/70 text-lg md:text-xl leading-relaxed">
            EduCourse adalah platform pembelajaran IT terdepan di Indonesia yang
            berkomitmen menjembatani kesenjangan skill melalui pendidikan
            berkualitas yang aksesibel dan relevan.
          </p>
        </motion.div>
      </div>

      {/* Stats Counter Section - Floating Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 relative mx-auto -mt-24 px-6 max-w-6xl">
        <div className="gap-5 grid grid-cols-2 lg:grid-cols-4">
          {status.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white shadow-sm hover:shadow-xl p-6 border border-gray-100/50 rounded-2xl transition-all duration-300 cursor-default">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#061E29]/5 group-hover:bg-[#5F9598] mb-4 p-3 rounded-xl transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#061E29] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="font-extrabold text-[#1D546D] text-3xl md:text-4xl tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 font-semibold text-[#061E29] text-sm">
                    {item.label}
                  </p>
                  <p className="mt-1 text-gray-400 text-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-28 px-6 max-w-4xl text-center">
        <Quote className="mx-auto mb-4 w-10 h-10 text-[#5F9598]/20 rotate-180" />
        <h3 className="font-serif text-[#1D546D] text-2xl md:text-3xl italic leading-snug">
          Bridging Potential to Digital Excellence
        </h3>
        <div className="flex justify-center gap-1 mt-6">
          <div className="bg-[#5F9598] rounded-full w-2 h-2"></div>
          <div className="bg-[#1D546D]/20 rounded-full w-2 h-2"></div>
          <div className="bg-[#1D546D]/20 rounded-full w-2 h-2"></div>
        </div>
      </motion.div>

      {/* Visi & Misi Section */}
      <div className="mx-auto px-6 py-20 max-w-6xl">
        <div className="items-stretch gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Visi Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white shadow-sm hover:shadow-2xl p-10 border border-gray-100 rounded-3xl h-full overflow-hidden transition-all duration-500">
            {/* Decorative Element */}
            <div className="top-0 right-0 absolute bg-gradient-to-br from-[#5F9598]/10 to-transparent rounded-bl-full w-32 h-32"></div>

            <div className="z-10 relative">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="bg-[#061E29] p-2.5 rounded-xl">
                  <Target className="w-6 h-6 text-[#5F9598]" />
                </div>
                <h2 className="font-bold text-[#061E29] text-2xl md:text-3xl">
                  Visi Kami
                </h2>
              </div>

              <p className="text-[#061E29]/70 text-lg leading-relaxed">
                Menjadi pusat unggulan edukasi teknologi di Asia Tenggara yang
                mampu menjembatani kesenjangan antara kebutuhan industri dan
                ketersediaan tenaga ahli melalui akses pendidikan berkualitas.
              </p>

              <div className="mt-8 pt-6 border-gray-100 border-t">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Fokus pada kualitas & aksesibilitas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#061E29] shadow-xl p-10 rounded-3xl h-full overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}></div>

            <div className="z-10 relative">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="bg-white/10 p-2.5 rounded-xl">
                  <Award className="w-6 h-6 text-[#5F9598]" />
                </div>
                <h2 className="font-bold text-white text-2xl md:text-3xl">
                  Misi Kami
                </h2>
              </div>

              <ul className="space-y-6">
                {misi.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="group/item flex items-start gap-4">
                      <div className="flex-shrink-0 bg-[#5F9598]/20 group-hover/item:bg-[#5F9598] mt-1 p-1.5 rounded-lg transition-colors duration-300">
                        <IconComponent className="w-4 h-4 text-[#5F9598] group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-gray-300 group-hover/item:text-white text-base leading-relaxed transition-colors duration-300">
                        {item.text}
                      </p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
