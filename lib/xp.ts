export function calculateXP(
  completedLessons: number,
  completedChallenges: number
) {
  return (completedLessons * 100) + (completedChallenges * 50);
}

export function getLevel(xp: number) {
  return Math.floor(xp / 500) + 1;
}

const XP_KEY = "kidventor-xp";

export function getXP() {
  if (typeof window === "undefined") return 0;

  const xp = localStorage.getItem(XP_KEY);

  return xp ? Number(xp) : 0;
}

export function saveXP(xp: number) {
  if (typeof window === "undefined") return;

  localStorage.setItem(XP_KEY, xp.toString());
}

export function addXP(amount: number) {
  const currentXP = getXP();

  const newXP = currentXP + amount;

  saveXP(newXP);

  return newXP;
}