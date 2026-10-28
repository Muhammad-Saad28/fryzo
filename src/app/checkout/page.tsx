'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCartStore } from '@/store/cartStore';
import { ArrowLeft, MessageCircle, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems, generateWhatsAppLink, clearCart } = useCartStore();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    address: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = getTotalPrice();
  const totalItems = getTotalItems();

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate WhatsApp link with full order details
    const waUrl = generateWhatsAppLink(formData);

    // Redirect to WhatsApp
    window.open(waUrl, '_blank');
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-brand-cream">
        <Header />
        <main className="flex-1 flex items-center justify-center py-20 px-4">
          <div className="max-w-md w-full text-center space-y-6 rounded-[2.5rem] bg-[#0A4A46] text-[#F7F3E9] p-10 border-2 border-[#126861] shadow-2xl">
            <h1 className="text-2xl font-bold font-sans">Your Basket is Empty</h1>
            <p className="text-sm text-white/70">Please add your favorite cuts from our collection before proceeding to checkout.</p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3.5 rounded-full bg-brand-cyan text-[#111311] font-mono text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-white transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Header />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Back link & Title */}
          <div className="space-y-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#4A5043] hover:text-[#111311] font-bold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Collection</span>
            </Link>
            <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-[#2D3728]">
              Confirm Your Order.
            </h1>
            <p className="text-sm font-sans text-[#4A5043]">
              Fill in your delivery address below. Clicking &apos;Confirm via WhatsApp&apos; will open your order with all details ready to send.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-7 bg-[#0A4A46] text-[#F7F3E9] rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#126861] shadow-2xl relative overflow-hidden">
              <div className="space-y-2 pb-6 border-b border-white/15">
                <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase font-bold">
                  STEP 02 OF 02 / REFRIGERATED DELIVERY
                </span>
                <h2 className="text-2xl font-bold font-sans text-white">Delivery Information</h2>
              </div>

              <form onSubmit={handleConfirmOrder} className="space-y-6 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/70 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                      placeholder="e.g. Asad Ali"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/70 block">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                      placeholder="e.g. 0300 1234567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/70 block">Delivery City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm"
                    >
                      <option className="bg-[#0A4A46] text-white">Lahore (Same-Day / Next-Day)</option>
                      <option className="bg-[#0A4A46] text-white">Karachi (Refrigerated Cold Chain)</option>
                      <option className="bg-[#0A4A46] text-white">Islamabad / Rawalpindi</option>
                      <option className="bg-[#0A4A46] text-white">Faisalabad</option>
                      <option className="bg-[#0A4A46] text-white">Multan</option>
                      <option className="bg-[#0A4A46] text-white">Other Cities (Inquire via WhatsApp)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/70 block">Payment Method</label>
                    <div className="px-4 py-3.5 rounded-xl border border-brand-cyan/40 bg-[#364231] text-brand-cyan text-xs font-mono uppercase font-bold flex items-center justify-between">
                      <span>Cash On Delivery (COD)</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/70 block">Complete Street Address *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm resize-none placeholder-white/40"
                    placeholder="House/Apartment #, Street, Phase/Sector..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/70 block">Special Delivery Notes (Optional)</label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                    placeholder="e.g. Call before arrival, leave at reception..."
                  />
                </div>

                {/* Confirm Order CTA to WhatsApp */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-brand-cyan text-[#111311] font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl text-center group"
                >
                  <MessageCircle className="w-5 h-5 text-[#111311]" />
                  <span>Confirm Order via WhatsApp</span>
                </button>

                <p className="text-[11px] font-mono text-center text-white/60">
                  ⚡ Clicking confirm opens official WhatsApp with your order summary pre-filled.
                </p>
              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-[2.5rem] bg-[#0A4A46] text-[#F7F3E9] p-8 border-2 border-[#126861] shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <h3 className="font-bold text-lg font-sans text-white">Order Summary</h3>
                  <span className="text-xs font-mono text-brand-cyan font-bold">{totalItems} Items</span>
                </div>

                {/* Items preview */}
                <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between gap-4 py-2 border-b border-white/10 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 bg-[#364231] rounded-xl overflow-hidden shrink-0 border border-white/10 p-1">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-white truncate max-w-[170px]">{item.product.name}</p>
                          <p className="text-[11px] font-mono text-white/60">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-brand-cyan">
                        Rs {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cost calculation */}
                <div className="space-y-2 pt-2 border-t border-white/15 text-xs font-mono">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal</span>
                    <span>Rs {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Refrigerated Delivery</span>
                    <span className="text-brand-cyan">Standard City Rate</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/15">
                    <span>Total Amount</span>
                    <span className="text-brand-cyan">Rs {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Cold-Chain Assurance */}
              <div className="rounded-3xl bg-white border-2 border-[#2D3327]/15 p-6 shadow-md space-y-3">
                <div className="flex items-center gap-3 text-[#111311]">
                  <Truck className="w-5 h-5 text-brand-cyan" />
                  <h4 className="font-bold text-sm font-sans">Cold-Chain Guaranteed</h4>
                </div>
                <p className="text-xs text-[#5A5D58] leading-relaxed font-sans">
                  Your frozen fries remain rock-frozen at -18°C in insulated temperature-controlled cold boxes during transit.
                </p>
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
