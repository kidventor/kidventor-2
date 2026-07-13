"use client";

import DropCanvas from "./DropCanvas";
import PartsPanel from "./PartsPanel";
import { useRecognitionStore } from "@/components/store/recognitionStore";


export default function MissionPanel() {


  const currentAnswer =
    useRecognitionStore(
      (state) => state.currentAnswer
    );


  const completed =
    useRecognitionStore(
      (state) => state.completed
    );



  const title =
    currentAnswer.toUpperCase();



  return (
    <section className="w-full space-y-4">

 
      {/* Mission Brief */}

      <div
        className="
        rounded-3xl
        border border-cyan-500/20
        bg-slate-900
        p-4
        "
      >

        <p className="text-xs font-black uppercase tracking-wider text-cyan-400">
          Today's Mission
        </p>


        <h2 className="mt-2 text-3xl font-black text-white">

          {
            completed
            ? "MISSION COMPLETE 🎉"
            :
            <>
              Find the{" "}
              <span className="text-yellow-400">
                {title}
              </span>
            </>
          }

        </h2>


        <p className="mt-2 text-sm text-gray-300">
          Select the correct keyboard key and place it on the mission canvas.
        </p>


      </div>



      {/* Mission Workspace */}

      <div
        className="
        grid
        h-[500px]
        w-full
        items-stretch
        gap-4
        lg:grid-cols-[280px_minmax(0,1fr)]
        "
      >


        <aside className="h-full overflow-hidden">

          <PartsPanel />

        </aside>



        <main
          className="
          h-full
          min-w-0
          overflow-hidden
          "
        >

          <DropCanvas />
         

        </main>


      </div>


    </section>
  );
}