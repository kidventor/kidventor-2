import {
  completeLesson,
  isLessonCompleted,
} from "./lessonProgress";

import { addXP } from "./xp";

type CompleteLessonOptions = {
  lessonId: string;
  rewardXP: number;
};

export function completeLessonPipeline({
  lessonId,
  rewardXP,
}: CompleteLessonOptions) {

  console.log("STEP 1:", lessonId, rewardXP);

  if (isLessonCompleted(lessonId)) {

    console.log("STEP 2: Already completed");

    return {
      completed: true,
      xpAwarded: false,
      totalXP: null,
    };
  }

  console.log("STEP 3: Saving lesson");

  completeLesson(lessonId);

  console.log("STEP 4: Adding XP");

  const totalXP = addXP(rewardXP);

  console.log("STEP 5: XP =", totalXP);

  return {
    completed: true,
    xpAwarded: true,
    totalXP,
  };
}