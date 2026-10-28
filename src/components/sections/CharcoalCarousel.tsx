'use client';

import React from 'react';

export default function CharcoalCarousel() {
  const tickerItems = [
    'STRAIGHT CUT FRIES',
    'CRINKLE CUT FRIES',
    'CURLY SPIRAL FRIES',
    'CRISPY HASH BROWNS',
    '100% FARM POTATOES',
    'RAPID IQF FLASH-FROZEN',
    'HEALTHY & TASTY EVERY BITE',
    'COLD-CHAIN DISTRIBUTION',
    'PRE-FRIED IN PURE VEGETABLE OIL',
    'RESTAURANT CRUNCH AT HOME',
  ];

  return (
    <section className="w-full bg-brand-cream py-6 px-4 sm:px-6 md:px-10">
      {/* Floating Rounded Rectangle Container */}
      <div className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-full bg-[#111311] text-[#F7F3E9] py-4 px-6 border-2 border-[#364231] shadow-xl overflow-hidden select-none">
        
        {/* Left to Right Animated Ribbon */}
        <div className="flex w-max animate-marquee-ltr">
          {/* Sequence 1 */}
          <div className="flex items-center gap-10 shrink-0">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-[#F7F3E9] hover:text-brand-cyan transition-colors">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" />
              </div>
            ))}
          </div>

          {/* Sequence 2 for seamless infinite loop */}
          <div className="flex items-center gap-10 shrink-0 ml-10" aria-hidden="true">
            {tickerItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-10">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-[#F7F3E9] hover:text-brand-cyan transition-colors">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
