export interface RelatedKnowledge {

  id: string;

  knowledgeId: string;

}

export interface KnowledgeItem {

  id: string;

  title: string;

  heroImage: string;

  meaning: string;

  professorSpeech: string;

  funFact: string;

  activity: string;

  audio?: string;

  animation?: string;

  miniMission?: string;

  difficulty?: "Easy" | "Medium" | "Hard";

  xp?: number;

  category?: string;

  order?: number;

  unlocked?: boolean;

  completed?: boolean;

  related: RelatedKnowledge[];

}