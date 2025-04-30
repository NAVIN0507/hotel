import React from 'react';

const testimonials = [
  {
    name: 'Alex Harmony',
    title: 'Co-Founder of D&IIT',
    content:
      'Immerse Yourself In The Captivating Works Of Bliss Gardens, Where Nature And Aesthetics Unite Seamlessly. Explore Lush Landscapes, Vibrant Gardens,Immerse Yourself In The Captivating Works Of Bliss Gardens, Where Nature And Aesthetics Unite Seamlessly. Explore Lush Landscapes, Vibrant Gardens.',
  },
  {
    name: 'Alex Harmony',
    title: 'Co-Founder of D&IIT',
    content:
      'Immerse Yourself In The Captivating Works Of Bliss Gardens, Where Nature And Aesthetics Unite Seamlessly. Explore Lush Landscapes, Vibrant Gardens,Immerse Yourself In The Captivating Works Of Bliss Gardens, Where Nature And Aesthetics Unite Seamlessly. Explore Lush Landscapes, Vibrant Gardens.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#02162c] text-white py-16 px-4 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-300">Customers Reviews</p>
        <h2 className="text-4xl md:text-5xl uppercase font-semibold mt-2 font-mono">
          Hear What Our Past <br className="hidden md:block" />
          <span className="ml-10 flex"><div className="w-20 mt-6 mr-2 -ml-7 hidden lg:block h-0 border border-gray-500" />Guests Have Said</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#052d56] p-6 rounded-xl min-h-[250px] flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#02162c] rounded-full mr-4" />
              </div>
              <p className="text-sm leading-relaxed text-gray-200">
                {testimonial.content}
              </p>
              <div className="mt-4">
                <p className="font-semibold text-white text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
