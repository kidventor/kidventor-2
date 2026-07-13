import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const keyboardKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "keyboard",

  title: "Keyboard",

  heroImage: "/images/hardware/keyboard.png",

  meaning:
    "A keyboard is an input device used to type letters, numbers, symbols and commands into a computer.",

  professorSpeech:
    "The keyboard is one of the most important computer tools. Every programmer, writer and inventor uses it to communicate with a computer.",

  funFact:
    "Most keyboards in the world use the QWERTY layout, which has existed for more than 150 years.",

  miniMission:
    "Can you find the Space Bar, Enter key and Shift key?",

  activity:
    "Can you find the letters A, B and C? Now press the Space Bar once.",

  related: [
    {
      id: "spacebar",
      knowledgeId: "spacebar",
    },
    {
      id: "enter-key",
      knowledgeId: "enter-key",
    },
    {
      id: "shift-key",
      knowledgeId: "shift-key",
    },
    {
      id: "caps-lock",
      knowledgeId: "caps-lock",
    },
    {
      id: "backspace",
      knowledgeId: "backspace",
    },
  ],

};