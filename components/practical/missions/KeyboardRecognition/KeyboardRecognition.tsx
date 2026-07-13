"use client";

import { useEffect } from "react";

import LabHeader from "../../lab/LabHeader";
import ProfessorController from "../../lab/ProfessorController";
import MissionPanel from "../../lab/MissionPanel";
import MissionStatus from "../../lab/MissionStatus";

import MissionFlow from "../../lab/MissionFlow";
import MotivationBanner from "../../lab/MotivationBanner";
import MissionCelebration from "@/components/practical/missions/MissionCelebration";

import { useRecognitionStore } from "@/components/store/recognitionStore";


type Props = {
  onBack: () => void;
};



export default function KeyboardRecognition({
  onBack,
}: Props) {


  const completed =
    useRecognitionStore(
      (state) => state.completed
    );



  useEffect(() => {


    if (!completed) return;



    const timer =
      setTimeout(() => {


        onBack();


      }, 3500);



    return () =>
      clearTimeout(timer);



  }, [
    completed,
    onBack
  ]);





  return (

   <section
   className="
   min-h-screen
   w-full
   bg-gradient-to-br
   from-slate-950
   via-slate-900
   to-slate-950
   px-3
   py-6
   "
   >


  <LabHeader
    onBack={onBack}
  />



  <div className="mt-8 w-full">


    <div
      className="
      grid
      w-full
      gap-6
      lg:grid-cols-[260px_minmax(0,1fr)_260px]
      "
    >


      <div>

        <ProfessorController />

      </div>




      <div>

        <MissionPanel />

      </div>




      <div>

        <MissionStatus />

      </div>



    </div>





    <div
      className="
      mt-3
      grid
      gap-4
      lg:grid-cols-2
      "
    >

      <MissionFlow />


      <MotivationBanner />


    </div>



  </div>




  <MissionCelebration />



</section>

  );

}