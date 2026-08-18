import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Compass, Navigation } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Format WhatsApp or direct message
    const msg = `Hello Maa Durga Guest Inn!
New Inquiry from Website:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Preferred Dates: ${formData.dates || 'Not specified'}
- Message: ${formData.message || 'Room Inquiry'}`;

    // Show success banner
    setSubmitted(true);

    // Option to open WhatsApp directly with their inquiry
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-red-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-700" />
            <span>Old Digha Location & Contacts</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Get in Touch & <span className="text-red-700">Find Us</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            We are just 350 meters from the Old Digha sea beach ghats. Reach out directly by phone, WhatsApp, or submit your booking inquiry below.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info + Map + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Map Embed */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:border-amber-400 transition">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">Call & WhatsApp</h4>
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="text-base font-extrabold text-red-700 hover:underline block mt-1"
                >
                  {HOTEL_INFO.phone}
                </a>
                <p className="text-[11px] text-stone-500 mt-1">Available 24/7 for booking inquiries</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:border-amber-400 transition">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">Official Email</h4>
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="text-xs font-semibold text-stone-800 hover:text-red-700 block mt-1 break-all"
                >
                  {HOTEL_INFO.email}
                </a>
                <p className="text-[11px] text-stone-500 mt-1">Quick responses within a few hours</p>
              </div>

              {/* Address Card (Full width on sm) */}
              <div className="sm:col-span-2 bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:border-amber-400 transition">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Hotel Address & Landmark</h4>
                    <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
                      <strong>{HOTEL_INFO.name}</strong><br />
                      {HOTEL_INFO.address}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-amber-800 font-medium">
                      <span className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                        <Clock className="w-3.5 h-3.5 text-red-600" /> Check-in: 12 PM | Check-out: 10 AM
                      </span>
                      <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-1 rounded border border-emerald-200">
                        <Navigation className="w-3.5 h-3.5" /> 350m to Old Digha Beach
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-amber-300 relative bg-stone-200">
              <iframe
                title="Maa Durga Guest Inn Old Digha Location Map"
                src="https://maps.google.com/maps?q=Old+Digha+Rajbari+Complex+Purba+Medinipur+West+Bengal+721428&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="p-3 bg-white border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-600 font-medium">
                  📍 Rajbari Complex, Near Hotel Angali Nibas, Old Digha
                </span>
                <a
                  href={`https://maps.google.com/?q=Old+Digha+West+Bengal+721428`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-red-700 hover:underline shrink-0"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl relative">
              
              <div className="mb-6">
                <div className="inline-block bg-amber-400 text-stone-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-2">
                  Direct Manager Booking
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-2xl text-stone-900">
                  Send Booking Enquiry
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill in your travel details. We will confirm room availability and special tariff immediately.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg text-emerald-900">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Your inquiry has been processed. We have opened WhatsApp with your details so you can directly connect with Suman Mridha (Manager).
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-800 transition"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Banerjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFFDF9] border border-amber-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FFFDF9] border border-amber-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FFFDF9] border border-amber-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Expected Travel Dates & Room Preference
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Nights, 2-Bed AC Room, 2 Adults + 1 Kid"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full bg-[#FFFDF9] border border-amber-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Special Requests / Bengali Food Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need early check-in, ground floor room for seniors, Bengali fish thali for lunch..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FFFDF9] border border-amber-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Submit & Connect on WhatsApp / Phone</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-100">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Direct Hotel Tariff
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Zero Booking Commission
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
