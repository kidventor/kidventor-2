export const keyboardLesson = {
  id: "hardware-002",

  emoji: "⌨️",

  title: "Keyboard Basics",

  difficulty: "Beginner",

  duration: "15 Minutes",

  objectives: [
    "Identify the keyboard.",
    "Recognize alphabet keys.",
    "Recognize number keys.",
    "Use the keyboard correctly.",
  ],

vocabulary: {
  words: [
    {
      knowledgeId: "keyboard",
    },
  ],
},

  professor: {
  speech:
    "Fantastic! You've completed your first mission. Now let's meet one of the most important computer tools—the keyboard. Every programmer, writer, and inventor learns how to use it. Let's explore together!",
},

byte: {
  speech:
    "The keyboard is one of my favourite computer parts! Let's see how many keys you can discover today!",
},

funFact: {
  fact:
    "The QWERTY keyboard layout has been used for more than 150 years!",
},

  content: [
    {
      id: "keyboard",

      heading: "What is a Keyboard?",

      body:
        "A keyboard is an input device used to type letters, numbers and symbols into a computer.",

      tip:
        "Use your fingers gently when typing.",

      image: "/images/hardware/keyboard.webp",

      activity:
        "Find the letters A, B and C on a keyboard.",
    },

    {
      id: "alphabet",

      heading: "Alphabet Keys",

      body:
        "Alphabet keys are used to type letters from A to Z.",

      tip:
        "Try typing your own name.",

      image: "/images/hardware/keyboard.webp",

      activity:
        "Locate the first letter of your name.",
    },
  ],

  challenge: {
    id: "challenge-002",

    title: "Keyboard Challenge",

    instruction:
      "Find the letters A, B and C on a real keyboard or a picture of a keyboard.",

    type: "practice",

    rewardXP: 50,

    rewardBadge: "Keyboard Rookie",

    buttonText: "I Have Completed This Challenge",

    completed: false,
  },
};