"use client";

import { motion } from "framer-motion";

type FunFactCardProps = {
  fact: string;
};

export default function FunFactCard({
  fact,
}: FunFactCardProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="mt-8"
    >
      <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-6 shadow-lg">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-3xl">

            💡

          </div>

          <div>

            <h3 className="text-2xl font-black text-yellow-300">

              Did You Know?

            </h3>

            <p className="mt-3 text-lg leading-8 text-gray-200">

              {fact}

            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}