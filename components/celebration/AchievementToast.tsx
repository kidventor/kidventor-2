"use client";

import { motion, AnimatePresence } from "framer-motion";

type AchievementToastProps = {
  show: boolean;
  title: string;
  description: string;
};

export default function AchievementToast({
  show,
  title,
  description,
}: AchievementToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 120,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed right-6 top-6 z-[9999] w-80 rounded-3xl border border-yellow-400/30 bg-[#111827] p-5 shadow-2xl"
        >
          <div className="flex items-start gap-4">

            <div className="text-4xl">
              🏆
            </div>

            <div>

              <p className="font-black text-yellow-300">
                Achievement Unlocked
              </p>

              <h3 className="mt-1 text-xl font-black text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {description}
              </p>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}