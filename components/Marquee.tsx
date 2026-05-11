'use client';

import React from 'react';

const text = "MBUYA · BUGOLOBI FOREST MALL · FINE DINING · KAMPALA · OPEN DAILY · THE MAZE BISTRO · ";

export default function Marquee() {
  return (
    <div className="bg-surface border-y border-border-custom py-6 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="font-mono text-accent text-sm tracking-[0.3em] uppercase mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
