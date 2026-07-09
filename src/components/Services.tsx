'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileSpreadsheet, Sparkles, Building2, HardHat, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const servicesList = [
  {
    id: 1,
    title: 'Manpower Outsourcing',
    description: 'Skilled, semi-skilled, and unskilled workforce deployment based on client requirements.',
    icon: <Users size={32} className="text-primary" />,
    image: '/service1.png'
  },
  {
    id: 2,
    title: 'Facility Management',
    description: 'Comprehensive facility management services for offices, hospitals, malls, and more.',
    icon: <Building2 size={32} className="text-primary" />,
    image: '/service2.png'
  },
  {
    id: 3,
    title: 'Housekeeping Services',
    description: 'Professional housekeeping and cleaning to maintain a pristine environment.',
    icon: <Sparkles size={32} className="text-primary" />,
    image: '/service3.png'
  },
  {
    id: 4,
    title: 'Payroll Outsourcing',
    description: 'Efficient management of employee payroll, attendance, and compliance handling.',
    icon: <FileSpreadsheet size={32} className="text-primary" />,
    image: '/service4.png'
  },
  {
    id: 5,
    title: 'Commercial Staffing',
    description: 'Reliable staffing solutions for industries, commercial organizations, and construction sites.',
    icon: <Briefcase size={32} className="text-primary" />,
    image: '/service5.png'
  },
  {
    id: 6,
    title: 'Trenchless Work Services',
    description: 'Specialized trenchless work and allied support services for complex projects.',
    icon: <HardHat size={32} className="text-primary" />,
    image: '/service6.png'
  },
];

// Create an artificially infinite list by duplicating the services array 100 times.
// This allows seamless scrolling in both directions without wrapping/teleporting bugs.
const extendedServices = Array(100).fill(servicesList).flat().map((service, index) => ({
  ...service,
  uniqueId: index,
}));

const Services = () => {
  // Start right in the middle of the infinite list
  const [activeIndex, setActiveIndex] = React.useState(Math.floor(extendedServices.length / 2));

  const next = () => setActiveIndex((prev) => prev + 1);
  const prev = () => setActiveIndex((prev) => prev - 1);

  // We only render 5 items around the active index to keep DOM lightweight.
  const visibleItems = extendedServices.slice(activeIndex - 2, activeIndex + 3);

  return (
    <section id="services" className="relative pt-16 lg:pt-24 pb-16 bg-gray-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center -mb-8 lg:-mb-4 flex flex-col items-center justify-center">
          
          {/* Label & Watermark Wrapper */}
          <div className="relative flex items-center justify-center w-full py-2 lg:py-2 mt-2 lg:mt-4">
            {/* Large outlined "SERVICES" watermark text */}
            <div
              className="absolute left-1/2 select-none pointer-events-none z-0"
              style={{
                top: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                fontWeight: 900,
                letterSpacing: '0.05em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(4, 125, 230, 0.07)',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              SERVICES
            </div>

            {/* OUR SERVICE label with lines */}
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Service</span>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-[1.15]">
            Services <span className="text-primary">We Provide.</span>
          </h2>
        </div>

        {/* Infinite 3D Carousel */}
        <div className="relative w-[100vw] left-1/2 -translate-x-1/2 sm:w-full sm:left-auto sm:translate-x-0 lg:max-w-[984px] xl:max-w-[1074px] h-[600px] mx-auto flex items-center justify-center overflow-hidden">
          {visibleItems.map((service, localIndex) => {
            const offset = localIndex - 2; 
            const isActive = offset === 0;

            return (
              <motion.div
                key={service.uniqueId}
                initial={false}
                animate={{
                  x: `calc(${offset} * (100% + 3rem))`,
                  scale: isActive ? 1.05 : 0.95,
                  zIndex: isActive ? 10 : 5,
                  boxShadow: isActive 
                    ? "0 20px 50px rgba(0,0,0,0.12)" 
                    : "0 8px 30px rgba(0,0,0,0.04)"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                }}
                className={`flex flex-col w-[80vw] sm:w-[45vw] lg:w-[280px] xl:w-[310px] h-auto min-h-[380px] bg-white rounded-[1.25rem] group ${
                  isActive ? 'border-transparent' : 'border border-gray-100'
                }`}
              >
                {/* Top Image Section with Padding */}
                <div className="relative p-4 pb-0">
                  <div className="relative h-[160px] w-full rounded-2xl overflow-hidden shadow-inner">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  {/* Overlapping Icon Box */}
                  <div className="absolute -bottom-5 right-7 w-[3.25rem] h-[3.25rem] bg-[#23b6f0] rounded-[14px] flex items-center justify-center shadow-lg z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    {React.cloneElement(service.icon as any, {
                      className: "text-white",
                      size: 24
                    })}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-9 flex flex-col flex-grow">
                  <h3 className="text-[1.15rem] font-bold text-[#103063] mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <Link 
                    href="#contact" 
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#23b6f0] text-white px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-[#103063] transition-colors self-start"
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 relative z-20 -mt-12 pb-6">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous services"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:brightness-110 transition-all"
            aria-label="Next services"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
