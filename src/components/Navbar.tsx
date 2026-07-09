'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home',     href: '/'         },
  { name: 'About Us', href: '/about'    },
  { name: 'Services', href: '/#services' },
  { name: 'Our Team', href: '/#team'     },
  { name: 'Contact',  href: '/#contact'  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  // Sync active state based on route & hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (pathname === '/about') {
        setActive('About Us');
      } else if (hash === '#services') {
        setActive('Services');
      } else if (hash === '#team') {
        setActive('Our Team');
      } else if (hash === '#contact') {
        setActive('Contact');
      } else {
        setActive('Home');
      }
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.10)]'
          : 'bg-transparent'
      }`}
      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={() => setActive('Home')}
            className="flex-shrink-0 flex items-center -ml-16 sm:-ml-20 md:-ml-24 lg:-ml-28"
          >
            <div className="relative h-16 sm:h-20 flex items-center z-20">
              <img
                src="/logo2.png"
                alt="Kuvera Management Services"
                className="h-full w-auto object-contain scale-[1.6] sm:scale-[1.9] origin-left translate-y-1.5"
              />
            </div>
            <div className="flex flex-col uppercase tracking-wider text-left z-10 pt-1 ml-2 md:ml-5 lg:ml-8">
              <span className="text-primary font-black text-sm sm:text-base mb-0.5 leading-none">
                Management
              </span>
              <span
                className={`font-semibold text-[11px] sm:text-[13px] tracking-widest leading-none transition-colors duration-300 ${
                  scrolled || isOpen ? 'text-gray-500' : 'text-white/60'
                }`}
              >
                Services
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-4">

            {/* Nav links with skewed orange background */}
            <div className="relative flex items-center">
              {/* Skewed pill bg */}
              <div
                className="absolute inset-0 bg-primary rounded-sm opacity-95"
                style={{ transform: 'skewX(-12deg)' }}
              />
              <nav className="relative flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`relative px-4 py-[18px] text-[13px] font-semibold transition-colors duration-150 whitespace-nowrap ${
                      active === link.name
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active === link.name && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-3 left-4 right-4 h-[2px] bg-white rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Phone CTA — different style */}
            <a
              href="tel:+911234567890"
              className={`group flex items-center gap-2.5 transition-all duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {/* Pulsing ring around phone icon */}
              <span className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                <span className="relative w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Phone size={15} className="text-white" />
                </span>
              </span>
              <div className="flex flex-col leading-none">
                <span className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
                  Call Us
                </span>
                <span className="text-[13px] font-bold">
                  +91 12345 67890
                </span>
              </div>
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 flex items-center justify-center transition-colors duration-200 ${
              scrolled || isOpen ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{    rotate:  90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Full Screen Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden fixed top-[88px] left-0 w-full h-[calc(100vh-88px)] bg-white z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => { setActive(link.name); setIsOpen(false); }}
                    className={`block text-2xl font-bold transition-colors duration-200 ${
                      active === link.name
                        ? 'text-primary'
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-100"
              >
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-[#103063] text-white py-4 rounded-xl font-bold text-lg transition-colors duration-200 shadow-lg shadow-primary/25"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  +91 12345 67890
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
