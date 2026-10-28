import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageCircle, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111311] text-[#F7F3E9] pt-24 pb-12 overflow-hidden relative border-t-4 border-[#364231]">
      
      {/* Background Architectural Grid Texture Overlay - Made Brighter and Clearly Visible */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #ffffff 1.5px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      {/* Subtle Cyan Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative w-44 h-12">
              <Image
                src="/logo.png"
                alt="FRYZO"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-sans text-white/70 max-w-sm leading-relaxed">
              Crafting Pakistan&apos;s ultimate frozen french fry experience through sustainable contract farming, precision cutting, and automated rapid flash-freezing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://fryzo.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="editorial-tag text-[11px] text-brand-cyan block font-bold">NAVIGATION</span>
            <ul className="space-y-3">
              {[
                { label: 'The Fryzo Story', href: '/about-us' },
                { label: 'Farm-To-Fryer Process', href: '/#process' },
                { label: 'Our Signature Cuts', href: '/shop' },
                { label: 'Culinary Inquiries', href: '/contact-us' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-brand-cyan transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Verification Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="editorial-tag text-[11px] text-brand-cyan block font-bold">DIRECT CONTACTS</span>
            <ul className="space-y-4 text-xs font-sans text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>Fryzo Headquarters, Lahore Industrial Estate, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="mailto:info@fryzo.com.pk" className="hover:text-brand-cyan transition-colors">
                  info@fryzo.com.pk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="tel:+923000000000" className="hover:text-brand-cyan transition-colors font-mono">
                  +92 300 0000000
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan font-mono text-[10px] uppercase tracking-widest font-bold">
                ● Cold Chain Active Across Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Credits Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50">
          <p>© 2026 FRYZO FRIES (PVT) LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>TERMS OF SERVICE</span>
            <span>PRIVACY POLICY</span>
            <span>HALAL CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
