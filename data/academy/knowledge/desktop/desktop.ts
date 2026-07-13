import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const desktopKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "desktop",

  title: "Desktop",

  heroImage: "/images/desktop/desktop.png",

  meaning:
    "The Desktop is the main screen you see after a computer starts. It is where icons, folders and shortcuts appear.",

  professorSpeech:
    "Think of the Desktop as your study table. Everything you need is placed here so you can reach it easily.",

  funFact:
    "Every computer has a Desktop, but each person can arrange it differently.",

  activity:
    "Look carefully at a computer. Can you count how many icons are on its Desktop?",

  miniMission:
    "Find something on the Desktop that you can open.",

  category: "Desktop",

  order: 1,

related: [

  {
    id: "monitor",
    knowledgeId: "monitor",
  },

  {
    id: "icons",
    knowledgeId: "icons",
  },

  {
    id: "taskbar",
    knowledgeId: "taskbar",
  },

],

};