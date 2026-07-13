import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const windowKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "window",

  title: "Window",

  heroImage: "/images/desktop/window.png",

  meaning:
    "A window is the box that opens when you start a program or folder.",

  professorSpeech:
    "Every application opens inside its own window so you can work with many things at once.",

  funFact:
    "You can move, resize, minimize and maximize windows.",

  activity:
    "Open a program and look carefully at its window.",

  miniMission:
    "Can you find the Close button (X)?",

  category: "Desktop",

  order: 5,

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