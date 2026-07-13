"use client";

import { create } from "zustand";

type ExplorerState = {

  discovered: string[];

  discover: (id: string) => void;

  isDiscovered: (id: string) => boolean;

};

export const useExplorerStore = create<ExplorerState>((set, get) => ({

  discovered: [],

  discover: (id) =>

    set((state) => ({

      discovered: state.discovered.includes(id)

        ? state.discovered

        : [...state.discovered, id],

    })),

  isDiscovered: (id) =>

    get().discovered.includes(id),

}));