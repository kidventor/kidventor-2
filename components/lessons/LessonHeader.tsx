"use client";

import { motion } from "framer-motion";

type LessonHeaderProps = {
  emoji: string;
  title: string;
  difficulty: string;
  duration: string;
};

export default function LessonHeader({
  emoji,
  title,
  difficulty,
  duration,
}: LessonHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
          Lesson
        </div>

        {/* Emoji */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-5xl shadow-[0_0_40px_rgba(34,211,238,.35)]">
          {emoji}
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="text-4xl font-black text-white md:text-5xl"
        >
          {title}
        </motion.h1>

        {/* Information */}
        <div className="mt-6 flex flex-wrap gap-4">

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Difficulty
            </p>

            <p className="mt-1 font-bold text-cyan-400">
              {difficulty}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Duration
            </p>

            <p className="mt-1 font-bold text-cyan-400">
              {duration}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}