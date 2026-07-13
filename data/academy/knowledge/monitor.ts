import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const monitorKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "monitor",

  title: "Monitor",

  heroImage: "/images/hardware/monitor.png",

  meaning:
    "The monitor displays pictures, videos, text and everything happening on the computer.",

  professorSpeech:
    "Think of the monitor as the computer's television screen. It helps us see everything the computer is doing.",

  funFact:
    "Modern monitors are much thinner than the old box-shaped monitors.",

  miniMission:
    "Can you find a monitor in your classroom?",

  activity:
    "Can you point to a monitor in your classroom or at home?",

related: [
  {
    id: "computer",
    knowledgeId: "computer",
  },
  {
    id: "desktop",
    knowledgeId: "desktop",
  },
  {
    id: "keyboard",
    knowledgeId: "keyboard",
  },
],

};