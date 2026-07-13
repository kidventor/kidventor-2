"use client";

import { motion, AnimatePresence } from "framer-motion";

type MissionTransitionProps = {
  show: boolean;
  nextLesson: string;
};

export default function MissionTransition({
  show,
  nextLesson,
}: MissionTransitionProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
        >
          <motion.div
            initial={{ scale: 0.8, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="text-8xl"
            >
              🚀
            </motion.div>

            <h2 className="mt-8 text-4xl font-black text-cyan-300">
              Loading Next Mission...
            </h2>

            <p className="mt-5 text-2xl text-white">
              {nextLesson}
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "260px" }}
              transition={{ duration: 1.8 }}
              className="mx-auto mt-10 h-3 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}