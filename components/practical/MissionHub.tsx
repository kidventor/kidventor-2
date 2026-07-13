"use client";

"use client";

import { useState } from "react";

import KeyboardRecognition 
from "@/components/practical/missions/KeyboardRecognition/KeyboardRecognition";

import MouseArena
from "@/components/practical/missions/MouseMission/MouseArena";

import MissionJourney 
from "@/components/practical/missions/MissionJourney";

import { useMissionStore } 
from "@/components/store/missionStore";

export default function MissionHub() {


  const keyboardComplete =
  useMissionStore(
    (state) =>
      state.completedMissions.includes(
        "basic-keys"
      )
  );


  const [activeMission, setActiveMission] =
useState<
"hub" | "keyboard" | "mouse"
>("hub");

  if (activeMission === "keyboard") {

    return (

      <KeyboardRecognition
        onBack={() => setActiveMission("hub")}
      />

    );

  }

  if (activeMission === "mouse") {

  return (

    <MouseArena
      onBack={() => setActiveMission("hub")}
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
group
relative
overflow-hidden
rounded-3xl
border
border-cyan-500/40
bg-slate-900
p-5
shadow-[0_20px_50px_rgba(34,211,238,.15)]
transition-all
duration-500
hover:-translate-y-2
hover:border-cyan-300
"
>

<div
className="
absolute
right-0
top-0
h-24
w-24
rounded-full
bg-cyan-400/20
blur-3xl
"
/>


<h2 className="text-2xl font-black text-white">
⌨️ Keyboard Galaxy
</h2>


<p className="mt-2 text-sm text-gray-400">
Master keyboard skills through interactive challenges.
</p>


<div
className="
mt-4
rounded-2xl
border
border-cyan-500/20
bg-slate-950
p-3
"
>

<MissionJourney />

</div>


<div
className="
mt-4
inline-flex
rounded-full
bg-cyan-400/20
px-4
py-2
text-xs
font-black
text-cyan-300
"
>
🟢 ACTIVE TRAINING
</div>




{
keyboardComplete ? (

<button

onClick={() =>
  setActiveMission("keyboard")
}

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

🔄 Replay Keyboard Mission

</button>


) : (


<button

onClick={() =>
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
transition
hover:scale-105
"
>

🚀 Enter Keyboard Lab

</button>


)
}


</div>







       {/* MOUSE CARD */}


<div
  className={`
  group
  rounded-3xl
  border
  bg-slate-900
  p-5
  shadow-xl
  transition-all
  duration-500
  hover:-translate-y-2

  ${
    keyboardComplete
    ?
    "border-purple-500/40"
    :
    "border-purple-500/20 opacity-70"
  }

  `}
>


<h2 className="text-2xl font-black text-white">
🖱 Mouse Arena
</h2>



<p className="mt-3 text-sm text-gray-400">
Learn clicking, dragging and precision control.
</p>




<div
className="
mt-6
flex
h-40
items-center
justify-center
rounded-2xl
border
border-purple-500/20
bg-slate-950
text-6xl
transition
group-hover:scale-105
"
>
🖱️
</div>





<div
className="
mt-4
rounded-full
bg-purple-400/10
px-4
py-2
text-center
text-xs
font-black
text-purple-300
"
>

{
keyboardComplete

?

"🟢 UNLOCKED MOUSE LAB"

:

"🔒 LOCKED - COMPLETE KEYBOARD GALAXY"

}

</div>






{
keyboardComplete && (

<button

onClick={() =>
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
transition
hover:scale-105
hover:bg-purple-300
"

>

🚀 Enter Mouse Arena

</button>

)

}




{

!keyboardComplete && (

<div
className="
mt-5
text-center
text-sm
text-gray-500
"
>

Complete Keyboard Galaxy first

</div>

)

}



</div>








        {/* HARDWARE CARD */}


        <div
className="
group
rounded-3xl
border
border-yellow-500/40
bg-slate-900
p-5
shadow-xl
transition-all
duration-500
hover:-translate-y-2
"
>


<h2 className="text-2xl font-black text-white">
🖥 Computer Workshop
</h2>


<p className="mt-3 text-sm text-gray-400">
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
border
border-yellow-500/20
bg-slate-950
text-4xl
"
>
🔒
</div>


<div
className="
mt-4
rounded-full
bg-yellow-400/10
px-4
py-2
text-center
text-xs
font-black
text-yellow-300
"
>
🔒 FUTURE WORKSHOP
</div>


</div>




      </div>


    </section>

  );

}