"use client";

import { motion } from "framer-motion";

type LessonSummaryProps = {
  summary: string[];
};

export default function LessonSummary({
  summary,
}: LessonSummaryProps) {
  return (
    <section className="mt-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-2xl">
          ⭐
        </div>

        <div>

          <h2 className="text-3xl font-black text-white">

            Lesson Summary

          </h2>

          <p className="text-gray-400">

            Remember these important points.

          </p>

        </div>

      </div>

      <div className="space-y-4">

        {summary.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * .1,
            }}
            className="flex gap-4 rounded-2xl bg-white/5 p-4"
          >

            <div className="font-black text-emerald-400">

              ✓

            </div>

            <p className="text-gray-300">

              {item}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}