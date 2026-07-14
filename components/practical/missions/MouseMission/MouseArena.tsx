"use client";


import {
  useEffect,
  useState
} from "react";


import LabHeader from "../../lab/LabHeader";

import ProfessorController from "../../lab/ProfessorController";

import MissionStatus from "../../lab/MissionStatus";


import MouseCanvas from "./MouseCanvas";

import MousePanel from "./MousePanel";


import MissionFlow from "../../lab/MissionFlow";

import MotivationBanner from "../../lab/MotivationBanner";


import {
  useMouseStore
} from "@/components/store/mouseStore";


import {
  useProfessorStore
} from "@/components/store/professorStore";




type Props = {

  onBack: () => void;

};







export default function MouseArena({

  onBack,

}:Props) {



  const completed =
    useMouseStore(
      (state)=>state.completed
    );

    const speak =
useProfessorStore(
  (state)=>state.speak
);



  const [finished,setFinished] =
    useState(false);






  useEffect(()=>{


    if(completed){



      setFinished(true);



      useProfessorStore
      .getState()
      speak(

        "🎉 Congratulations!\n\nYou have mastered mouse control!"

      );





      const timer =
        setTimeout(()=>{


          onBack();


        },3000);




      return ()=>clearTimeout(timer);


    }



  },[completed,onBack, speak]);









  return (



    <section

    className="
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-slate-900
    to-slate-950
    p-6
    "

    >





      <LabHeader />






      {

      finished &&


      <div

      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/70
      "

      >



        <div

        className="
        rounded-3xl
        border
        border-purple-400/40
        bg-slate-900
        p-10
        text-center
        shadow-2xl
        "

        >


          <h2

          className="
          text-4xl
          font-black
          text-purple-300
          "

          >

          🖱️ Mouse Master Completed!

          </h2>



          <p

          className="
          mt-4
          text-xl
          text-gray-300
          "

          >

          Mouse Explorer badge unlocked 🎖️

          </p>



        </div>


      </div>


      }









      <div

      className="
      mx-auto
      mt-8
      max-w-7xl
      "

      >








        <div

        className="
        grid
        gap-6
        lg:grid-cols-[320px_minmax(500px,1fr)_300px]
        "

        >






          {/* Professor */}

          <div>

            <ProfessorController />

          </div>









          {/* Mouse Arena */}

          <main>

            <MouseCanvas />

          </main>









          {/* Status */}

          <aside>


            <MissionStatus />


            <MousePanel />


          </aside>








        </div>









        <div

        className="
        mt-6
        grid
        gap-6
        lg:grid-cols-2
        "

        >



          <MissionFlow />



          <MotivationBanner />



        </div>








      </div>





    </section>


  );

}