function Modal({ show, onClose, children }) {
  return (
    <div
      style={{
        transform: show ? "translateX(0%)" : "translateX(-200%)",
      }}
      className="absolute top-0 left-0 w-full h-full z-10 transition-opacity duration-900"
    >
      <div className="bg-orange-200 container mx-auto max-w-2xl h-[80vh] mb-4 py-6 px-4 rounded-lg border border-gray-600 shadow-md">
        <div className="bg-orange-300">
          <button
            onClick={() => {
              onClose(false);
            }}
            className="w-10 h-10 mb-4 font-bold rounded-md text-red-600"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
