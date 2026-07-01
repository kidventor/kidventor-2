"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  emoji: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function DesktopWindow({
  title,
  emoji,
  onClose,
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      className="absolute left-1/2 top-12 z-20 w-[90%] max-w-4xl -translate-x-1/2 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0b132b] shadow-2xl"
    >
      {/* Title Bar */}

      <div className="flex items-center justify-between bg-cyan-500 px-6 py-4">

        <h2 className="text-xl font-black text-white">

          {emoji} {title}

        </h2>

        <button
          onClick={onClose}
          className="rounded-lg bg-red-500 px-4 py-1 font-bold text-white hover:bg-red-400"
        >
          ✕
        </button>

      </div>

      {/* Window */}

      <div className="p-8">

        {children}

      </div>

    </motion.div>
  );
}