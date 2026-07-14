import { create } from "zustand";

import { useProfessorStore } from "./professorStore";
import { useMissionStore } from "./missionStore";

import { mouseMission } from "@/components/practical/mouseMission";

import { addXP } from "@/lib/xp";

import {
  unlockBadge,
  hasBadge,
} from "@/lib/badges";





const getMouseTasks = () => {

  return mouseMission.missions.flatMap(
    (mission) =>
      mission.tasks
  );

};







type MouseState = {


  currentTask: string;


  completedTasks: string[];


  score: number;


  completed: boolean;


  currentTaskIndex: number;


  totalTasks: number;



  setCurrentTask:
  (
    task:string
  ) => void;



  completeAction:
  (
    action:string
  ) => void;



  nextTask:
  () => void;



  reset:
  () => void;


};









export const useMouseStore =
create<MouseState>((set) => ({



  currentTask:
    getMouseTasks()[0]?.id ?? "",



  completedTasks: [],



  score:0,



  completed:false,



  currentTaskIndex:0,



  totalTasks:
    getMouseTasks().length,









  setCurrentTask:(task)=>


    set({

      currentTask:task,

      completed:false,

    }),













completeAction:(action)=>


set((state)=>{


const correct =
action === state.currentTask;





useProfessorStore
.getState()
.speak(

correct

?

`🎉 Excellent!

You completed ${state.currentTask}.
Great mouse skill!`

:

`🤔 Try again.

Move carefully and follow the instruction.`

);







if(!correct){

return {};

}







const updatedTasks =

state.completedTasks.includes(action)

?

state.completedTasks

:

[

...state.completedTasks,

action

];








const nextIndex =
state.currentTaskIndex + 1;








const currentMission =

mouseMission.missions.find(

(mission)=>

mission.tasks.some(

(task)=>

task.id === action

)

);








if(currentMission){


const missionTasks =
currentMission.tasks.map(
(task)=>task.id
);



const missionFinished =

missionTasks.every(

(task)=>

updatedTasks.includes(task)

);





if(missionFinished){


useMissionStore
.getState()
.completeMission(
currentMission.id
);



useProfessorStore
.getState()
.speak(

`🏆 Mission Complete!

${currentMission.title}
has been unlocked.`

);


}



}










const missionComplete =

updatedTasks.length ===
state.totalTasks;








if(missionComplete){


if(
!hasBadge(
"Mouse Explorer"
)

){


addXP(100);


unlockBadge(
"Mouse Explorer"
);


}


}


return {


completedTasks:
updatedTasks,



score:
updatedTasks.length * 20,



completed:
missionComplete,



currentTaskIndex:

missionComplete

?

state.currentTaskIndex

:

nextIndex,





currentTask:

missionComplete

?

state.currentTask

:

getMouseTasks()[nextIndex]?.id ?? "",



};

}),













nextTask:()=>


set((state)=>{


const nextIndex =
state.currentTaskIndex + 1;



return {


currentTaskIndex:
nextIndex,



currentTask:
getMouseTasks()[nextIndex]?.id ?? "",



};


}),












reset:()=>{

  const tasks =
    getMouseTasks();


  set({

    currentTask:
      tasks[0]?.id ?? "",


    completedTasks:[],


    score:0,


    completed:false,


    currentTaskIndex:0,


    totalTasks:
      tasks.length,


  });


},


}));