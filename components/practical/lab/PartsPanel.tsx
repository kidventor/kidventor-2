"use client";

import { useEffect, useState } from "react";

import { useRecognitionStore } 
from "@/components/store/recognitionStore";

import { keyboardMission } 
from "@/components/practical/keyboardMission";


export default function PartsPanel() {


  const currentAnswer =
    useRecognitionStore(
      (state) => state.currentAnswer
    );



  const allParts =
    keyboardMission.missions.flatMap(
      (mission) => mission.tasks
    );



  const generateOptions = () => {


    const correctPart =
      allParts.find(
        (part) =>
          part.id === currentAnswer
      );



    const wrongParts =
      allParts
        .filter(
          (part) =>
            part.id !== currentAnswer
        )
        .sort(
          () =>
            Math.random() - 0.5
        )
        .slice(0, 3);



    const options =
      correctPart
        ? [
            correctPart,
            ...wrongParts,
          ]
        : wrongParts;



    return options.sort(
      () =>
        Math.random() - 0.5
    );


  };





  const [parts, setParts] =
    useState(
      generateOptions()
    );





  useEffect(() => {


    setParts(
      generateOptions()
    );


  }, [currentAnswer]);







  return (

    <div
      className="
      h-[620px]
      w-full
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900
      p-3
      "
    >


      <h3
        className="
        text-lg
        font-black
        text-cyan-300
        "
      >
        KEYBOARD PARTS
      </h3>



      <p
        className="
        mt-1
        text-xs
        text-gray-400
        "
      >
        Drag the correct key to the canvas
      </p>





      <div
        className="
        mt-4
        flex
        flex-col
        gap-3
        "
      >



        {parts.map(
          (part) => (


          <div

            key={part.id}


            draggable


            onDragStart={
              (event) => {

                event.dataTransfer.setData(
                  "keyboardKey",
                  part.id
                );

              }
            }



            className="
            group
            flex
            h-24
            cursor-grab
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-500/20
            bg-slate-800
            transition-all
            duration-300
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
            active:cursor-grabbing
            "

          >



            <img

              src={part.image}

              alt={part.title}


              className="
              max-h-20
              max-w-28
              object-contain
              transition
              duration-300
              group-hover:scale-110
              "

            />



          </div>


        ))}


      </div>



    </div>

  );

}