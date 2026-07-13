"use client";

import { motion } from "framer-motion";

export default function MotivationBanner() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}

      className="
      rounded-2xl
      border border-yellow-500/20
      bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
      p-3
      shadow-lg
      "
    >

      <div className="flex items-center justify-between gap-3">

        <div>

          <h3 className="text-lg font-black text-yellow-400">
            ⭐ Keep Going, Explorer!
          </h3>


          <p className="mt-1 text-xs text-gray-300">
            Complete missions and unlock new skills.
          </p>


        </div>


        <motion.div

          animate={{
            y: [0, -5, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="text-2xl"

        >
          🚀
        </motion.div>


      </div>


    </motion.div>

  );
}