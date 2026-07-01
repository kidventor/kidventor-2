"use client";

type MissionCardProps = {
  title: string;
  story: string;
  xp: number;
};

export default function MissionCard({
  title,
  story,
  xp,
}: MissionCardProps) {
  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 shadow-xl">

      {/* Mission Badge */}

      <div className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300">

        🎯 Mission

      </div>

      {/* Title */}

      <h2 className="mt-6 text-3xl font-black text-white">

        {title}

      </h2>

      {/* Story */}

      <p className="mt-5 text-lg leading-8 text-gray-300">

        {story}

      </p>

      {/* Reward */}

      <div className="mt-8 inline-flex rounded-full bg-yellow-500/20 px-5 py-3 font-bold text-yellow-300">

        ⭐ Reward: {xp} XP

      </div>

      {/* Start Button */}

      <button
        className="mt-10 block rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-400"
      >
        ▶ Start Mission
      </button>

    </section>
  );
}