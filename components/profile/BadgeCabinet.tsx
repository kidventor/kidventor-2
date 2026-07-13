"use client";

import { achievements } from "@/lib/achievements";
import { useStudent } from "@/context/StudentContext";

export default function BadgeCabinet() {
  const student = useStudent();

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-3xl font-black text-white">
        🏆 Achievement Cabinet
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((badge) => {
          const unlocked = student.badges.includes(badge.title);

          return (
            <div
              key={badge.id}
              className={`rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 ${
                unlocked
                  ? "border-yellow-400 bg-yellow-500/10"
                  : "border-white/10 bg-white/5 opacity-50"
              }`}
            >
              <div className="text-5xl">
                {unlocked ? badge.icon : "🔒"}
              </div>

              <h3 className="mt-4 text-xl font-black text-white">
                {badge.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {badge.description}
              </p>

              <p
                className={`mt-4 font-bold ${
                  unlocked
                    ? "text-yellow-300"
                    : "text-gray-500"
                }`}
              >
                {unlocked ? "Unlocked" : "Locked"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}