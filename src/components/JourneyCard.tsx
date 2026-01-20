"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Flame, Droplets, Wind, Heart } from "lucide-react";
import { Journey } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Flame,
  Droplets,
  Wind,
  Heart,
};

interface JourneyCardProps {
  journey: Journey;
  index: number;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({ journey, index }) => {
  const Icon = iconMap[journey.icon] || Mountain;

  return (
    <Link href={`/journey/${journey.id}`}>
      <div
        className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 p-8 hover:border-stone-600 transition-colors duration-300 cursor-pointer h-full"
        style={{ 
          animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
        }}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Icon size={120} />
        </div>
        
        <div className="relative z-10">
          <div className="mb-4 p-3 bg-stone-800 rounded-lg w-fit group-hover:bg-stone-700 transition-colors">
            <Icon size={24} className="text-stone-200" />
          </div>
          
          <h3 className="text-xl font-serif font-bold text-stone-100 mb-2 group-hover:text-rose-500 transition-colors">
            {journey.title}
          </h3>
          
          <p className="text-sm text-stone-400 font-medium mb-4 uppercase tracking-wider">
            {journey.subtitle}
          </p>
          
          <p className="text-stone-400 leading-relaxed line-clamp-3">
            {journey.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
