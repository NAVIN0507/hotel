'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type RoomProps = {
  pictures: string[];
  video: string;
};

const Hero = ({ pictures, video }: RoomProps) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    if (!slider.current) return;

    const startAutoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 3000);
    };

    const stopAutoplay = () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };

    // Start autoplay
    startAutoplay();

    // Pause autoplay on hover
    const sliderElement = slider.current.container;
    sliderElement.addEventListener('mouseenter', stopAutoplay);
    sliderElement.addEventListener('mouseleave', startAutoplay);

    return () => {
      stopAutoplay();
      sliderElement.removeEventListener('mouseenter', stopAutoplay);
      sliderElement.removeEventListener('mouseleave', startAutoplay);
    };
  }, [slider]);

  const goToPrevious = () => {
    slider.current?.prev();
  };

  const goToNext = () => {
    slider.current?.next();
  };

  return (
    <section className="max-w-screen p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Carousel - takes full width */}
        <div className="w-full relative group">
          <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
            {pictures.map((pic, index) => (
              <div className="keen-slider__slide" key={index}>
                <Image
                  src={pic}
                  alt={`hero-image-${index}`}
                  width={1500}
                  height={600}
                  className="rounded-2xl w-full h-[600px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {pictures.map((_, index) => (
              <button
                key={index}
                onClick={() => slider.current?.moveToIdx(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-110'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;