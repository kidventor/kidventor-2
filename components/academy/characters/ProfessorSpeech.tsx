"use client";

import { motion } from "framer-motion";

type ProfessorSpeechProps = {
  title?: string;
  speech: string;
};

export default function ProfessorSpeech({
  title = "Professor Pixel",
  speech,
}: ProfessorSpeechProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="mt-10"
    >
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8">

        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Professor */}

          <div className="flex w-full justify-center lg:w-56">

            <img
              src="/images/characters/professor-pixel.png"
              alt="Professor Pixel"
              className="h-[240px] w-auto object-contain"
            />

          </div>

          {/* Speech */}

          <div className="flex-1">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">

              {title}

            </p>

            <div className="mt-4 rounded-3xl bg-white/5 p-6">

              <p className="text-xl leading-9 text-gray-200">

                {speech}

              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}