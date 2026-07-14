"use client";


import MissionJourney 
from "@/components/practical/missions/MissionJourney";



type Props = {

  completed: boolean;

  onEnter: () => void;

};



export default function KeyboardMissionCard({

  completed,

  onEnter,

}: Props) {


  return (

    <div

      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/40
      bg-slate-900
      p-5
      shadow-[0_20px_50px_rgba(34,211,238,.15)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-300
      "

    >



      <div

        className="
        absolute
        right-0
        top-0
        h-24
        w-24
        rounded-full
        bg-cyan-400/20
        blur-3xl
        "

      />





      <h2

        className="
        text-2xl
        font-black
        text-white
        "

      >

        ⌨️ Keyboard Galaxy

      </h2>





      <p

        className="
        mt-2
        text-sm
        text-gray-400
        "

      >

        Master keyboard skills through interactive challenges.

      </p>







      <div

        className="
        mt-4
        rounded-2xl
        border
        border-cyan-500/20
        bg-slate-950
        p-3
        "

      >

        <MissionJourney />

      </div>







      <div

        className="
        mt-4
        inline-flex
        rounded-full
        bg-cyan-400/20
        px-4
        py-2
        text-xs
        font-black
        text-cyan-300
        "

      >

        🟢 ACTIVE TRAINING

      </div>







      {
        completed

        ?

        (

        <button

          onClick={onEnter}

          className="
          mt-5
          w-full
          rounded-xl
          border
          border-cyan-400/40
          bg-slate-800
          px-5
          py-3
          font-black
          text-cyan-300
          transition
          hover:scale-105
          "

        >

          🔄 Replay Keyboard Mission

        </button>

        )


        :


        (

        <button

          onClick={onEnter}

          className="
          mt-5
          w-full
          rounded-xl
          bg-cyan-400
          px-5
          py-3
          font-black
          text-black
          transition
          hover:scale-105
          "

        >

          🚀 Enter Keyboard Lab

        </button>

        )


      }




    </div>

  );

}