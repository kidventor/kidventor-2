"use client";

import { motion } from "framer-motion";

import { useMissionStore } from "@/components/store/missionStore";

import { useRecognitionStore } from "@/components/store/recognitionStore";

import { useMouseStore } from "@/components/store/mouseStore";

import { keyboardMission } from "@/components/practical/keyboardMission";

import { mouseMission } from "@/components/practical/mouseMission";



export default function MotivationBanner() {


  const currentMission =
    useMissionStore(
      (state) =>
        state.currentMission
    );



  const keyboardCompleted =
    useRecognitionStore(
      (state) =>
        state.completedTasks.length
    );



  const mouseCompleted =
    useMouseStore(
      (state) =>
        state.completedTasks.length
    );




  const isMouse =
    currentMission.startsWith("mouse");



  const missionName =
    isMouse
    ? "🖱 Mouse Adventure"
    : "⌨ Keyboard Adventure";



  const progress =
    isMouse
    ? mouseCompleted
    : keyboardCompleted;



  const total =
    isMouse
    ? mouseMission.missions.flatMap(
        (mission)=>mission.tasks
      ).length
    : keyboardMission.missions.flatMap(
        (mission)=>mission.tasks
      ).length;



  return (

    <motion.div

      initial={{
        opacity:0,
        y:10,
      }}

      animate={{
        opacity:1,
        y:0,
      }}


      className="
      rounded-2xl
      border
      border-yellow-500/20
      bg-gradient-to-r
      from-slate-900
      via-slate-800
      to-slate-900
      p-3
      shadow-lg
      "

    >



      <div
      className="
      flex
      items-center
      justify-between
      gap-3
      "
      >



        <div>


          <h3
          className="
          text-lg
          font-black
          text-yellow-400
          "
          >

            ⭐ {missionName}


          </h3>



          <p
          className="
          mt-1
          text-xs
          text-gray-300
          "
          >

            Progress:
            {" "}
            {progress}
            /
            {total}

            {" • "}

            Keep exploring and unlock new skills.

          </p>



        </div>





        <motion.div

          animate={{
            y:[0,-5,0],
          }}

          transition={{
            duration:2,
            repeat:Infinity,
          }}

          className="text-2xl"

        >

          🚀

        </motion.div>




      </div>



    </motion.div>

  );

}