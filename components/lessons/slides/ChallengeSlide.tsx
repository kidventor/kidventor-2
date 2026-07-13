"use client";

import type { Lesson } from "@/types/lesson";
import LessonChallenge from "../LessonChallenge";

type ChallengeSlideProps = {
  lesson: Lesson;
  onCompleted: () => void;
};

export default function ChallengeSlide({
  lesson,
  onCompleted,
}: ChallengeSlideProps) {

  return (

    <LessonChallenge
      lessonId={lesson.id}

      title={lesson.challenge.title}

      instruction={lesson.challenge.instruction}

      questions={lesson.challenge.questions}

      rewardXP={lesson.challenge.rewardXP}

      rewardBadge={lesson.challenge.rewardBadge}

      buttonText={lesson.challenge.buttonText}

      completed={lesson.challenge.completed}

      onCompleted={onCompleted}

    />

  );

}