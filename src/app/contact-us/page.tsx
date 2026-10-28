'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Header />
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-3 max-w-2xl">
            <span className="editorial-tag text-brand-cyan font-bold">Contact &amp; Inquiries</span>
            <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-[#2D3728]">
              We Love To Hear From You.
            </h1>
            <p className="text-sm sm:text-base text-[#4A5043] leading-relaxed font-sans">
              Whether you are an individual customer, restaurant chef, or commercial distributor, our culinary and logistics team is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Direct Channels Card - Using FAQ Green (#0A4A46) */}
            <div className="lg:col-span-5 space-y-8 bg-[#0A4A46] text-[#F7F3E9] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#126861] shadow-xl relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase font-bold block">
                  VERIFIED CHANNELS
                </span>
                <h2 className="text-2xl font-bold font-sans text-white">Direct Contacts</h2>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#364231] border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-sans text-white">Head Office &amp; Plant</h3>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">
                      Fryzo Foods (Pvt) Ltd, Industrial Estate, Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#364231] border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-sans text-white">Email Inquiries</h3>
                    <a href="mailto:info@fryzo.com.pk" className="text-xs font-mono text-brand-cyan hover:underline mt-1 block">
                      info@fryzo.com.pk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#364231] border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-sans text-white">Customer Hotline</h3>
                    <a href="tel:+923000000000" className="text-xs font-mono text-brand-cyan hover:underline mt-1 block">
                      +92 300 0000000
                    </a>
                  </div>
                </div>
              </div>

              {/* Manifesto Statement from Reference Site */}
              <div className="p-6 rounded-2xl bg-[#364231] border border-white/10 space-y-2 relative z-10">
                <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-brand-cyan">You Matter To Us</h4>
                <p className="text-xs font-sans text-white/80 leading-relaxed">
                  We love hearing from our customers because your questions, feedback, and ideas help us serve you better. Every message matters to us.
                </p>
              </div>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-brand-cyan text-[#111311] font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md font-bold relative z-10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

            {/* Interactive Form - Using FAQ Green (#0A4A46) */}
            <div className="lg:col-span-7 bg-[#0A4A46] text-[#F7F3E9] rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#126861] shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan text-[#111311] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white">Message Dispatched!</h3>
                  <p className="text-sm font-sans text-white/80 max-w-sm mx-auto">
                    Thank you for reaching out. Our representative will contact you within 24 hours regarding your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/30 text-xs font-mono uppercase tracking-widest hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase font-bold">
                      INQUIRY FORM
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">Send A Message</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/70 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                        placeholder="e.g. Asad Ali"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/70 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                        placeholder="e.g. +92 300 1234567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/70 block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm placeholder-white/40"
                        placeholder="e.g. name@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-white/70 block">Inquiry Type</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm"
                      >
                        <option className="bg-[#0A4A46] text-white">General Inquiry</option>
                        <option className="bg-[#0A4A46] text-white">Commercial Wholesale</option>
                        <option className="bg-[#0A4A46] text-white">Restaurant Partner Supply</option>
                        <option className="bg-[#0A4A46] text-white">Distribution &amp; Cold Logistics</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/70 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0F5A55] text-white focus:outline-none focus:border-brand-cyan text-sm resize-none placeholder-white/40"
                      placeholder="Tell us about your requirements or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-cyan text-[#111311] font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-md group"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
