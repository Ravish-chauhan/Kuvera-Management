'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, label: 'Years of Experience', value: 15, suffix: '+' },
  { id: 2, label: 'Projects Completed', value: 850, suffix: '+' },
  { id: 3, label: 'Happy Clients', value: 500, suffix: '+' },
  { id: 4, label: 'Expert Staff', value: 1200, suffix: '+' },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/office-tower.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight flex items-baseline justify-center">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
