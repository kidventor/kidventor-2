"use client";

import {
  useState
} from "react";


import {
  useMouseStore
} from "@/components/store/mouseStore";


import {
  mouseMission
} from "@/components/practical/mouseMission";

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

  const score =
    useMouseStore(
      (state) => state.score
    );
  const [hits,setHits] =
    useState(0);

 const [highlight, setHighlight] = useState<string>("");

  const allTasks =
    mouseMission.missions.flatMap(
      (mission) =>
        mission.tasks
    );

  const task =
    allTasks.find(
      (item) =>
        item.id === currentTask
    );

  function complete(taskId:string) {


    if(completed)
      return;

    completeAction(taskId);

    setHits(
      (value)=>value+1
    );

  }
  function highlightPart(
    part:string
  ){

    setHighlight(part);

  }

  function renderChallenge(){
    switch(currentTask){
      case "left-click":


      return (

        <div
        className="
        flex
        flex-col
        items-center
        gap-6
        "
        >
          <div
          className="
          flex
          h-40
          w-64
          rounded-3xl
          bg-slate-700
          p-4
          "
          >

            <button

            onMouseEnter={() =>
              highlightPart("left")
            }


            onClick={() =>
              complete("left-click")
            }


            className={`
            w-1/2
            rounded-2xl
            font-black
            text-white
            transition-all

            ${
              highlight==="left"

              ?

              "bg-blue-500 scale-110 shadow-[0_0_30px_rgba(59,130,246,.8)]"

              :

              "bg-slate-600"

            }

            `}
            >

            LEFT

            </button>
            <div

            onMouseEnter={() =>
              highlightPart("right")
            }


            className="
            flex
            w-1/2
            items-center
            justify-center
            rounded-2xl
            bg-slate-600
            text-xs
            text-gray-300
            "
            >

            RIGHT

            </div>



          </div>
          <p
          className="
          font-bold
          text-cyan-300
          "
          >

          Click the left mouse button

          </p>
        </div>

      );

      case "right-click":


      return (

        <div
        className="
        flex
        flex-col
        items-center
        gap-6
        "
        >


          <div
          className="
          flex
          h-40
          w-64
          rounded-3xl
          bg-slate-700
          p-4
          "
          >
          <div
          className="
          w-1/2
          rounded-2xl
          bg-slate-600
          "
          />

          <button


          onContextMenu={(e)=>{

            e.preventDefault();

            complete(
              "right-click"
            );

          }}



          className="
          w-1/2
          rounded-2xl
          bg-purple-500
          font-black
          text-white
          shadow-[0_0_30px_rgba(168,85,247,.7)]
          transition
          hover:scale-110
          "
          >

          RIGHT

          </button>

          </div>

          <p
          className="
          font-bold
          text-purple-300
          "
          >

          Right click the purple button

          </p>

        </div>

      );

      case "scroll-wheel":


      return (

        <div

        onWheel={() =>
          complete(
            "scroll-wheel"
          )
        }

        className="
        flex
        flex-col
        items-center
        gap-6
        "
        >
          <div

          className="
          flex
          h-44
          w-32
          items-center
          justify-center
          rounded-full
          bg-slate-700
          text-7xl
          shadow-[0_0_30px_rgba(34,211,238,.5)]
          animate-pulse
          "
          >

          🖱️

          </div>

          <p
          className="
          font-bold
          text-cyan-300
          "
          >

          Scroll the mouse wheel

          </p>

        </div>

      );

      case "click-target":

      return (

        <button

        onClick={() =>
          complete(
            "click-target"
          )
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
          complete(
            "double-click"
          )
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
        transition
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
        items-center
        gap-12
        "
        >

          <div

          draggable


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
            complete(
              "drag-drop"
            )
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

     case "highlight-object":

return (

  <div
  className="
  flex
  flex-col
  items-center
  gap-6
  "
  >

    <div
    className="
    flex
    gap-6
    "
    >

      {["🍎","📘","⭐"].map((item,index)=>(

        <div
        key={index}
        onMouseEnter={()=>{
          highlightPart("object");
          complete("highlight-object");
        }}
        className={`
        flex
        h-24
        w-24
        cursor-pointer
        items-center
        justify-center
        rounded-2xl
        text-5xl
        transition-all
        ${
          highlight==="object"
          ? "scale-110 bg-cyan-500 shadow-[0_0_35px_rgba(34,211,238,.7)]"
          : "bg-slate-700"
        }
        `}
        >

          {item}

        </div>

      ))}

    </div>

    <p className="font-bold text-cyan-300">
      Move your mouse over any object to highlight it.
    </p>

  </div>

);

case "select-text":

return (

  <div
  className="
  flex
  flex-col
  items-center
  gap-6
  "
  >

    <div
    onMouseDown={()=>
      highlightPart("text")
    }

    onMouseUp={()=>{
      if(highlight==="text"){
        complete("select-text");
      }
    }}

    className={`
    max-w-xl
    cursor-text
    rounded-2xl
    p-6
    text-lg
    leading-8
    transition-all
    ${
      highlight==="text"
      ? "bg-blue-600/30 ring-2 ring-cyan-400"
      : "bg-slate-800"
    }
    `}
    >

    KidVentor helps learners understand computers through interactive practical exercises.

    </div>

    <p className="font-bold text-cyan-300">
      Click and drag across the sentence to simulate selecting text.
    </p>

  </div>

);

case "mouse-challenge":

return (

  <div
  className="
  flex
  flex-col
  items-center
  gap-8
  "
  >

    <button

    onClick={()=>
      complete("mouse-challenge")
    }

    className="
    rounded-3xl
    bg-gradient-to-r
    from-cyan-500
    to-purple-600
    px-10
    py-8
    text-2xl
    font-black
    text-white
    shadow-[0_0_40px_rgba(34,211,238,.5)]
    transition-all
    hover:scale-105
    "
    >

      🖱️ Mouse Master Challenge

    </button>

    <p className="text-center font-bold text-cyan-300">
      Complete the final mouse activity to become a Mouse Master.
    </p>

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

        Waiting for mouse challenge...

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
    border-purple-500/30
    bg-slate-900
    p-6
    "

    >

      <h2

      className="
      text-2xl
      font-black
      text-purple-300
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
      border-purple-500/40
      bg-slate-950/50
      "

      >

        <p
        className="
        mb-2
        text-sm
        uppercase
        text-gray-500
        "
        >

        Current Challenge

        </p>

        <h3

        className="
        mb-8
        text-2xl
        font-black
        text-yellow-400
        "

        >

        {task?.title ?? "Loading..."}

        </h3>

        <p
        className="
        mb-6
        text-sm
        text-gray-300
        "
        >

        {task?.instruction}

        </p>


        {renderChallenge()}

        {

        score > 0 &&

        <p

        className="
        mt-8
        animate-bounce
        text-xl
        font-black
        text-green-400
        "
        >

        🎉 Great Mouse Skill!

        </p>

        }

        <p

        className="
        mt-4
        text-lg
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