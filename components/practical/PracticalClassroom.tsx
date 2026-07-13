"use client";

import ProfessorGuide from "./ProfessorGuide";
import MissionBoard from "./MissionBoard";

import { useState } from "react";
import KeyboardRecognition from "./missions/KeyboardRecognition/KeyboardRecognition";

export default function PracticalClassroom() {

  const [currentMission, setCurrentMission] =
  useState<"board" | "keyboard">("board");
  return (
    <section className="mt-12 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">

        <ProfessorGuide />

      <h2 className="text-center text-4xl font-black text-cyan-300">
        🧪 Practical Classroom
      </h2>

      <p className="mt-4 text-center text-lg text-gray-300">
        Welcome to the KidVentor Practical Classroom.
      </p>

      <p className="mt-2 text-center text-gray-400">
        Here you will complete hands-on digital technology missions.
      </p>

      {currentMission === "board" ? (
  <MissionBoard
    onOpenKeyboard={() => setCurrentMission("keyboard")}
  />
) : (
  <div className="fixed inset-0 z-50 bg-slate-950">

    <KeyboardRecognition
      onBack={() => setCurrentMission("board")}
    />

  </div>
)}

    </section>
  );
}