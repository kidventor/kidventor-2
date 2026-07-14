"use client";

import { useMissionStore } from "@/components/store/missionStore";

import { useRecognitionStore } from "@/components/store/recognitionStore";

import { useMouseStore } from "@/components/store/mouseStore";

import { keyboardMission } from "@/components/practical/keyboardMission";

import { mouseMission } from "@/components/practical/mouseMission";



export default function MissionStatus() {


  type MissionTask = {
  id: string;
  title: string;
  instruction?: string;
  xp?: number;
  image?: string;
  type?: string;
};

  const currentMission =
    useMissionStore(
      (state) =>
        state.currentMission
    );



  const keyboardTask =
    useRecognitionStore(
      (state) =>
        state.currentAnswer
    );



  const mouseTask =
    useMouseStore(
      (state) =>
        state.currentTask
    );



  const isMouse =
    currentMission.startsWith("mouse");




 const allKeyboardTasks =
  keyboardMission.missions.flatMap(
    (mission) =>
      mission.tasks
  ) as MissionTask[];



  const allMouseTasks =
  mouseMission.missions.flatMap(
    (mission) =>
      mission.tasks
  ) as MissionTask[];





  const activeTask =
    isMouse

    ?

    allMouseTasks.find(
      (task)=>
        task.id === mouseTask
    )

    :

    allKeyboardTasks.find(
      (task)=>
        task.id === keyboardTask
    );






  const missionTitle =
    isMouse

    ?

    "🖱 Mouse Arena"

    :

    "⌨️ Keyboard Galaxy";





  return (

    <aside className="space-y-6">



      {/* Current Mission */}

      <div
        className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-slate-900
        p-6
        "
      >


        <p
          className="
          text-sm
          font-black
          uppercase
          tracking-wider
          text-cyan-400
          "
        >

          Current Mission

        </p>





        <h3
          className="
          mt-4
          text-3xl
          font-black
          text-white
          "
        >

          {missionTitle}

        </h3>





        <p
          className="
          mt-4
          text-xl
          font-bold
          text-yellow-400
          "
        >

          🎯 {activeTask?.title ?? "Loading..."}

        </p>




      <p
  className="
  mt-4
  text-gray-300
  "
>
  {activeTask?.instruction ??
    "Identify and complete this keyboard challenge."}
</p>




<p
  className="
  mt-4
  text-xl
  font-bold
  text-yellow-400
  "
>
  ⭐ +{activeTask?.xp ?? 20} XP
</p>


      </div>







      {/* Next Mission */}

      <div
        className="
        rounded-3xl
        border
        border-purple-500/30
        bg-slate-900
        p-6
        "
      >


        <p
          className="
          text-sm
          font-black
          uppercase
          tracking-wider
          text-purple-400
          "
        >

          Adventure

        </p>



        <h3
          className="
          mt-4
          text-2xl
          font-black
          text-white
          "
        >

          {currentMission}

        </h3>



        <p
          className="
          mt-4
          leading-7
          text-gray-400
          "
        >

          Keep completing challenges to unlock new adventures.

        </p>


      </div>







      {/* Hint */}

      <div
        className="
        rounded-3xl
        border
        border-cyan-500/20
        bg-slate-900
        p-6
        "
      >


        <p
          className="
          text-xl
          font-black
          text-cyan-300
          "
        >

          💡 Tip

        </p>



       <p
  className="
  mt-4
  leading-8
  text-gray-300
  "
>
  {activeTask?.instruction ??
    "Follow the professor's instructions."}
</p>

      </div>



    </aside>

  );

}