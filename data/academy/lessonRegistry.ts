import { partsOfComputerLesson } from "./hardware/parts-of-a-computer";
import { keyboardLesson } from "./hardware/keyboardLesson";

export const lessonRegistry = [
    partsOfComputerLesson,
    keyboardLesson,
];

export function getLesson(id: string) {
  return lessonRegistry.find(
    (lesson) => lesson.id === id
  );
}

export function getNextLesson(currentLessonId: string) {
  const index = lessonRegistry.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  if (index === -1) return null;

  return lessonRegistry[index + 1] ?? null;
}

export function getPreviousLesson(currentLessonId: string) {
  const index = lessonRegistry.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  if (index <= 0) return null;

  return lessonRegistry[index - 1] ?? null;
}