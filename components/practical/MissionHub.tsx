"use client";

import { useEffect, useState } from "react";


import KeyboardRecognition
from "@/components/practical/missions/KeyboardRecognition/KeyboardRecognition";


import MouseArena
from "@/components/practical/missions/MouseMission/MouseArena";


import MissionJourney
from "@/components/practical/missions/MissionJourney";

import MouseMissionJourney
from "@/components/practical/missions/MouseMissionJourney";


import { useMissionStore }
from "@/components/store/missionStore";


import { useRecognitionStore }
from "@/components/store/recognitionStore";


import { useMouseStore }
from "@/components/store/mouseStore";





export default function MissionHub() {



  const keyboardComplete =
    useMissionStore(
      (state)=>
        state.keyboardComplete
    );



  const mouseComplete =
    useMissionStore(
      (state)=>
        state.mouseComplete
    );





  // Mission engine resets

  const resetKeyboardProgress =
    useMissionStore(
      (state)=>
        state.resetKeyboardProgress
    );



  const resetMouseProgress =
    useMissionStore(
      (state)=>
        state.resetMouseProgress
    );





  // Local mission resets

  const resetKeyboardStore =
    useRecognitionStore(
      (state)=>
        state.reset
    );



  const resetMouseStore =
    useMouseStore(
      (state)=>
        state.reset
    );






  const [activeMission,setActiveMission] =
  useState<
    "hub" | "keyboard" | "mouse"
  >("hub");








  useEffect(()=>{


    if(
      activeMission === "mouse" &&
      mouseComplete
    ){

      const timer =
      setTimeout(()=>{

        setActiveMission("hub");

      },1500);



      return ()=>clearTimeout(timer);

    }


  },[
    activeMission,
    mouseComplete
  ]);










  if(activeMission==="keyboard"){


    return (

      <KeyboardRecognition

        onBack={()=>
          setActiveMission("hub")
        }

      />

    );

  }









  if(activeMission==="mouse"){


    return (

      <MouseArena

        onBack={()=>
          setActiveMission("hub")
        }

      />

    );

  }









  return (

<section
className="
min-h-screen
p-6
"
>



<h1
className="
text-4xl
font-black
text-cyan-300
"
>

🧭 Mission Control Center

</h1>



<p className="mt-3 text-gray-300">

Choose your practical learning adventure.

</p>








<div
className="
mt-8
grid
gap-6
md:grid-cols-3
"
>







{/* KEYBOARD CARD */}



<div
className="
rounded-3xl
border
border-cyan-500/40
bg-slate-900
p-5
shadow-xl
"
>



<h2
className="
text-2xl
font-black
text-white
"
>

⌨️ Keyboard Galaxy

</h2>



<p
className="
mt-2
text-sm
text-gray-400
"
>

Master keyboard skills through interactive challenges.

</p>



<MissionJourney />







{

keyboardComplete ? (


<button

onClick={()=>{


resetKeyboardProgress();


resetKeyboardStore();


setActiveMission("keyboard");


}}


className="
mt-5
w-full
rounded-xl
border
border-cyan-400/40
bg-slate-800
px-5
py-3
font-black
text-cyan-300
transition
hover:scale-105
"

>

🔄 Replay Keyboard Adventure

</button>


)



:

(


<button

onClick={()=>
setActiveMission("keyboard")
}


className="
mt-5
w-full
rounded-xl
bg-cyan-400
px-5
py-3
font-black
text-black
"

>

🚀 Enter Keyboard Adventure

</button>


)


}



</div>









{/* MOUSE CARD */}



<div

className={`

rounded-3xl
border
bg-slate-900
p-5
shadow-xl


${
keyboardComplete

?

"border-purple-500/40"

:

"border-purple-500/20 opacity-70"

}

`}

>



<h2
className="
text-2xl
font-black
text-white
"
>

🖱 Mouse Arena

</h2>





<p
className="
mt-3
text-sm
text-gray-400
"
>

Learn clicking, dragging and precision control.

</p>





<MouseMissionJourney />






{

keyboardComplete ? (


mouseComplete ? (


<button


onClick={()=>{


resetMouseProgress();


resetMouseStore();


setActiveMission("mouse");


}}



className="
mt-5
w-full
rounded-xl
border
border-purple-400/40
bg-slate-800
px-5
py-3
font-black
text-purple-300
transition
hover:scale-105
"

>


🔄 Replay Mouse Arena


</button>


)



:

(


<button


onClick={()=>
setActiveMission("mouse")
}


className="
mt-5
w-full
rounded-xl
bg-purple-400
px-5
py-3
font-black
text-black
"

>


🚀 Enter Mouse Arena


</button>


)


)



:

(


<div

className="
mt-5
text-center
text-sm
text-gray-500
"

>

🔒 Complete Keyboard Galaxy first

</div>


)


}



</div>









{/* HARDWARE CARD */}



<div

className="
rounded-3xl
border
border-yellow-500/40
bg-slate-900
p-5
shadow-xl
"

>



<h2
className="
text-2xl
font-black
text-white
"
>

🖥 Computer Workshop

</h2>




<p
className="
mt-3
text-sm
text-gray-400
"
>

Assemble and identify computer components.

</p>




<div

className="
mt-6
flex
h-40
items-center
justify-center
rounded-2xl
bg-slate-950
text-5xl
"

>

🔒

</div>




</div>








</div>



</section>


  );

}