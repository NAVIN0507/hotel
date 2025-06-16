import React from 'react';

const MobileBentoGrid = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-50 font-serif text-gray-800">
      {/* Header for the section */}
      <div className="flex items-center mb-2 w-full max-w-xs justify-center">
        <span className="flex-grow h-px bg-gray-300 mx-2"></span>
        <p className="text-xs text-gray-600 tracking-widest uppercase whitespace-nowrap font-sans">
          ROOMS AND COTTAGES
        </p>
        <span className="flex-grow h-px bg-gray-300 mx-2"></span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-0 mb-10 text-center uppercase tracking-wide text-gray-800">
        DISCOVER OUR ROOMS
      </h1>

      <div className="relative h-fit p-4 bg-cover bg-center rounded-md bg-hero w-full">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-md" />

        {/* Content box */}
        <div className="relative z-10 bg-[#011D38]/90 w-full h-fit p-5 mt-40 rounded-xl">
          <h1 className="text-center uppercase text-white text-2xl font-mono font-bold tracking-wide">
            Wood House
          </h1>
            <p className="text-[#C1C1C1] text-center mt-5 leading-relaxed text-sm">
            Spoil yourself with the assortment in cuisine and taste. Explore & Investigate the wide
            range of food you'd be honored with no place else.
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#b9982e] text-white px-6 py-2 rounded-full w-full text-center justify-center items-center flex mx-auto mt-4 transition-all">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBentoGrid;
