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

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 700);

          return 100;
        }

        return prev + 2;
      });
    }, 60);

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
        className="fixed inset-0 bg-[#050816] flex flex-col items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          KidVentor
        </motion.h1>

        <motion.p
          className="mt-8 text-gray-300 text-lg"
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {currentStep}
        </motion.p>

        <div className="mt-10 w-72 h-3 rounded-full bg-gray-700 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            animate={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-cyan-400 font-bold">
          {progress}%
        </p>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(56,189,248,.1) 0%, transparent 60%)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}