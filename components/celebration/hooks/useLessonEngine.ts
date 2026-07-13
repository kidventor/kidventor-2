"use client";

import { useState } from "react";
import { Lesson } from "@/types/lesson";
import { getNextLesson } from "@/data/academy/lessonRegistry";

export function useLessonEngine(initialLesson: Lesson) {
  const [lesson, setLesson] = useState(initialLesson);

  function goToNextLesson() {
    const next = getNextLesson(lesson.id);

    if (!next) return false;

    setLesson(next);

    return true;
  }

  return {
    lesson,
    setLesson,
    goToNextLesson,
  };
}