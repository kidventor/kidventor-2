"use client";

import { motion } from "framer-motion";
import { useStudent } from "@/context/StudentContext";

type StudentProfileProps = {
  name?: string;
  streak?: number;
};

export default function StudentProfile({
  name = "Future Explorer",
  streak = 1,
}: StudentProfileProps) {
  const student = useStudent();

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/10 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-5xl shadow-xl">
              👦
            </div>

            <div>
              <p className="text-gray-400">
                Welcome Back
              </p>

              <h2 className="text-4xl font-black text-white">
                {name}
              </h2>

              <p className="mt-2 font-semibold text-cyan-400">
                Level {student.level} Explorer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <p className="text-3xl font-black text-yellow-400">
                ⭐ {student.xp}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                XP
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <p className="text-3xl font-black text-orange-400">
                🔥 {streak}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Day Streak
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}