"use client";

import React, { useRef, useEffect, useState } from "react";
import { RichText } from "./RichText";
import { Quote } from "lucide-react";

interface SectionProps {
  title: string;
  content: string;
  ritualQuote?: string;
  index: number;
}

export const Section: React.FC<SectionProps> = ({ title, content, ritualQuote, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`min-h-[80vh] flex flex-col justify-center py-20 max-w-3xl mx-auto px-6 transition-all duration-800 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 mb-8 leading-tight">
        {title}
      </h2>
      <div className="prose prose-lg prose-invert prose-stone mb-8">
        <RichText text={content} className="text-stone-300 leading-loose text-lg md:text-xl" />
      </div>

      {ritualQuote && (
        <div 
          className={`relative pl-8 border-l-2 border-rose-700/50 my-8 py-2 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <Quote className="absolute -top-4 -left-3 text-stone-800 fill-stone-800" size={24} />
          <p className="font-serif italic text-stone-400 text-lg">
            "{ritualQuote}"
          </p>
          <p className="text-xs uppercase tracking-widest text-stone-600 mt-2">
            Uit het Rituaal
          </p>
        </div>
      )}
    </div>
  );
};
