import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const taskbarKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "taskbar",

  title: "Taskbar",

  heroImage: "/images/desktop/taskbar.png",

  meaning:
    "The Taskbar is the long bar usually found at the bottom of the Desktop. It helps you open and switch between programs.",

  professorSpeech:
    "Think of the Taskbar as your control panel. It keeps your favorite apps within easy reach.",

  funFact:
    "The Start button usually lives on the Taskbar.",

  activity:
    "Look for the Taskbar on a computer. Can you find the Start button?",

  miniMission:
    "Count how many icons are on the Taskbar.",

  category: "Desktop",

  order: 4,

  related: [

  {
    id: "desktop",
    knowledgeId: "desktop",
  },

  {
    id: "window",
    knowledgeId: "window",
  },

  {
    id: "recycle-bin",
    knowledgeId: "recycle-bin",
  },

],

};