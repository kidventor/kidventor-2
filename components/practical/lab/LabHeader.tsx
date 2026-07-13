"use client";

import { useStudent } from "@/context/StudentContext";
import { useRecognitionStore } from "@/components/store/recognitionStore";
import { useMissionStore } from "@/components/store/missionStore";
import { keyboardMission } from "@/components/practical/keyboardMission";


export default function LabHeader() {


  const {
    xp,
    badges,
  } = useStudent();



  const completedTasks =
    useRecognitionStore(
      (state) => state.completedTasks
    );



  const currentMission =
    useMissionStore(
      (state) => state.currentMission
    );



  const activeMission =
    keyboardMission.missions.find(
      (mission) =>
        mission.id === currentMission
    );



  const totalTasks =
    activeMission?.tasks.length ?? 1;



  const missionProgress =
    Math.min(
      (completedTasks.length / totalTasks) * 100,
      100
    );



  const currentBadge =
    badges.length > 0
      ? badges[badges.length - 1]
      : "Rookie";



  return (

    <header
      className="
      sticky
      top-4
      z-40
      flex
      items-center
      justify-between
      gap-6
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900/90
      px-6
      py-4
      shadow-[0_0_30px_rgba(34,211,238,.15)]
      backdrop-blur-xl
      "
    >


      {/* LEFT: MISSION IDENTITY */}

      <div className="flex items-center gap-4">


        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/20
          text-4xl
          "
        >
          ⌨️
        </div>



        <div>


          <p
            className="
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-cyan-400
            "
          >
            KidVentor Practical Lab
          </p>



          <h1
            className="
            text-3xl
            font-black
            text-white
            "
          >
            {activeMission?.title ?? "Keyboard Mastery"}
          </h1>



          <p
            className="
            text-sm
            text-gray-400
            "
          >
            Level 1 • Practical Challenge
          </p>


        </div>


      </div>







      {/* MISSION PROGRESS */}

      <div
        className="
        w-44
        rounded-2xl
        border
        border-cyan-500/20
        bg-slate-800
        px-4
        py-3
        "
      >


        <div
          className="
          flex
          justify-between
          "
        >

          <p
            className="
            text-xs
            font-bold
            text-cyan-400
            "
          >
            MISSION PROGRESS
          </p>


          <p
            className="
            text-xs
            font-bold
            text-white
            "
          >
            {completedTasks.length}/{totalTasks}
          </p>


        </div>




        <div
          className="
          mt-2
          h-2
          overflow-hidden
          rounded-full
          bg-slate-700
          "
        >

          <div
            className="
            h-full
            rounded-full
            bg-cyan-400
            transition-all
            duration-700
            "
            style={{
              width: `${missionProgress}%`,
            }}
          />

        </div>


      </div>








      {/* XP */}

      <div
        className="
        rounded-2xl
        border
        border-yellow-500/20
        bg-slate-800
        px-5
        py-3
        text-center
        "
      >

        <p
          className="
          text-xs
          text-yellow-400
          "
        >
          ⭐ XP EARNED
        </p>



        <p
          className="
          text-2xl
          font-black
          text-white
          "
        >
          {xp}
        </p>


      </div>








      {/* BADGE */}

      <div
        className="
        rounded-2xl
        border
        border-orange-500/20
        bg-slate-800
        px-5
        py-3
        text-center
        "
      >


        <p
          className="
          text-xs
          text-orange-400
          "
        >
          🏆 BADGE
        </p>



        <p
          className="
          text-sm
          font-black
          text-white
          "
        >
          {currentBadge}
        </p>


      </div>



    </header>

  );

}