export function Loader({show}) {
  return show && (
    <>
      <div className="fixed space-x-2 top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </>
  );
}
