const requireEffect = require.context('../effects', false, /\.vue$/);
const effectList = requireEffect.keys();

const effects = {};
const components = {};

for (const filename of effectList) {
  const name = filename.replace('./', '').replace('.vue', '');
  const raw = require(`!!raw-loader!~/effects/${name}`).default;
  const component = requireEffect(filename).default;

  const html = /<template>(.*?)<\/template>/g // find html between template tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?template>/g, '') // remove template tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\n/g, '\n') // replace escape characters
    .replace(/\\"/g, '"');

  const css = /<style scoped>(.*?)<\/style>/g // find css between style tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?style(?: scoped)?>/g, '') // remove style tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\n/g, '\n'); // replace \n with newlines

  effects[name] = { html, css };
  components[name] = component;
}

function shuffleEffects() {
  const copy = Object.entries(effects).slice(0);
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

export { effects, components, shuffleEffects };
