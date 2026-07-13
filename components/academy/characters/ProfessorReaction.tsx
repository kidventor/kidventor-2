"use client";

import { motion, AnimatePresence } from "framer-motion";

type ProfessorReactionProps = {
  show: boolean;

  correct: boolean;

  message: string;
};

export default function ProfessorReaction({

  show,

  correct,

  message,

}: ProfessorReactionProps) {

  return (

    <AnimatePresence>

      {show && (

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          exit={{
            opacity:0,
            y:30,
          }}

          className="mt-8 rounded-3xl border border-cyan-400 bg-slate-900 p-6 shadow-2xl"

        >

          <div className="flex items-center gap-6">

            <div className="rounded-3xl bg-[#0B2036] p-4">

              <img

                src="/images/characters/professor-pixel.png"

                alt="Professor"

                className="h-36"

              />

            </div>

            <div>

              <h3 className="text-2xl font-black text-cyan-300">

                Professor Pixel

              </h3>

              <p

                className={`mt-4 text-xl font-semibold ${
                  correct
                  ? "text-green-300"
                  : "text-yellow-300"
                }`}

              >

                {message}

              </p>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}