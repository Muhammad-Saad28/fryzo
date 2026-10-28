'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] max-h-[880px] min-h-[580px] bg-brand-cream px-4 sm:px-6 md:px-8 py-2 flex flex-col justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col justify-between">

        {/* Top Headline: "FRYZO" */}
        <div className="relative w-full select-none text-center pt-2 z-0 shrink-0">
          <h1 className="text-[19vw] sm:text-[17vw] md:text-[15.5vw] lg:text-[14.5vw] font-black tracking-[-0.04em] leading-[0.8] text-[#0A4A46] font-sans uppercase">
            FRYZO
          </h1>
        </div>

        {/* Center Main Stage: Exact FAQ Green Card Color (#0A4A46) */}
        <div className="relative mt-2 sm:mt-3 w-full flex-1 max-h-[540px] rounded-[2rem] md:rounded-[2.6rem] bg-[#0A4A46] flex items-center justify-center p-4 shadow-inner hover:shadow-[0_25px_60px_rgba(10,74,70,0.35)] transition-all duration-700 z-10 mb-2 overflow-visible group/stage">

          {/* Topographic Contour Wave Texture Overlay */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.6rem] overflow-hidden pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full opacity-20 group-hover/stage:opacity-30 transition-opacity duration-700 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
            >
              <path d="M0,80 Q250,160 500,80 T1000,80" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,150 Q250,230 500,150 T1000,150" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,220 Q250,300 500,220 T1000,220" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,290 Q250,370 500,290 T1000,290" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,360 Q250,440 500,360 T1000,360" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,430 Q250,510 500,430 T1000,430" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
              <path d="M0,500 Q250,580 500,500 T1000,500" fill="none" stroke="#B8F3E7" strokeWidth="1.5" />
            </svg>
            <div className="absolute w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-brand-cyan/20 group-hover/stage:bg-brand-cyan/30 blur-3xl transition-all duration-700 pointer-events-none" />
          </div>

          {/* THE ONE MAIN PHOTO: herobg.png */}
          <div className="relative -top-12 sm:-top-16 md:-top-20 z-30 w-[280px] sm:w-[440px] md:w-[540px] lg:w-[620px] max-w-[88%] aspect-[1.52/1] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer">
            <Image
              src="/herobg.png"
              alt="FRYZO Signature French Fries Main Visual"
              fill
              sizes="(max-width: 768px) 90vw, 620px"
              className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)] transition-all duration-500"
              priority
              unoptimized
            />
          </div>

          {/* TOP-RIGHT NOTCH / INVERTED CURVED SOCKET WITH BIGGER CIRCULAR FRYZO BADGE */}
          <div className="absolute -top-1 -right-1 z-30 flex items-center">
            <div className="bg-brand-cream p-2 pl-3 pb-3 rounded-bl-[2.2rem] flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#111311] border-2 border-white/20 p-2.5 flex items-center justify-center shadow-2xl relative group hover:scale-110 hover:rotate-12 hover:border-brand-cyan/60 transition-all duration-300 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Fryzo Stamp"
                  width={52}
                  height={52}
                  style={{ width: 'auto', height: 'auto' }}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM-LEFT CARVED SOCKET FOR THE WHITE PHOTO CARD */}
          <div className="absolute -bottom-1 -left-1 z-30">
            <div className="bg-brand-cream p-2.5 pt-3 pr-3 rounded-tr-[2.2rem] shadow-sm">
              <div className="w-36 sm:w-44 bg-white rounded-2xl p-2.5 shadow-xl border border-black/5 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand-cyan/40 transition-all duration-300 cursor-pointer group/card">
                <div className="relative w-full aspect-square bg-[#0A4A46] rounded-xl overflow-hidden mb-2 flex items-center justify-center p-1.5">
                  <Image
                    src="/herobg.png"
                    alt="Fryzo Preview"
                    fill
                    sizes="176px"
                    unoptimized
                    className="object-contain group-hover/card:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-left px-1">
                  <p className="text-[10px] font-bold text-[#111311] font-sans tracking-tight leading-tight group-hover/card:text-[#0A4A46] transition-colors">
                    Healthy &amp; Tasty
                  </p>
                  <div className="flex items-center justify-between mt-1 text-[8px] font-mono text-gray-500 uppercase">
                    <span>Every Bite</span>
                    <span className="text-brand-cyan font-bold">• 100% FARM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
