export interface LessonContent {
  id: string;
  heading: string;
  body: string;
  tip: string;
  image?: string;
  activity?: string;
}

export interface Professor {
  speech: string;
}
export interface Byte {
  speech: string;
}

export interface LessonQuestion {
  id: number;

  type: "multiple-choice";

  question: string;

  options: string[];

  answer: number;
}

export interface LessonChallenge {
  id: string;

  title: string;

  instruction: string;

  type: string;

  questions: LessonQuestion[];

  rewardXP: number;

  rewardBadge: string;

  buttonText: string;

  completed: boolean;
}

export interface Lesson {
  id: string;

  emoji: string;

  title: string;

  difficulty: string;

  duration: string;

  professor: Professor;

  byte: Byte;

  funFact: FunFact;

  objectives: string[];

  content: LessonContent[];

  challenge: LessonChallenge;

  vocabulary: Vocabulary;
  
}

export interface FunFact {
  fact: string;
}

export interface Vocabulary {
  words: VocabularyItem[];
}

export interface VocabularyItem {
  knowledgeId: string;
}