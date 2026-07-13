"use client";

import { create } from "zustand";

const correctOrder = [
  "motherboard",
  "cpu",
  "ram",
];

type AssemblyStore = {
  installedParts: string[];

  message: string;

  installPart: (id: string) => void;

  reset: () => void;
};

export const useAssemblyStore =
create<AssemblyStore>((set, get) => ({

  installedParts: [],

  message:
    "Let's begin by installing the Motherboard.",

  installPart: (id) => {

    const installed = get().installedParts;

    const expected =
      correctOrder[installed.length];

    if (id !== expected) {

      set({
        message:
          `❌ Not yet! Install ${expected.toUpperCase()} first.`,
      });

      return;
    }

    set({

      installedParts: [
        ...installed,
        id,
      ],

      message:
        `✅ Great! ${id.toUpperCase()} installed.`

    });

  },

  reset: () =>

    set({

      installedParts: [],

      message:
        "Let's begin by installing the Motherboard.",

    }),

}));