import {
  completeLesson,
  isLessonCompleted,
} from "./lessonProgress";

import { addXP } from "./xp";
import { unlockBadge } from "./badges";

import { openLesson } from "./navigationEngine";

import {
  getNextLesson,
} from "@/data/academy/lessonRegistry";

type CompleteLessonOptions = {
  lessonId: string;
  rewardXP: number;
};

export type LessonCompletionResult = {
  completed: boolean;
  xpAwarded: boolean;
  totalXP: number | null;

  badgeUnlocked: string | null;

  worldUnlocked: string | null;

  levelUp: boolean;

  nextLessonId: string | null;
};

export function completeLessonPipeline({
  lessonId,
  rewardXP,
}: CompleteLessonOptions): LessonCompletionResult {

  console.log("========== LESSON PIPELINE ==========");

  console.log("Lesson:", lessonId);

  // Prevent duplicate rewards
  if (isLessonCompleted(lessonId)) {

    console.log("Lesson already completed.");

    return {
      completed: true,
      xpAwarded: false,
      totalXP: null,
      badgeUnlocked: null,
      worldUnlocked: null,
      levelUp: false,
      nextLessonId: null,
    };
  }

  // Save completed lesson
  completeLesson(lessonId);

  console.log("Lesson saved.");

  // Award XP
  const totalXP = addXP(rewardXP);

  console.log("XP Awarded:", rewardXP);
  console.log("Total XP:", totalXP);

  // Unlock badge
  unlockBadge("Hardware Explorer");

  console.log("Badge unlocked.");

  // Determine next lesson
  const nextLesson = getNextLesson(lessonId);

  if (nextLesson) {

    console.log("Next Lesson:", nextLesson.id);

    // Save next lesson for LessonPage
    openLesson(nextLesson.id);

  } else {

    console.log("No next lesson found.");

  }

  console.log("========== PIPELINE COMPLETE ==========");

  return {

    completed: true,

    xpAwarded: true,

    totalXP,

    badgeUnlocked: "Hardware Explorer",

    worldUnlocked: null,

    levelUp: false,

    nextLessonId: nextLesson?.id ?? null,

  };
}