"use client";

import { motion } from "framer-motion";

type Props = {
  emoji: string;
  title: string;
};

export default function DesktopIcon({
  emoji,
  title,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex w-28 flex-col items-center gap-3 rounded-2xl p-4 transition hover:bg-white/10"
    >
      <div className="text-6xl">

        {emoji}

      </div>

      <span className="font-bold text-white">

        {title}

      </span>

    </motion.button>
  );
}