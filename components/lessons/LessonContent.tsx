"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type LessonSection = {
  id: string;
  heading: string;
  body: string;
  tip: string;
  image?: string;
  activity?: string;
};

type LessonContentProps = {
  content: LessonSection[];
  currentSection: number;
  setCurrentSection: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export default function LessonContent({
  content,
  currentSection,
  setCurrentSection,
}: LessonContentProps) {

  // If lesson has no content
  if (!content || content.length === 0) {
    return (
      <section className="mt-12">
        <div className="rounded-3xl bg-red-500/10 p-8 text-center text-red-300">
          This lesson has no content yet.
        </div>
      </section>
    );
  }

  // Keep index inside valid range
  const safeIndex = Math.min(
    Math.max(currentSection, 0),
    content.length - 1
  );

  const current = content[safeIndex];

  // If React briefly renders with stale state
  if (!current) return null;

  const isFirst = safeIndex === 0;
  const isLast = safeIndex === content.length - 1;

  useEffect(() => {
    if (currentSection !== safeIndex) {
      setCurrentSection(safeIndex);
    }
  }, [currentSection, safeIndex, setCurrentSection]);

  return (
    <section className="mt-12">

      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">
          📖 Lesson Content
        </h2>

        <p className="mt-2 text-gray-400">
          Read each section carefully before moving to the next one.
        </p>
      </div>

      <AnimatePresence mode="wait">

        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="mb-6 flex items-center justify-between">

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

              Step {safeIndex + 1} of {content.length}

            </span>

          </div>

          <h3 className="text-3xl font-black text-cyan-400">
            {current.heading}
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {current.body}
          </p>

          {current.image && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
              <img
                src={current.image}
                alt={current.heading}
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <h4 className="font-black text-cyan-300">
              💡 Remember
            </h4>

            <p className="mt-3 text-gray-300">
              {current.tip}
            </p>
          </div>

          {current.activity && (
            <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">
              <h4 className="font-black text-yellow-400">
                🎯 Mini Activity
              </h4>

              <p className="mt-3 text-gray-300">
                {current.activity}
              </p>
            </div>
          )}

          <div className="mt-10 flex justify-between">

            <button
              disabled={isFirst}
              onClick={() =>
                setCurrentSection((prev) => prev - 1)
              }
              className="rounded-xl border border-white/10 px-6 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white/10"
            >
              ← Previous
            </button>

            <button
              disabled={isLast}
              onClick={() =>
                setCurrentSection((prev) => prev + 1)
              }
              className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:bg-cyan-400"
            >
              Next →
            </button>

          </div>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}