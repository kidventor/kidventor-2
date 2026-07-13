import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "./template";

export const computerKnowledge: KnowledgeItem = {

   ...knowledgeTemplate,
   
  id: "computer",

  title: "Computer",

  heroImage: "/images/hardware/computer.png",

  meaning:
    "A computer is an electronic device that accepts data, processes it, stores it and produces useful information.",

  professorSpeech:
    "A computer is like a super helper. It cannot think on its own, but it follows instructions very quickly.",

  funFact:
    "Some of the first computers were as large as an entire classroom!",

  activity:
    "Look around your classroom or home and count how many computers you can find.",



  related: [
    {
      id: "monitor",
      knowledgeId: "monitor",
    },
    {
      id: "keyboard",
      knowledgeId: "keyboard",
    },
    {
      id: "mouse",
      knowledgeId: "mouse",
    },
  ],

};