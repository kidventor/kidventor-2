import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const mouseKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "mouse",

  title: "Mouse",

  heroImage: "/images/hardware/mouse.png",

  meaning:
    "The mouse helps us point, click, drag and open items on a computer.",

  professorSpeech:
    "The mouse makes it easy to control the arrow called the pointer.",

  funFact:
    "The first computer mouse was made of wood!",

  miniMission:
    "Move the mouse slowly without clicking anything.",

  activity:
    "Practice moving the mouse across the screen.",

  related: [
    {
      id: "computer",
      knowledgeId: "computer",
    },
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
  ],

};