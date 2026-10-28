import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HeroSection from '@/components/sections/HeroSection';
import CharcoalCarousel from '@/components/sections/CharcoalCarousel';
import StorySection from '@/components/sections/StorySection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProductsSection from '@/components/sections/ProductsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream relative">
      
      {/* Outer Dark Green Enclosure Rectangle */}
      <div className="relative w-full border-[10px] md:border-[14px] border-[#364231] bg-[#364231] shadow-2xl overflow-hidden">
        {/* Inner Rounded Canvas matching the screenshot's inner curve */}
        <div className="w-full bg-brand-cream rounded-[2.5rem] md:rounded-[3.2rem] overflow-hidden">
          <Header />
          <HeroSection />
        </div>
      </div>

      <main className="flex-1">
        {/* Charcoal Black Carousel right below the Hero Enclosure */}
        <CharcoalCarousel />
        <StorySection />
        <ProcessSection />
        <ProductsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
