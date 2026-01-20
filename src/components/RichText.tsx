"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RichTextProps {
  text: string;
  className?: string;
}

export const RichText: React.FC<RichTextProps> = ({ text, className = "" }) => {
  // Split text into blocks by double newlines to handle paragraphs
  const blocks = text.split(/\n\n+/);

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        // Headers
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-2xl font-serif font-bold text-rose-500 mt-8 mb-4">
              {parseInline(block.replace('### ', ''))}
            </h3>
          );
        }
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-serif font-bold text-stone-100 mt-12 mb-6 border-b border-stone-800 pb-2">
              {parseInline(block.replace('## ', ''))}
            </h2>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="mb-6">
            {parseInline(block)}
          </p>
        );
      })}
    </div>
  );
};

const parseInline = (text: string): React.ReactNode => {
  // 1. Split by Tooltips: [text|tooltip]
  const parts = text.split(/(\[.*?\|.*?\])/g);

  return parts.map((part, i) => {
    const tooltipMatch = part.match(/^\[(.*?)\|(.*?)\]$/);
    if (tooltipMatch) {
      // Check if tooltip content is a URL
      if (tooltipMatch[2].startsWith('http')) {
        return (
          <a 
            key={i} 
            href={tooltipMatch[2]} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-rose-500 hover:underline decoration-dotted underline-offset-4"
          >
            {tooltipMatch[1]}
          </a>
        );
      }
      return <Tooltip key={i} text={tooltipMatch[1]} content={tooltipMatch[2]} />;
    }

    // 2. Parse Bold and Italic inside regular text
    return <span key={i}>{parseBoldItalic(part)}</span>;
  });
};

const parseBoldItalic = (text: string): React.ReactNode => {
  // Split by bold: **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-stone-100">{parseItalic(part.slice(2, -2))}</strong>;
    }
    return <span key={i}>{parseItalic(part)}</span>;
  });
};

const parseItalic = (text: string): React.ReactNode => {
  // Split by italic: *text* or _text_
  const parts = text.split(/(\*.*?\*|_.*?_)/g);
  return parts.map((part, i) => {
    if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
      return <em key={i} className="italic text-stone-400">{part.slice(1, -1)}</em>;
    }
    
    // Handle newlines within the text block
    return (
      <span key={i}>
        {part.split('\n').map((line, j, arr) => (
          <React.Fragment key={j}>
            {line}
            {j < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  });
};

const Tooltip = ({ text, content }: { text: string; content: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help border-b border-dotted border-rose-500/50 hover:border-rose-500 hover:bg-rose-500/10 transition-colors text-stone-100"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)} // For mobile interaction
    >
      {text}
      <AnimatePresence>
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-stone-900 text-stone-300 text-sm rounded-lg shadow-2xl border border-stone-700 z-50 pointer-events-none font-sans leading-relaxed"
          >
            {content}
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-stone-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
