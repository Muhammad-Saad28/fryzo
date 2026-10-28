'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = mounted ? getTotalItems() : 0;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Collection', href: '/shop' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      <header className="w-full bg-brand-cream pt-4 pb-2 px-4 sm:px-6 md:px-8">
        {/* Floating Rounded Rectangle Navbar */}
        <div className="max-w-7xl mx-auto bg-[#111311] text-[#F7F3E9] py-3.5 px-6 md:px-8 rounded-[2rem] shadow-lg flex items-center justify-between border border-white/10">
          
          {/* Logo in Navbar */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-36 h-10 md:w-44 md:h-12 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/logo.png"
                alt="FRYZO"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Minimal Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-sans tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#F7F3E9] font-bold'
                      : 'text-[#F7F3E9]/70 hover:text-[#F7F3E9] font-normal'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Pill Basket in Cream on Charcoal */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F3E9] text-[#111311] hover:bg-brand-cyan transition-all text-xs font-mono uppercase tracking-wider font-bold shadow-sm"
              aria-label="View basket"
            >
              <span>BASKET</span>
              <span className="w-4 h-4 rounded-full bg-[#111311] text-[#F7F3E9] text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full border border-white/20 text-[#F7F3E9] hover:bg-white/10"
              aria-label="Open mobile menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-[#111311] text-[#F7F3E9] h-full p-8 flex flex-col justify-between z-10 border-l border-white/10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="relative w-32 h-9">
                  <Image
                    src="/logo.png"
                    alt="FRYZO"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-[#F7F3E9] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif font-bold text-[#F7F3E9] hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#F7F3E9] text-[#111311] text-center text-xs font-mono uppercase tracking-widest block font-bold hover:bg-brand-cyan transition-colors"
              >
                Order Online
              </Link>
              <p className="text-[11px] font-mono text-center text-[#F7F3E9]/50">
                © 2026 FRYZO PAKISTAN • ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
