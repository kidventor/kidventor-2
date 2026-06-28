"use client";

import { motion } from "framer-motion";

type ModuleCardProps = {
  emoji: string;
  title: string;
  lessons: number;
  color: string; // Expecting strings like "from-cyan-500 to-blue-600"
};

export default function ModuleCard({
  emoji,
  title,
  lessons,
  color,
}: ModuleCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut"
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1023]/60 p-6 backdrop-blur-xl shadow-xl shadow-black/10 select-none"
    >
      {/* Background Portal Glow */}
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20 pointer-events-none`}
      />

      {/* Main Card Content */}
      <div>
        {/* Floating Icon Housing */}
        <div
          className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-3xl shadow-lg border border-white/10 transform transition-transform duration-300 group-hover:scale-105`}
        >
          {emoji}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
          {title}
        </h3>

        {/* Lesson Metadata Count */}
        <p className="mt-2 text-sm font-medium text-gray-400 tracking-wide">
          {lessons} Interactive Lessons
        </p>

        {/* Level Progression Track */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5 border border-white/5">
          <div 
            className={`h-full w-0 rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out group-hover:w-2/3 shadow-[0_0_8px_rgba(34,211,238,0.2)]`} 
          />
        </div>
      </div>

      {/* Footer Interactive Row */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
          Ready to Begin
        </span>

        <button className="rounded-xl bg-white/5 border border-white/10 px-5 py-2 text-sm font-bold text-white transition duration-200 hover:bg-gradient-to-r hover:${color} hover:border-transparent active:scale-95">
          Start →
        </button>
      </div>

    </motion.div>
  );
}