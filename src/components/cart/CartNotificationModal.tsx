'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, ArrowRight, X, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartNotificationModal() {
  const { showToast, lastAddedItem, dismissToast, openCart, getTotalItems, getTotalPrice } = useCartStore();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        dismissToast();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast, dismissToast]);

  if (!showToast || !lastAddedItem) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      {/* Little Rounded Screen Pop-up */}
      <div className="rounded-[2rem] bg-[#0A4A46] text-[#F7F3E9] p-4 pr-5 border-2 border-brand-cyan shadow-2xl flex items-center gap-4 max-w-sm">
        
        {/* Product Thumbnail inside mini pocket */}
        <div className="relative w-14 h-14 bg-[#364231] rounded-2xl overflow-hidden shrink-0 border border-white/15 flex items-center justify-center p-1">
          <Image
            src={lastAddedItem.image}
            alt={lastAddedItem.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-cyan uppercase font-bold">
            <Check className="w-3 h-3" />
            <span>Added to Basket</span>
          </div>
          <p className="font-bold text-xs font-sans text-white truncate mt-0.5">
            {lastAddedItem.name}
          </p>
          <p className="text-[11px] font-mono text-white/70">
            Rs {lastAddedItem.price.toLocaleString()}
          </p>
        </div>

        {/* Action: Click to open Basket */}
        <button
          onClick={openCart}
          className="px-4 py-2 rounded-full bg-brand-cyan text-[#111311] hover:bg-white transition-all text-xs font-mono uppercase tracking-wider font-bold shrink-0 flex items-center gap-1.5 shadow-md"
        >
          <span>Basket</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Close */}
        <button
          onClick={dismissToast}
          className="text-white/60 hover:text-white p-1"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
