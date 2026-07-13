import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const motherboardKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "motherboard",

  title: "Motherboard",

  heroImage: "/images/hardware/motherboard.png",

  meaning:
    "The motherboard is the main circuit board that connects every computer component together.",

  professorSpeech:
    "Imagine the motherboard as the city's road network. Every computer part travels through it.",

  funFact:
    "Without a motherboard, no computer part can communicate with another.",

  activity:
    "Look at a picture of a motherboard and see how many tiny parts you can count.",

  miniMission:
    "Can you point to the motherboard inside a computer picture?",

  category: "Hardware",

  order: 12,

  related: [

  {
    id: "system-unit",
    knowledgeId: "system-unit",
  },

  {
    id: "cpu",
    knowledgeId: "cpu",
  },

  {
    id: "ram",
    knowledgeId: "ram",
  },

],

};