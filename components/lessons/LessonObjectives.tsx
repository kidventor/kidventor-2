"use client";

import { motion } from "framer-motion";

type LessonObjectivesProps = {
  objectives: string[];
};

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl">
          🎯
        </div>

        <div>
          <h2 className="text-3xl font-black text-white">
            Learning Objectives
          </h2>

          <p className="text-gray-400">
            By the end of this lesson you should be able to:
          </p>
        </div>
      </div>

      <div className="space-y-4">

        {objectives.map((objective, index) => (

          <motion.div
            key={objective}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
            }}
            className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5"
          >

            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
              {index + 1}
            </div>

            <p className="text-lg leading-relaxed text-gray-300">
              {objective}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}