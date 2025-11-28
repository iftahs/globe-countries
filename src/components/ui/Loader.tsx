import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-blue-400/30 bg-blue-900">
        <div className="absolute inset-0 w-[200%] h-full animate-spin-slow opacity-60">
          {/* Stylized continents/clouds using gradients */}
          <div className="absolute top-2 left-4 w-8 h-6 bg-green-500/40 rounded-full blur-sm"></div>
          <div className="absolute top-8 left-12 w-10 h-8 bg-green-500/40 rounded-full blur-sm"></div>
          <div className="absolute bottom-4 left-8 w-12 h-4 bg-green-500/40 rounded-full blur-sm"></div>

          <div className="absolute top-4 left-[60%] w-8 h-6 bg-green-500/40 rounded-full blur-sm"></div>
          <div className="absolute top-10 left-[70%] w-10 h-8 bg-green-500/40 rounded-full blur-sm"></div>
          <div className="absolute bottom-6 left-[65%] w-12 h-4 bg-green-500/40 rounded-full blur-sm"></div>
        </div>

        {/* Grid lines for globe effect */}
        <div className="absolute inset-0 rounded-full border border-blue-300/20" style={{ transform: 'rotateX(60deg)' }}></div>
        <div className="absolute inset-0 rounded-full border border-blue-300/20" style={{ transform: 'rotateX(-60deg)' }}></div>
        <div className="absolute inset-0 rounded-full border border-blue-300/20" style={{ transform: 'rotateY(60deg)' }}></div>
        <div className="absolute inset-0 rounded-full border border-blue-300/20" style={{ transform: 'rotateY(-60deg)' }}></div>

        {/* Shine effect */}
        <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full blur-md"></div>
      </div>
      <p className="mt-4 text-blue-200 font-light tracking-widest animate-pulse">LOADING WORLD DATA...</p>

    </div>
  );
};

export default Loader;
