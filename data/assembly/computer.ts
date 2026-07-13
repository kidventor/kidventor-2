import { AssemblyMission } from "@/types/assembly";

export const computerAssembly: AssemblyMission = {

  id: "computer-assembly",

  title: "Build Your First Computer",

  description:
    "Install the main computer parts in the correct order.",

  difficulty: "Easy",

  rewardXP: 50,

  rewardBadge: "Junior Computer Engineer",

  parts: [

    {
      id: "motherboard",
      title: "Motherboard",
      image: "/images/hardware/motherboard.png",
      correctSlot: "motherboard",
    },

    {
      id: "cpu",
      title: "CPU",
      image: "/images/hardware/cpu.png",
      correctSlot: "cpu",
    },

    {
      id: "ram",
      title: "RAM",
      image: "/images/hardware/ram.png",
      correctSlot: "ram",
    },

  ],

  correctOrder: [

    "motherboard",

    "cpu",

    "ram",

  ],

};