import React from 'react';
import { ShieldCheck, Sparkles, Bed, Utensils, BellRing, Clock, Zap, Waves, CheckCircle2 } from 'lucide-react';
import { AMENITIES_DATA } from '../data/hotelData';

export const Amenities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'Bed':
        return <Bed className="w-6 h-6 text-red-600" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-orange-600" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-red-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="amenities" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-red-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Comfort & Hospitality</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Hotel Features & <span className="text-red-700">Amenities</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Everything you need for a restful, secure, and memorable vacation in Old Digha without burning a hole in your pocket.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Amenities 8-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((item) => (
            <div
              key={item.id}
              id={`amenity-${item.id}`}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-amber-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  {item.highlight && (
                    <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-stone-900 text-base group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                {item.bengaliTitle && (
                  <p className="text-xs text-amber-700 font-['Noto_Serif_Bengali'] font-medium mb-2">
                    {item.bengaliTitle}
                  </p>
                )}

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-100/60 flex items-center gap-1.5 text-xs text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Standard In All Bookings</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timings & House Rules Strip */}
        <div className="mt-12 bg-amber-50/80 rounded-2xl p-6 border border-amber-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-stone-500">Standard Schedule</p>
              <p className="text-stone-900 font-bold text-base">Check-in: 12:00 PM</p>
              <p className="text-stone-700 text-xs">Check-out: 10:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-stone-500">Guest Verification</p>
              <p className="text-stone-900 font-bold text-base">Valid Photo ID Proof</p>
              <p className="text-stone-700 text-xs">Aadhaar / Voter ID / Passport</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-stone-500">Dining Arrangement</p>
              <p className="text-stone-900 font-bold text-base">Bengali Meal Kitchen</p>
              <p className="text-stone-700 text-xs">Breakfast, Lunch & Dinner</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
