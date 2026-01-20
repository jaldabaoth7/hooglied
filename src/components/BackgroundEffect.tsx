"use client";

export const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Main blooming effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-[radial-gradient(circle,rgba(136,19,55,0.4)_0%,transparent_70%)] animate-pulse-slow"
      />
      
      {/* Secondary effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] bg-[radial-gradient(circle,rgba(69,10,10,0.4)_0%,transparent_70%)] animate-pulse-slower"
      />
    </div>
  );
};
