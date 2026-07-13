import type { World } from "@/types/world";

export const worldRegistry: World[] = [
  {
    id: "hardware",

    title: "Computer Hardware",

    description:
      "Learn every part of the computer and how it works.",

    emoji: "🖥️",

    color: "from-cyan-500 to-blue-600",

    unlocked: true,

    lessonIds: [
      "hardware-001",
      "hardware-002",
    ],
  },

  {
    id: "internet",

    title: "Internet World",

    description:
      "Discover how the Internet connects the world.",

    emoji: "🌍",

    color: "from-green-500 to-emerald-600",

    unlocked: false,

    lessonIds: [],
  },

  {
    id: "coding",

    title: "Coding World",

    description:
      "Build programs and become a young developer.",

    emoji: "💻",

    color: "from-purple-500 to-indigo-600",

    unlocked: false,

    lessonIds: [],
  },

  {
    id: "ai",

    title: "AI Laboratory",

    description:
      "Meet Artificial Intelligence and future technology.",

    emoji: "🤖",

    color: "from-pink-500 to-red-500",

    unlocked: false,

    lessonIds: [],
  },
];