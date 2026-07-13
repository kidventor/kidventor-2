"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getXP,
  getLevel,
} from "@/lib/xp";

import {
  getCompletedLessons,
} from "@/lib/lessonProgress";

import {
  getBadges,
} from "@/lib/badges";


type StudentContextType = {
  xp: number;
  level: number;
  completedLessons: string[];
  badges: string[];

  lessonCount: number;
  badgeCount: number;

  refreshStudent: () => void;
};


const StudentContext =
  createContext<StudentContextType | null>(null);



export function StudentProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [xp, setXP] = useState(0);

  const [level, setLevel] = useState(1);

  const [completedLessons, setCompletedLessons] =
    useState<string[]>([]);


  const [badges, setBadges] =
    useState<string[]>([]);



  function refreshStudent() {

    const currentXP = getXP();

    const lessons =
      getCompletedLessons();

    const earnedBadges =
      getBadges();


    setXP(currentXP);

    setLevel(
      getLevel(currentXP)
    );


    setCompletedLessons(
      lessons
    );


    setBadges(
      earnedBadges
    );

  }



  useEffect(() => {

    refreshStudent();

  }, []);



  return (

    <StudentContext.Provider

      value={{

        xp,

        level,

        completedLessons,

        badges,


        // Helper values for HUD components

        lessonCount:
          completedLessons.length,


        badgeCount:
          badges.length,


        refreshStudent,

      }}

    >

      {children}

    </StudentContext.Provider>

  );

}




export function useStudent() {

  const context =
    useContext(StudentContext);


  if (!context) {

    throw new Error(
      "useStudent must be used inside StudentProvider"
    );

  }


  return context;

}