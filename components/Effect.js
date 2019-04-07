export default function Effect({ children, preview, name }) {
  return (
    <div className="w-1/2 mb-4 px-2 sm:w-1/3 md:w-1/4 md:px-3 md:mb-6 lg:w-1/5 xl:px-4 xl:mb-8">
      <div
        className="flex items-center justify-center h-32 hover:bg-gray-100 hover:cursor-pointer"
        onClick={() => preview(name)}
      >
        {children}
      </div>
    </div>
  );
}
