"use client";

import { useMissionStore } from "@/components/store/missionStore";
import { mouseMission } from "@/components/practical/mouseMission";

export default function MouseMissionJourney() {

  const currentMission =
    useMissionStore(
      (state) => state.currentMission
    );

  const completedMissions =
    useMissionStore(
      (state) => state.completedMissions
    );

  const missionRoadmap =
    mouseMission.missions.map(
      (mission, index) => ({

        id: mission.id,

        title: mission.title,

        icon:
          [
            "🖱️",
            "🎯",
            "✨",
            "🏆",
          ][index],

        description:
          mission.description,

      })
    );

  const currentIndex =
    missionRoadmap.findIndex(
      (mission) =>
        mission.id === currentMission
    );

  return (

    <section
      className="
      mx-auto
      w-full
      max-w-md
      rounded-3xl
      border
      border-purple-500/20
      bg-slate-900/80
      p-5
      shadow-xl
      "
    >

      <div className="mb-5 text-center">

        <h2
          className="
          text-2xl
          font-black
          text-purple-300
          "
        >
          🖱️ Mouse Adventure
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Master every mouse skill to become a Mouse Expert.
        </p>

      </div>

      <div className="space-y-5">

        {
          missionRoadmap.map(
            (mission,index)=>{

              const completed =
                completedMissions.includes(
                  mission.id
                );

              const active =
                currentMission === mission.id &&
                !completed;

              const locked =
                index > currentIndex;

              let cardStyle =
                "border-slate-700 bg-slate-800";

              if(active){

                cardStyle =
                "border-purple-400 bg-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,.25)]";

              }

              if(completed){

                cardStyle =
                "border-green-400 bg-green-500/10";

              }

              return (

                <div
                  key={mission.id}
                  className={`
                  rounded-3xl
                  border
                  p-5
                  transition-all
                  duration-300
                  ${cardStyle}
                  `}
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-950
                      text-4xl
                      "
                    >

                      {
                        completed
                        ? "✅"
                        : locked
                        ? "🔒"
                        : mission.icon
                      }

                    </div>

                    <div>

                      <h3
                        className="
                        text-lg
                        font-black
                        text-white
                        "
                      >
                        {mission.title}
                      </h3>

                      <p
                        className="
                        mt-1
                        text-sm
                        text-gray-400
                        "
                      >

                        {
                          completed
                          ? "Mission Complete ⭐"
                          : locked
                          ? "Complete previous mission to unlock"
                          : mission.description
                        }

                      </p>

                    </div>

                  </div>

                  {
                    active && (

                      <div
                        className="
                        mt-4
                        rounded-xl
                        bg-purple-400/10
                        px-3
                        py-2
                        text-center
                        text-xs
                        font-bold
                        text-purple-300
                        animate-pulse
                        "
                      >

                        🟢 CURRENT MISSION

                      </div>

                    )
                  }

                </div>

              );

            }
          )
        }

      </div>

    </section>

  );

}