"use client";
import React, { useRef, useEffect, useState } from "react";

const specials = [
  {
    title: "CUSTOMIZABLE MENU",
    subtitle: "EAT WHAT YOU LOVE",
    description:"Enjoy authentic South and North Indian flavors, crafted to suit your taste and time.",
    image: "/assets/images/cm-bh.jpg",
  },
  {
    title: "Camp Fire",
    subtitle: "GLOW & GATHER",
    description:
      "Unwind by the bonfire under Thandikudi’s starry skies — share laughter, music, and cozy vibes.",
    image: "/assets/images/camp-fire.jpg",
  },
  {
    title: "Jeep Safari",
    subtitle: "RIDE INTO THE WILD",
    description:
      "Embark on a thrilling jeep ride through forests and coffee trails, discovering hidden gems of the Western Ghats.",
    image: "/assets/images/jeep-safari.jpg",
  },
  {
    title: "Attractions Nearby",
    subtitle: "EXPLORE & EXPERIENCE",
    description:
      "Discover Thandikudi’s beauty — scenic viewpoints, ancient dolmens, and nature’s timeless charm.",
    image:"/assets/images/acc-card.jpg"
  },
];

export default function SpecialSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const firstSetRef = useRef<HTMLDivElement | null>(null);
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const [ready, setReady] = useState(false);
  const [animationName, setAnimationName] = useState<string>("");

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const firstSet = firstSetRef.current;

    if (!wrapper || !firstSet) return;

    // Clean up any previous style tag
    if (styleTagRef.current) {
      styleTagRef.current.remove();
      styleTagRef.current = null;
    }

    // Width we need to scroll (width of one set of items)
    const distance = firstSet.offsetWidth;

    if (distance === 0) return;

    // Speed control: pixels per second (tweak this)
    const pixelsPerSecond = 70; // smaller -> slower, larger -> faster
    const durationSeconds = Math.max(8, distance / pixelsPerSecond); // min duration clamp

    // Create unique animation name to avoid collisions
    const uniqueName = `marqueeScroll_${Math.random().toString(36).slice(2, 9)}`;
    setAnimationName(uniqueName);

    // Build keyframes: from 0 to -distance px
    const keyframes = `
      @keyframes ${uniqueName} {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${distance}px); }
      }
    `;

    // Create style tag and append
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      ${keyframes}

      /* assign the animation to the container class */
      .${uniqueName}-anim {
        animation: ${uniqueName} ${durationSeconds}s linear infinite;
        will-change: transform;
      }

      /* pause on hover */
      .${uniqueName}-anim:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleTag);
    styleTagRef.current = styleTag;

    // mark ready (so class is applied)
    setReady(true);

    // cleanup on unmount
    return () => {
      if (styleTagRef.current) {
        styleTagRef.current.remove();
        styleTagRef.current = null;
      }
    };
  }, []); // only run once on mount (recompute if you change content dynamically)

  return (
    <section className=" sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-700 flex flex-col lg:flex-row gap-4 lg:gap-2">
          WHAT'S SPECIAL WITH US?
          <div className="w-20 h-0 border border-gray-500 hidden lg:block mt-6 ml-6" />
        </h2>

        <div className="mt-8 overflow-hidden">
          {/* wrapperRef holds the visible area */}
          <div
            ref={wrapperRef}
            className="w-full overflow-hidden"
            // optional: onMouseEnter/onMouseLeave not needed because CSS :hover pauses
          >
            {/* inner animated container: apply generated class when ready */}
            <div
              className={`flex gap-8 items-stretch ${ready ? `${animationName}-anim` : ""}`}
              style={{ width: "max-content" }}
            >
              {/* FIRST SET (measured) */}
              <div ref={firstSetRef} className="flex gap-8">
                {specials.map((item, idx) => (
                  <Card key={`a-${idx}`} item={item} />
                ))}
              </div>

              {/* SECOND SET (duplicate) */}
              <div className="flex gap-8">
                {specials.map((item, idx) => (
                  <Card key={`b-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small presentational card component */
function Card({ item }: { item: typeof specials[0] }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[300px] md:w-[350px] h-[400px] text-black shadow-xl group cursor-pointer overflow-hidden relative rounded-2xl transition-transform duration-500 hover:scale-105 gap-2">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/30" />
      <div className="absolute flex flex-col items-start bottom-24 sm:bottom-20 px-5 sm:px-6 w-full z-10">
        <p className="text-xs sm:text-sm text-white tracking-widest uppercase mb-1">
          {item.subtitle}
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold">
          {item.title}
        </h3>
      </div>
      <div className="absolute bottom-6 px-5 sm:px-6  text-xs sm:text-sm text-white z-20 ">
        <p>{item.description}</p>
      </div>
    </div>
  );
}
