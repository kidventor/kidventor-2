"use client";

import {
  useMouseStore
} from "@/components/store/mouseStore";

import {
  mouseMission
} from "@/components/practical/mouseMission";


export default function MousePanel() {


  const currentTask =
    useMouseStore(
      (state) => state.currentTask
    );


  const score =
    useMouseStore(
      (state) => state.score
    );


  const completedTasks =
    useMouseStore(
      (state) => state.completedTasks
    );



  const allTasks =
    mouseMission.missions.flatMap(
      (mission) =>
        mission.tasks
    );



  const task =
    allTasks.find(
      (item) =>
        item.id === currentTask
    );



  return (

    <div
      className="
      mt-6
      rounded-3xl
      border
      border-purple-500/30
      bg-slate-900
      p-5
      "
    >



      <h3
        className="
        text-xl
        font-black
        text-purple-300
        "
      >

        🖱 Mouse Mission

      </h3>




      <div
        className="
        mt-5
        rounded-2xl
        bg-slate-800
        p-4
        "
      >


        <p
          className="
          text-xs
          uppercase
          text-gray-400
          "
        >

          Current Task

        </p>



        <h4
          className="
          mt-2
          text-xl
          font-black
          text-yellow-400
          "
        >

          {task?.title ?? "Loading..."}

        </h4>



        <p
          className="
          mt-3
          text-sm
          text-gray-300
          "
        >

          {task?.instruction}

        </p>


      </div>





      <div
        className="
        mt-5
        grid
        grid-cols-2
        gap-3
        "
      >


        <div
          className="
          rounded-xl
          bg-slate-800
          p-3
          text-center
          "
        >

          ⭐ Score

          <br/>

          <span
          className="
          font-black
          text-cyan-300
          "
          >
            {score}
          </span>

        </div>





        <div
          className="
          rounded-xl
          bg-slate-800
          p-3
          text-center
          "
        >

          ✅ Done

          <br/>

          <span
          className="
          font-black
          text-green-400
          "
          >

            {completedTasks.length}

          </span>


        </div>



      </div>



    </div>

  );

}