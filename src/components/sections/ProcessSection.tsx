import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/fryzoData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-brand-cream border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#2D3327]/15">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#2D3728]">
              From Farm To Fryer.
            </h2>
          </div>
          <p className="text-sm font-sans text-[#4A5043] max-w-md leading-relaxed">
            Six precision-engineered industrial stages transforming raw harvested potatoes into rock-frozen golden delicacies ready for instant crisping.
          </p>
        </div>

        {/* 6-Step Modern Architectural Cards - Using exact FAQ Green (#0A4A46 / #126861) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="group relative rounded-[2rem] bg-[#0A4A46] text-[#F7F3E9] p-8 border-2 border-[#126861] hover:border-brand-cyan hover:bg-[#0c534f] transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(10,74,70,0.4)] cursor-pointer"
            >
              {/* Subtle background gradient glow on hover */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/25 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-brand-cyan tracking-wider group-hover:scale-110 transition-transform duration-300 origin-left">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-brand-cyan group-hover:text-[#111311] group-hover:border-brand-cyan group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 relative z-10">
                <span className="group-hover:text-brand-cyan transition-colors">STAGE VERIFIED</span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Tagline Banner */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#0A4A46] text-[#F7F3E9] border-2 border-[#126861] hover:border-brand-cyan/60 hover:shadow-[0_20px_50px_rgba(10,74,70,0.35)] transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="editorial-tag text-brand-cyan text-[10px] font-bold">THE GOLDEN GUARANTEE</span>
            <p className="text-xl sm:text-3xl font-sans font-bold tracking-wide text-white">
              &ldquo;We deliver. You enjoy.&rdquo;
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-white/80">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">● ZERO ARTIFICIAL FLAVORS</span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">● 100% WHOLE POTATO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
