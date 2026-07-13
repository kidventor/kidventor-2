"use client";

import { useMissionStore } from "@/components/store/missionStore";


const missionRoadmap = [

  {
    id: "basic-keys",
    title: "Spacebar Valley",
    icon: "⌨️",
    description:
      "Discover important keyboard keys.",
  },


  {
    id: "modifier-keys",
    title: "Shortcut Mountain",
    icon: "⚡",
    description:
      "Master Shift, Ctrl, Alt and Windows keys.",
  },


  {
    id: "function-keys",
    title: "Function Forest",
    icon: "🌲",
    description:
      "Explore powerful F1 to F12 keys.",
  },


  {
    id: "special-characters",
    title: "Symbol Cave",
    icon: "💎",
    description:
      "Unlock computer symbols.",
  },

];




export default function MissionJourney() {


  const currentMission =
    useMissionStore(
      (state) => state.currentMission
    );


  const completedMissions =
    useMissionStore(
      (state) => state.completedMissions
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
      border-cyan-500/20
      bg-slate-900/80
      p-5
      shadow-2xl
      backdrop-blur-xl
      "
    >


      <div className="mb-5 text-center">


        <h2
          className="
          text-2xl
          font-black
          text-cyan-300
          "
        >
          🧭 Keyboard Adventure
        </h2>


        <p className="mt-1 text-sm text-gray-400">
          Complete missions to unlock new skills.
        </p>


      </div>





      <div className="space-y-5">


        {
          missionRoadmap.map(
            (mission, index) => {


              const completed =
                completedMissions.includes(
                  mission.id
                );



              const active =
                currentMission === mission.id
                &&
                !completed;



              const hiddenFuture =
                index >
                currentIndex + 1;





              return (

                <div

                  key={mission.id}

                  className={`
relative
overflow-hidden
rounded-3xl
border
p-5
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl

${
  active
  ?
  `
  border-cyan-400
  bg-cyan-500/10
  shadow-[0_0_25px_rgba(34,211,238,.25)]
  `
  :
  completed
  ?
  `
  border-green-400
  bg-green-500/10
  `
  :
  `
  border-slate-700
  bg-slate-800
  `
}

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
                      shadow-lg
                      "
                    >


                      {
                        completed

                        ?

                        "✅"


                        :


                        hiddenFuture

                        ?

                        "🔒"


                        :

                        mission.icon

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


                        {
                          hiddenFuture

                          ?

                          "Mystery Mission"

                          :

                          mission.title

                        }


                      </h3>





                      <p
                        className="
                        mt-1
                        text-sm
                        text-gray-400
                        "
                      >


                        {
                          active

                          ?

                          mission.description


                          :

                          completed

                          ?

                          "Mission Complete ⭐"


                          :

                          "Complete previous mission to unlock"

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
                        bg-cyan-400/10
                        px-3
                        py-2
                        text-center
                        text-xs
                        font-bold
                        text-cyan-300
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