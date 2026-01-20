"use client";

import React from "react";
import { journeys } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { JourneyCard } from "@/components/JourneyCard";

const iconMap: Record<string, React.ElementType> = {

};

// Tailwind kan geen dynamische klassennamen detecteren, dus we moeten volledige klassen gebruiken
const accentColors: Record<string, { gradient: string; text: string; border: string; bg: string }> = {
  rose: {
    gradient: "from-rose-500 via-rose-400 to-rose-600",
    text: "text-rose-500",
    border: "border-rose-900",
    bg: "bg-rose-900/30",
  },
  amber: {
    gradient: "from-amber-500 via-amber-400 to-amber-600",
    text: "text-amber-500",
    border: "border-amber-900",
    bg: "bg-amber-900/30",
  },
  blue: {
    gradient: "from-blue-500 via-blue-400 to-blue-600",
    text: "text-blue-500",
    border: "border-blue-900",
    bg: "bg-blue-900/30",
  },
  emerald: {
    gradient: "from-emerald-500 via-emerald-400 to-emerald-600",
    text: "text-emerald-500",
    border: "border-emerald-900",
    bg: "bg-emerald-900/30",
  },
  purple: {
    gradient: "from-purple-500 via-purple-400 to-purple-600",
    text: "text-purple-500",
    border: "border-purple-900",
    bg: "bg-purple-900/30",
  },
};

export default function Home() {
  const { theme, hero, intro, journeys: journeysConfig, ritualCTA, footer } = siteConfig;
  const accent = accentColors[theme.accentColor] || accentColors.rose;
  
  return (
    <main className="min-h-screen text-stone-200 selection:bg-rose-500/30">
      {/* Hero Section - Full Height */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Decorative Rose Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 border ${accent.border} rounded-full`} />
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 border ${accent.border} rounded-full`} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto animate-fade-in-up">
          {/* Small ornament above */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className={`w-16 h-[1px] ${accent.bg}`} />
            <div className={`w-2 h-2 ${accent.bg} rounded-full`} />
            <div className={`w-16 h-[1px] ${accent.bg}`} />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-stone-100 tracking-tight leading-[1.1]">
            {hero.titleLine1}
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-br ${accent.gradient}`}>{hero.titleLine2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-400 font-light italic max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {hero.quote}
          </p>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center gap-2 text-stone-600">
            <span className="text-xs uppercase tracking-widest">{hero.scrollIndicator}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <div className={`inline-block p-4 rounded-full bg-${theme.baseColor}-900/50 border border-${theme.baseColor}-800 text-${theme.accentColor}-500 mb-6`}>
        </div>
        <h2 className={`text-3xl md:text-4xl font-serif font-bold text-${theme.baseColor}-100 mb-6`}>
          {intro.title}
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed text-${theme.baseColor}-400 max-w-2xl mx-auto mb-12`}>
          {intro.description}
        </p>
      </section>

      {/* The Four Journeys - Interactive Timeline */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-${theme.baseColor}-100 mb-4`}>
            {journeysConfig.title}
          </h2>
          <p className={`text-lg text-${theme.baseColor}-400 mb-2`}>
            {journeysConfig.subtitle}
          </p>
          <p className={`text-sm text-${theme.baseColor}-600 italic`}>
            {journeysConfig.hint}
          </p>
        </div>

        {/* Journey Cards - Dynamically generated */}
        <div className="space-y-8">
          {journeys.filter(j => j.id !== 'het-schaap').map((journey, index) => {
            const colorClass = journey.color === 'stone' ? 'stone-400' :
                              journey.color === 'orange' ? 'orange-400' :
                              journey.color === 'cyan' ? 'cyan-400' :
                              journey.color === 'sky' ? 'sky-400' : 'stone-400';
            const hoverColorClass = journey.color === 'stone' ? 'stone-200' :
                              journey.color === 'orange' ? 'orange-300' :
                              journey.color === 'cyan' ? 'cyan-300' :
                              journey.color === 'sky' ? 'sky-300' : 'stone-200';
            const elementMap: Record<string, string> = {
              'reis-1': 'Aarde',
              'reis-2': 'Vuur', 
              'reis-3': 'Water',
              'reis-4': 'Lucht'
            };
            const orderMap: Record<string, string> = {
              'reis-1': 'Eerste Reis',
              'reis-2': 'Tweede Reis',
              'reis-3': 'Derde Reis',
              'reis-4': 'Vierde Reis'
            };
            
            return (
              <a 
                key={journey.id}
                href={`/journey/${journey.id}`}
                className="group block relative"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-${theme.baseColor}-900/40 border border-${theme.baseColor}-800 hover:border-${theme.baseColor}-600 hover:bg-${theme.baseColor}-900/60 transition-all`}>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                      <span className={`text-xs uppercase tracking-widest text-${theme.baseColor}-600`}>{orderMap[journey.id] || journey.subtitle}</span>
                      <span className={`text-xs text-${theme.baseColor}-700`}>•</span>
                      <span className={`text-xs uppercase tracking-widest text-${theme.baseColor}-600`}>{elementMap[journey.id] || ''}</span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-serif font-bold text-${theme.baseColor}-100 mb-3 group-hover:text-${theme.accentColor}-400 transition-colors`}>
                      {journey.title}
                    </h3>
                    <p className={`text-${theme.baseColor}-400 leading-relaxed`}>
                      {journey.description}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 text-${theme.baseColor}-600 group-hover:text-${theme.baseColor}-400 group-hover:translate-x-2 transition-all`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Het Schaap - Special Card (if exists) */}
        {journeys.find(j => j.id === 'het-schaap') && (
          <div className={`mt-12 pt-12 border-t border-${theme.baseColor}-800`}>
            <a 
              href="/journey/het-schaap"
              className="group block relative"
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-gradient-to-br from-${theme.accentColor}-950/20 to-${theme.baseColor}-900/40 border border-${theme.accentColor}-900/30 hover:border-${theme.accentColor}-700/50 hover:bg-${theme.accentColor}-950/30 transition-all`}>
                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-${theme.accentColor}-900/30 flex items-center justify-center group-hover:bg-${theme.accentColor}-900/50 transition-colors`}>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                    <span className={`text-xs uppercase tracking-widest text-${theme.accentColor}-600`}>Quintessence</span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-serif font-bold text-${theme.accentColor}-200 mb-3 group-hover:text-${theme.accentColor}-100 transition-colors`}>
                    {journeys.find(j => j.id === 'het-schaap')?.title}
                  </h3>
                  <p className={`text-${theme.baseColor}-400 leading-relaxed`}>
                    {journeys.find(j => j.id === 'het-schaap')?.description}
                  </p>
                </div>
                <div className={`flex-shrink-0 text-${theme.accentColor}-600 group-hover:text-${theme.accentColor}-400 group-hover:translate-x-2 transition-all`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        )}
      </section>

      {/* CTA to Full Ritual */}
      {ritualCTA.show && (
        <section className="px-6 py-24 max-w-4xl mx-auto text-center">
          <div className={`p-12 rounded-2xl bg-gradient-to-br from-${theme.baseColor}-900/80 to-${theme.baseColor}-800/60 border border-${theme.baseColor}-800`}>
            <h2 className={`text-2xl md:text-3xl font-serif font-bold text-${theme.baseColor}-100 mb-4`}>
              {ritualCTA.title}
            </h2>
            <p className={`text-${theme.baseColor}-400 mb-8 max-w-xl mx-auto`}>
              {ritualCTA.description}
            </p>
            <a 
              href="/rituaal"
              className={`group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-br from-${theme.accentColor}-900/40 to-${theme.accentColor}-950/40 border border-${theme.accentColor}-900/60 rounded-xl hover:border-${theme.accentColor}-700/80 transition-all shadow-xl hover:shadow-${theme.accentColor}-900/30`}
            >
              <span className={`font-serif text-${theme.accentColor}-400 text-xl`}>{ritualCTA.linkText}</span>
              <span className={`text-${theme.accentColor}-600 group-hover:translate-x-2 transition-transform text-2xl`}>→</span>
            </a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-16 text-center">
        <div className="max-w-md mx-auto mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-12 h-[1px] bg-${theme.baseColor}-800`} />
            <div className={`w-1.5 h-1.5 bg-${theme.accentColor}-900/50 rounded-full`} />
            <div className={`w-12 h-[1px] bg-${theme.baseColor}-800`} />
          </div>
        </div>
        <p className={`text-${theme.baseColor}-600 text-sm`}>{footer.copyright}</p>
        <p className={`text-${theme.baseColor}-700 text-xs mt-2`}>{footer.tagline}</p>
      </footer>
    </main>
  );
}
