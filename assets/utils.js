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

  return Object.fromEntries(copy);
}


// Polifyll to Object.fromEntries
export function fromEntries(iterable) {
  return [...iterable]
    .reduce((obj, {
      0: key,
      1: val
    }) => Object.assign(obj, {
      [key]: val
    }), {})
}
