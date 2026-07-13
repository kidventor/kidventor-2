"use client";

import { motion, AnimatePresence } from "framer-motion";

type SuccessPanelProps = {
  show: boolean;
  title?: string;
  message?: string;
};

export default function SuccessPanel({
  show,
  title = "Mission Complete!",
  message = "Excellent work, Explorer!",
}: SuccessPanelProps) {
  return (
    <AnimatePresence>

      {show && (

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
          transition={{
            duration: 0.35,
          }}
          className="mt-8 rounded-3xl border border-green-500/30 bg-green-500/10 p-8 text-center"
        >

          <div className="text-6xl">
            🎉
          </div>

          <h2 className="mt-4 text-3xl font-black text-green-300">
            {title}
          </h2>

          <p className="mt-3 text-lg text-green-100">
            {message}
          </p>

        </motion.div>

      )}

    </AnimatePresence>
  );
}