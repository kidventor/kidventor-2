"use client";

import { motion } from "framer-motion";
import { homeRowMission } from "@/data/academy/hardware/home-row-mission";
import Link from "next/link";

export default function MissionControl() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8"
    >
      <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
        Today's Mission
      </p>

      <h2 className="mt-3 text-4xl font-black text-white">
       {homeRowMission.title}
      </h2>

      <p className="mt-4 text-gray-300">
        Complete today's mission to earn XP and unlock your next badge.
      </p>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <div className="rounded-xl bg-white/5 px-5 py-3 text-yellow-300">
          ⭐ +100 XP
        </div>

        <div className="rounded-xl bg-white/5 px-5 py-3 text-purple-300">
          🏆 Hardware Explorer
        </div>

        <div className="rounded-xl bg-white/5 px-5 py-3 text-green-300">
          ⏱ 8 Minutes
        </div>

      </div>

      <Link
  href="/academy/lesson"
  className="mt-8 inline-block rounded-2xl bg-cyan-500 px-8 py-4 font-black text-white transition hover:bg-cyan-400"
>
  Continue Mission →
</Link>
    </motion.section>
  );
}