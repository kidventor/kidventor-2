"use client";

import { motion, AnimatePresence } from "framer-motion";

type ProfessorDialogueProps = {
  open: boolean;
  message: string;
  mood?: "normal" | "happy" | "thinking";
};

export default function ProfessorDialogue({

  open,

  message,

  mood = "normal",

}: ProfessorDialogueProps) {

  const emoji =

    mood === "happy"
      ? "🎉"
      : mood === "thinking"
      ? "🤔"
      : "👨‍🏫";

  return (

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          exit={{ opacity: 0, y: 30 }}

          className="fixed bottom-6 left-1/2 z-[9999] w-[92%] max-w-3xl -translate-x-1/2 rounded-3xl border border-cyan-500/30 bg-slate-900 p-6 shadow-2xl"

        >

          <div className="flex items-start gap-4">

            <div className="text-5xl">

              {emoji}

            </div>

            <div>

              <h3 className="text-2xl font-black text-cyan-300">

                Professor Pixel

              </h3>

              <p className="mt-3 text-lg leading-8 text-gray-300">

                {message}

              </p>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}