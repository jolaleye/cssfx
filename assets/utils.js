export function shuffleEffects(obj) {
  const copy = Object.entries(obj).slice(0);
  const length = copy.length;

  let index = -1;
  let lastIndex = length - 1;
  while (++index < length) {
    const randomIndex = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = copy[randomIndex];
    copy[randomIndex] = copy[index];
    copy[index] = value;
  }

  const newEffects = {};
  for (const effect of copy) {
    newEffects[effect[0]] = effect[1];
  }

  return newEffects;
}
