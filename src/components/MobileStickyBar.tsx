import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t-2 border-amber-400 p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-700 active:bg-red-800 text-white font-bold text-xs shadow transition text-center"
        >
          <Phone className="w-4 h-4 mb-0.5 text-amber-300 animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          id="mobile-sticky-wa-btn"
          href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
            'Hello Maa Durga Guest Inn, I want to inquire about room availability in Old Digha.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow transition text-center"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-stone-950 font-extrabold text-xs shadow transition text-center"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-stone-950" />
          <span>Book (₹700)</span>
        </button>
      </div>
    </div>
  );
};
