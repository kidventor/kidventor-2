"use client";

import { motion } from "framer-motion";

export default function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-6 py-12">

        <div className="max-w-3xl text-center">

          {/* Section Label */}
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.3em] text-cyan-400">
            Computer Academy
          </p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Welcome to
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Computer Academy
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
          >
            Discover how computers work through fun lessons,
            interactive activities, quizzes, and exciting projects.
            Every lesson brings you one step closer to becoming a
            confident digital explorer.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-bold text-white transition duration-300 hover:scale-105">
              🚀 Start Learning
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 font-semibold text-gray-300 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
              📚 Browse Modules
            </button>
          </motion.div>

        </div>

      </div>

    </section>
  );
}