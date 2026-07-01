"use client";

import { useState } from "react";

import LessonHeader from "./LessonHeader";
import LessonObjectives from "./LessonObjectives";
import LessonContent from "./LessonContent";
import LessonChallenge from "./LessonChallenge";
import LessonSummary from "./LessonSummary";
import LessonNavigation from "./LessonNavigation";
import LessonProgress from "./LessonProgress";

type Lesson = {
  id: string;

  emoji: string;
  title: string;
  difficulty: string;
  duration: string;

  objectives: string[];

  content: {
    id: string;
    heading: string;
    body: string;
    tip: string;
    image?: string;
    activity?: string;
  }[];

  challenge: {
    id: string;
    title: string;
    instruction: string;
    type: string;
    rewardXP: number;
    rewardBadge: string;
    buttonText: string;
    completed: boolean;
  };
};

type LessonViewerProps = {
  lesson: Lesson;
};

export default function LessonViewer({
  lesson,
}: LessonViewerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <LessonProgress
  current={currentSection + 1}
  total={lesson.content.length}
/>

      <LessonHeader
        emoji={lesson.emoji}
        title={lesson.title}
        difficulty={lesson.difficulty}
        duration={lesson.duration}
      />

      <LessonObjectives
        objectives={lesson.objectives}
      />

      <LessonContent
  content={lesson.content}
  currentSection={currentSection}
  setCurrentSection={setCurrentSection}
/>

      <LessonChallenge
  lessonId={lesson.id}
  title={lesson.challenge.title}
  instruction={lesson.challenge.instruction}
  type={lesson.challenge.type}
  rewardXP={lesson.challenge.rewardXP}
  rewardBadge={lesson.challenge.rewardBadge}
  buttonText={lesson.challenge.buttonText}
  completed={lesson.challenge.completed}
/>

      <LessonSummary
        title={lesson.title}
      />

      <LessonNavigation
        previous=""
        next="Computer Hardware"
      />

    </div>
  );
}