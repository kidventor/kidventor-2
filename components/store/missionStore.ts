import { create } from "zustand";


type MissionState = {

  currentMission: string;

  completedMissions: string[];

  keyboardComplete: boolean;

  mouseComplete: boolean;


  getNextMission: () => string | null;


  completeMission:
  (
    missionId: string
  ) => void;



  resetKeyboardProgress:
  () => void;



  resetMouseProgress:
  () => void;



  reset:
  () => void;

};







const keyboardMissions = [

  "basic-keys",

  "modifier-keys",

  "function-keys",

  "special-characters",

];







const mouseMissions = [

  "mouse-basics",

  "mouse-control",

  "mouse-highlight",

  "mouse-challenge",

];







const missionOrder = [

  ...keyboardMissions,

  ...mouseMissions,

];









export const useMissionStore =
create<MissionState>((set, get) => ({



  currentMission:
    "basic-keys",




  completedMissions: [],




  keyboardComplete: false,



  mouseComplete: false,









  getNextMission: () => {


    const completed =
      get().completedMissions;



    const next =
      missionOrder.find(

        (mission) =>
          !completed.includes(mission)

      );



    return next ?? null;


  },









  completeMission: (missionId) => {


    set((state) => {



      const updatedMissions =

        state.completedMissions.includes(
          missionId
        )

        ?

        state.completedMissions

        :

        [

          ...state.completedMissions,

          missionId,

        ];








      const currentIndex =
        missionOrder.indexOf(
          missionId
        );



      const nextMission =
        missionOrder[
          currentIndex + 1
        ];








      const keyboardFinished =

        keyboardMissions.every(

          (mission) =>

            updatedMissions.includes(
              mission
            )

        );








      const mouseFinished =

        mouseMissions.every(

          (mission) =>

            updatedMissions.includes(
              mission
            )

        );








      return {


        completedMissions:
          updatedMissions,



        currentMission:

          nextMission ??

          missionId,



        keyboardComplete:
          keyboardFinished,



        mouseComplete:
          mouseFinished,


      };


    });


  },









  // RESET ONLY KEYBOARD PROGRESS

  resetKeyboardProgress: () => {


    set((state) => {


      const remaining =

        state.completedMissions.filter(

          (mission) =>

            !keyboardMissions.includes(
              mission
            )

        );





      return {


        completedMissions:
          remaining,



        currentMission:
          "basic-keys",



        keyboardComplete:
          false,


      };


    });


  },









  // RESET ONLY MOUSE PROGRESS

  resetMouseProgress: () => {


    set((state) => {


      const remaining =

        state.completedMissions.filter(

          (mission) =>

            !mouseMissions.includes(
              mission
            )

        );





      return {


        completedMissions:
          remaining,



        currentMission:
          "mouse-basics",



        mouseComplete:
          false,


      };


    });


  },









  // COMPLETE GAME RESET

  reset: () => {


    set({


      currentMission:
        "basic-keys",



      completedMissions: [],



      keyboardComplete:
        false,



      mouseComplete:
        false,


    });


  },



}));