import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        {/* Architectural Double-Border Frame in Model's Deep Green (#0A4A46) */}
        <div className="group relative rounded-[3rem] md:rounded-[3.8rem] bg-[#0A4A46] text-[#F7F3E9] p-10 sm:p-14 md:p-20 overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-[#126861] hover:border-brand-cyan/60 hover:shadow-[0_30px_70px_rgba(10,74,70,0.4)] transition-all duration-500">
          
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/25 group-hover:bg-brand-cyan/40 group-hover:scale-125 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#126861]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-brand-cyan text-[11px] font-mono uppercase tracking-widest backdrop-blur-md hover:border-brand-cyan transition-colors">
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
              <span>DIRECT COLD-CHAIN FULFILLMENT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight leading-[1.02] text-white">
              Ready for the ultimate golden crunch?
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed max-w-2xl">
              Experience the difference of whole farm potatoes, precision thermal blanching, and rapid IQF freezing. Order directly for residential delivery or commercial wholesale.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/shop"
                className="px-8 py-4 rounded-full bg-brand-cyan text-[#111311] hover:bg-white hover:scale-105 active:scale-95 transition-all font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-xl group/btn"
              >
                <span>Order Online Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/contact-us"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white hover:border-brand-cyan hover:text-brand-cyan hover:bg-white/10 hover:scale-105 active:scale-95 transition-all font-mono text-xs uppercase tracking-widest font-bold"
              >
                Wholesale Inquiry
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
