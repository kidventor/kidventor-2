"use client";

import { motion } from "framer-motion";

type ByteSpeechProps = {
  speech: string;
};

export default function ByteSpeech({
  speech,
}: ByteSpeechProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-8">

        <div className="flex flex-col gap-8 lg:flex-row-reverse">

          {/* Byte */}

          <div className="flex w-full justify-center lg:w-56">

            <img
              src="/images/characters/byte.png"
              alt="Byte"
              className="h-[220px] w-auto object-contain"
            />

          </div>

          {/* Speech */}

          <div className="flex-1">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
              🤖 BYTE
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