'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Asterisk, Shield, Target, Users, Zap, CheckCircle2, Building2, Briefcase, FileSpreadsheet, Sparkles, HardHat } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import CountUp from 'react-countup';

const EightPointAsterisk = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M4.93 4.93l14.14 14.14" />
    <path d="M19.07 4.93L4.93 19.07" />
  </svg>
);

const marqueeWords = [
  "RELIABILITY",
  "EXCELLENCE",
  "INTEGRITY",
  "PROFESSIONALISM",
  "TRUST",
  "QUALITY",
  "INNOVATION"
];

// Tripling the array for seamless infinite marquee loop
const marqueeContent = [...marqueeWords, ...marqueeWords, ...marqueeWords];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#051124] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#105c9e]/20 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Story</span>
            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            Elevating <span className="text-primary">Standards</span> in Facility Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing world-class manpower outsourcing and facility management solutions tailored to the unique needs of modern businesses.
          </p>
        </motion.div>
      </section>

      {/* Infinite Marquee Section */}
      <div className="w-full bg-primary py-6 overflow-hidden flex shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border-y border-white/10">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] md:animate-[marquee_20s_linear_infinite] w-max items-center">
          {marqueeContent.map((word, idx) => (
            <React.Fragment key={idx}>
              <span className="text-2xl md:text-3xl font-black text-white px-8 tracking-widest">
                {word}
              </span>
              <EightPointAsterisk className="w-8 h-8 text-white flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* New "Mission / About Company" Section matching the image */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 items-center mb-20">

            {/* Left Column: Overlapping Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full"
            >
              {/* Main Background Image */}
              <div className="relative w-[70%] ml-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <img
                  src="/about.png"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller Overlapping Image */}
              <div className="absolute bottom-12 left-0 w-[45%] aspect-square rounded-[2rem] overflow-hidden border-[8px] border-white z-10">
                <img
                  src="/about2.png"
                  alt="Office Professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-4 left-[35%] lg:left-[38%] bg-primary rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-white z-20 border-[4px] sm:border-[6px] border-white shadow-xl">
                <span className="text-lg sm:text-2xl font-black mb-0 sm:mb-1">1,485+</span>
                <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-wider text-center px-2">Trusted Clients</span>
              </div>
            </motion.div>

            {/* Right Column: Text and List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pr-8 mt-16 lg:mt-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-[#2F2F2F] text-xs font-bold uppercase tracking-wide">About Company</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2F2F2F] mb-4 leading-tight">
                We Are The Best Facility <br className="hidden lg:block" /> Management Agency
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                At Kuvera Management Services, our mission is to empower organizations by seamlessly managing their support operations. We provide highly trained personnel and robust facility management strategies so you can focus entirely on your core business.
              </p>

              {/* Bullet Points */}
              <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f4f7ff] flex items-center justify-center flex-shrink-0 text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2F2F2F] mb-1">Trusted Partner</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      We operate with complete transparency and build long-lasting relationships with all our clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f4f7ff] flex items-center justify-center flex-shrink-0 text-primary">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2F2F2F] mb-1">Fastpace Platform</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Agile operations and dynamic solutions that adapt to rapidly changing corporate needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f4f7ff] flex items-center justify-center flex-shrink-0 text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2F2F2F] mb-1">Tested Reliability</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Uncompromising safety standards and guaranteed absolute compliance across all services.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Stats Row (Bottom of layout) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-t border-gray-100 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-black text-[#2F2F2F] mb-2 flex items-center justify-center gap-1">
                <CountUp end={25} enableScrollSpy scrollSpyOnce /> <span className="text-primary">+</span>
              </div>
              <div className="text-gray-500 text-sm font-medium">Years Of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#2F2F2F] mb-2 flex items-center justify-center gap-1">
                <CountUp end={3452} separator="," enableScrollSpy scrollSpyOnce /> <span className="text-primary">+</span>
              </div>
              <div className="text-gray-500 text-sm font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#2F2F2F] mb-2 flex items-center justify-center gap-1">
                <CountUp end={751} enableScrollSpy scrollSpyOnce /> <span className="text-primary">+</span>
              </div>
              <div className="text-gray-500 text-sm font-medium">Active Staff</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#2F2F2F] mb-2 flex items-center justify-center gap-1">
                <CountUp end={592} enableScrollSpy scrollSpyOnce /> <span className="text-primary">+</span>
              </div>
              <div className="text-gray-500 text-sm font-medium">Positive Reviews</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-100 pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Our Expertise</span>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-extrabold text-[#2F2F2F] mb-6">
              Comprehensive <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We offer a wide array of specialized services designed to keep your business running smoothly and efficiently.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12"
          >

            {/* Service 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Manpower Outsourcing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Skilled, semi-skilled, and unskilled workforce deployment based on client requirements.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Facility Management</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive facility management services for offices, hospitals, malls, and more.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Housekeeping Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional housekeeping and cleaning to maintain a pristine environment.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <FileSpreadsheet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Payroll Outsourcing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Efficient management of employee payroll, attendance, and compliance handling.
              </p>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Commercial Staffing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reliable staffing solutions for industries, commercial organizations, and construction sites.
              </p>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-[2rem] p-8 pt-12 shadow-xl shadow-gray-200/60 border border-white relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-[6px] border-gray-100">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2F2F2F] mb-3">Trenchless Work Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Specialized trenchless work and allied support services for complex projects.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
