"use client";

import LabHeader from "../../lab/LabHeader";
import ProfessorController from "../../lab/ProfessorController";
import MissionStatus from "../../lab/MissionStatus";

import MouseCanvas from "./MouseCanvas";
import MousePanel from "./MousePanel";

import MissionFlow from "../../lab/MissionFlow";
import MotivationBanner from "../../lab/MotivationBanner";


type Props = {
  onBack: () => void;
};



export default function MouseArena({
  onBack,
}: Props) {


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


      <LabHeader
        onBack={onBack}
      />



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