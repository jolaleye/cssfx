import EffectContainer from './EffectContainer';
import effects from '../effects/index';

export default function Grid() {
  const fx = effects.map(effect => {
    const Effect = effect.el;
    return (
      <EffectContainer key={effect.name}>
        <Effect />
      </EffectContainer>
    );
  });

  return <div className="container flex flex-wrap mx-auto px-2 py-4 md:px-3 lg:px-16 xl:px-32 xl:py-8">{fx}</div>;
}
