'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#051124] text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mt-20 -ml-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info (Col Span 4) */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="flex items-center mb-8 -ml-4">
              <div className="relative h-14 flex items-center z-20">
                <img
                  src="/logo2.png"
                  alt="Kuvera Management Services"
                  className="h-full w-auto object-contain scale-[1.5] origin-left translate-y-1"
                />
              </div>
              <div className="flex flex-col uppercase tracking-wider text-left z-10 ml-4">
                <span className="text-primary font-black text-sm mb-0.5 leading-none">
                  Management
                </span>
                <span className="font-semibold text-[11px] tracking-widest leading-none text-white/60">
                  Services
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              We are a leading provider of manpower outsourcing, facility management, and comprehensive corporate support services designed to optimize your business operations.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services (Col Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Manpower Outsourcing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Payroll Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Housekeeping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Security Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Facility Management</a></li>
            </ul>
          </div>

          {/* Contact (Col Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Business Avenue, Sector 45<br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@kuverafacility.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kuvera Management Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
