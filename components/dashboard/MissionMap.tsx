"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const worlds = [
  {
    title: "Computer Hardware",
    icon: "🖥",
    unlocked: true,
  },
  {
    title: "Internet Basics",
    icon: "🌐",
    unlocked: false,
  },
  {
    title: "Coding",
    icon: "💻",
    unlocked: false,
  },
  {
    title: "AI Lab",
    icon: "🤖",
    unlocked: false,
  },
];

export default function MissionMap() {
  return (
    <section className="mt-10">

      <h2 className="mb-8 text-3xl font-black text-white">
        🌍 Mission Map
      </h2>

      <div className="space-y-6">

        {worlds.map((world, index) => (

          <motion.div
            key={world.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className={`flex items-center justify-between rounded-3xl border p-6 ${
              world.unlocked
                ? "border-cyan-500/30 bg-cyan-500/10"
                : "border-white/10 bg-white/5 opacity-60"
            }`}
          >
            <div className="flex items-center gap-5">

              <div className="text-5xl">

                {world.icon}

              </div>

              <div>

                <h3 className="text-2xl font-black text-white">

                  {world.title}

                </h3>

                <p className="text-gray-400">

                  {world.unlocked
                    ? "Ready to Explore"
                    : "Locked"}

                </p>

              </div>

            </div>

            <div className="text-3xl">

  {world.unlocked ? (
    <Link
      href="/academy/lesson"
      className="transition hover:scale-110"
    >
      ➡️
    </Link>
  ) : (
    "🔒"
  )}

</div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}