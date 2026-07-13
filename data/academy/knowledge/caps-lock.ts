import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const capsLockKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "caps-lock",

  title: "Caps Lock",

  heroImage: "/images/hardware/caps-lock.png",

  meaning:
    "Caps Lock keeps letters in CAPITAL form until you turn it off.",

  professorSpeech:
    "Caps Lock is useful when you need to type many capital letters without holding the Shift key.",

  funFact:
    "Typing EVERYTHING IN CAPITAL LETTERS on the internet is often understood as shouting.",

  miniMission:
    "Turn on Caps Lock and type your first name in CAPITAL LETTERS.",

  activity:
    "Press Caps Lock once, type your name, then press it again to turn it off.",

  related: [
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
    {
      id: "shift-key",
      knowledgeId: "shift-key",
    },
  ],

};