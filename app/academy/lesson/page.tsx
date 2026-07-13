"use client";

import { useEffect, useState } from "react";

import LessonViewer from "@/components/lessons/LessonViewer";

import {
  getLesson,
  lessonRegistry,
  getNextLesson,
} from "@/data/academy/lessonRegistry";

import {
  getResumeLessonId,
  initializeNavigation,
  openLesson,
} from "@/lib/navigationEngine";

import type { Lesson } from "@/types/lesson";

export default function LessonPage() {

  const [lesson, setLesson] = useState<Lesson>(
    lessonRegistry[0]
  );

  useEffect(() => {

    initializeNavigation();

    const lessonId = getResumeLessonId();

    const currentLesson = getLesson(lessonId);

    if (currentLesson) {
      setLesson(currentLesson);
    }

  }, []);

  function handleNextLesson() {

    const nextLesson = getNextLesson(lesson.id);

    if (!nextLesson) return;

    openLesson(nextLesson.id);

    setLesson(nextLesson);

  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <LessonViewer
        lesson={lesson}
        onNextLesson={handleNextLesson}
      />

    </main>
  );
}