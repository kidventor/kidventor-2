"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfessorAssistant() {

  const [miniMode, setMiniMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMiniMode(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {!miniMode ? (

        <motion.div
          initial={{ x: 250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-0 right-8 z-40"
        >

          <img
            src="/images/professor/professor-full.png"
            alt="Professor Pixel"
            className="h-[520px]"
          />

        </motion.div>

      ) : (

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 z-40"
        >

          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-cyan-400 bg-slate-900 shadow-2xl">

            <img
              src="/images/professor/professor-face.png"
              alt="Professor Pixel"
              className="h-24 w-24 rounded-full object-cover"
            />

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}