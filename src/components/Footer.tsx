import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Star, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 sm:pb-16 border-t-4 border-amber-500 relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Blessings */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-['Playfair_Display'] font-black text-xl border-2 border-amber-300">
                MD
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-white">
                  Maa Durga Guest Inn
                </h3>
                <p className="text-xs text-amber-400 font-['Noto_Serif_Bengali']">
                  মা দুর্গা গেস্ট ইন • ওল্ড দিঘা
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Built with the divine blessings of Maa Durga to offer safe, hygienic, and affordable stays for families, couples, and tourists visiting the beautiful sea coast of Old Digha.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 bg-stone-900 p-2.5 rounded-xl border border-stone-800">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Rated <strong>4.7 / 5</strong> by 270+ happy travelers</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Rooms & Rates (₹700+)
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Hotel Amenities
                </a>
              </li>
              <li>
                <a href="#food" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Bengali Food Facility
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Photo Gallery
                </a>
              </li>
              <li>
                <a href="#sightseeing" className="hover:text-amber-400 transition flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-red-500" /> Digha Sightseeing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Types & Food */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Popular Options
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>2-Bed Standard (Non-AC)</span>
                <span className="text-amber-300 font-bold">₹700 / night</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>2-Bed Deluxe AC Room</span>
                <span className="text-amber-300 font-bold">₹1200 / night</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>3-Bed Family Room</span>
                <span className="text-amber-300 font-bold">₹1100 / night</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>Bengali Fish Thali Meal</span>
                <span className="text-amber-300 font-bold">₹140 / thali</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>24/7 CCTV Security</span>
                <span className="text-emerald-400 font-bold">Included</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Hotel Contact
            </h4>
            <div className="space-y-2 text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Rajbari Complex, Near Hotel Angali Nibas, Old Digha, West Bengal – 721428</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="font-bold text-white hover:text-amber-400">
                  +91 7003036882
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-stone-300 hover:text-amber-400 break-all">
                  {HOTEL_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Check-in: 12:00 PM | Check-out: 10:00 AM</span>
              </p>
            </div>
          </div>

        </div>

        {/* SEO Keywords Strip */}
        <div className="py-6 border-b border-stone-800 text-[11px] text-stone-500 leading-relaxed">
          <strong className="text-stone-400">Popular Searches:</strong> hotel in Old Digha • budget hotel Digha • guest house near sea beach Digha • Maa Durga Guest Inn Digha • best budget hotel under 1000 in Old Digha • family hotel near Digha beach • Bengali food lodge Old Digha • Rajbari complex hotels Digha.
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Maa Durga Guest Inn, Old Digha. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for Digha Travelers & Bengali Hospitality</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
