import React from 'react';
import { Utensils, Sparkles, Check, Coffee, Fish, MessageCircle, Phone } from 'lucide-react';
import { HOTEL_INFO, FOOD_MENU } from '../data/hotelData';

export const FoodDining: React.FC = () => {
  return (
    <section id="food" className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-300 mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Pure Coastal Bengali Flavors</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Homely Bengali & Indian <span className="text-red-700">Food Facility</span>
          </h2>
          <p className="font-['Noto_Serif_Bengali'] text-base sm:text-lg text-amber-800 font-medium mt-1">
            "তাজা মাছের ঝোল, খাঁটি ভাত-ডাল ও আন্তরিক ঘরোয়া বাঙালি রান্না"
          </p>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Enjoy freshly cooked meals prepared with traditional Bengali spices, fresh Bay of Bengal catch, and wholesome ingredients delivered right to your room or dining area.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Grid: Hero Food Image + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* Left Column: Big Banner Food Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-amber-300 group">
              <img
                src={HOTEL_INFO.images.thali}
                alt="Delicious Bengali Fish Thali with Macher Jhol and Rice at Maa Durga Guest Inn Digha"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-0.5 rounded shadow">
                    Daily Fresh Catch
                  </span>
                  <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2.5 py-0.5 rounded shadow">
                    Homely Taste
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-white">
                  Authentic Bengali Thali Platter
                </h3>
                <p className="text-xs text-amber-200">
                  Steaming Basmati Rice, Fish Curry, Yellow Dal, Crispy Aloo Bhaja, Chutney & Papad
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dining Pillars */}
          <div className="lg:col-span-6 space-y-4 text-stone-700">
            <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-red-700 font-bold text-base">
                <Fish className="w-5 h-5" />
                <h4>Fresh Bay of Bengal Fish Varieties</h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Taste authentic local favorites like Rui, Katla, Chingri Malai Curry, Pomfret Fry, and seasonal Shorshe Ilish procured fresh daily from Digha Mohona.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-amber-700 font-bold text-base">
                <Utensils className="w-5 h-5" />
                <h4>Clean & Hygienic Cooking</h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Prepared in a clean kitchen with low oil, light spices, and pure mustard oil just like home so that kids and seniors stay completely healthy throughout the vacation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-base">
                <Coffee className="w-5 h-5" />
                <h4>Morning Luchi & Evening Snacks</h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Start your beach mornings with hot Bengali Luchi with Cholar Dal or Alur Dom with fresh tea, and recharge in the evening with onion pakoras / chops.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300 text-xs text-amber-950 font-medium flex items-center justify-between">
              <span>🔔 Custom food orders for families can be placed in advance</span>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="font-bold text-red-700 hover:underline shrink-0 ml-2"
              >
                Inquire Menu
              </a>
            </div>

          </div>

        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOOD_MENU.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-stone-900 text-base">{item.name}</h4>
                    <p className="text-xs text-amber-700 font-['Noto_Serif_Bengali'] font-medium">
                      {item.bengaliName}
                    </p>
                  </div>
                  <span className="text-base font-extrabold text-red-700 shrink-0 font-['Playfair_Display']">
                    {item.price}
                  </span>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                {item.badge && (
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {item.badge}
                  </span>
                )}
                <span className="text-[11px] text-stone-500 ml-auto flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Served Fresh Hot
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
              'Hello Maa Durga Guest Inn, I would like to know the food menu and meal arrangements for our stay in Old Digha.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp to Pre-Order Meals</span>
          </a>
        </div>

      </div>
    </section>
  );
};
