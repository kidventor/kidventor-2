import { create } from "zustand";


type MissionState = {

  currentMission: string;

  completedMissions: string[];

  keyboardComplete: boolean;


  getNextMission: () => string | null;


  completeMission: (
    missionId: string
  ) => void;


  reset: () => void;

};



const missionOrder = [

  "basic-keys",

  "modifier-keys",

  "function-keys",

  "special-characters",

];





export const useMissionStore =
create<MissionState>((set, get) => ({



  currentMission:
    "basic-keys",



  completedMissions: [],



  keyboardComplete: false,





  getNextMission: () => {


    const completed =
      get()
      .completedMissions;



    const next =
      missionOrder.find(

        (mission) =>
          !completed.includes(mission)

      );



    return next ?? null;


  },







  completeMission: (missionId) => {


    set((state) => {



      const updated =

        state.completedMissions.includes(
          missionId
        )

        ? state.completedMissions

        :

        [

          ...state.completedMissions,

          missionId

        ];




      const currentIndex =
        missionOrder.indexOf(
          missionId
        );




      const nextMission =
        missionOrder[
          currentIndex + 1
        ];





      const finishedKeyboardCourse =
        !nextMission;




      return {


        completedMissions:
          updated,



        currentMission:

          nextMission

          ?

          nextMission

          :

          missionId,



        keyboardComplete:
          finishedKeyboardCourse,


      };


    });


  },







  reset: () =>

    set({


      currentMission:
        "basic-keys",



      completedMissions:
        [],



      keyboardComplete:
        false,


    }),



}));