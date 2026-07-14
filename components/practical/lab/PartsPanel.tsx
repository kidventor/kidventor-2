"use client";

import { useEffect, useState } from "react";
import { useRecognitionStore } from "@/components/store/recognitionStore";
import { keyboardMission } from "@/components/practical/keyboardMission";
import { Layers } from "lucide-react";

export default function PartsPanel() {
  const currentAnswer = useRecognitionStore((state) => state.currentAnswer);

  const allParts = keyboardMission.missions.flatMap((mission) => mission.tasks);

  const generateOptions = () => {
    const correctPart = allParts.find((part) => part.id === currentAnswer);
    const wrongParts = allParts
      .filter((part) => part.id !== currentAnswer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = correctPart ? [correctPart, ...wrongParts] : wrongParts;
    return options.sort(() => Math.random() - 0.5);
  };

  const [parts, setParts] = useState(generateOptions());

  useEffect(() => {
    setParts(generateOptions());
  }, [currentAnswer]);

  return (
    /* Height matches DropCanvas exactly at 500px, horizontal padding slimmed down to pl-2 to stretch container width left */
    <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/40 pb-5 pt-5 pr-5 pl-2 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 ml-3">
        <Layers className="w-5 h-5 text-cyan-400" />
        <h3 className="text-sm font-black uppercase tracking-wider text-cyan-300">
          Keyboard Parts
        </h3>
      </div>
      
      <p className="mt-1 text-xs font-medium text-slate-400 ml-3">
        Drag the correct key to the canvas
      </p>

      {/* Reverted to a single vertical flex column layout with tighter padding configurations */}
      <div className="mt-5 flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1 pl-3">
        {parts.map((part) => (
          <div
            key={part.id}
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData("keyboardKey", part.id);
            }}
            className="group flex h-[84px] w-full cursor-grab items-center justify-center rounded-xl border border-slate-800 bg-slate-950/30 transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500/50 hover:bg-slate-900/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] active:cursor-grabbing"
          >
            <img
              src={part.image}
              alt={part.title}
              className="max-h-16 max-w-24 object-contain transition duration-300 group-hover:scale-105 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}