import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const spacebarKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "spacebar",

  title: "Space Bar",

  heroImage: "/images/hardware/spacebar.png",

  meaning:
    "The Space Bar is the longest key on the keyboard. It creates spaces between words while typing.",

  professorSpeech:
    "Without the Space Bar, every word would run together and become difficult to read.",

  funFact:
    "The Space Bar is usually the longest key on a keyboard.",

  miniMission:
    "Press the Space Bar five times and watch the cursor move.",

  activity:
    "Type two words and use the Space Bar to separate them.",

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