import React from 'react';
import { Compass, MapPin, Footprints, Clock, Sparkles, Navigation } from 'lucide-react';
import { SIGHTSEEING_DATA, HOTEL_INFO } from '../data/hotelData';

export const Sightseeing: React.FC = () => {
  return (
    <section id="sightseeing" className="py-16 sm:py-20 bg-stone-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Prime Old Digha Location</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Explore <span className="text-red-700">Digha Attractions</span> Near Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Stay at Maa Durga Guest Inn in Rajbari Complex and reach the sea beach in just 4 minutes on foot. Here are top places to visit nearby.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGHTSEEING_DATA.map((spot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                    <Footprints className="w-3.5 h-3.5" />
                    <span>{spot.distance}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">
                    {spot.highlight}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] font-bold text-xl text-stone-900 group-hover:text-red-700 transition-colors">
                  {spot.name}
                </h3>
                <p className="text-xs text-amber-700 font-['Noto_Serif_Bengali'] font-medium mb-2">
                  {spot.bengaliName}
                </p>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {spot.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" /> From Maa Durga Inn
                </span>
                <span className="font-semibold text-stone-700">Easy E-rickshaw / Walk</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Travel Help Card */}
        <div className="mt-10 bg-white rounded-2xl p-6 border-2 border-amber-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
              <Navigation className="w-7 h-7 text-red-700" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base sm:text-lg">
                Need Toto / Cab Booking for Sightseeing?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600">
                Our front desk provides local Toto (E-rickshaw) and sightseeing guidance for Shankarpur, Tajpur, Mandarmani, and Chandaneswar Temple.
              </p>
            </div>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="shrink-0 bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-xl shadow transition text-xs sm:text-sm"
          >
            Ask Front Desk Manager
          </a>
        </div>

      </div>
    </section>
  );
};
