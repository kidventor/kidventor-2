"use client";

import { motion } from "framer-motion";

export default function ContinueLearning() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Continue Learning
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Parts of a Computer
          </h2>

          <p className="mt-3 max-w-xl text-gray-400">
            Resume where you stopped and continue your digital adventure.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-3 md:items-end">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Lesson 3 of 12
          </span>

          <div className="h-3 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
            />
          </div>

          <p className="text-sm text-gray-400">
            25% Completed
          </p>

          <button className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white transition hover:scale-105">
            Continue →
          </button>

        </div>

      </div>
    </motion.section>
  );
}