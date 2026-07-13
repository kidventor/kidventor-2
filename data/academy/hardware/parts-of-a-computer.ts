export const partsOfComputerLesson = {
  id: "hardware-001",

  emoji: "🖥",

  title: "Parts of a Computer",

  difficulty: "Beginner",

  duration: "20 Minutes",

  professor: {
  speech:
    "Hello Explorer! 👋 Welcome to your very first KidVentor mission. Today we're going to discover the amazing parts of a computer. Every great inventor begins by learning the tools they use. Read carefully, look at the pictures, and enjoy the adventure!",
},

byte: {
  speech:
    "Hi Explorer! 🤖 I can't wait to explore computers with you. Watch carefully... I'll ask you something at the end of the mission!",
},

funFact: {
  fact:
    "The very first computer was so large that it filled an entire room!",
},

vocabulary: {

  words: [

    {
      knowledgeId: "computer",
    },

    {
      knowledgeId: "monitor",
    },

    {
      knowledgeId: "keyboard",
    },

    {
      knowledgeId: "mouse",
    },

  ],

},

  objectives: [
    "Identify the main parts of a computer.",
    "Explain the function of each part.",
    "Recognize computer parts in real life.",
  ],

  content: [

    {
      id: "computer",

      heading: "What is a Computer?",

      body:
        "A computer is an electronic device that accepts data, processes it, stores it, and produces useful information.",

      tip:
        "Think of a computer as a very smart helper that follows instructions.",

      image: "/images/hardware/computer.webp",

      activity:
        "Ask your teacher to show you a real computer.",
    },

    {
      id: "monitor",

      heading: "Monitor",

      body:
        "The monitor displays everything you see on the computer screen including pictures, videos and text.",

      tip:
        "It is like the television screen of a computer.",

      image: "/images/hardware/monitor.webp",

      activity:
        "Look around your classroom or home and point to a computer monitor.",
    },

    {
      id: "keyboard",

      heading: "Keyboard",

      body:
        "The keyboard is used to type letters, numbers and symbols into the computer.",

      tip:
        "Without a keyboard you cannot easily type your name.",

      image: "/images/hardware/keyboard.webp",

      activity:
        "Find the letter A on a keyboard.",
    },

    {
      id: "mouse",

      heading: "Mouse",

      body:
        "The mouse helps you point, click, drag and select items on the computer.",

      tip:
        "Move the mouse on the table and watch the pointer move.",

      image: "/images/hardware/mouse.webp",

      activity:
        "Practice moving a mouse without clicking.",
    },

  ],

challenge: {
  id: "challenge-001",

  title: "Computer Parts Mission",

  instruction:
    "Answer all five questions correctly to complete the mission.",

  type: "multiple-choice",

  rewardXP: 50,

  rewardBadge: "Hardware Explorer",

  buttonText: "Finish Mission",

  completed: false,

  questions: [

    {
      id: 1,
      type: "multiple-choice",
      question:
        "Which computer part shows pictures and videos?",
      options: [
        "Keyboard",
        "Monitor",
        "Mouse",
        "CPU",
      ],
      answer: 1,
    },

    {
      id: 2,
      type: "multiple-choice",
      question:
        "Which device is used for typing?",
      options: [
        "Keyboard",
        "Monitor",
        "Mouse",
        "Printer",
      ],
      answer: 0,
    },

    {
      id: 3,
      type: "multiple-choice",
      question:
        "Which device controls the pointer?",
      options: [
        "Mouse",
        "Monitor",
        "CPU",
        "SSD",
      ],
      answer: 0,
    },

    {
      id: 4,
      type: "multiple-choice",
      question:
        "Which one is an input device?",
      options: [
        "Keyboard",
        "Speaker",
        "Monitor",
        "Projector",
      ],
      answer: 0,
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Which part is called the computer screen?",
      options: [
        "Monitor",
        "Mouse",
        "Printer",
        "Scanner",
      ],
      answer: 0,
    },

  ],
},

};