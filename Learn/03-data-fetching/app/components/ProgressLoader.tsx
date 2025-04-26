"use client";

export default function ProgressLoader() {
  return (
    <>
      {/* Custom keyframes for the progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      <div className="flex h-screen w-full items-center justify-center">
        {/* Outer container for the progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded overflow-hidden">
          {/* Animated progress indicator */}
          <div
            className="h-full bg-[#ff5858] rounded"
            style={{ animation: "progress 2s linear infinite" }}
          ></div>
        </div>
      </div>
    </>
  );
}
