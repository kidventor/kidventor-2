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

    <section
      className="
      flex
      h-full
      w-full
      flex-col
      "
    >

      {/* Compact Mission Header */}

  <div
  className="
  mb-3
  flex
  w-[70%]
  items-center
  justify-between
  rounded-2xl
  border
  border-cyan-500/20
  bg-slate-900
  px-5
  py-3
  "
>

        <div>

          <p
            className="
            text-xs
            font-black
            uppercase
            tracking-widest
            text-cyan-400
            "
          >
            Current Objective
          </p>

          <h2
            className="
            mt-1
            text-xl
            font-black
            text-white
            "
          >
            {
              completed
                ? "🎉 Mission Complete!"
                : (
                  <>
                    Find the{" "}
                    <span className="text-yellow-400">
                      {title}
                    </span>
                  </>
                )
            }
          </h2>

        </div>

        <div
          className="
          rounded-xl
          bg-cyan-500/10
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-cyan-300
          "
        >
          Drag → Drop → Learn
        </div>

      </div>

      {/* Workspace */}

      <div
        className="
        grid
        flex-1
        gap-4
        lg:grid-cols-[250px_minmax(0,1fr)]
        "
      >

        <aside
          className="
          h-full
          "
        >
          <PartsPanel />
        </aside>

        <main
          className="
          h-full
          min-w-0
          "
        >
          <DropCanvas />
        </main>

      </div>

    </section>

  );

}