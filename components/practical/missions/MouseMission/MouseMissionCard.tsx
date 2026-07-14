"use client";


import {
  mouseMission
} from "@/components/practical/mouseMission";


import {
  useMouseStore
} from "@/components/store/mouseStore";



type Props = {

  unlocked: boolean;

  onStart: () => void;

};







export default function MouseMissionCard({

  unlocked,

  onStart,

}: Props) {



  const completedTasks =
    useMouseStore(
      (state) =>
        state.completedTasks
    );



  const mouseComplete =
    useMouseStore(
      (state) =>
        state.completed
    );



  const allTasks =
    mouseMission.missions.flatMap(
      (mission) =>
        mission.tasks
    );



  const totalTasks =
    allTasks.length;






  return (


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

unlocked

?

"border-purple-500/40 hover:border-purple-400"

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

Master mouse control through clicking,
dragging, scrolling and precision challenges.

</p>









{/* MOUSE JOURNEY */}


<div

className="
mt-5
rounded-2xl
border
border-purple-500/20
bg-slate-950
p-4
"

>



<div

className="
flex
items-center
justify-between
"

>


<h3

className="
text-xs
font-black
uppercase
tracking-wider
text-purple-300
"

>

🧭 Mouse Adventure

</h3>



<span

className="
text-xs
font-bold
text-gray-400
"

>

{completedTasks.length}/{totalTasks}

</span>


</div>








<div

className="
mt-4
space-y-3
"

>


{

mouseMission.missions.map(

(mission,index)=>(


<div

key={mission.id}

className={`

rounded-xl

border

p-3

transition

${

mouseComplete

?

"border-green-400/40 bg-green-500/10"

:

"border-slate-700 bg-slate-800"

}

`}

>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-slate-950
text-xl
"

>

{

mouseComplete

?

"✅"

:

index === 0

?

"🖱️"

:

"🔒"

}

</div>






<div>


<p

className="
font-black
text-white
"

>

{mission.title}

</p>



<p

className="
text-xs
text-gray-400
"

>

{mission.description}

</p>



</div>


</div>



</div>



)

)


}


</div>




</div>









{/* VISUAL PREVIEW */}


<div

className="
mt-5
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









{

unlocked ? (


<button


onClick={onStart}


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


{

mouseComplete

?

"🔄 Replay Mouse Arena"

:

"🚀 Enter Mouse Arena"

}



</button>



)

:

(


<div

className="
mt-5
text-center
text-sm
font-bold
text-gray-500
"

>


🔒 Complete Keyboard Galaxy first


</div>



)


}






</div>


  );

}