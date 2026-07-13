

{/*
  "use client";

import { create } from "zustand";

type Badge =
  | "Junior Computer Engineer";

type ProfileStore = {

  xp: number;

  level: number;

  badges: Badge[];

  addXP: (xp: number) => void;

  unlockBadge: (badge: Badge) => void;

};

export const useProfileStore =
create<ProfileStore>((set) => ({

  xp: 0,

  level: 1,

  badges: [],

  addXP: (xp) =>

    set((state) => ({

      xp: state.xp + xp,

      level:
        Math.floor((state.xp + xp) / 100) + 1,

    })),

  unlockBadge: (badge) =>

    set((state) => ({

      badges: state.badges.includes(badge)

        ? state.badges

        : [...state.badges, badge],

    })),

}));

*/}