const BADGES_KEY = "kidventor-badges";

export function getBadges(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(BADGES_KEY);

  return data ? JSON.parse(data) : [];
}

export function unlockBadge(badge: string) {
  if (typeof window === "undefined") return;

  const badges = getBadges();

  if (!badges.includes(badge)) {
    badges.push(badge);

    localStorage.setItem(
      BADGES_KEY,
      JSON.stringify(badges)
    );
  }
}

export function hasBadge(badge: string) {
  return getBadges().includes(badge);
}