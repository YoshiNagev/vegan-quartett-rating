export function pickRandomItem<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("pickRandomItem received an empty array.");
  }

  const index = Math.floor(Math.random() * items.length);
  return items[index];
}