"use client";

import { useStudent } from "@/context/StudentContext";
import { useRecognitionStore } from "@/components/store/recognitionStore";
import { useMissionStore } from "@/components/store/missionStore";
import { keyboardMission } from "@/components/practical/keyboardMission";

import { useMouseStore } from "@/components/store/mouseStore";
import { mouseMission } from "@/components/practical/mouseMission";

import { Keyboard, MousePointerClick, Star, Award } from "lucide-react";

export default function LabHeader() {
  const { xp, badges } = useStudent();

  // --- SOURCE OF TRUTH FROM MISSION STORE ---
  const currentMissionId = useMissionStore((state) => state.currentMission);

  // Determine if we are tracking a keyboard mission or mouse mission based on your store's IDs
  const mouseMissionIds = ["mouse-basics", "mouse-control", "mouse-challenge"];
  const isMouseLab = mouseMissionIds.includes(currentMissionId);

  // --- KEYBOARD LAB DATA ---
  const completedKeyboardTasks = useRecognitionStore((state) => state.completedTasks);
  const activeKeyboardMission = keyboardMission.missions.find(
    (m) => m.id === currentMissionId
  );

  // --- MOUSE LAB DATA ---
  const mouseScore = useMouseStore((state) => state.score);
  const completedMouseTasks = useMouseStore((state) => state.completedTasks);
  const allMouseTasks = mouseMission.missions.flatMap((m) => m.tasks);
  const activeMouseMission = mouseMission.missions.find(
    (m) => m.id === currentMissionId
  );

  // --- DYNAMIC CONTENT ROUTING ---
  const missionTitle = isMouseLab 
    ? (activeMouseMission?.title ?? "Mouse Mastery")
    : (activeKeyboardMission?.title ?? "Keyboard Recognition");

  const totalTasks = isMouseLab 
    ? (activeMouseMission?.tasks?.length || allMouseTasks.length || 10)
    : (activeKeyboardMission?.tasks?.length || 10);

  const currentProgressCount = isMouseLab 
    ? completedMouseTasks.length 
    : completedKeyboardTasks.length;

  const displayScore = isMouseLab ? mouseScore : xp;
  const currentBadge = badges.length > 0 ? badges[badges.length - 1] : (isMouseLab ? "Mouse Explorer" : "Keyboard Explorer");

  return (
    <header 
      className={`sticky top-4 z-40 flex items-center justify-between gap-8 rounded-2xl border bg-slate-950/40 px-8 py-4 backdrop-blur-md transition-all duration-300 ${
        isMouseLab 
          ? "border-purple-500/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.8),0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.5),inset_0_0_15px_rgba(168,85,247,0.15)]"
          : "border-cyan-500/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.8),0_0_15px_rgba(34,211,238,0.15)] hover:border-cyan-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.15)]"
      }`}
    >
      
      {/* LEFT: MISSION IDENTITY */}
      <div className="flex items-center gap-4 pr-8 border-r border-slate-900/80 flex-1">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/30 border transition-all duration-300 ${
          isMouseLab 
            ? "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.25)]" 
            : "border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
        }`}>
          {isMouseLab ? <MousePointerClick className="w-6 h-6 animate-pulse" /> : <Keyboard className="w-6 h-6" />}
        </div>

        <div>
          <p className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${isMouseLab ? "text-purple-400/90" : "text-cyan-400/90"}`}>
            KidVentor Practical Lab
          </p>
          <h1 className="text-xl font-black uppercase tracking-tight text-white mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {missionTitle}
          </h1>
        </div>
      </div>

      {/* MISSION PROGRESS */}
      <div className="flex flex-col gap-2 pr-8 border-r border-slate-900/80 min-w-[220px]">
        <p className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${isMouseLab ? "text-purple-400/90" : "text-cyan-400/90"}`}>
          Mission Progress
        </p>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: totalTasks }).map((_, i) => (
              <div
                key={i}
                className={`h-4 w-3.5 rounded-[3px] transition-all duration-300 ${
                  i < currentProgressCount
                    ? isMouseLab
                      ? "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.65)]"
                      : "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                    : "bg-slate-900/60"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap ml-1">
            <strong className={`font-extrabold transition-colors duration-300 ${isMouseLab ? "text-purple-400" : "text-cyan-400"}`}>{currentProgressCount}</strong> / {totalTasks}
          </span>
        </div>
      </div>

      {/* XP / SCORE EARNED */}
      <div className="flex flex-col gap-1 pr-8 border-r border-slate-900/80 min-w-[100px]">
        <p className={`text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${isMouseLab ? "text-purple-400/90" : "text-cyan-400/90"}`}>
          {isMouseLab ? "Score" : "XP Earned"}
        </p>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <span className="text-xl font-black text-white leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {displayScore || 0}
          </span>
        </div>
      </div>

      {/* BADGE */}
      <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-2.5 min-w-[180px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-950/20 border border-amber-600/40 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Award className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] font-black uppercase tracking-wider text-slate-400/80">
            Badge
          </p>
          <p className="text-xs font-bold text-white tracking-wide">
            {currentBadge}
          </p>
        </div>
      </div>

    </header>
  );
}