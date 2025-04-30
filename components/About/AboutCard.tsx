import React from 'react';

const AboutCard = () => {
  return (
    <section className='relative h-fit bg-cover bg-center bg-hero rounded-2xl'>
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className='flex gap-2 p-40 items-center justify-between relative z-10'>
        {[254, 168, 128].map((value, index) => (
          <div key={index} className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-6xl font-mono text-white/95  font-bold'>
              {value}
            </h1>
            <p className='text-white/90 text-xl drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]'>
              NEW VISITORS
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCard;
