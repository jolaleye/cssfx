import { color } from './theme';

export default {
  name: 'Ring Loader',
  el: RingLoader
};

function RingLoader() {
  return (
    <>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" />
      </svg>

      <style jsx>{`
        svg {
          width: 3rem;
          transform-origin: center center;
          animation: rotate 2s linear infinite;
        }

        circle {
          fill: none;
          stroke: ${color.red};
          stroke-width: 2;
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
          }
          100% {
            stroke-dashoffset: -125px;
          }
        }
      `}</style>
    </>
  );
}
