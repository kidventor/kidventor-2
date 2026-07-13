export interface AssemblyPart {
  id: string;
  title: string;
  image: string;
  correctSlot: string;
}

export interface AssemblyMission {
  id: string;
  title: string;
  description: string;

  difficulty: "Easy" | "Medium" | "Hard";

  rewardXP: number;

  rewardBadge?: string;

  parts: AssemblyPart[];

  correctOrder: string[];
}