import { create } from "zustand";
import { useProfessorStore } from "./professorStore";
import { useMissionStore } from "./missionStore";
import { getKeyboardMission } from "@/components/practical/getKeyboardMission";

import { addXP } from "@/lib/xp";
import {
  unlockBadge,
  hasBadge,
} from "@/lib/badges";

const getCurrentMissionTasks = () => {

  const currentMission =
    useMissionStore
      .getState()
      .currentMission;


  const mission =
    getKeyboardMission(currentMission);


  return mission?.tasks ?? [];

};



type RecognitionState = {

  currentAnswer: string;

  selectedAnswer: string | null;

  completed: boolean;

  celebrating: boolean;

  score: number;


  completedTasks: string[];


  totalTasks: number;

  currentTaskIndex: number;


  setCurrentAnswer: (
    answer: string
  ) => void;


  setCelebrating: (
    value: boolean
  ) => void;


  selectAnswer: (
    answer: string
  ) => void;


  startNewMission: () => void;


  reset: () => void;

};





export const useRecognitionStore =
create<RecognitionState>((set) => ({



  currentAnswer:
    getCurrentMissionTasks()[0].id,



  selectedAnswer: null,


  completed: false,


  celebrating: false,


  score: 0,


  completedTasks: [],



  totalTasks:
    getCurrentMissionTasks().length,



  currentTaskIndex: 0,





  setCurrentAnswer: (answer) =>

    set({

      currentAnswer: answer,

      selectedAnswer: null,

      completed: false,

      celebrating: false,

    }),





  setCelebrating: (value) =>

    set({

      celebrating: value,

    }),

  selectAnswer: (answer) =>

    set((state) => {


      const correct =
        answer === state.currentAnswer;




      useProfessorStore
        .getState()
        .speak(

          correct

          ? "🎉 Excellent!\n\nYou found the correct key!"

          : "🤔 Not quite.\n\nLook carefully and try again."

        );





      if (!correct) {

        return {

          selectedAnswer: answer,

        };

      }





      const updatedTasks =

        state.completedTasks.includes(answer)

        ? state.completedTasks

        :

        [

          ...state.completedTasks,

          answer,

        ];






      const nextIndex =
        state.currentTaskIndex + 1;





      const missionComplete =
        updatedTasks.length === state.totalTasks;






    if (missionComplete) {


  const {
    completeMission,

  } = useMissionStore.getState();



  completeMission(
    useMissionStore
      .getState()
      .currentMission
  );


  // 🎉 Mission Rewards

  if (
  !hasBadge("Keyboard Rookie")
) {

  addXP(100);

  unlockBadge(
    "Keyboard Rookie"
  );

}


}





      return {


        selectedAnswer: answer,


        completedTasks:
          updatedTasks,



        currentTaskIndex:
          missionComplete
          ? state.currentTaskIndex
          : nextIndex,



        currentAnswer:
          missionComplete
          ? state.currentAnswer
          : getCurrentMissionTasks()[nextIndex].id,



        score:
          updatedTasks.length * 20,



        completed:
          missionComplete,



        celebrating:
          missionComplete,


      };



    }),


// start next mission
startNewMission: () => {

  const {
    getNextMission,
  } = useMissionStore.getState();



  const nextMission =
    getNextMission();



  if (!nextMission) {

    set({

      celebrating: false,

      completed: true,

      selectedAnswer: null,

      completedTasks: [],

    });


    return;

  }



  useMissionStore
    .getState()
    .completeMission(
      nextMission
    );



  const nextTasks =
    getCurrentMissionTasks();



  set({

    currentAnswer:
      nextTasks[0].id,


    selectedAnswer: null,


    completed: false,


    celebrating: false,


    completedTasks: [],


    currentTaskIndex: 0,


    score: 0,


    totalTasks:
      nextTasks.length,


  });


},

// reset everything
  reset: () =>

    set({


      currentAnswer:
        getCurrentMissionTasks()[0].id,


      selectedAnswer: null,


      completed: false,


      celebrating: false,


      score: 0,


      completedTasks: [],


      currentTaskIndex: 0,


      totalTasks:
        getCurrentMissionTasks().length,


    }),



}));