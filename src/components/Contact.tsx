'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Get in Touch</span>
            <span className="w-6 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 leading-tight">
            Let's Discuss Your <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Have questions about our facility management or staffing solutions? Reach out to us today and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Address */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#eaf5fc] flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2F2F2F] mb-2">Office Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Business Avenue, Tech Park Phase 2,<br />
                    Industrial Sector, 400001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#eaf5fc] flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2F2F2F] mb-2">Phone Number</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#eaf5fc] flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2F2F2F] mb-2">Email Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    info@kuverafacility.com<br />
                    support@kuverafacility.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-[#eaf5fc] flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2F2F2F] mb-2">Working Hours</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Monday - Saturday<br />
                    09:00 AM - 06:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-[#2F2F2F] mb-8">Send us a Message</h3>
            
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-600">
                  <option value="">Select a service...</option>
                  <option value="facility">Facility Management</option>
                  <option value="staffing">Manpower & Staffing</option>
                  <option value="payroll">Payroll Management</option>
                  <option value="security">Security Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-[#103063] transition-colors mt-2 shadow-lg shadow-primary/30"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
