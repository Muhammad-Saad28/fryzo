import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ThermometerSnowflake, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Background Subtle Blur Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Delivery Narrative & Standards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2">
              <span className="editorial-tag text-brand-cyan font-bold">04 / Cold-Chain Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-brand-cream leading-tight">
              A Truck That Carries Healthy Foods For Your Healthy Moods.
            </h2>

            <p className="text-sm sm:text-base font-sans text-brand-cream/70 max-w-xl leading-relaxed">
              Frozen french fries require strict temperature integrity. Any thawing during transport breaks potato cell walls and degrades crispiness. Fryzo deploys dedicated sub-zero refrigerated vans guaranteeing -18°C from our factory line straight to your doorstep or retail depot.
            </p>

            {/* Cold Chain Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <ThermometerSnowflake className="w-5 h-5 text-brand-cyan" />
                <h4 className="font-bold text-sm font-sans">-18°C Continuous</h4>
                <p className="text-[11px] font-sans text-brand-cream/60">Zero temperature variance guarantee during transit.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <Truck className="w-5 h-5 text-brand-cyan" />
                <h4 className="font-bold text-sm font-sans">Cold-Chain Fleet</h4>
                <p className="text-[11px] font-sans text-brand-cream/60">Refrigerated trucks serving Lahore, Karachi & Islamabad.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                <h4 className="font-bold text-sm font-sans">Fresh Arrival</h4>
                <p className="text-[11px] font-sans text-brand-cream/60">Free replacement guarantee if packs thaw during delivery.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/shop"
                className="px-8 py-4 rounded-full bg-brand-cyan text-brand-black hover:bg-brand-turquoise transition-all font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-lg"
              >
                <span>Order With Cold Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Res Truck Cutout Asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-square max-w-md bg-white/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="/images/brand/truck.png"
                  alt="Fryzo Cold Chain Delivery Logistics Truck"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-full bg-brand-cyan text-brand-black font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                ● LIVE REFRIGERATED FLEET
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
