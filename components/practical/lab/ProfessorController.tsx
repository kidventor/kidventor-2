"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProfessorStore } from "@/components/store/professorStore";

export default function ProfessorController() {
  const [mode, setMode] = useState<
    "enter" | "welcome" | "shrink" | "assistant"
  >("enter");

  const { message } = useProfessorStore();

  useEffect(() => {
    const enter = setTimeout(() => {
      setMode("welcome");
    }, 800);

    const shrink = setTimeout(() => {
      setMode("shrink");
    }, 4200);

    const assistant = setTimeout(() => {
      setMode("assistant");
    }, 5400);

    return () => {
      clearTimeout(enter);
      clearTimeout(shrink);
      clearTimeout(assistant);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {mode !== "assistant" && (
          <motion.div
            initial={{
              x: 350,
              opacity: 0,
            }}
            animate={{
              x: mode === "shrink" ? 420 : 0,
              y: mode === "shrink" ? -260 : 0,
              scale: mode === "shrink" ? 0.28 : 1,
              opacity: mode === "shrink" ? 0 : 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="fixed bottom-0 right-8 z-50"
          >
            <img
              src="/images/characters/professor-full.png"
              alt="Professor Pixel"
              className="h-[520px]"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: mode === "welcome" ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute left-[-270px] top-20 w-64 rounded-3xl bg-cyan-900 p-5 text-white shadow-2xl"
            >
              <h3 className="text-xl font-black text-cyan-300">
                👋 Welcome, Explorer!
              </h3>

              <p className="mt-3">
                Today we're going to learn the keyboard together.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {mode === "assistant" && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.04, 1],
              y: [0, -8, 0],
              opacity: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fixed right-8 top-40 z-50 flex items-center gap-4"
          >
            <img
              src="/images/characters/professor-face.png"
              alt="Professor Pixel"
              className="h-36 w-36 rounded-full border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,.55)]"
            />

            <div className="max-w-xs rounded-3xl bg-white p-5 text-slate-900 shadow-2xl whitespace-pre-line">
              {message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}