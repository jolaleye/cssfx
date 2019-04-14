const requireEffect = require.context('../effects', false, /\.vue$/);
const effectList = requireEffect.keys();

export default function() {
  const effects = {};
  const components = {};

  for (const filename of effectList) {
    const name = filename.replace('./', '').replace('.vue', '');
    const raw = require(`!!raw-loader!~/effects/${name}`).default;
    const component = requireEffect(filename).default;

    const html = /<template>(.*?)<\/template>/g // find html between template tags
      .exec(JSON.stringify(raw))[0]
      .replace(/<\/?template>/g, '') // remove template tags
      .replace(/\\n/g, '\n'); // replace \n with newlines

    const css = /<style scoped>(.*?)<\/style>/g // find css between style tags
      .exec(JSON.stringify(raw))[0]
      .replace(/<\/?style(?: scoped)?>/g, '') // remove style tags
      .replace(/\\n/g, '\n'); // replace \n with newlines

    effects[name] = { html, css };
    components[name] = component;
  }

  return { effects, components };
}
