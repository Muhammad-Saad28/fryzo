'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/fryzoData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-brand-cream border-b border-brand-border/60">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2D3327]/20 bg-[#0A4A46] text-brand-cyan text-[11px] font-mono uppercase tracking-widest shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span>05 / CULINARY GUIDELINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#2D3728]">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm font-sans text-[#4A5043] max-w-lg mx-auto leading-relaxed">
            Hover over any question to reveal preparation guidelines, optimal freezing temperatures, and culinary advice.
          </p>
        </div>

        {/* Accordion Stack in Model's Deep Green (#0A4A46 / #126861) */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                onMouseEnter={() => setOpenIdx(idx)}
                className={`rounded-[1.8rem] border-2 transition-all duration-300 overflow-hidden cursor-pointer shadow-md ${
                  isOpen
                    ? 'bg-[#0A4A46] border-brand-cyan text-white shadow-xl'
                    : 'bg-[#0F5A55] border-[#18756E] text-[#F7F3E9] hover:border-brand-cyan/60'
                }`}
              >
                <div
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 transition-colors select-none"
                >
                  <span className={`font-bold text-base sm:text-lg font-sans ${isOpen ? 'text-white' : 'text-[#F7F3E9]'}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-brand-cyan text-[#111311]'
                        : 'bg-[#0A4A46] border border-white/20 text-brand-cyan'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 text-sm font-sans text-white/85 leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
