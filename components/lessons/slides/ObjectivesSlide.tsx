"use client";

import LessonObjectives from "../LessonObjectives";
import ProfessorSpeech from "@/components/academy/characters/ProfessorSpeech";

type ObjectivesSlideProps = {
  objectives: string[];
  speech: string;
};

export default function ObjectivesSlide({
  objectives,
  speech,
}: ObjectivesSlideProps) {
  return (
    <div className="space-y-8">

      <LessonObjectives
        objectives={objectives}
      />

      <ProfessorSpeech
        speech={speech}
      />

    </div>
  );
}