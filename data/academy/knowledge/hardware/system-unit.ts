import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const systemUnitKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "system-unit",

  title: "System Unit",

  heroImage: "/images/hardware/system-unit.png",

  meaning:
    "The System Unit is the main computer box that contains the important parts of a computer, including the CPU, RAM, motherboard and storage devices.",

  professorSpeech:
    "Many people call the System Unit the CPU, but that is not correct. The CPU is only one important part inside the System Unit.",

  funFact:
    "Without the System Unit, a desktop computer cannot work because most of its important parts are inside it.",

  activity:
    "Look at a desktop computer. Can you point to the System Unit?",

  miniMission:
    "Can you remember three parts found inside the System Unit?",

  category: "Hardware",

  order: 9,

  related: [

    {
      id: "computer",
      knowledgeId: "computer",
    },

    {
      id: "cpu",
      knowledgeId: "cpu",
    },

    {
      id: "ram",
      knowledgeId: "ram",
    },

    {
      id: "motherboard",
      knowledgeId: "motherboard",
    },

  ],

};