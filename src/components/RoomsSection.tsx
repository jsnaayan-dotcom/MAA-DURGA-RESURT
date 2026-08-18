import React, { useState } from 'react';
import { Bed, Users, Wind, Check, Calendar, MessageCircle, Phone, Sparkles, Shield, Tv, Zap } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { RoomType } from '../types';

interface RoomsSectionProps {
  onOpenBooking: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | '2bed' | '3bed' | 'ac'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '2bed') return room.id.includes('double');
    if (activeFilter === '3bed') return room.id.includes('triple');
    if (activeFilter === 'ac') return room.name.includes('AC') || room.id.includes('ac');
    return true;
  });

  return (
    <section id="rooms" className="py-16 sm:py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-300 mb-3">
            <Bed className="w-3.5 h-3.5 text-amber-700" />
            <span>Spacious & Spotless Accommodation</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Our Rooms & <span className="text-red-700">Pricing</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Affordable hotel rooms in Old Digha starting from just <strong>₹700 per night</strong>. Choose between comfortable Non-AC and cool AC options with clean attached bathrooms and 24/7 water.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                activeFilter === 'all'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              All Rooms ({ROOMS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('2bed')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                activeFilter === '2bed'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              2-Bed Rooms (Couples / Duo)
            </button>
            <button
              onClick={() => setActiveFilter('3bed')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                activeFilter === '3bed'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              3-Bed Family Rooms
            </button>
            <button
              onClick={() => setActiveFilter('ac')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                activeFilter === 'ac'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              Air Conditioned (AC)
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              id={`room-card-${room.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col group"
            >
              {/* Room Image with Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Popular or Category Tag */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {room.isPopular && (
                    <span className="bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Most Popular in Digha
                    </span>
                  )}
                  <span className="bg-amber-500/95 text-stone-950 text-xs font-bold px-2.5 py-0.5 rounded shadow-sm">
                    {room.bedType}
                  </span>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-3 right-3 bg-stone-950/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-amber-400/50 shadow-lg text-right">
                  <span className="text-[10px] text-amber-300 block uppercase font-bold tracking-wider">Starts at</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 font-['Playfair_Display']">
                    ₹{room.basePrice}
                    <span className="text-xs font-normal text-stone-300"> / night</span>
                  </div>
                </div>
              </div>

              {/* Room Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-stone-900">
                        {room.name}
                      </h3>
                      {room.bengaliName && (
                        <p className="text-xs text-amber-700 font-['Noto_Serif_Bengali'] font-medium">
                          {room.bengaliName}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg shrink-0">
                      <Users className="w-3.5 h-3.5 text-stone-500" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="pt-2 border-t border-stone-100">
                  <p className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Included Amenities & Features:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timing & Security Guarantee Pill */}
                <div className="bg-amber-50/60 rounded-lg p-2.5 text-[11px] text-stone-600 flex items-center justify-between border border-amber-100">
                  <span className="flex items-center gap-1 text-stone-700">
                    <Shield className="w-3 h-3 text-red-600" /> 24/7 CCTV Safe
                  </span>
                  <span className="font-medium text-amber-800">
                    Check-in: 12 PM | Check-out: 10 AM
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    id={`book-room-btn-${room.id}`}
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-md transition text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4 text-amber-200" />
                    <span>Book / Enquire</span>
                  </button>

                  <a
                    id={`whatsapp-room-btn-${room.id}`}
                    href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Maa Durga Guest Inn, I am interested in booking the "${room.name}" (approx ₹${room.basePrice}/night) in Old Digha. Please confirm availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-sm transition text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Custom Group Booking Callout */}
        <div className="mt-10 bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-amber-300">
          <div className="space-y-1 text-center sm:text-left">
            <span className="bg-amber-400 text-stone-950 text-xs font-extrabold uppercase px-2.5 py-0.5 rounded">
              Special Group & Tour Discounts
            </span>
            <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl">
              Planning a Family Get-Together or Friend Tour to Digha?
            </h3>
            <p className="text-amber-100 text-xs sm:text-sm max-w-xl">
              Book multiple rooms together or inquire about weekend customized Bengali food + stay packages directly with the hotel manager.
            </p>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" />
            <span>Call: +91 7003036882</span>
          </a>
        </div>

      </div>
    </section>
  );
};
