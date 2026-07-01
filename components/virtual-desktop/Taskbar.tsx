"use client";

import StartButton from "./StartButton";
import Clock from "./Clock";

export default function Taskbar() {
  return (
    <div className="flex h-16 items-center justify-between bg-black/40 px-6 backdrop-blur-xl">

      <StartButton />

      <Clock />

    </div>
  );
}