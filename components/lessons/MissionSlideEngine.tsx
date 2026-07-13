"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

type MissionSlideEngineProps = {
  slides: React.ReactNode[];
  onSlideChange?: (
    current: number,
    total: number
  ) => void;
};

export default function MissionSlideEngine({
  slides,
  onSlideChange,
}: MissionSlideEngineProps) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;
  useEffect(() => {
  onSlideChange?.(
    currentSlide,
    totalSlides
  );
}, [
  currentSlide,
  totalSlides,
  onSlideChange,
]);

  const percentage =
    ((currentSlide + 1) / totalSlides) * 100;

  return (

    <div className="space-y-10">

      {/* Progress */}

      <div className="space-y-3">

        <div className="flex items-center justify-between">

          <h3 className="font-black tracking-widest text-cyan-300">

            MISSION PROGRESS

          </h3>

          <span className="font-bold text-gray-300">

            {currentSlide + 1} / {totalSlides}

          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">

          <motion.div
            animate={{
              width: `${percentage}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-cyan-400"
          />

        </div>

      </div>

      {/* Slide */}

      <AnimatePresence
        mode="wait"
      >

        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={{
            duration: 0.35,
          }}
        >

          {slides[currentSlide]}

        </motion.div>

      </AnimatePresence>

      {/* Bottom Navigation */}

      <div className="flex items-center justify-between">

        <button
          disabled={currentSlide === 0}
          onClick={() =>
            setCurrentSlide((prev) => prev - 1)
          }
          className="rounded-2xl bg-slate-700 px-6 py-3 font-black text-white transition hover:bg-slate-600 disabled:opacity-30"
        >

          ← Previous

        </button>

        <div className="flex gap-2">

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrentSlide(index)
              }
              className={`h-4 w-4 rounded-full transition ${
                currentSlide === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-slate-600"
              }`}
            />

          ))}

        </div>

        <button
          disabled={currentSlide === totalSlides - 1}
          onClick={() =>
            setCurrentSlide((prev) => prev + 1)
          }
          className="rounded-2xl bg-cyan-500 px-6 py-3 font-black text-black transition hover:scale-105 disabled:opacity-30"
        >

          Next →

        </button>

      </div>

    </div>

  );

}