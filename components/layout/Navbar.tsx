"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Explore", href: "/explore", icon: "🌍", color: "hover:text-cyan-400" },
  { name: "Learn", href: "/courses", icon: "🧪", color: "hover:text-yellow-400" },
  { name: "Playground", href: "/playground", icon: "🎮", color: "hover:text-pink-400" },
  { name: "Resources", href: "/resources", icon: "📚", color: "hover:text-emerald-400" },
  { name: "Blog", href: "/blog", icon: "📰", color: "hover:text-purple-400" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        {/* Main HUD Glass Navigation Container */}
        <nav className="relative flex h-22 items-center justify-between rounded-2xl border-2 border-white/10 bg-[#0B1023]/80 px-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
          
          {/* Logo Section with Dynamic Particle Pulse Glow */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-cyan-500 text-2xl font-black text-white shadow-xl group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 border border-white/20">
              K
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>

            <div className="leading-none">
              <h1 className="text-xl font-black tracking-wider uppercase bg-gradient-to-r from-white via-gray-200 to-cyan-300 bg-clip-text text-transparent group-hover:to-yellow-300 transition-all duration-300">
                KidVentor
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 mt-1">
                Learn • Build • Create
              </p>
            </div>
          </Link>

          {/* Desktop Menu - Tactile Sliding Pill System */}
          <div className="hidden items-center gap-2 lg:flex relative bg-black/30 px-3 py-1.5 rounded-xl border border-white/5">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-bold text-gray-300 transition-colors duration-300 flex items-center gap-2 rounded-lg ${item.color}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Magnetic dynamic hover backdrop */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="text-base group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Gamified Action Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-xl border border-white/10 px-5 py-3 text-sm font-black tracking-wide text-gray-300 transition-all hover:text-white hover:border-white/30 hover:bg-white/5 active:scale-95">
              Login 🔑
            </button>

            <button className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-3 text-sm font-black tracking-wider text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:translate-y-0 active:scale-95">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white/20 rotate-12 group-hover:-translate-x-40 ease" />
              Start Learning 🚀
            </button>
          </div>

          {/* Mobile Controller Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex flex-col justify-center items-center w-11 h-11 rounded-xl border-2 border-white/10 bg-white/5 text-white transition hover:bg-white/10 hover:border-cyan-400 lg:hidden active:scale-90"
          >
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`} />
            <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"}`} />
          </button>
        </nav>
      </div>

      {/* Immersive Mobile Dashboard Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-28 inset-x-4 lg:hidden z-40 bg-[#0B1023]/95 border-2 border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-3xl text-center flex flex-col gap-3"
          >
            <div className="text-[10px] font-mono tracking-widest uppercase text-gray-500 mb-2">
              — Quest Selection Menu —
            </div>
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-lg font-black text-white hover:bg-white/5 rounded-2xl border border-transparent hover:border-white/10 flex items-center justify-center gap-3 active:scale-98 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}

            <div className="h-px bg-white/10 my-2" />

            <div className="flex flex-col gap-3 mt-2">
              <button className="w-full py-4 rounded-xl border border-white/10 font-bold text-gray-300 active:scale-95">
                Login 🔑
              </button>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-black tracking-wide text-white active:scale-95 shadow-lg">
                Start Learning 🚀
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}