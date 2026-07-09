'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import React from 'react';
import { motion } from 'framer-motion';

const EightPointAsterisk = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M4.93 4.93l14.14 14.14" />
    <path d="M19.07 4.93L4.93 19.07" />
  </svg>
);



const serviceMarqueeWords = [
  "MANPOWER OUTSOURCING",
  "FACILITY MANAGEMENT",
  "HOUSEKEEPING SERVICES",
  "PAYROLL OUTSOURCING",
  "COMMERCIAL STAFFING",
  "TRENCHLESS WORK"
];
const serviceMarqueeContent = [...serviceMarqueeWords, ...serviceMarqueeWords, ...serviceMarqueeWords];

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><Testimonials /></Reveal>

      {/* Services Marquee Section (After Testimonials) */}
      <Reveal>
        <div className="w-full bg-primary py-6 overflow-hidden flex shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-y border-white/10">
          <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] md:animate-[marquee_20s_linear_infinite] w-max items-center">
            {serviceMarqueeContent.map((word, idx) => (
              <React.Fragment key={idx}>
                <span className="text-2xl md:text-3xl font-black text-white px-8 tracking-widest">
                  {word}
                </span>
                <EightPointAsterisk className="w-8 h-8 text-white flex-shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal><Blog /></Reveal>
      <Reveal><Contact /></Reveal>
      <Reveal><Faq /></Reveal>
      
      <Footer />
    </main>
  );
}
