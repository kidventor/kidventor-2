"use client";

import { useMissionStore } from "@/components/store/missionStore";
import { useRecognitionStore } from "@/components/store/recognitionStore";
import { keyboardMission } from "@/components/practical/keyboardMission";


export default function MissionSelector() {


  const currentMission =
    useMissionStore(
      (state) => state.currentMission
    );


  const completedMissions =
    useMissionStore(
      (state) => state.completedMissions
    );


  const completedTasks =
    useRecognitionStore(
      (state) => state.completedTasks
    );



  const mission =
    keyboardMission.missions.find(
      (item) =>
        item.id === currentMission
    );



  if (!mission) return null;



  const progress =
    completedTasks.length;



  const total =
    mission.tasks.length;



  return (

    <div
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900
      p-4
      "
    >


      <h3 className="text-lg font-black text-cyan-300">
        ⌨️ CURRENT MISSION
      </h3>



      <h2 className="mt-3 text-2xl font-black text-white">
        {mission.title}
      </h2>



      <p className="mt-2 text-sm text-gray-400">
        {mission.description}
      </p>



      <div className="mt-5">


        <div className="flex justify-between text-sm">

          <span className="text-gray-300">
            Progress
          </span>


          <span className="font-bold text-cyan-300">
            {progress}/{total}
          </span>


        </div>



        <div
          className="
          mt-2
          h-3
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
            duration-500
            "
            style={{
              width:
              `${(progress / total) * 100}%`
            }}
          />

        </div>


      </div>




      {
        completedMissions.length > 0 && (

          <p className="mt-4 text-xs text-green-400">

            ✅ Completed Missions:
            {" "}
            {completedMissions.length}

          </p>

        )
      }



    </div>

  );

}