"use client";

import { useState } from "react";

import {
  useMouseStore,
} from "@/components/store/mouseStore";



export default function MouseCanvas() {


  const completeAction =
    useMouseStore(
      (state) => state.completeAction
    );


  const currentTask =
    useMouseStore(
      (state) => state.currentTask
    );


  const completed =
    useMouseStore(
      (state) => state.completed
    );



  const [hits, setHits] =
    useState(0);



  function complete(task:string) {


    if (completed)
      return;


    setHits(
      (value) => value + 1
    );


    completeAction(task);

  }





  function renderChallenge() {


    switch(currentTask) {


      case "left-click":

        return (

          <button

            onClick={() =>
              complete("left-click")
            }

            className="
            h-32
            w-48
            rounded-3xl
            bg-blue-500
            text-xl
            font-black
            text-white
            shadow-lg
            hover:scale-105
            "
          >

            LEFT CLICK

          </button>

        );





      case "right-click":

        return (

          <button

            onContextMenu={(e)=>{

              e.preventDefault();

              complete("right-click");

            }}

            className="
            h-32
            w-48
            rounded-3xl
            bg-purple-500
            text-xl
            font-black
            text-white
            shadow-lg
            hover:scale-105
            "
          >

            RIGHT CLICK

          </button>

        );







      case "click-target":

        return (

          <button

            onClick={() =>
              complete("click-target")
            }

            className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-5xl
            shadow-[0_0_35px_rgba(239,68,68,.6)]
            transition
            hover:scale-110
            "
          >

            🎯

          </button>

        );







      case "double-click":

        return (

          <button

            onDoubleClick={() =>
              complete("double-click")
            }

            className="
            h-32
            w-48
            rounded-3xl
            bg-green-500
            text-xl
            font-black
            text-white
            shadow-lg
            hover:scale-105
            "
          >

            DOUBLE CLICK

          </button>

        );







      case "drag-drop":

        return (

          <div
            className="
            flex
            gap-12
            items-center
            "
          >

            <div
              draggable

              onDragStart={(e)=>{

                e.dataTransfer.setData(
                  "mouse",
                  "drag"
                );

              }}

              className="
              flex
              h-24
              w-24
              cursor-grab
              items-center
              justify-center
              rounded-2xl
              bg-yellow-400
              text-4xl
              "
            >

              🖱️

            </div>



            <div

              onDragOver={(e)=>
                e.preventDefault()
              }


              onDrop={() =>
                complete("drag-drop")
              }


              className="
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-3xl
              border-2
              border-dashed
              border-cyan-400
              text-4xl
              "
            >

              🎯

            </div>


          </div>

        );







      case "scroll-wheel":

        return (

          <div

            onWheel={() =>
              complete("scroll-wheel")
            }

            className="
            flex
            h-40
            w-40
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-slate-700
            text-6xl
            "
          >

            🖱️

          </div>

        );







      default:

        return (

          <p
            className="
            text-xl
            text-gray-400
            "
          >

            Select a mouse task

          </p>

        );

    }

  }







  return (

    <div
      className="
      h-[620px]
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900
      p-6
      "
    >



      <h2
        className="
        text-2xl
        font-black
        text-cyan-300
        "
      >

        🖱️ Mouse Arena

      </h2>





      <div
        className="
        mt-6
        flex
        h-[500px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        border-cyan-500/40
        bg-slate-950/50
        "
      >



        <p
          className="
          mb-8
          text-xl
          text-gray-300
          "
        >

          Current Task: {currentTask}

        </p>





        {renderChallenge()}





        <p
          className="
          mt-8
          text-xl
          font-black
          text-white
          "
        >

          Actions: {hits}

        </p>




      </div>


    </div>

  );

}