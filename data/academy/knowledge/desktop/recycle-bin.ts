import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const recycleBinKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "recycle-bin",

  title: "Recycle Bin",

  heroImage: "/images/desktop/recycle-bin.png",

  meaning:
    "The Recycle Bin temporarily stores deleted files before they are permanently removed.",

  professorSpeech:
    "Deleting a file doesn't always mean it's gone forever. The Recycle Bin gives you another chance.",

  funFact:
    "You can restore many deleted files from the Recycle Bin.",

  activity:
    "Look for the Recycle Bin icon on the Desktop.",

  miniMission:
    "Can you identify its icon?",

  category: "Desktop",

  order: 6,

  related: [

    {
      id: "desktop",
      knowledgeId: "desktop",
    },

    {
      id: "taskbar",
      knowledgeId: "taskbar",
    },

  ],

};