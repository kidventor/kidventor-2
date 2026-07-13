"use client";

import { motion } from "framer-motion";

type MissionCompleteProps = {
  show: boolean;
  lessonTitle: string;
  xp: number;
  badge: string;
  nextLessonTitle?: string;
  progress?: number;
  onContinue: () => void;
};

export default function MissionComplete({
  show,
  lessonTitle,
  xp,
  badge,
  nextLessonTitle,
  progress = 0,
  onContinue,
}: MissionCompleteProps) {
  if (!show) return null;

  return (
    <motion.section
      id="mission-complete"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-16 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/40 to-blue-900/30 p-8 shadow-2xl"
    >
      <div className="text-center">

        <h2 className="text-5xl font-black text-cyan-300">
          🎉 Mission Complete
        </h2>

        <p className="mt-5 text-xl text-gray-300">
          Congratulations!
        </p>

        <p className="mt-3 text-3xl font-bold text-white">
          {lessonTitle}
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-black/20 p-6">

          <p className="text-lg text-gray-300">
            XP Earned
          </p>

          <h3 className="mt-3 text-5xl font-black text-yellow-400">
            ⭐ +{xp}
          </h3>

        </div>

        <div className="rounded-2xl bg-black/20 p-6">

          <p className="text-lg text-gray-300">
            Badge Earned
          </p>

          <h3 className="mt-3 text-3xl font-black text-cyan-300">
            🏆 {badge}
          </h3>

        </div>

      </div>

      <div className="mt-10">

        <p className="font-bold text-white">
          Overall Progress
        </p>

        <div className="mt-3 h-5 overflow-hidden rounded-full bg-gray-700">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-full rounded-full bg-cyan-400"
          />

        </div>

        <p className="mt-2 text-right text-cyan-300">
          {progress}%
        </p>

      </div>

      {nextLessonTitle && (

        <div className="mt-10 rounded-2xl bg-white/5 p-6">

          <p className="text-gray-400">
            NEXT LESSON
          </p>

          <h3 className="mt-3 text-3xl font-black text-white">
            {nextLessonTitle}
          </h3>

        </div>

      )}

      <button
        onClick={onContinue}
        className="mt-10 w-full rounded-2xl bg-cyan-500 py-5 text-2xl font-black text-white transition hover:bg-cyan-400"
      >
        🚀 Continue Adventure
      </button>

    </motion.section>
  );
}