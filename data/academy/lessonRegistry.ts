import { partsOfComputerLesson } from "./hardware/parts-of-a-computer";

export const lessonRegistry = [
  partsOfComputerLesson,
];

export function getLessonById(id: string) {
  return lessonRegistry.find((lesson) => lesson.id === id);
}