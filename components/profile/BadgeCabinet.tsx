"use client";

import { achievements } from "@/lib/achievements";

export default function BadgeCabinet() {
  return (
    <section className="mt-10">

      <h2 className="mb-6 text-3xl font-black text-white">
        🏆 Achievement Cabinet
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {achievements.map((badge) => (

          <div
            key={badge.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >

            <div className="text-5xl">

              {badge.icon}

            </div>

            <h3 className="mt-4 text-xl font-black text-white">

              {badge.title}

            </h3>

            <p className="mt-3 text-gray-400">

              {badge.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}