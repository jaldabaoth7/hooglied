import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mountain, Flame, Droplets, Wind, Heart } from "lucide-react";
import { journeys } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { Section } from "@/components/Section";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return journeys.map((journey) => ({
    id: journey.id,
  }));
}

export default async function JourneyPage({ params }: PageProps) {
  const { id } = await params;
  const journey = journeys.find((j) => j.id === id);
  const { theme, journeyPage } = siteConfig;

  if (!journey) {
    notFound();
  }


  // Determine theme colors based on journey color
  // This is a simple mapping, could be more sophisticated
  const getThemeColor = (color: string) => {
    switch (color) {
      case "stone": return "text-stone-500";
      case "orange": return "text-orange-500";
      case "cyan": return "text-cyan-500";
      case "sky": return "text-sky-500";
      case "rose": return "text-rose-500";
      default: return "text-stone-500";
    }
  };

  const themeColor = getThemeColor(journey.color);

  return (
    <main className={`min-h-screen text-${theme.baseColor}-200 selection:bg-${theme.accentColor}-500/30 pb-20`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50">
        <Link 
          href="/"
          className={`inline-flex items-center gap-2 text-${theme.baseColor}-400 hover:text-${theme.baseColor}-100 transition-colors`}
        >
          <ArrowLeft size={20} />
          <span className="uppercase tracking-widest text-sm font-medium">{journeyPage.backText}</span>
        </Link>
      </nav>

      {/* Header */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className={`absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center ${themeColor}`}>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className={`mb-8 inline-block p-4 rounded-full bg-${theme.baseColor}-900/50 backdrop-blur-sm border border-${theme.baseColor}-800 ${themeColor}`}>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-serif font-bold mb-6 text-${theme.baseColor}-100`}>
            {journey.title}
          </h1>
          
          <p className={`text-xl md:text-2xl text-${theme.baseColor}-400 font-light max-w-2xl mx-auto`}>
            {journey.subtitle}
          </p>
          
          <div className={`mt-20 animate-bounce text-${theme.baseColor}-600`}>
            <span className="text-sm uppercase tracking-widest">{journeyPage.scrollText}</span>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto">
        {journey.sections.map((section, index) => (
          <Section 
            key={index}
            title={section.title}
            content={section.content}
            index={index}
          />
        ))}
      </div>

      {/* Next Journey Link (Optional) */}
      <div className="py-20 text-center">
        <Link 
          href="/"
          className={`inline-block px-8 py-4 border border-${theme.baseColor}-800 rounded-full hover:bg-${theme.baseColor}-900 transition-colors text-${theme.baseColor}-400 hover:text-${theme.baseColor}-200`}
        >
          {journeyPage.returnText}
        </Link>
      </div>
    </main>
  );
}
