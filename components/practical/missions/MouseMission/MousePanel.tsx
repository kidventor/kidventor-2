"use client";

import { useMouseStore } from "@/components/store/mouseStore";
import { mouseMission } from "@/components/practical/mouseMission";
import { MousePointer, CheckCircle2, Star } from "lucide-react";

export default function MousePanel() {
  const currentTask = useMouseStore((state) => state.currentTask);
  const score = useMouseStore((state) => state.score);
  const completedTasks = useMouseStore((state) => state.completedTasks);
  const completed = useMouseStore((state) => state.completed);

  const allTasks = mouseMission.missions.flatMap((mission) => mission.tasks);
  const task = allTasks.find((item) => item.id === currentTask);
  const missionName = mouseMission.missions.find((mission) =>
    mission.tasks.some((item) => item.id === currentTask)
  );

  return (
    <div className="mt-6 rounded-2xl border border-purple-500/20 bg-slate-950/40 p-6 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)]">
      
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <MousePointer className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-black uppercase tracking-wider text-purple-400">
          Mouse Control Panel
        </h3>
      </div>

      {completed ? (
        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-6 text-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          <p className="text-4xl animate-bounce">🎉</p>
          <h4 className="mt-3 text-base font-black tracking-wide text-emerald-400 uppercase">
            Mouse Training Complete!
          </h4>
          <p className="text-xs text-slate-400 mt-1">Excellent precision skills locked in.</p>
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-slate-900 bg-slate-950/30 p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Current Stage
              </p>
              <h5 className="text-xs font-black text-purple-300 uppercase tracking-wide mt-0.5">
                {missionName?.title || "Operational Objectives"}
              </h5>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase tracking-wider">
              Active Task
            </span>
          </div>

          <div className="mt-5 border-t border-slate-900 pt-4">
            <h4 className="text-lg font-black tracking-tight text-amber-400">
              {task?.title ?? "Loading System..."}
            </h4>
            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-medium">
              {task?.instruction}
            </p>
          </div>
        </div>
      )}

      {/* QUICK STATUS STATS */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-between rounded-xl border border-slate-900 bg-slate-950/20 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-cyan-400/20 text-cyan-400" />
            <span className="text-xs font-bold text-slate-400">Score</span>
          </div>
          <span className="text-base font-black text-cyan-400 tracking-tight">
            {score}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-900 bg-slate-950/20 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-slate-400">Progress</span>
          </div>
          <span className="text-sm font-black text-emerald-400 tracking-tight">
            {completedTasks.length} <span className="text-slate-600 font-medium">/</span> {allTasks.length}
          </span>
        </div>
      </div>

    </div>
  );
}