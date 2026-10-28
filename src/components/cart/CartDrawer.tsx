'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();

  if (!isOpen) return null;

  const total = getTotalPrice();
  const count = getTotalItems();

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-brand-cream border-l-2 border-[#2D3327]/20 h-full flex flex-col z-10 shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-6 border-b-2 border-[#2D3327]/15 flex items-center justify-between bg-brand-cream">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
            <h2 className="text-xl font-bold tracking-tight text-[#111311] font-sans uppercase">
              Your Basket ({count})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-[#111311] hover:text-white transition-colors text-[#111311]"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#364231]/10 flex items-center justify-center mb-4 text-[#364231]">
                <ShoppingBag className="w-8 h-8 stroke-1" />
              </div>
              <p className="text-lg font-semibold text-[#111311] mb-1">Your basket is empty</p>
              <p className="text-sm text-[#5A5D58] max-w-xs mb-6 font-sans">
                Explore our signature farm-to-fryer cut selection and add premium crispness to your kitchen.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="px-6 py-3 rounded-full bg-[#0A4A46] text-brand-cyan text-xs font-mono uppercase tracking-widest hover:bg-[#111311] hover:text-white transition-colors font-bold"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-[#0A4A46] text-[#F7F3E9] border-2 border-[#126861] rounded-2xl p-4 flex gap-4 items-center shadow-md"
              >
                <div className="relative w-20 h-20 bg-[#364231] rounded-xl overflow-hidden shrink-0 border border-white/10 flex items-center justify-center p-1">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-brand-cyan font-bold block mb-0.5">
                    {item.product.cutType}
                  </span>
                  <h4 className="font-semibold text-sm text-white truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs font-mono text-brand-cyan mt-0.5 font-bold">
                    Rs {item.product.price.toLocaleString()}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-white/20 rounded-lg bg-[#364231]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:text-brand-cyan transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-bold font-mono text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:text-brand-cyan transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-white/60 hover:text-red-400 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: Proceed to Checkout Page */}
        {items.length > 0 && (
          <div className="p-6 border-t-2 border-[#2D3327]/15 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5A5D58] font-bold">Subtotal ({count} items)</span>
              <span className="text-2xl font-bold font-mono text-[#111311]">Rs {total.toLocaleString()}</span>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full py-4 rounded-full bg-[#0A4A46] text-brand-cyan hover:bg-[#111311] hover:text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl font-bold group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-[10px] text-center text-[#5A5D58] font-mono uppercase">
              • Direct WhatsApp Order Confirmation on Next Screen
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
