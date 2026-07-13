import {
  lessonRegistry,
  getNextLesson,
} from "@/data/academy/lessonRegistry";

import {
  getCurrentLesson,
} from "./lessonProgress";

const STORAGE_KEY = "kidventor-current-lesson";

/**
 * Save the lesson the learner should open next.
 */
export function openLesson(lessonId: string) {
  localStorage.setItem(STORAGE_KEY, lessonId);
}

/**
 * Returns only the lesson ID.
 */
export function getResumeLessonId(): string {
  return (
    localStorage.getItem(STORAGE_KEY) ??
    lessonRegistry[0].id
  );
}

/**
 * Returns the complete lesson object.
 */
export function getResumeLesson() {
  const lessonId = getResumeLessonId();

  return (
    lessonRegistry.find(
      lesson => lesson.id === lessonId
    ) ?? lessonRegistry[0]
  );
}

/**
 * Returns the next lesson object.
 */
export function getNextLessonToOpen(
  currentLessonId: string
) {
  return getNextLesson(currentLessonId);
}

/**
 * If no lesson has been opened before,
 * initialize navigation from progress.
 */
export function initializeNavigation() {
  if (localStorage.getItem(STORAGE_KEY)) return;

  const current = getCurrentLesson();

  if (current) {
    localStorage.setItem(STORAGE_KEY, current);
  } else {
    localStorage.setItem(
      STORAGE_KEY,
      lessonRegistry[0].id
    );
  }
}