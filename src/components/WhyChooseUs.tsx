import React from 'react';
import { Clock, Users, Headset } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Verified & Skilled Workforce',
    description: 'We provide highly trained, thoroughly vetted, and reliable personnel tailored specifically to meet your operational requirements.',
    icon: <Users className="w-5 h-5 text-primary" strokeWidth={2} />,
  },
  {
    id: 2,
    title: 'End-to-End Compliance',
    description: 'We manage all statutory compliances, payroll administration, and HR logistics, ensuring 100% risk-free and seamless business operations.',
    icon: <Clock className="w-5 h-5 text-primary" strokeWidth={2} />,
  },
  {
    id: 3,
    title: '24/7 Operational Support',
    description: 'Our dedicated management team is available around the clock to address any facility, staffing, or operational challenges instantly.',
    icon: <Headset className="w-5 h-5 text-primary" strokeWidth={2} />,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Why Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why <span className="text-primary">Choose Us.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[500px]">
              We deliver comprehensive facility management and manpower solutions designed to streamline your operations, ensure strict compliance, and drive cost-efficiency so you can focus on your core business.
            </p>

            <div className="flex flex-col gap-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start gap-4 group">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-[56px] h-[56px] border-2 border-[#bae1f8] flex items-center justify-center rounded-sm transition-all duration-300 group-hover:border-primary group-hover:bg-[#eaf5fc]">
                    {reason.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-[#2F2F2F] mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed max-w-[420px]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 px-4 sm:px-12 lg:px-8 xl:px-12">
            {/* The Image */}
            <div className="relative z-0 shadow-xl">
              <img 
                src="/why-choose-us-official.png" 
                alt="Corporate executives in meeting" 
                className="w-full aspect-[4/3] lg:aspect-[16/11] object-cover"
              />
            </div>

            {/* The thick blue offset frame overlay */}
            <div 
              className="absolute z-10 border-[8px] lg:border-[12px] border-primary pointer-events-none"
              style={{
                top: '-12%',
                right: '-2%',
                bottom: '16%',
                left: '16%'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
