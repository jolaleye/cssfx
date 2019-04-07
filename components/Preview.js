export default function Preview({ children, close }) {
  return (
    <div className="overlay fixed top-0 left-0 w-screen h-screen flex" onClick={close}>
      <div className="bg-white rounded-sm m-auto px-12 py-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-center">{children}</div>
      </div>

      <style jsx>{`
        .overlay {
          background-color: hsla(0, 0%, 0%, 0.6);
        }
      `}</style>
    </div>
  );
}
