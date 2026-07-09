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

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <>
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-[4px] border-white overflow-hidden shadow-sm">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
    </div>
    
    <h4 className="font-bold text-base text-[#2F2F2F] mt-1">{testimonial.name}</h4>
    <p className="text-gray-400 text-xs mb-2">{testimonial.role}</p>
    
    <div className="flex justify-center gap-0.5 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    
    <p className="text-gray-500 text-sm leading-snug">
      "{testimonial.content}"
    </p>
  </>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Testimonials</span>
            <span className="w-6 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-primary">Clients Say.</span>
          </h2>
        </div>

        {/* Desktop: 3 Cards in a Row */}
        <div className="hidden md:grid grid-cols-3 gap-8 pt-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-[2rem] p-6 pt-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative text-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile: Swipable Slider */}
        <div className="md:hidden pt-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`active-${currentTestimonial.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-[2rem] p-6 pt-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative mx-auto max-w-[350px] text-center border border-gray-100"
            >
              <TestimonialCard testimonial={currentTestimonial} />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#f8f9fa] text-gray-600 flex items-center justify-center hover:bg-gray-200 shadow-md transition-colors"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 transition-colors"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
