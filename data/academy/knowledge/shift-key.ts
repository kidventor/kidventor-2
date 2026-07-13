import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const shiftKeyKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "shift-key",

  title: "Shift Key",

  heroImage: "/images/hardware/shift-key.png",

  meaning:
    "The Shift key helps type capital letters and special symbols.",

  professorSpeech:
    "Hold the Shift key while pressing a letter to type a CAPITAL letter.",

  funFact:
    "Most keyboards have two Shift keys—one on the left and one on the right.",

  miniMission:
    "Hold the Shift key and type your first name using capital letters.",

  activity:
    "Practice typing A, B and C using the Shift key.",

  related: [
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
    {
      id: "caps-lock",
      knowledgeId: "caps-lock",
    },
  ],

};