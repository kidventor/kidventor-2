import { getCompletedLessons } from "./lessonProgress";
import { worldRegistry } from "@/data/academy/worldRegistry";

export function isWorldUnlocked(worldId: string) {
  const world = worldRegistry.find(
    (w) => w.id === worldId
  );

  if (!world) return false;

  // First world is always unlocked
  if (world.id === "hardware") {
    return true;
  }

  if (world.id === "internet") {
    const hardware = worldRegistry.find(
      (w) => w.id === "hardware"
    );

    if (!hardware) return false;

    const completed = getCompletedLessons();

    return hardware.lessonIds.every((lessonId) =>
      completed.includes(lessonId)
    );
  }

  return false;
}