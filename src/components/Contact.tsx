'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Simplified & Reduced */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Contact Us</span>
            <span className="w-6 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Let's <span className="text-primary">Connect.</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Reach out to our experts for tailored facility management solutions.
          </p>
        </div>

        {/* Unified Contact Card (Premium Design) */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Contact Info (Dark Blue Pane) */}
          <div className="lg:w-2/5 bg-[#044c8c] text-white p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#105c9e] rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            
            <div className="relative z-10 mb-12">
              <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
              <p className="text-blue-200 text-sm">We'd love to hear from you. Our friendly team is always here to chat.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-8 flex-grow">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#044c8c] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-inherit" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-blue-100 text-sm">info@kuverafacility.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#044c8c] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-inherit" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-blue-100 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#044c8c] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-inherit" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Office</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    123 Business Park, Sector 45<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Pane */}
          <div className="lg:w-3/5 p-10 lg:p-12 bg-white">
            <form className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    placeholder="John"
                    className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-300"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    placeholder="Doe"
                    className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@company.com"
                  className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-gray-300"
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Service Required</label>
                <select 
                  id="service"
                  defaultValue=""
                  className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-sm text-gray-700 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="housekeeping">Commercial Housekeeping</option>
                  <option value="security">Security Services</option>
                  <option value="payroll">Payroll Management</option>
                  <option value="maintenance">Technical Maintenance</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Your Message</label>
                <textarea 
                  id="message"
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-white border-b-2 border-gray-200 px-0 py-2 text-sm focus:outline-none focus:border-primary transition-all resize-none placeholder:text-gray-300"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#103063] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
