import { keyboardKnowledge } from "./keyboard";
import { spacebarKnowledge } from "./spacebar";

import type { KnowledgeItem } from "@/types/knowledge";
import { computerKnowledge } from "./computer";
import { monitorKnowledge } from "./monitor";
import { mouseKnowledge } from "./mouse";
import { enterKeyKnowledge } from "./enter-key";
import { backspaceKnowledge } from "./backspace";
import { shiftKeyKnowledge } from "./shift-key";
import { capsLockKnowledge } from "./caps-lock";
import { desktopKnowledge } from "./desktop/desktop";

import { iconsKnowledge } from "./desktop/icons";
import { cursorKnowledge } from "./desktop/cursor";
import { taskbarKnowledge } from "./desktop/taskbar";
import { windowKnowledge } from "./desktop/window";
import { recycleBinKnowledge } from "./desktop/recycle-bin";

export const knowledgeRegistry = {

  computer: computerKnowledge,

  monitor: monitorKnowledge,

  keyboard: keyboardKnowledge,

  mouse: mouseKnowledge,

  desktop: desktopKnowledge,

  icons: iconsKnowledge,

cursor: cursorKnowledge,

taskbar: taskbarKnowledge,

window: windowKnowledge,

"recycle-bin": recycleBinKnowledge,

  spacebar: spacebarKnowledge,

  "enter-key": enterKeyKnowledge,

  backspace: backspaceKnowledge,

  "shift-key": shiftKeyKnowledge,

  "caps-lock": capsLockKnowledge,

  

} satisfies Record<string, KnowledgeItem>;



export type KnowledgeId = keyof typeof knowledgeRegistry;

export function getKnowledge(id: KnowledgeId): KnowledgeItem {

  return knowledgeRegistry[id];

}