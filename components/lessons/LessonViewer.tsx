"use client";

import LessonHeader from "./LessonHeader";
import LessonObjectives from "./LessonObjectives";
import LessonContent from "./LessonContent";
type Lesson = {
  emoji: string;
  title: string;
  difficulty: string;
  duration: string;
  objectives: string[];
};

type LessonViewerProps = {
  lesson: Lesson;
};

export default function LessonViewer({
  lesson,
}: LessonViewerProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <LessonHeader
        emoji={lesson.emoji}
        title={lesson.title}
        difficulty={lesson.difficulty}
        duration={lesson.duration}
      />

      <LessonObjectives
        objectives={lesson.objectives}
      />

    </div>
  );
}