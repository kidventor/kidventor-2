"use client";

import { useEffect } from "react";

import LessonViewer from "@/components/lessons/LessonViewer";

import { partsOfComputerLesson } from "@/data/academy/hardware/parts-of-a-computer";

import { saveCurrentLesson } from "@/lib/lessonProgress";

export default function LessonPage() {
  useEffect(() => {
  saveCurrentLesson(partsOfComputerLesson.id);
}, []);
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <LessonViewer lesson={partsOfComputerLesson} />

    </main>
  );
}