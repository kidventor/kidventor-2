"use client";

import { motion } from "framer-motion";

type Props = {
  onPower: () => void;
};

export default function PowerScreen({
  onPower,
}: Props) {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[450px] flex-col items-center justify-center"
    >

      <div className="text-8xl">

        🖥

      </div>

      <h2 className="mt-8 text-4xl font-black text-white">

        Virtual Computer

      </h2>

      <p className="mt-4 text-gray-400">

        Press the power button to start.

      </p>

      <button
        onClick={onPower}
        className="mt-10 rounded-full bg-cyan-500 p-6 text-3xl transition hover:scale-110 hover:bg-cyan-400"
      >
        ⏻
      </button>

    </motion.div>

  );

}