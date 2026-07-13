"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type MissionIntroProps = {
  missionNumber: string;
  title: string;
  story: string;
  objectives: string[];
  onStart: () => void;
};

export default function MissionIntro({
  missionNumber,
  title,
  story,
  objectives,
  onStart,
}: MissionIntroProps) {

  const WAIT_TIME = 8;

const [secondsLeft, setSecondsLeft] =
  useState(WAIT_TIME);

const [canStart, setCanStart] =
  useState(false);

useEffect(() => {
  const timer = setInterval(() => {
    setSecondsLeft((prev) => {

      if (prev <= 1) {
        clearInterval(timer);
        setCanStart(true);
        return 0;
      }

      return prev - 1;

    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 p-8 shadow-2xl"
    >
      <div className="text-center">

       <div className="space-y-4">

  <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
    🛰 HARDWARE WORLD
  </p>
  

  <p className="text-lg font-bold text-yellow-300">
    {missionNumber} • Mission 1 of 12
  </p>

  <div className="h-3 overflow-hidden rounded-full bg-white/10">

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "8%" }}
      transition={{ duration: 1 }}
      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
    />

  </div>

  <p className="text-sm text-gray-400">
    Hardware World Progress • 8%
  </p>

</div>

        <h1 className="mt-3 text-5xl font-black text-white">
          {title}
        </h1>

      </div>

     
      {/* Hero Illustration */}

<div className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/30">

  <img
    src="/images/missions/hardware-world.png"
    alt="Hardware World"
    className="w-full object-cover"
  />

</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="mt-8 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6"
>

  <div className="flex items-start gap-5">

   <motion.div
  animate={{
    y: [0, -8, 0],
    rotate: [0, -2, 2, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-4xl shadow-lg"
>
  👨‍🔬
</motion.div>

    <div className="flex-1">

  <p className="mb-3 font-black text-yellow-300">
    👨‍🔬 Professor Pixel
  </p>

  <div className="relative rounded-3xl bg-white p-6 text-slate-800 shadow-xl">

    {/* Speech Bubble Tail */}

    <div className="absolute -left-3 top-8 h-6 w-6 rotate-45 bg-white"></div>

    <p className="text-lg font-semibold leading-8">

      Hello Explorer! 👋

      <br /><br />

      My laboratory computer has completely fallen apart.

      Every computer part is mixed together.

      <br /><br />

      I need your help to identify every part before Byte accidentally puts everything in the wrong place!

      <br /><br />

      <span className="font-black text-cyan-700">

        Let's learn together and become a real Computer Explorer!

      </span>

    </p>

  </div>

</div>


  </div>
{/* Byte Reply */}

<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.7,
  }}
  className="mt-6 flex justify-end"
>

  <div className="flex max-w-xl items-start gap-4">

    <div className="relative rounded-3xl bg-cyan-500 p-5 text-white shadow-xl">

      {/* Speech Tail */}

      <div className="absolute -right-2 top-8 h-5 w-5 rotate-45 bg-cyan-500"></div>

      <p className="font-black">
        🤖 Byte
      </p>

      <p className="mt-3 leading-8">

        Wait...

        <br /><br />

        Is the keyboard the one people use for eating lunch?

        🍽️😂

      </p>

    </div>

    <motion.div
      animate={{
        rotate: [-6, 6, -6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-4xl shadow-lg"
    >
      🤖
    </motion.div>

  </div>

</motion.div>
</motion.div>

      {/* Story */}
      <div className="mt-10 rounded-3xl bg-white/5 p-6">

        <h2 className="text-2xl font-black text-yellow-300">
          📖 Mission Story
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          {story}
        </p>

      </div>

      {/* Objectives */}
      <div className="mt-8 rounded-3xl bg-cyan-500/10 p-6">

  <h2 className="text-2xl font-black text-cyan-300">
    🎯 Mission Objectives
  </h2>

  <div className="mt-6 grid gap-5 md:grid-cols-2">

    {objectives.map((objective, index) => (

      <motion.div
        key={objective}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15,
        }}
        className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 shadow-lg"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-2xl">
            🎯
          </div>

          <div>

            <p className="text-sm uppercase tracking-wider text-cyan-300">
              Objective
            </p>

            <h3 className="text-lg font-bold text-white">
              {objective}
            </h3>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</div>

      {/* Start Button */}
      <div className="mt-10 flex justify-center">

  <button
    disabled={!canStart}
    onClick={onStart}
    className={`rounded-2xl px-10 py-5 text-xl font-black transition-all duration-300 ${
      canStart
        ? "bg-yellow-400 text-black hover:scale-105 hover:bg-yellow-300"
        : "cursor-not-allowed bg-gray-600 text-gray-300 opacity-70"
    }`}
  >
    {canStart
      ? "🚀 Start Mission"
      : `📖 Read Mission... ${secondsLeft}s`}
  </button>

</div>

    </motion.section>
  );
}