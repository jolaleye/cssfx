const requireEffect = require.context('../effects', false, /\.vue$/);
const effectList = requireEffect.keys();

const effects = {};
const components = {};

for (const filename of effectList) {
  const name = filename.replace('./', '').replace('.vue', '');
  const type = name.substring(0, name.indexOf('-'));
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

  effects[name] = { name, type, html, css };
  components[name] = component;
}

export { effects, components };
