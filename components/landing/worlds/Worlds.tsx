"use client";

import { motion } from "framer-motion";
import WorldCard from "./WorldCard";
import { worlds } from "./data";

export default function Worlds() {
  // Container viewport animation orchestration matrix
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth arcade-style drop sequencing
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 overflow-hidden select-none">
      
      {/* Ambient background localized portal glow behind the world selections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Dynamic Animated Header Block */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
        className="mb-16 md:mb-24 text-center relative z-10"
      >
        {/* Playful Category Tag */}
        <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-cyan-400 uppercase mb-4 shadow-[0_4px_12px_rgba(6,182,212,0.05)]">
          ✨ Campaign Map Selection ✨
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
          🌍 Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]">Adventure</span>
        </h2>

        <p className="mt-4 text-base md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
          Unlock premium digital superpowers and master real coding tracks by exploring hidden interactive zones.
        </p>
      </motion.div>

      {/* Gamified Staggered Level Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3 relative z-10"
      >
        {worlds.map((world, index) => (
          <motion.div
            key={world.title}
            variants={{
              hidden: { y: 40, opacity: 0, scale: 0.9 },
              visible: { 
                y: 0, 
                opacity: 1, 
                scale: 1,
                transition: { type: "spring", stiffness: 120, damping: 16 }
              }
            }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="group cursor-pointer relative"
          >
            {/* Holographic neon backing shield that lights up on card hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-xl -z-10" />
            
            <WorldCard {...world} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}