"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { homeRowMission } from "@/data/academy/hardware/home-row-mission";
import { useEffect, useState } from "react";
import { getCurrentLesson } from "@/lib/lessonProgress";
export default function ContinueLearning() {

  const [currentLesson, setCurrentLesson] = useState<string | null>(null);

useEffect(() => {
  setCurrentLesson(getCurrentLesson());
}, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] border border-white/10 bg-[#0B1023]/60 p-6 backdrop-blur-xl shadow-xl shadow-black/20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left Side: Course Info */}
        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-cyan-400">
            Continue Learning
          </p>

          <h2 className="mt-2 text-3xl font-black text-white tracking-tight">
            {currentLesson === "hardware-001"
  ? homeRowMission.title
  : "Start Your Learning Journey"}
            </h2>

          <p className="mt-3 max-w-xl text-sm md:text-base text-gray-400 leading-relaxed">
            Resume where you stopped and continue your digital adventure.
          </p>
        </div>

        {/* Right Side: Progress Status & Navigation */}
        <div className="flex flex-col items-start gap-3 md:items-end w-full md:w-auto">

          {/* Badge */}
          <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-300">
            Lesson 3 of 12
          </span>

          {/* Progress Bar Housing */}
          <div className="h-2.5 w-full md:w-64 overflow-hidden rounded-full bg-white/10 mt-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
            />
          </div>

          <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
            25% Completed
          </p>

          {/* Clean Action Button */}
          <Link
  href="/academy/lesson"
  className="mt-2 w-full md:w-auto rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-center font-bold text-sm text-white shadow-lg shadow-cyan-500/10 transition hover:scale-105 active:scale-95"
>
  Continue →
</Link>

        </div>

      </div>
    </motion.section>
  );
}