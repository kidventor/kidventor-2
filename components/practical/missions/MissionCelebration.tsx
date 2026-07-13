"use client";

import { useRecognitionStore } from "@/components/store/recognitionStore";


export default function MissionCelebration() {


  const celebrating =
    useRecognitionStore(
      (state) => state.celebrating
    );


  const score =
    useRecognitionStore(
      (state) => state.score
    );



  if (!celebrating) return null;



  return (

    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/60
      backdrop-blur-sm
      "
    >


      <div
        className="
        w-[90%]
        max-w-md
        rounded-3xl
        border
        border-yellow-400/40
        bg-slate-900
        p-8
        text-center
        shadow-[0_0_60px_rgba(250,204,21,.25)]
        animate-bounce
        "
      >



        <div className="text-7xl">
          🎉
        </div>



        <h1
          className="
          mt-4
          text-3xl
          font-black
          text-yellow-300
          "
        >
          Mission Complete!
        </h1>



        <p
          className="
          mt-3
          text-lg
          font-bold
          text-white
          "
        >
          ⌨️ Keyboard Explorer
        </p>




        <div
          className="
          mt-6
          rounded-2xl
          bg-slate-800
          p-4
          "
        >

          <p className="text-yellow-400 font-black">
            ⭐ Reward Earned
          </p>


          <p
            className="
            mt-2
            text-2xl
            font-black
            text-white
            "
          >
            +{score} XP
          </p>


        </div>




        <div
          className="
          mt-5
          rounded-2xl
          border
          border-cyan-400/30
          bg-cyan-400/10
          p-4
          "
        >

          🏆

          <p className="mt-2 font-black text-cyan-300">
            Keyboard Rookie Badge
          </p>


        </div>




        <p
          className="
          mt-5
          animate-pulse
          text-sm
          text-gray-400
          "
        >
          Unlocking next adventure...
        </p>


      </div>


    </div>

  );

}