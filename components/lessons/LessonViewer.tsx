"use client";

import { useEffect, useState } from "react";

import LessonHeader from "./LessonHeader";
import LessonObjectives from "./LessonObjectives";
import LessonContent from "./LessonContent";
import LessonChallenge from "./LessonChallenge";
import LessonProgress from "./LessonProgress";

import MissionComplete from "@/components/celebration/MissionComplete";
import MissionTransition from "@/components/transition/MissionTransition";

import { getNextLesson } from "@/data/academy/lessonRegistry";

import type { Lesson } from "@/types/lesson";
import MissionIntro from "./MissionIntro";
import ProfessorSpeech from "@/components/academy/characters/ProfessorSpeech";
import ByteSpeech from "@/components/academy/characters/ByteSpeech";
import FunFactCard from "@/components/academy/cards/FunFactCard";
import VocabularyCard from "@/components/academy/cards/VocabularyCard";

import MissionSlideEngine from "./MissionSlideEngine";

import ObjectivesSlide from "./slides/ObjectivesSlide";
import ByteSlide from "./slides/ByteSlide";
import FunFactSlide from "./slides/FunFactSlide";
import VocabularySlide from "./slides/VocabularySlide";
import LessonContentSlide from "./slides/LessonContentSlide";
import ChallengeSlide from "./slides/ChallengeSlide";
type LessonViewerProps = {
  lesson: Lesson;
  onNextLesson: () => void;
};

export default function LessonViewer({
  lesson,
  onNextLesson,
}: LessonViewerProps) {

  const [currentSection, setCurrentSection] = useState(0);

  const [missionComplete, setMissionComplete] =
    useState(false);

  const [loadingNextMission, setLoadingNextMission] =
    useState(false);

    const [missionSlide, setMissionSlide] = useState(0);

const [totalMissionSlides, setTotalMissionSlides] = useState(0);

  const [missionStarted, setMissionStarted] = useState(false);

  const nextLesson = getNextLesson(lesson.id);

  const slides = [

  <ObjectivesSlide
    key="objectives"
    objectives={lesson.objectives}
    speech={lesson.professor.speech}
  />,

  <ByteSlide
    key="byte"
    speech={lesson.byte.speech}
  />,

  <FunFactSlide
    key="funfact"
    fact={lesson.funFact.fact}
  />,

  <VocabularySlide
    key="vocabulary"
    words={lesson.vocabulary.words}
  />,

  ...lesson.content.map((item) => (

    <LessonContentSlide
      key={item.id}
      content={item}
    />

  )),

  <ChallengeSlide
    key="challenge"
    lesson={lesson}
    onCompleted={() => {
      setMissionComplete(true);
    }}
  />,



];

  useEffect(() => {
    if (!missionComplete) return;

    const section = document.getElementById(
      "mission-complete"
    );

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }, [missionComplete]);

  // Reset viewer whenever a new lesson arrives
  useEffect(() => {

    setCurrentSection(0);

    setMissionComplete(false);

    setLoadingNextMission(false);
    setMissionStarted(false);

  }, [lesson.id]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {!missionStarted ? (
  <MissionIntro
    missionNumber="MISSION 001"
    title={lesson.title}
    story={`Professor Pixel needs your help! In this mission you'll discover the important parts of a computer and help rebuild his digital laboratory.`}
    objectives={lesson.objectives}
    onStart={() => setMissionStarted(true)}
  />
) : (
  <>

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

  <MissionSlideEngine
  slides={slides}
  onSlideChange={(current, total) => {
    setMissionSlide(current);
    setTotalMissionSlides(total);
  }}
/>

      {/*<LessonContent
        content={lesson.content}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />*/}

 

      <MissionComplete
        show={missionComplete}
        lessonTitle={lesson.title}
        xp={lesson.challenge.rewardXP}
        badge={lesson.challenge.rewardBadge}
        progress={50}
        nextLessonTitle={nextLesson?.title}
        onContinue={() => {

          if (!nextLesson) return;

          setLoadingNextMission(true);

          setTimeout(() => {

            onNextLesson();

          }, 1800);

        }}
      />

      <MissionTransition
        show={loadingNextMission}
        nextLesson={nextLesson?.title ?? ""}
      />

        </>
)}

    </div>
  );
}