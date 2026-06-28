"use client";

import { motion } from "framer-motion";

type Props = {
  emoji: string;
  title: string;
  description: string;
  color: string; // Expecting classes like "from-cyan-500 to-blue-600"
};

export default function WorldCard({
  emoji,
  title,
  description,
  color,
}: Props) {
  return (
    <motion.div
      className="group relative flex flex-col justify-between h-full rounded-[2rem] border-2 border-white/10 bg-[#0B1023]/60 p-6 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:border-white/20 select-none"
    >
      {/* Ambient background localized portal glow synced to the card's theme color */}
      <div className={`absolute -right-20 -top-20 w-44 h-44 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />

      {/* Futuristic technical layout marks (Corners) mimicking an advanced game HUD */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-white/20 rounded-tl group-hover:border-cyan-400 transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-white/20 rounded-tr group-hover:border-cyan-400 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-white/20 rounded-bl group-hover:border-cyan-400 transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-white/20 rounded-br group-hover:border-cyan-400 transition-colors duration-300" />

      {/* Main Content Area */}
      <div>
        {/* Playful Floating 3D Badge Housing */}
        <div className="relative mb-6 inline-block">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-4xl shadow-lg shadow-black/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 border border-white/20`}
          >
            {emoji}
          </div>
          {/* Duplicate glow layer behind the emoji icon */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-lg opacity-40 group-hover:opacity-75 group-hover:scale-110 transition-all duration-300 -z-10`} />
        </div>

        {/* Title text layout */}
        <h3 className="text-2xl font-black uppercase tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
          {title}
        </h3>

        {/* Description body text layout */}
        <p className="mt-3 text-sm md:text-base font-medium text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Action Footer Segment */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
        {/* Miniature Level System Badge indicator */}
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase group-hover:text-cyan-400/70 transition-colors duration-300">
          [ Ready to launch ]
        </span>

        {/* Tactical Interactive Entry Button */}
        <button className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 font-bold text-sm text-cyan-400 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-105 active:scale-95">
          <span>Enter World</span>
          <motion.span 
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}