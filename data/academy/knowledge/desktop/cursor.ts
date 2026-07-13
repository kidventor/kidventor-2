import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const cursorKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "cursor",

  title: "Cursor",

  heroImage: "/images/desktop/cursor.png",

  meaning:
    "The cursor is the small arrow you move around the screen using the mouse.",

  professorSpeech:
    "The cursor is your hand inside the computer. Wherever it points, that's where your next action happens.",

  funFact:
    "The cursor changes shape depending on what you are doing.",

  activity:
    "Move the mouse and watch the cursor travel across the screen.",

  miniMission:
    "Can you move the cursor to an icon?",

  category: "Desktop",

  order: 3,

 related: [

  {
    id: "mouse",
    knowledgeId: "mouse",
  },

  {
    id: "icons",
    knowledgeId: "icons",
  },

  {
    id: "window",
    knowledgeId: "window",
  },

],

};