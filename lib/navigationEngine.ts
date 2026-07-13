import {
  lessonRegistry,
  getNextLesson,
} from "@/data/academy/lessonRegistry";

const STORAGE_KEY = "kidventor-current-lesson";

/**
 * Save the current lesson to localStorage.
 */
export function openLesson(lessonId: string) {
  localStorage.setItem(STORAGE_KEY, lessonId);
}

/**
 * Returns the saved lesson id.
 */
export function getResumeLessonId(): string {
  return (
    localStorage.getItem(STORAGE_KEY) ??
    lessonRegistry[0].id
  );
}

/**
 * Initialize lesson navigation.
 */
export function initializeNavigation() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(
      STORAGE_KEY,
      lessonRegistry[0].id
    );
  }
}

/**
 * Returns the next lesson object.
 */
export function getNextLessonToOpen(currentLessonId: string) {
  return getNextLesson(currentLessonId);
}