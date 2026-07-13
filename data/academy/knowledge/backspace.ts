import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const backspaceKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "backspace",

  title: "Backspace",

  heroImage: "/images/hardware/backspace.png",

  meaning:
    "The Backspace key removes letters behind the cursor.",

  professorSpeech:
    "Made a mistake? Don't worry! The Backspace key is like an eraser for your typing.",

  funFact:
    "Almost everyone uses the Backspace key while typing.",

  miniMission:
    "Type your first name, then erase the last letter using Backspace.",

  activity:
    "Practice typing a word and use Backspace to correct one mistake.",

  related: [
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
    {
      id: "enter-key",
      knowledgeId: "enter-key",
    },
  ],

};