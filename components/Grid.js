import Effect from './Effect';
import effects from '../effects/index';

export default function Grid({ preview }) {
  return (
    <div className="container flex flex-wrap mx-auto px-2 py-4 md:px-3 lg:px-16 xl:px-32 xl:py-8">
      {Object.values(effects).map(({ name, Component }) => (
        <Effect key={name} preview={preview} name={name}>
          <Component />
        </Effect>
      ))}
    </div>
  );
}
