import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Vaibhav Menon',
        content:
      'My family loved our stay at Brundhavan Garden! The Deluxe Room was spacious, and the staff made us feel right at home. The view and cleanliness were excellent. Will definitely return',
  },
  {
    name: 'Priya Sharma',
   
    content:
      'A peaceful atmosphere and excellent amenities. The wooden room was cozy and beautiful. We enjoyed the kid’s play park and local attractions nearby. Highly recommended for couples!',
  },
  {
    name: 'Raja Subramanian',
   
    content:
      'Our group booked the Deluxe Room for a weekend getaway. Everything from room service to food choices exceeded expectations. The jeep safari was unforgettable!',
  },
  {
    name: 'Aishwarya Kumari',
    
    content:
      'Fantastic location with great facilities like Wi-Fi and power backup. The staff helped with our travel plans and pointed us to wonderful local sights. Our children loved the safe and fun environment.'
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleManualControl = (action:any) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-[#02162c] text-white py-16 px-4 rounded-2xl">
      <div className="max-w-6xl max-h-fit mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-300">Customers Reviews</p>
        <h2 className="text-4xl md:text-5xl uppercase font-semibold mt-2 font-mono">
          Hear What Our Past <br className="hidden md:block" />
          <span className="ml-10 flex"><div className="w-20 mt-6 mr-2 -ml-7 hidden lg:block h-0 border border-gray-500" />Guests Have Said</span>
        </h2>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <div className="bg-[#052d56] p-6 rounded-xl min-h-[250px] flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <img src="/assets/images/user_prof.avif" className='size-8 rounded-full' alt="" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-200">
                      {testimonial.content}
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          
        </div>
      </div>
    </section>
  );
}