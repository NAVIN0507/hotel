import React from 'react';
type itemType = {
  value:string;
  label:string;
}
const items : itemType[] = [
  {
    value:"1000+",
    label:"Total Customers"
  },
  {
    label:"Average Rating",
    value:"4.7+"
  },
  {
    label:"frequent Custoemrs",
    value:"300+"
  }
]
const AboutCard = () => {
  return (
    <section className='relative h-fit bg-cover bg-center bg-about-image rounded-2xl mb-20'
      style={{ backgroundImage: "url('/assets/images/about-us-pic-2.jpg')" }}

    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
      <div className='flex gap-2 p-40 items-center justify-between relative z-10 max-sm:flex-col max-sm:gap-9'>
        {items.map((value, index) => (
          <div key={index} className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-6xl font-mono text-white/95  font-bold'>
              {value.value}
            </h1>
            <p className='text-white/90 text-xl max-sm:text-md drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]'>
              {value.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCard;


//  Customers : 1000 + Avergae rating 4.7+  Frequent Customer:300+
