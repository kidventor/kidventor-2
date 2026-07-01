const STORAGE_KEY = "kidventor-current-lesson";

export function saveCurrentLesson(lessonId: string) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, lessonId);
}

export function getCurrentLesson() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem(STORAGE_KEY);
}

export function clearCurrentLesson() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}

const COMPLETED_KEY = "kidventor-completed-lessons";

export function completeLesson(lessonId: string) {
  if (typeof window === "undefined") return;

  const completed = getCompletedLessons();

  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
  }

  localStorage.setItem(
    COMPLETED_KEY,
    JSON.stringify(completed)
  );
}

export function getCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(COMPLETED_KEY);

  return data ? JSON.parse(data) : [];
}

export function isLessonCompleted(lessonId: string) {
  return getCompletedLessons().includes(lessonId);
}