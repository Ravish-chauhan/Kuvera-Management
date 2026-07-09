'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const checkItems = [
  'Skilled, semi-skilled & unskilled workforce deployment.',
  'Comprehensive payroll and attendance management.',
  'End-to-end compliance handling & operational efficiency.',
  'Cost-effective staffing for long-term business support.',
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white overflow-hidden"
      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Section ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-1 lg:mb-0 pb-14 mx-auto lg:mx-0"
          >
            {/* ── Solid Navy Vertical Bar — top right ── */}
            <div className="absolute top-2 right-[3%] sm:right-[13%] w-2.5 h-40 bg-primary rounded-full z-[5]" />

            {/* ── Main Image ── */}
            <div className="relative w-[88%] sm:w-[82%] z-10">
              <div className="overflow-hidden shadow-xl rounded-2xl">
                <img
                  src="/about.png"
                  alt="Manpower outsourcing team"
                  className="w-full h-[300px] sm:h-[370px] object-cover"
                />
              </div>
            </div>

            {/* ── Overlapping Accent Image — bottom right ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 right-0 w-[48%] z-20"
            >
              <div className="overflow-hidden shadow-xl rounded-2xl border-[6px] border-white">
                <img
                  src="/about2.png"
                  alt="Compliance and workforce management"
                  className="w-full h-[170px] sm:h-[200px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-2"
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-[1.15] mb-5">
              Welcome To Kuvera{' '}
              <span className="text-primary">Management Services.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We provide professional manpower outsourcing and facility management
              services to businesses, industries, offices, hospitals, malls,
              construction sites, and commercial organizations.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {checkItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Read More button */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-7 py-3 rounded-md transition-all duration-200 text-sm tracking-wide uppercase"
            >
              Read More
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

