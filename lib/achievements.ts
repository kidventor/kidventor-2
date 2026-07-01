export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const achievements: Achievement[] = [

  {
    id: "hardware-explorer",
    title: "Hardware Explorer",
    description: "Completed the Parts of a Computer lesson.",
    icon: "🖥️",
  },

  {
    id: "keyboard-rookie",
    title: "Keyboard Rookie",
    description: "Finished the Keyboard Basics lesson.",
    icon: "⌨️",
  },

  {
    id: "mouse-master",
    title: "Mouse Master",
    description: "Completed Mouse Practice.",
    icon: "🖱️",
  },

];