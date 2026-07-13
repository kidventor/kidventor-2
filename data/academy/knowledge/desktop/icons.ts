import { KnowledgeItem } from "@/types/knowledge";
import { knowledgeTemplate } from "../template";

export const iconsKnowledge: KnowledgeItem = {

  ...knowledgeTemplate,

  id: "icons",

  title: "Icons",

  heroImage: "/images/desktop/icons.png",

  meaning:
    "Icons are small pictures on the Desktop that represent programs, files or folders.",

  professorSpeech:
    "Think of icons as signposts. Each one helps you quickly find something on your computer.",

  funFact:
    "Double-clicking an icon usually opens it.",

  activity:
    "Count how many icons you can see on a computer Desktop.",

  miniMission:
    "Can you identify one folder icon?",

  category: "Desktop",

  order: 2,

  related: [

    {
      id: "desktop",
      knowledgeId: "desktop",
    },

    {
      id: "cursor",
      knowledgeId: "cursor",
    },

    {
      id: "taskbar",
      knowledgeId: "taskbar",
    },

  ],

};