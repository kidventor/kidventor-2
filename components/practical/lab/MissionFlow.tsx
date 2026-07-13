"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "😊",
    title: "Welcome",
    status: "active",
  },
  {
    icon: "⌨️",
    title: "Keyboard",
    status: "locked",
  },
  {
    icon: "⭐",
    title: "Complete",
    status: "locked",
  },
  {
    icon: "🏆",
    title: "Reward",
    status: "locked",
  },
  {
    icon: "🔓",
    title: "Next Mission",
    status: "locked",
  },
];

export default function MissionFlow() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-3 shadow-lg">

      <h3 className="mb-3 text-lg font-black text-cyan-300">
        🚀 Mission Journey
      </h3>


      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">

        {steps.map((step, index) => (

          <div
            key={step.title}
            className="flex items-center"
          >

            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center"
            >

              <div
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-full text-lg transition-all

                  ${
                    step.status === "active"
                    ? 
                    "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,.7)]"
                    :
                    "bg-slate-800 text-gray-400"
                  }
                `}
              >

                {step.icon}

              </div>


              <span className="mt-1 whitespace-nowrap text-[11px] font-bold text-gray-300">
                {step.title}
              </span>


            </motion.div>


            {index < steps.length - 1 && (

              <div className="mx-2 text-sm text-cyan-500/40">
                ➜
              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}