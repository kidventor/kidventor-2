import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const enterKeyKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "enter-key",

  title: "Enter Key",

  heroImage: "/images/hardware/enter-key.png",

  meaning:
    "The Enter key tells the computer to start a command or move to a new line while typing.",

  professorSpeech:
    "Think of the Enter key as saying 'Go!' to the computer.",

  funFact:
    "Programmers press the Enter key hundreds of times every day!",

  miniMission:
    "Type your name and press the Enter key to move to a new line.",

  activity:
    "Practice pressing the Enter key after typing a word.",

  related: [
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
    {
      id: "spacebar",
      knowledgeId: "spacebar",
    },
  ],

};