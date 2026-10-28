import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Award, HeartHandshake, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | The Fryzo Philosophy & Story',
  description: 'Learn how Fryzo is pioneering industrial potato processing in Pakistan with modern IQF flash-freezing and sustainable contract farming.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Header />
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Story Banner Frame */}
          <div className="relative rounded-[2.5rem] md:rounded-[3.2rem] border-2 border-[#2D3327]/15 bg-[#F6F2E8] p-8 sm:p-12 md:p-16 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-black/15 bg-white text-brand-black text-[11px] font-mono uppercase tracking-widest shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                  <span>ABOUT FRYZO / CORPORATE VISION</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-[#2D3728] leading-[1.05]">
                  Made With Love And Passion.
                </h1>

                <p className="text-base sm:text-lg text-[#4A5043] leading-relaxed font-sans">
                  Fryzo was founded with a singular, resolute objective: to establish an indigenous Pakistani food brand that rivals global standards in frozen potato processing.
                </p>

                <p className="text-sm text-[#4A5043] leading-relaxed font-sans">
                  By partnering with local potato agriculturalists in Punjab, deploying hydro-cutting precision machinery, and maintaining an unbroken cold chain, Fryzo delivers farm-to-fryer excellence directly to consumers and restaurants.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    '100% Farm-Selected Potatoes',
                    'IQF Blast-Frozen at -18°C',
                    'Zero Artificial Additives',
                    'Halal & Food-Safety Certified'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#0A4A46] text-white border border-[#126861] text-xs font-mono uppercase tracking-wider font-bold">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CEO Portrait using the updated ceo.jpg from homepage */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square rounded-[2.2rem] overflow-hidden border-2 border-white/20 bg-[#364231] shadow-2xl group">
                  <Image
                    src="/images/brand/ceo.jpg?v=2"
                    alt="Mian Nauman Kabir — CEO of Fryzo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111311]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#111311]/90 backdrop-blur-md border border-white/20 text-white">
                    <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest font-bold">
                      FOUNDER &amp; CEO
                    </span>
                    <h3 className="font-bold text-lg font-sans text-white mt-0.5">
                      Mian Nauman Kabir
                    </h3>
                    <p className="text-xs font-mono text-white/70">
                      Fryzo Foods (Pvt) Ltd.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Vision & Mission Cards - Using exact FAQ Green (#0A4A46) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[2.2rem] bg-[#0A4A46] text-[#F7F3E9] p-8 sm:p-10 border-2 border-[#126861] shadow-xl space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#364231] flex items-center justify-center text-brand-cyan border border-white/10">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                CORE PILLAR 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">Our Vision</h2>
              <p className="text-sm font-sans text-white/80 leading-relaxed">
                To be South Asia&apos;s most trusted brand for premium frozen potato products, recognized for uncompromised hygiene, innovation in flash-freezing technology, and elevating local agricultural yield onto global supermarket shelves.
              </p>
            </div>

            <div className="rounded-[2.2rem] bg-[#0A4A46] text-[#F7F3E9] p-8 sm:p-10 border-2 border-[#126861] shadow-xl space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#364231] flex items-center justify-center text-brand-cyan border border-white/10">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block font-bold">
                CORE PILLAR 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">Our Mission</h2>
              <p className="text-sm font-sans text-white/80 leading-relaxed">
                Empowering culinary creators and households with reliable, delicious, restaurant-grade fries that cook effortlessly, absorb less oil, and preserve the genuine earth-born flavor of fresh Pakistani potatoes.
              </p>
            </div>
          </div>

          {/* Message From The CEO - Non-Italic Clean Typographic Treatment */}
          <div className="rounded-[2.5rem] md:rounded-[3rem] bg-[#0A4A46] text-[#F7F3E9] p-8 sm:p-12 md:p-16 border-2 border-[#126861] shadow-2xl relative overflow-hidden">
            <div className="max-w-4xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#364231] border border-white/10 text-brand-cyan text-[11px] font-mono uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXECUTIVE STATEMENT</span>
              </div>

              {/* Clean non-italic typography as requested */}
              <p className="text-xl sm:text-2xl md:text-3xl font-sans font-bold not-italic leading-relaxed text-white tracking-tight">
                &ldquo;Our commitment is not just to produce fries, but to uphold an exacting standard of food integrity. Every pack of Fryzo represents local pride, technological precision, and an honest culinary promise to every family.&rdquo;
              </p>

              <div className="pt-4 flex items-center gap-4 border-t border-white/15">
                <div className="w-11 h-11 rounded-full bg-brand-cyan text-[#111311] font-bold font-mono flex items-center justify-center text-sm shadow-md">
                  NK
                </div>
                <div>
                  <p className="font-bold font-sans text-base text-white">Mian Nauman Kabir</p>
                  <p className="text-xs font-mono text-white/60">Chief Executive Officer, Fryzo Foods (Pvt) Ltd</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
