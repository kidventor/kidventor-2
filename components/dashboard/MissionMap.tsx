"use client";

import { motion } from "framer-motion";
import { worldRegistry } from "@/data/academy/worldRegistry";
import { isWorldUnlocked } from "@/lib/worldProgress";
import { useRouter } from "next/navigation";
import { openLesson } from "@/lib/navigationEngine";
import { lessonRegistry } from "@/data/academy/lessonRegistry";
export default function MissionMap() {
  const router = useRouter();
  return (
    <section className="mt-10">
      <h2 className="mb-8 text-3xl font-black text-white">
        🌍 Mission Map
      </h2>

      <div className="space-y-6">
        {worldRegistry.map((world, index) => {
          const unlocked = isWorldUnlocked(world.id);

          return (
            <motion.div
  key={world.id}
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: index * 0.15,
  }}
  onClick={() => {
    if (!unlocked) return;

    const firstLesson = lessonRegistry.find((lesson) =>
      world.lessonIds.includes(lesson.id)
    );

    if (!firstLesson) return;

    openLesson(firstLesson.id);

    router.push("/academy/lesson");
  }}
  className={`flex cursor-pointer items-center justify-between rounded-3xl border p-6 transition-all ${
    unlocked
      ? "border-cyan-500/30 bg-cyan-500/10 hover:border-cyan-400 hover:bg-cyan-500/20"
      : "border-white/10 bg-white/5 opacity-60 cursor-not-allowed"
  }`}
>
              <div className="flex items-center gap-5">
                <div className="text-5xl">
                  {world.emoji}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {world.title}
                  </h3>

                  <p className="text-gray-400">
                    {world.description}
                  </p>

                  <p className="mt-2 text-sm text-cyan-300">
                    {world.lessonIds.length} Lesson
                    {world.lessonIds.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="text-3xl">
                {unlocked ? "➡️" : "🔒"}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}