"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#030712] text-white overflow-hidden select-none">
      
      {/* --- HUD BACKGROUND ATMOSPHERE --- */}
      {/* Deep Cyber Pulsing Ambient Light Core */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[120px] pointer-events-none"
      />

      {/* Futuristic Grid Overlay Track */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* --- KINETIC LOADING CORE HUD --- */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* Playful Animated Holographic Computer Icon Node */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          {/* Cyber Orbital Loading Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl border-2 border-t-cyan-400 border-r-transparent border-b-purple-500 border-l-transparent"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-2xl border-2 border-t-transparent border-r-pink-500 border-b-transparent border-l-emerald-400 opacity-60"
          />

          {/* Core Floating Hologram Emoji Centerpiece */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl filter drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
          >
            🖥️
          </motion.div>
        </div>

        {/* Tactical Status Notification Headers */}
        <div className="text-center">
          <motion.h1 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl md:text-3xl font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(6,182,212,0.15)]"
          >
            Booting Computer Academy
          </motion.h1>

          {/* Animated Matrix Loading Bar Tracker */}
          <div className="mt-4 relative w-56 h-2 bg-slate-900 border border-white/5 rounded-full overflow-hidden mx-auto shadow-inner shadow-black/40">
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_8px_#22d3ee]"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "40%", "75%", "100%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1]
              }}
            />
          </div>

          {/* Console Telemetry Meta Tracker Details */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-[10px] font-mono tracking-widest text-slate-500 uppercase"
          >
            [ Connecting to KidVentor Server Matrix... ]
          </motion.p>
        </div>

      </div>

      {/* Outer Screen Peripheral Frame Details */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-cyan-500/30 hidden sm:block">SYS.STATUS // STABLE</div>
      <div className="absolute bottom-6 right-6 text-[10px] font-mono text-purple-500/30 hidden sm:block">GRID.LOAD // OK</div>

    </main>
  );
}