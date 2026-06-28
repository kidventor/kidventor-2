"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoadingScreenProps = {
  onComplete: () => void;
};

const loadingSteps = [
  "Initializing KidVentor Universe...",
  "Loading Computer Academy...",
  "Loading Keyboard Kingdom...",
  "Loading Mouse Village...",
  "Loading Coding Forest...",
  "Loading AI Laboratory...",
  "Loading Cyber Fortress...",
  "Preparing Your Adventure...",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Variable increments simulate a real game loading engine crunching assets
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Speed up early on, simulate a heavy asset load near the end
        const jump = prev < 40 ? 4 : prev < 80 ? 2 : 1;
        return Math.min(prev + jump, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentStep =
    loadingSteps[
      Math.min(
        Math.floor((progress / 100) * loadingSteps.length),
        loadingSteps.length - 1
      )
    ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center z-[9999] overflow-hidden select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Retro Gaming Cyber-Grid Floor Background */}
        <div 
          className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        />

        {/* Dynamic Energy Orbs Floating in the background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />

        {/* Main Loading Core Interface */}
        <div className="relative flex flex-col items-center z-10 max-w-md px-6 text-center">
          
          {/* Animated Main Tech Core Portal */}
          <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
            {/* Outer spinning targeting tracker */}
            <motion.div 
              className="absolute inset-0 border-4 border-dashed border-cyan-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner inverse spinning energetic ring */}
            <motion.div 
              className="absolute inset-2 border-2 border-purple-500/50 border-t-purple-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Core Avatar Rocketship Node */}
            <motion.div
              className="text-5xl"
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🚀
            </motion.div>
          </div>

          {/* Epic Game Title Typography */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black tracking-wider uppercase font-sans text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]"
          >
            KidVentor
          </motion.h1>

          {/* Subtext HUD Status Monitor */}
          <div className="h-8 mt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -10, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="text-sm font-mono uppercase tracking-widest text-cyan-400/80 font-bold"
              >
                {currentStep}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* High-Fi Mechanical Custom Progress Track */}
          <div className="mt-8 w-80 relative">
            {/* Background track structure with outer shell neon line */}
            <div className="w-full h-4 rounded-full bg-slate-900 border border-white/10 p-0.5 overflow-hidden shadow-inner shadow-black/50">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400 relative"
                style={{ width: `${progress}%` }}
                layoutId="loadingProgressBar"
              >
                {/* Laser glare flare traveling on the edge line */}
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-80" />
              </motion.div>
            </div>

            {/* Futuristic ticks below the loading strip */}
            <div className="flex justify-between px-1 mt-2 text-[10px] font-mono text-gray-600 tracking-tighter">
              <span>SYS_INIT</span>
              <span>HALF_WAY</span>
              <span>READY_STATION</span>
            </div>
          </div>

          {/* Digital Percentage Telemetry */}
          <motion.div 
            className="mt-4 px-4 py-1 rounded-xl bg-white/5 border border-white/10 font-mono font-black text-xl text-yellow-400 tracking-widest shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          >
            {progress.toString().padStart(3, "0")}%
          </motion.div>

        </div>

        {/* Full View Ambient Radial Portal Flare */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
      </motion.div>
    </AnimatePresence>
  );
}