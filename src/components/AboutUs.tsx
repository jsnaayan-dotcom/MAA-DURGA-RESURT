import React from 'react';
import { Heart, ShieldCheck, Waves, Sparkles, Utensils, CheckCircle, Users, Sun } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative Traditional Floral/Alpana Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-red-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Divine Blessings & Bengali Heritage</span>
          </div>
          
          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            About <span className="text-red-700">Maa Durga</span> Guest Inn
          </h2>
          <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg text-amber-800 font-medium mt-1">
            "মা দুর্গার আশীর্বাদে আন্তরিক অতিথি সেবা ও নিরাপদ আতিথেয়তা"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story Card & Images */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300 group">
              <img
                src={HOTEL_INFO.images.reception}
                alt="Maa Durga Guest Inn Reception Lobby Desk"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-amber-500 text-stone-950 text-xs font-bold px-2.5 py-1 rounded shadow uppercase tracking-wide inline-block mb-1">
                  Welcoming Front Desk
                </span>
                <p className="font-['Playfair_Display'] font-bold text-lg text-white">
                  Warm Smiles, Homely Care & 24/7 Assistance
                </p>
                <p className="text-xs text-amber-200">
                  Managed with care by Suman Mridha & Family
                </p>
              </div>
            </div>

            {/* Sub-card highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-center">
                <span className="text-2xl font-black text-red-700 block font-['Playfair_Display']">270+</span>
                <span className="text-xs text-stone-700 font-medium">Happy Reviews</span>
              </div>
              <div className="bg-red-50 border border-red-200/80 rounded-xl p-3 text-center">
                <span className="text-2xl font-black text-red-700 block font-['Playfair_Display']">350m</span>
                <span className="text-xs text-stone-700 font-medium">To Sea Beach</span>
              </div>
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-center">
                <span className="text-2xl font-black text-amber-700 block font-['Playfair_Display']">₹700</span>
                <span className="text-xs text-stone-700 font-medium">Starting Price</span>
              </div>
            </div>

          </div>

          {/* Right Column: Traditional Story & Pillars */}
          <div className="lg:col-span-6 space-y-6 text-stone-700">
            
            {/* Story Paragraph with Quotation */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-200/70 relative">
              <div className="text-4xl text-amber-400 font-serif absolute top-3 left-4 select-none opacity-50">“</div>
              <p className="text-stone-800 text-base sm:text-lg leading-relaxed relative z-10 pl-4 font-normal">
                <strong className="text-red-700 font-semibold font-['Playfair_Display']">Maa Durga Guest Inn</strong> was built with the divine blessings of Maa Durga to offer safe, affordable, and homely stays for travelers visiting Digha. Inspired by authentic Bengali hospitality, our hotel focuses on comfort, cleanliness, and care for every guest like family.
              </p>
              <div className="mt-4 pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-amber-800">Old Digha, West Bengal</span>
                <span>Rajbari Complex Landmark</span>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-3.5">
              
              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-amber-50/60 transition border border-transparent hover:border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Pure Homely Bengali Care</h4>
                  <p className="text-sm text-stone-600 leading-normal">
                    We treat every traveler, senior citizen, child, and couple with personal warmth and respectful Bengali hospitality ("অতিথি দেব ভব").
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-amber-50/60 transition border border-transparent hover:border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Uncompromised Safety & 24/7 CCTV</h4>
                  <p className="text-sm text-stone-600 leading-normal">
                    Complete peace of mind for families, women travelers, and couples with round-the-clock CCTV surveillance and attentive staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-amber-50/60 transition border border-transparent hover:border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">High Hygiene & Clean Bedding Standards</h4>
                  <p className="text-sm text-stone-600 leading-normal">
                    Sparkling clean attached washrooms, fresh laundered bedsheets, sanitized rooms, and daily housekeeping service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-amber-50/60 transition border border-transparent hover:border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base">Authentic Bengali Food Kitchen</h4>
                  <p className="text-sm text-stone-600 leading-normal">
                    Freshly caught sea fish (Macher Jhol, Hilsa, Pomfret), prawn curry, steaming thalis, and morning snacks served hot to your room.
                  </p>
                </div>
              </div>

            </div>

            {/* Who is welcome banner */}
            <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-200" />
                <span className="font-semibold text-sm">
                  Welcome to: Families, Couples, Friends & Solo Pilgrims
                </span>
              </div>
              <span className="bg-white/20 backdrop-blur-xs text-xs font-bold px-2.5 py-1 rounded-full">
                Valid Govt ID Required
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
