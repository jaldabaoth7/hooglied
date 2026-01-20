"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Scroll } from "lucide-react";
import { ritual } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";
import { RichText } from "@/components/RichText";

export default function RitualPage() {
  const { theme, ritualPage } = siteConfig;

  return (
    <main className={`min-h-screen text-${theme.baseColor}-200 selection:bg-${theme.accentColor}-500/30 pb-20`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50">
        <Link 
          href="/"
          className={`inline-flex items-center gap-2 text-${theme.baseColor}-400 hover:text-${theme.baseColor}-100 transition-colors`}
        >
          <ArrowLeft size={20} />
          <span className="uppercase tracking-widest text-sm font-medium">{ritualPage.backText}</span>
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-block p-4 rounded-full bg-${theme.baseColor}-900/50 border border-${theme.baseColor}-800 text-${theme.accentColor}-500 mb-6`}>
            <Scroll size={48} />
          </div>
          <h1 className={`text-4xl md:text-6xl font-serif font-bold text-${theme.baseColor}-100 mb-4`}>
            {ritual.title}
          </h1>
          <p className={`text-xl text-${theme.baseColor}-400 font-light italic`}>
            {ritual.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`prose prose-lg prose-invert prose-${theme.baseColor} mx-auto bg-${theme.baseColor}-900/30 p-8 md:p-12 rounded-xl border border-${theme.baseColor}-800/50 shadow-2xl`}
        >
          <div className={`font-serif text-lg md:text-xl leading-loose text-${theme.baseColor}-300`}>
            <RichText text={ritual.content} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
