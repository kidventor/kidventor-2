"use client";

import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030712] pt-28 flex items-center justify-center select-none">
      
      {/* --- GAMIFIED ATMOSPHERIC ENVIRONMENT LAYERS --- */}
      
      {/* Cybernetic Grid Floor Mesh with perspective depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
        style={{
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Primary Cyber Nebula Light Glow (Left Alignment) */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 blur-[150px] pointer-events-none" 
      />

      {/* Secondary Cosmic Plasma Light Glow (Right Alignment) */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.22, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-purple-600 to-pink-500 blur-[140px] pointer-events-none" 
      />

      {/* Floating Space Dust Particles (Pure CSS Performance Isolation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-40 shadow-[0_0_8px_#fff]"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* --- HERO INTERFACE GRID SYSTEM --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[75vh]">
          
          {/* Text/HUD Messaging Segment Layer */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex w-full justify-center lg:w-1/2 lg:justify-start z-20"
          >
            <HeroText />
          </motion.div>

          {/* Interactive 3D World Viewport Segment Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex w-full justify-center lg:w-1/2 z-10"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>

      {/* --- SCROLL POSITION TELEMETRY --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator />
      </div>

    </section>
  );
}