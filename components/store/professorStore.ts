import { create } from "zustand";

type ProfessorState = {
  message: string;

  speak: (text: string) => void;
};

export const useProfessorStore =
create<ProfessorState>((set) => ({

  message:
    "😊 Let's begin!\n\nFind the correct keyboard key and place it into the laboratory.",

  speak: (text) =>
    set({
      message: text,
    }),

}));