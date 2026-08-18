import React, { useState } from 'react';
import { Phone, Calendar, Star, MapPin, ShieldCheck, Utensils, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomId?: string, prefill?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS_DATA[0].id);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [isAC, setIsAC] = useState(false);

  const handleHeroCheckSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guestsCount,
      isAC: isAC,
    });
  };

  return (
    <section id="home-hero" className="relative overflow-hidden bg-stone-900">
      {/* Background Image Container with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_INFO.images.exterior}
          alt="Maa Durga Guest Inn Old Digha Red and Yellow Exterior"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Darkening & Color Tint Overlay (Red/Amber subtle warm gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/70 via-transparent to-amber-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 text-white space-y-6">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/90 text-stone-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider backdrop-blur-sm border border-amber-300">
                <Star className="w-3.5 h-3.5 fill-stone-950" />
                Rated 4.7 / 5 (270+ Reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white font-medium px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-red-400/40">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                Old Digha • 350m to Sea Beach
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-700/80 text-white font-medium px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                24/7 CCTV Safe
              </span>
            </div>

            {/* Main Punchy Tagline & Bengali Title */}
            <div className="space-y-3">
              <p className="text-amber-400 font-['Noto_Serif_Bengali'] font-semibold text-lg sm:text-xl tracking-wide flex items-center gap-2">
                <span>🌸</span> শ্রী শ্রী মা দুর্গার আশীর্বাদে স্বাগত
              </p>
              <h1 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Comfortable Stay Near the Sea
                <span className="block text-amber-400 mt-1">
                  Maa Durga Guest Inn
                </span>
              </h1>
              <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                Affordable, spotless, and homely rooms in the heart of Old Digha (Rajbari Complex). Enjoy clean AC/Non-AC rooms, 24/7 CCTV security, and delicious authentic Bengali meals cooked like home.
              </p>
            </div>

            {/* Value Highlights Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-white/15 max-w-2xl">
              <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                <p className="text-xs text-amber-300 font-medium">Rooms Starting</p>
                <p className="text-xl font-bold text-white">₹700<span className="text-xs font-normal text-stone-300">/night</span></p>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                <p className="text-xs text-amber-300 font-medium">Beach Distance</p>
                <p className="text-xl font-bold text-white">350m<span className="text-xs font-normal text-stone-300"> 4 mins</span></p>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                <p className="text-xs text-amber-300 font-medium">Bengali Food</p>
                <p className="text-xl font-bold text-white">Fresh<span className="text-xs font-normal text-stone-300"> Thali</span></p>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                <p className="text-xs text-amber-300 font-medium">Guest Types</p>
                <p className="text-base font-bold text-white">Family & Duo</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-book-now-cta"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-red-700/40 transform hover:-translate-y-0.5 transition duration-200"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>Book Room Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                id="hero-call-now-cta"
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transform hover:-translate-y-0.5 transition duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {HOTEL_INFO.phone}</span>
              </a>

              <a
                id="hero-whatsapp-cta"
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello! I want to book a room at Maa Durga Guest Inn, Old Digha.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-4 py-3.5 rounded-xl transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </a>
            </div>

            {/* Trust bullet line */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-300 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Pay at Hotel Option
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> No Hidden Charges
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Family & Couple Friendly
              </span>
            </div>

          </div>

          {/* Right Column: Quick Booking Card / Availability Box */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border-2 border-amber-400/80 text-stone-800">
              
              <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-4">
                <div>
                  <h3 className="font-['Playfair_Display'] font-bold text-xl text-stone-900">
                    Quick Booking Inquiry
                  </h3>
                  <p className="text-xs text-stone-500">
                    Check dates & get instant manager quote
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-500 uppercase block">Starts from</span>
                  <span className="text-xl font-extrabold text-red-700">₹700</span>
                  <span className="text-[10px] text-stone-500 block">/night</span>
                </div>
              </div>

              <form onSubmit={handleHeroCheckSubmit} className="space-y-3.5">
                
                {/* Room Selection */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Select Room Type
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full bg-amber-50/50 border border-amber-200 rounded-lg px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {ROOMS_DATA.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} — from ₹{room.basePrice}/night
                      </option>
                    ))}
                  </select>
                </div>

                {/* Check In / Out Dates */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Check-in (12 PM)
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Check-out (10 AM)
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                {/* Guests & AC Toggle */}
                <div className="grid grid-cols-2 gap-2.5 items-center">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value={1}>1 Guest (Solo)</option>
                      <option value={2}>2 Guests (Couple/Duo)</option>
                      <option value={3}>3 Guests (Family/Group)</option>
                      <option value={4}>4 Guests (Family Room)</option>
                      <option value={5}>5+ Guests (Multiple Rooms)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Cooling Preference
                    </label>
                    <div className="flex bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs">
                      <button
                        type="button"
                        onClick={() => setIsAC(false)}
                        className={`flex-1 py-1 text-center font-medium rounded ${
                          !isAC ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        Non-AC
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAC(true)}
                        className={`flex-1 py-1 text-center font-medium rounded ${
                          isAC ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        AC Room
                      </button>
                    </div>
                  </div>
                </div>

                {/* Food option snippet */}
                <div className="bg-amber-50 rounded-lg p-2.5 border border-amber-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-700" />
                    <div>
                      <span className="font-semibold text-stone-800 block">Add Homely Bengali Meals?</span>
                      <span className="text-[11px] text-stone-500">Fresh fish, thali & breakfast available</span>
                    </div>
                  </div>
                  <span className="text-amber-800 font-bold bg-amber-200/60 px-2 py-0.5 rounded text-[10px]">
                    Available
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="hero-inquiry-submit-btn"
                  className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Check Availability & Book</span>
                </button>

                <p className="text-[11px] text-center text-stone-500 flex items-center justify-center gap-1">
                  <span>⚡ Instant response on phone or WhatsApp</span>
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
