import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
// Import HANYA ikon umum yang pasti ada di Lucide
import { Menu, X, GraduationCap, Mail, Phone, MapPin } from "lucide-react";

// --- BAGIAN 1: CUSTOM SOCIAL ICONS (SVG) ---
// Kita buat manual agar tidak ada error "Module not found" lagi.
const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    {/* Ini adalah ikon Twitter (X) versi modern */}
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.4-8" />
    <path d="M20 4l-6.4 8" />
  </svg>
);
// ------------------------------------------

export default function HeaderFooter() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
  ];

  return (
    <div className="flex flex-col bg-[#F3F4F4] min-h-screen font-sans">
      {/* Header */}
      <header className="top-0 z-50 fixed bg-white/80 shadow-sm backdrop-blur-lg border-gray-200/50 border-b w-full">
        <div className="flex justify-between items-center mx-auto px-6 md:px-20 py-4 w-full max-w-7xl">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2"
            onClick={handleNavClick}>
            <div className="bg-[#061E29] group-hover:bg-[#1D546D] p-2 rounded-lg transition-colors">
              <GraduationCap className="w-5 h-5 text-[#5F9598]" />
            </div>
            <h1 className="font-black text-[#061E29] text-xl tracking-tighter">
              Edu<span className="text-[#1D546D]">Course</span>
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden relative md:flex items-center bg-gray-100 p-1 rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative z-10 px-5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#061E29]/70 hover:text-[#061E29]"
                  }`
                }>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-[#1D546D] shadow-md rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="z-10 relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 flex p-2 text-[#061E29]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden z-40 fixed inset-0 bg-white px-6 pt-20">
              <div className="flex flex-col items-center gap-6 pt-10">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `text-2xl font-bold transition-colors ${
                        isActive
                          ? "text-[#1D546D]"
                          : "text-gray-400 hover:text-[#061E29]"
                      }`
                    }>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#061E29] pt-16 pb-8 text-[#F3F4F4]">
        <div className="mx-auto px-6 md:px-20 max-w-7xl">
          <div className="gap-12 grid grid-cols-1 md:grid-cols-4 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-[#5F9598]" />
                </div>
                <h2 className="font-bold text-xl tracking-tight">
                  Edu<span className="text-[#5F9598]">Course</span>
                </h2>
              </div>
              <p className="mb-4 text-gray-400 text-sm leading-relaxed">
                Platform belajar IT terbaik untuk mempersiapkan karir digital
                impianmu.
              </p>
              {/* Gunakan Custom Icons di sini */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white/5 hover:bg-[#1D546D] p-2 rounded-lg transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white/5 hover:bg-[#1D546D] p-2 rounded-lg transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white/5 hover:bg-[#1D546D] p-2 rounded-lg transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="mb-4 font-bold text-white text-sm uppercase tracking-wider">
                Navigasi
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className="text-gray-400 hover:text-white transition-colors">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 font-bold text-white text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors">
                    Mentoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-bold text-white text-sm uppercase tracking-wider">
                Hubungi Kami
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-[#5F9598]" />
                  <span>hello@educourse.id</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-[#5F9598]" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#5F9598]" />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-6 border-gray-700/50 border-t">
            <p className="text-gray-500 text-xs">
              © 2026 EduCourse. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-500 text-xs">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
