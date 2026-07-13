"use client";

import { useEffect } from "react";
import { useRecognitionStore } from "@/components/store/recognitionStore";


export default function DropCanvas() {


  const selectedAnswer =
    useRecognitionStore(
      (state) => state.selectedAnswer
    );


  const selectAnswer =
    useRecognitionStore(
      (state) => state.selectAnswer
    );


  const celebrating =
    useRecognitionStore(
      (state) => state.celebrating
    );


  const startNewMission =
    useRecognitionStore(
      (state) => state.startNewMission
    );



  useEffect(() => {

    if (!celebrating) return;


    const timer =
      setTimeout(() => {

        startNewMission();

      }, 3000);


    return () =>
      clearTimeout(timer);


  }, [
    celebrating,
    startNewMission
  ]);





  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();


    const keyId =
      e.dataTransfer.getData(
        "keyboardKey"
      );


    if (keyId) {

      selectAnswer(keyId);

    }

  };





  const images: Record<string,string> = {


    spacebar:
      "/images/keyboard/spacebar.webp",


    enter:
      "/images/keyboard/enter.webp",


    shift:
      "/images/keyboard/shift.webp",


    capslock:
      "/images/keyboard/caps-lock.webp",


    "caps-lock":
      "/images/keyboard/caps-lock.webp",


    backspace:
      "/images/keyboard/backspace.webp",


    tab:
      "/images/keyboard/tab.webp",


    "ctrl-key":
      "/images/keyboard/ctrl.webp",


    "alt-key":
      "/images/keyboard/alt.webp",


    "windows-key":
      "/images/keyboard/windows.webp",


    "arrow-keys":
      "/images/keyboard/arrow-keys.webp",


    "escape-key":
      "/images/keyboard/esc-key.webp",


    f1:
      "/images/keyboard/f1.webp",


    f2:
      "/images/keyboard/f2.webp",


    f3:
      "/images/keyboard/f3.webp",

  };





  const selectedImage =
    selectedAnswer
      ? images[selectedAnswer]
      : null;





  return (

    <div
      className="
      h-[500px]
      w-full
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900
      p-4
      "
    >


      <h3 className="text-xl font-black text-cyan-300">
        CANVAS (DROP HERE)
      </h3>



      <div

        onDragOver={(e)=>
          e.preventDefault()
        }


        onDrop={handleDrop}


        className={`
        mt-3
        flex
        h-[420px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        p-4
        transition-all

        ${
          celebrating
          ?
          "border-green-400 bg-green-500/10"
          :
          "border-cyan-500 bg-slate-950/40"
        }

        `}
      >



        <div className="text-6xl animate-bounce">
          ⬇️
        </div>



        {
          selectedImage ? (

            <img
              src={selectedImage}
              alt={selectedAnswer ?? ""}
              className="
              mt-3
              h-28
              object-contain
              animate-bounce
              "
            />

          ) : (

            <img
              src="/images/keyboard/keyboard-outline.webp"
              alt="Keyboard Outline"
              className="
              mt-3
              h-28
              object-contain
              opacity-40
              "
            />

          )
        }



        <h3 className="
        mt-4
        text-2xl
        font-black
        ">

        {
          celebrating
          ?
          "🎉 Mission Complete!"

          :
          selectedAnswer
          ?
          "Checking your answer..."

          :
          "Drag the correct key here"
        }

        </h3>



        <p className="mt-2 text-sm text-gray-400">

        {
          selectedAnswer
          ?
          `Selected: ${selectedAnswer}`
          :
          "Waiting for your answer..."
        }

        </p>



      </div>


    </div>

  );

}