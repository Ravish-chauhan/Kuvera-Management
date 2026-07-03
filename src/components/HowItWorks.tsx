import React from 'react';
import { Search, FileText, Settings, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose Service',
    description: 'Select the perfect service tailored to your specific requirements.',
    icon: <Search className="w-8 h-8 text-gray-900" />,
  },
  {
    id: 2,
    title: 'Ask for Quote',
    description: 'Request a transparent, competitive estimate for your project.',
    icon: <FileText className="w-8 h-8 text-gray-900" />,
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Our expert team handles the execution with precision and quality.',
    icon: <Settings className="w-8 h-8 text-gray-900" />,
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'We ensure 100% satisfaction upon the successful completion.',
    icon: <CheckCircle2 className="w-8 h-8 text-gray-900" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Process</span>
            <span className="w-6 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How <span className="text-primary">It Works.</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                
                {/* Step Icon Circle */}
                <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100 mb-5 relative transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {step.id}
                  </div>
                </div>
                
                {/* Step Text */}
                <h3 className="text-lg font-bold text-[#103063] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
