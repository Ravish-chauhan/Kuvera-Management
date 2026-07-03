'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Kuvera Facility Management has completely transformed our daily operations. Their highly trained staff and strict adherence to compliance give us absolute peace of mind.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'HR Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Outsourcing our commercial staffing and payroll to them was the best business decision we made this year. Flawless execution and zero delays in deployment.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Facility Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'From deep cleaning to 24/7 security services, Kuvera has consistently delivered premium quality. Their supervisors are incredibly responsive and professional.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];
  const nextTestimonial = testimonials[(activeIndex + 1) % testimonials.length];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 leading-tight">
              Hear From Our Satisfied <br className="hidden lg:block"/>
              Clients Have to Say
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We take immense pride in delivering top-tier facility and workforce solutions. Don't just take our word for it—read what our partners have to say about our services.
            </p>
          </div>

          {/* Right Side: Cards Slider */}
          <div className="lg:col-span-7 relative">
            <div className="flex gap-6 sm:gap-8 overflow-hidden pt-14 pb-12 px-4 -mx-4 sm:px-8 sm:-mx-8">
              
              {/* Active Card */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`active-${currentTestimonial.id}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white rounded-[2rem] p-8 pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative flex-1 min-w-[280px] max-w-[350px] text-center border border-gray-100 z-10 shrink-0"
                >
                  {/* Floating Avatar */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden shadow-md">
                    <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <h4 className="font-bold text-lg text-[#2F2F2F]">{currentTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{currentTestimonial.role}</p>
                  
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {currentTestimonial.content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Next Card (Preview) - Faded and slightly smaller */}
              <motion.div
                key={`preview-${nextTestimonial.id}`}
                className="bg-white rounded-[2rem] p-8 pt-14 shadow-[0_5px_15px_rgba(0,0,0,0.03)] relative flex-1 min-w-[280px] max-w-[350px] text-center border border-gray-50 opacity-40 scale-95 origin-left shrink-0 hidden sm:block pointer-events-none"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-[6px] border-white overflow-hidden">
                  <img src={nextTestimonial.image} alt={nextTestimonial.name} className="w-full h-full object-cover" />
                </div>
                
                <h4 className="font-bold text-lg text-[#2F2F2F]">{nextTestimonial.name}</h4>
                <p className="text-gray-400 text-sm mb-3">{nextTestimonial.role}</p>
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(nextTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {nextTestimonial.content}
                </p>
              </motion.div>

            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4 mt-2 pr-4 sm:pr-12 lg:pr-24">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#f8f9fa] text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#103063] shadow-lg shadow-primary/30 transition-colors"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
