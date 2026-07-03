'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Users, ShieldCheck } from 'lucide-react';

const trustItems = [
  { icon: Clock, line1: 'Fast', line2: 'Response' },
  { icon: Users, line1: 'Certified', line2: 'Workforce' },
  { icon: ShieldCheck, line1: 'Compliance', line2: 'Guaranteed' },
];

const Hero = () => {
  const images = [
    '/hero.png',
    '/hero2.png',
    '/hero3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-secondary"
      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
    >
      {/* ── Background Slider ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'easeOut' },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay: heavy on the left, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/97 via-gray-900/80 to-gray-900/30 z-10" />
        <div className="absolute inset-0 bg-black/15 z-10" />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          className="max-w-2xl"
        >


          {/* ── Headline ── */}
          <h1
            className="font-extrabold leading-[1.1] text-white mb-5"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
          >
            Reliable Workforce<br />
            Management &amp;<br />
            <span className="text-primary">Facility Services.</span>
          </h1>

          {/* ── Subtext ── */}
          <p className="text-white/55 text-sm sm:text-base mb-10 max-w-sm leading-relaxed font-normal">
            Skilled manpower, facility management &amp; operational support — all under one roof.
          </p>

          {/* ── CTAs ── */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            {/* Primary */}
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 bg-[#0d1b3e] hover:bg-[#162d5e] text-white font-bold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Explore Services
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* ── Trust Indicators ── */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {trustItems.map(({ icon: Icon, line1, line2 }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white/70" />
                </div>
                <div className="leading-tight">
                  <div className="text-white text-sm font-semibold">{line1}</div>
                  <div className="text-white/50 text-xs font-medium">{line2}</div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
