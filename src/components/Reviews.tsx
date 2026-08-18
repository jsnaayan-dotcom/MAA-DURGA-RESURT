import React, { useState } from 'react';
import { Star, MessageSquare, ChevronDown, ChevronUp, UserCheck, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';
import { HOTEL_INFO, REVIEWS_DATA, FAQS_DATA } from '../data/hotelData';

export const Reviews: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-300 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            <span>Trusted By Over 270+ Guests</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Guest Experiences & <span className="text-red-700">Reviews</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Read what families, couples, and weekend travelers say about their stay at Maa Durga Guest Inn in Old Digha.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Overall Rating Banner */}
        <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-red-700 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border-2 border-amber-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Big Star Score */}
            <div className="md:col-span-4 text-center md:border-r md:border-white/20 md:pr-6">
              <div className="text-5xl sm:text-6xl font-black font-['Playfair_Display']">
                {HOTEL_INFO.rating}
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-200 text-amber-200" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-amber-100 uppercase tracking-wider">
                Overall Guest Satisfaction
              </p>
              <p className="text-xs text-white/80">Based on {HOTEL_INFO.totalReviews}+ Verified Reviews</p>
            </div>

            {/* Score Breakdown Bars */}
            <div className="md:col-span-8 space-y-2.5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Hospitality & Staff Behavior</span>
                  <span>4.9 / 5</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div className="bg-amber-200 h-2 rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Room Cleanliness & Hygiene</span>
                  <span>4.8 / 5</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div className="bg-amber-200 h-2 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Bengali Food Taste & Freshness</span>
                  <span>4.8 / 5</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div className="bg-amber-200 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Value for Money (Budget Friendly ₹700+)</span>
                  <span>4.9 / 5</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-2">
                  <div className="bg-amber-200 h-2 rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-black flex items-center justify-center text-sm font-['Playfair_Display'] border border-red-200">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base">{rev.name}</h4>
                      <p className="text-[11px] text-stone-500">{rev.location}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    {rev.travelerType} Stay
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(rev.rating)
                          ? 'fill-amber-500 text-amber-500'
                          : 'fill-amber-200 text-amber-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-stone-700 ml-1">{rev.rating}.0</span>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100/60 flex items-center justify-between text-[11px] text-stone-400">
                <span>Stayed: {rev.date}</span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <UserCheck className="w-3.5 h-3.5" /> Verified Guest
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-stone-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Quick answers about bookings, timings, food, and facilities at Maa Durga Guest Inn.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] border border-amber-200/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:text-red-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-red-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-amber-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
