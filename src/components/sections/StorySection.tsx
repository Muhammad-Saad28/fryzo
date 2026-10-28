'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-brand-cream border-b border-brand-border/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Architecture Card Frame matching the Hero Section Vibe */}
        <div className="relative w-full rounded-[2.5rem] md:rounded-[3.2rem] border-2 border-[#2D3327]/15 bg-[#F6F2E8] p-8 sm:p-12 md:p-16 overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Expressive Editorial Narrative */}
            <div className="lg:col-span-7 space-y-8 z-10">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-black/15 bg-white text-brand-black text-[11px] font-mono uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>01 / THE FRYZO PHILOSOPHY</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#2D3728] leading-[1.05]">
                Re-engineering the potato for the{' '}
                <span className="text-brand-cyan underline decoration-[#364231]/30 underline-offset-8">
                  perfect golden bite.
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4A5043] leading-relaxed font-sans">
                <p>
                  In 2024, Fryzo set out with an obsessive mission: to bring true international restaurant-grade French fries into homes, cloud kitchens, and gourmet eateries across Pakistan.
                </p>
                <p>
                  Most commercial fries are cut from water-logged potatoes, leading to limp, soggy fries that soak up heavy frying oil. At Fryzo, we select high dry-matter potatoes harvested at peak starch maturity. Through controlled temperature blanching and rapid flash-freezing, we preserve the potato&apos;s natural cellular structure.
                </p>
              </div>

              {/* Quality Checklist Pills with Exact FAQ Green Background (#0A4A46 / #126861) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Absorbs up to 25% less oil',
                  'Stays crispy 2x longer on plate',
                  '100% pure refined vegetable oil',
                  'Zero artificial preservatives'
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0A4A46] text-[#F7F3E9] border-2 border-[#126861] shadow-md group hover:border-brand-cyan/80 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about-us"
                  className="px-7 py-3.5 rounded-full bg-[#111311] text-[#F7F3E9] hover:bg-brand-cyan hover:text-brand-black transition-all font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-md group"
                >
                  <span>Read Full Brand Manifesto</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Column: Architectural Dark Green Frame with CEO Portrait - Also using #0A4A46 / #126861 */}
            <div className="lg:col-span-5 relative">
              
              <div className="relative w-full rounded-[2.2rem] md:rounded-[2.6rem] bg-[#0A4A46] p-5 sm:p-7 border-2 border-[#126861] shadow-2xl overflow-hidden text-white flex flex-col justify-between">
                
                {/* Atmospheric Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Label inside Dark Pocket */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">
                    EXECUTIVE LEADERSHIP
                  </span>
                  <Quote className="w-4 h-4 text-white/40" />
                </div>

                {/* High-Impact Portrait Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden my-4 border border-white/10 bg-[#364231] shadow-inner group">
                  <Image
                    src="/images/brand/ceo.jpg?v=2"
                    alt="Mian Nauman Kabir — CEO of Fryzo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111311]/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#111311]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-bold">
                    ● FOUNDER &amp; CEO
                  </div>
                </div>

                {/* CEO Quote & Details */}
                <div className="space-y-2 z-10 pt-2">
                  <h3 className="text-xl font-bold font-sans text-[#F7F3E9] tracking-tight">
                    Mian Nauman Kabir
                  </h3>
                  <p className="text-xs font-sans text-white/80 leading-relaxed">
                    &ldquo;We invested in global-standard processing so that Pakistani consumers experience crispiness that rivals any premier culinary brand worldwide.&rdquo;
                  </p>
                </div>

                {/* Bottom Spec Tag */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span>FRYZO FOODS (PVT) LTD</span>
                  <span className="text-brand-cyan font-bold">• 100% HALAL</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
