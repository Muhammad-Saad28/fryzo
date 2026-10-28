'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { PRODUCTS } from '@/data/fryzoData';
import { useCartStore } from '@/store/cartStore';
import { Plus, Sparkles, Filter, Flame, Thermometer } from 'lucide-react';

export default function ShopPage() {
  const [selectedCut, setSelectedCut] = useState<string>('All');
  const { addItem } = useCartStore();

  const cuts = ['All', 'Straight Cut', 'Crinkle Cut', 'Curly Fries', 'Hash Browns'];

  const filteredProducts = selectedCut === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.cutType === selectedCut);

  // Hero Spotlight SKU (Straight Cut 2kg)
  const heroSku = PRODUCTS[1];

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Header />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Creative Hero Banner Frame for the Collection (Clean, without filter inside) */}
          <div className="relative rounded-[2.8rem] md:rounded-[3.5rem] bg-[#0A4A46] text-[#F7F3E9] border-2 border-[#126861] p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
            
            {/* Ambient Background Wave & Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Editorial Header */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#364231] border border-white/15 text-brand-cyan text-[11px] font-mono uppercase tracking-widest font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PREMIUM FROZEN CATALOG / 2026</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans tracking-tight leading-[0.98] text-white">
                  The Signature Cut Archive.
                </h1>

                <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed max-w-xl">
                  Every cut is engineered for specific crisp-to-core culinary ratios. Straight cut for classic balance, crinkle for maximum sauce capture, and curly for seasoned crunch.
                </p>
              </div>

              {/* Right Showcase: Featured SKU Quick Preview */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-[#364231] rounded-[2.2rem] p-6 border-2 border-white/15 shadow-inner flex flex-col justify-between overflow-hidden group">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#111311] text-brand-cyan text-[10px] font-mono uppercase tracking-wider font-bold">
                      FLAGSHIP CUT
                    </span>
                    <span className="text-xs font-mono text-white/70 font-bold">● -18°C COLD CHAIN</span>
                  </div>

                  <div className="relative w-full h-52 sm:h-60 my-auto transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={heroSku.image}
                      alt={heroSku.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                      priority
                    />
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between z-10">
                    <div>
                      <p className="font-bold text-sm text-white font-sans">{heroSku.name}</p>
                      <p className="text-xs font-mono text-brand-cyan font-bold">Rs {heroSku.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => addItem(heroSku, 1)}
                      className="px-4 py-2 rounded-full bg-brand-cyan text-[#111311] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FILTER CONTROLS BAR: Positioned BELOW the hero banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 px-6 rounded-2xl bg-[#0A4A46] border-2 border-[#126861] shadow-lg hover:border-brand-cyan/40 transition-colors">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase text-brand-cyan tracking-wider font-bold flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5" /> Filter by:
              </span>
              {cuts.map((cut) => (
                <button
                  key={cut}
                  onClick={() => setSelectedCut(cut)}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95 ${
                    selectedCut === cut
                      ? 'bg-brand-cyan text-[#111311] shadow-md scale-105'
                      : 'bg-[#364231] border border-white/15 text-white hover:border-brand-cyan hover:text-brand-cyan'
                  }`}
                >
                  {cut}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-white/70 font-bold hidden sm:inline-block">
              {filteredProducts.length} Items Available
            </span>
          </div>

          {/* Creative Asymmetrical Catalog Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
              {filteredProducts.map((product, idx) => {
                const colSpan = idx % 3 === 0 ? 'lg:col-span-7' : idx % 3 === 1 ? 'lg:col-span-5' : 'lg:col-span-12';
                const isWide = idx % 3 === 2;

                return (
                  <div
                    key={product.id}
                    className={`${colSpan} group rounded-[2.5rem] bg-[#0A4A46] text-[#F7F3E9] p-8 sm:p-10 border-2 border-[#126861] hover:border-brand-cyan hover:shadow-[0_25px_60px_rgba(10,74,70,0.4)] transition-all duration-500 shadow-xl flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden`}
                  >
                    {/* Ambient Hover Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-cyan/25 group-hover:scale-125 transition-all duration-500" />

                    <div className="relative z-10 space-y-6">
                      
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#364231] text-brand-cyan text-[11px] font-mono uppercase tracking-wider font-bold border border-white/10 group-hover:border-brand-cyan/40 transition-colors">
                          {product.cutType}
                        </span>
                        <span className="text-xs font-mono text-white/70 font-bold uppercase tracking-wider">
                          {product.weight}
                        </span>
                      </div>

                      {/* Flex layout for Wide card vs Standard cards */}
                      <div className={`grid ${isWide ? 'grid-cols-1 md:grid-cols-12 gap-8 items-center' : 'grid-cols-1 gap-6'}`}>
                        
                        {/* Image stage with Supporting Back/Nutrition View on Hover */}
                        <div className={`relative ${isWide ? 'md:col-span-5' : 'w-full'} aspect-square max-h-72 bg-[#364231] rounded-2xl p-6 flex items-center justify-center border border-white/10 shadow-inner overflow-hidden group-hover:border-brand-cyan/40 transition-colors`}>
                          <div className="relative w-full h-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                              className={`object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] transition-all duration-500 ${
                                product.backImage ? 'group-hover:opacity-0' : ''
                              }`}
                            />
                            {product.backImage && (
                              <Image
                                src={product.backImage}
                                alt={`${product.name} Nutrition & Back View`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                                className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              />
                            )}
                          </div>
                          {product.backImage && (
                            <span className="absolute top-3 right-3 text-[9px] font-mono text-brand-cyan bg-[#111311]/80 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                              NUTRITION PACK
                            </span>
                          )}
                        </div>

                        {/* Text and Spec details */}
                        <div className={`space-y-4 ${isWide ? 'md:col-span-7' : ''}`}>
                          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight leading-snug">
                            {product.name}
                          </h2>
                          <p className="text-sm text-white/75 leading-relaxed font-sans">
                            {product.description}
                          </p>

                          {/* Quick Spec Pills */}
                          <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-mono">
                            <span className="px-3 py-1 rounded-xl bg-[#364231] text-brand-cyan border border-white/10 flex items-center gap-1.5 font-bold">
                              <Flame className="w-3.5 h-3.5" /> {product.cookingTime}
                            </span>
                            <span className="px-3 py-1 rounded-xl bg-[#364231] text-white/80 border border-white/10 flex items-center gap-1.5 font-bold">
                              <Thermometer className="w-3.5 h-3.5" /> -18°C IQF
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between relative z-10">
                      <div>
                        <span className="text-[10px] font-mono text-white/50 uppercase block">DIRECT ORDER PRICE</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold font-mono text-brand-cyan">
                            Rs {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs font-mono text-white/50 line-through">
                              Rs {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => addItem(product, 1)}
                        className="px-6 py-3 rounded-full bg-brand-cyan text-[#111311] hover:bg-white transition-all font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 shadow-lg group/btn"
                      >
                        <Plus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Add To Basket</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
