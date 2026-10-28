'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/fryzoData';
import { useCartStore } from '@/store/cartStore';

export default function ProductsSection() {
  const { addItem } = useCartStore();

  return (
    <section id="products" className="py-12 md:py-16 px-4 sm:px-6 md:px-10 bg-brand-cream border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#2D3327]/15">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#2D3728]">
              Signature Cut Portfolio.
            </h2>
          </div>
          <Link
            href="/shop"
            className="px-6 py-2.5 rounded-full bg-[#111311] text-[#F7F3E9] hover:bg-brand-cyan hover:text-brand-black transition-all text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm"
          >
            <span>View All Cuts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Alternating Zig-Zag Rows with Model's Authentic Deep Forest Teal-Green (#086761 / #0a4a46) */}
        <div className="space-y-10">
          {PRODUCTS.map((product, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={product.id}
                className="group rounded-[2.5rem] md:rounded-[3.2rem] bg-[#0A4A46] text-[#F7F3E9] border-2 border-[#126861] p-8 sm:p-10 md:p-12 shadow-2xl hover:border-brand-cyan hover:shadow-[0_25px_60px_rgba(10,74,70,0.35)] hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl group-hover:bg-brand-cyan/25 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* TEXT CONTENT */}
                  <div className={`space-y-5 ${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#364231] text-brand-cyan text-[11px] font-mono uppercase tracking-widest font-bold">
                        {product.cutType}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#111311] text-white text-[11px] font-mono uppercase tracking-widest font-bold">
                        {product.weight}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-white tracking-tight leading-tight">
                      {product.name}
                    </h3>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs font-mono uppercase text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and Add CTA */}
                    <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-white/60 uppercase block">Price</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold font-mono text-brand-cyan">
                            Rs {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm font-mono text-white/50 line-through">
                              Rs {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => addItem(product, 1)}
                        className="px-7 py-3.5 rounded-full bg-brand-cyan text-[#111311] hover:bg-white hover:scale-105 active:scale-95 transition-all font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 shadow-xl group/btn"
                      >
                        <Plus className="w-4 h-4 group-hover/btn:rotate-90 group-hover/btn:scale-125 transition-transform duration-300" />
                        <span>Add To Basket</span>
                      </button>
                    </div>
                  </div>

                  {/* IMAGE STAGE */}
                  <div className={`relative ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'}`}>
                    <div className="relative w-full aspect-square max-w-md mx-auto bg-[#364231] rounded-[2rem] md:rounded-[2.4rem] p-7 flex items-center justify-center shadow-inner overflow-hidden border border-white/10 group-hover:border-brand-cyan/40 transition-colors duration-500">
                      
                      {/* Atmospheric Glow */}
                      <div className="absolute w-64 h-64 rounded-full bg-brand-cyan/20 blur-3xl pointer-events-none" />

                      <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                          className={`object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] transition-all duration-500 ${
                            product.backImage ? 'group-hover:opacity-0' : ''
                          }`}
                        />
                        {product.backImage && (
                          <Image
                            src={product.backImage}
                            alt={`${product.name} Nutrition & Back View`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        )}
                      </div>

                      {/* Small Corner Cold-Chain Tag */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#111311]/90 backdrop-blur-md border border-white/15 text-[10px] font-mono text-brand-cyan uppercase tracking-wider group-hover:border-brand-cyan/50 transition-colors">
                        {product.backImage ? '● HOVER: NUTRITION PACK' : '● -18°C COLD CHAIN'}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
