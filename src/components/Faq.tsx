'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What types of facility management services do you offer?',
    answer: 'We provide a comprehensive range of services including commercial housekeeping, technical maintenance, 24/7 security services, landscaping, and specialized deep cleaning tailored to corporate environments.'
  },
  {
    question: 'How do you ensure the quality and reliability of your workforce?',
    answer: 'Every team member undergoes a rigorous multi-stage vetting process including background checks, skill assessments, and intensive training programs before being deployed to any client site.'
  },
  {
    question: 'Do you handle payroll and statutory compliances for the outsourced staff?',
    answer: 'Yes, we provide end-to-end payroll management. This includes PF, ESI, professional tax, and all other statutory compliances, ensuring you operate with zero legal or administrative risk.'
  },
  {
    question: 'Can you scale the workforce up or down based on our seasonal needs?',
    answer: 'Absolutely. We offer highly flexible staffing solutions that allow you to seamlessly scale your workforce according to your operational demands and business cycles.'
  },
  {
    question: 'How quickly can you deploy staff to a new facility?',
    answer: 'Thanks to our extensive pre-vetted talent pool, we can typically deploy standard facility management staff within 48 to 72 hours of finalizing the contract.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Header & Support Card */}
          <div className="lg:col-span-5 h-fit">
            
            <div className="flex items-center gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-wide">
              <span className="w-4 h-0.5 bg-primary" /> Support Center
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#103063] mb-6 leading-tight">
              Questions?<br />We're Here.
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8 pr-4">
              Everything you need to know about our facility management, staffing, and compliance solutions.
            </p>
            
            {/* Blue Support Card */}
            <div className="bg-[#044c8c] text-white rounded-2xl p-6 sm:px-8 sm:py-7 relative overflow-hidden shadow-xl max-w-[380px]">
              {/* Decorative Solid Circle */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#105c9e] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">Still need help?</h3>
                <p className="text-gray-200 text-[13px] sm:text-sm mb-5 max-w-[85%]">Our expert support team is just a message away.</p>
                
                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#044c8c] font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-sm">
                  <MessageCircle className="w-4 h-4" /> Chat with Us
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion (Clean list style) */}
          <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-8">
            <div className="border-t border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                    >
                      <span className={`font-bold text-[16px] sm:text-[18px] transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-[#103063] group-hover:text-primary'}`}>
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="pb-8 pt-0 text-gray-500 leading-relaxed text-[15px] pr-8 lg:pr-12">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
