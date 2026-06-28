"use client";

import { motion } from "framer-motion";

type ModuleCardProps = {
  emoji: string;
  title: string;
  lessons: number;
  color: string;
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
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl transition duration-300 group-hover:opacity-25`}
      />

      {/* Icon */}
      <div
        className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-4xl shadow-lg`}
      >
        {emoji}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black text-white">
        {title}
      </h3>

      {/* Lesson Count */}
      <p className="mt-3 text-gray-400">
        {lessons} Interactive Lessons
      </p>

      {/* Progress */}
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 group-hover:w-2/3" />

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <span className="text-sm font-semibold text-cyan-400">
          Ready to Begin
        </span>

        <button className="rounded-xl bg-white/5 px-5 py-2 font-bold text-white transition hover:bg-cyan-500 hover:text-white">
          Start →
        </button>

      </div>

    </motion.div>
  );
}