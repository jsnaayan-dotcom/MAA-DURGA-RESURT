import React, { useState } from 'react';
import { Calculator, Sparkles, Check, Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface PricingCalculatorProps {
  onOpenBooking: (roomId: string, extraData?: any) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(ROOMS_DATA[0].id);
  const [nights, setNights] = useState<number>(1);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [includeFood, setIncludeFood] = useState<boolean>(false);
  const [foodPlan, setFoodPlan] = useState<'fish' | 'veg'>('fish');
  const [personsCount, setPersonsCount] = useState<number>(2);

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  const roomCostPerNight = selectedRoom.basePrice * roomsCount;
  const totalRoomCost = roomCostPerNight * nights;

  // Food cost estimate per person per day (Breakfast + Lunch + Dinner approx)
  const foodCostPerPersonPerDay = foodPlan === 'fish' ? 300 : 200;
  const totalFoodCost = includeFood ? foodCostPerPersonPerDay * personsCount * nights : 0;
  
  const estimatedTotal = totalRoomCost + totalFoodCost;

  const handleWhatsAppInquiry = () => {
    const message = `Hello Maa Durga Guest Inn! I calculated a stay package for Old Digha:
- Room: ${selectedRoom.name} (${roomsCount} Room(s))
- Duration: ${nights} Night(s)
- Guests: ${personsCount} Person(s)
- Food Plan: ${includeFood ? (foodPlan === 'fish' ? 'Bengali Fish/Non-Veg Meals' : 'Bengali Veg Meals') : 'No meals / Room only'}
- Estimated Total: approx ₹${estimatedTotal}

Please confirm availability and best price for my dates!`;

    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-red-950/40 via-stone-950 to-stone-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-500/30 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Budget Planning</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Stay & Meal <span className="text-amber-400">Price Estimator</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Plan your Digha holiday budget with zero surprises. Customize your room type, number of nights, and optional Bengali meals.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="bg-stone-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-400/30 shadow-2xl backdrop-blur-md max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                  1. Select Room Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ROOMS_DATA.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3 rounded-xl text-left border transition flex flex-col justify-between ${
                        selectedRoomId === room.id
                          ? 'bg-red-700/80 border-amber-400 text-white shadow-md'
                          : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:bg-stone-700/60'
                      }`}
                    >
                      <span className="font-semibold text-xs sm:text-sm line-clamp-1">{room.name}</span>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/10 text-xs">
                        <span className="text-amber-300 font-bold">₹{room.basePrice}/nt</span>
                        <span className="text-[11px] opacity-80">{room.capacity}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nights & Rooms Counter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                    2. Duration of Stay
                  </label>
                  <div className="flex items-center bg-stone-900 rounded-xl border border-stone-700 p-1">
                    <button
                      type="button"
                      onClick={() => setNights(Math.max(1, nights - 1))}
                      className="w-10 h-10 rounded-lg bg-stone-800 text-white font-bold hover:bg-red-700 transition"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-white">
                      {nights} {nights === 1 ? 'Night' : 'Nights'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setNights(nights + 1)}
                      className="w-10 h-10 rounded-lg bg-stone-800 text-white font-bold hover:bg-red-700 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                    3. Number of Rooms
                  </label>
                  <div className="flex items-center bg-stone-900 rounded-xl border border-stone-700 p-1">
                    <button
                      type="button"
                      onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                      className="w-10 h-10 rounded-lg bg-stone-800 text-white font-bold hover:bg-red-700 transition"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-white">
                      {roomsCount} {roomsCount === 1 ? 'Room' : 'Rooms'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setRoomsCount(roomsCount + 1)}
                      className="w-10 h-10 rounded-lg bg-stone-800 text-white font-bold hover:bg-red-700 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional Food Add-on */}
              <div className="bg-stone-900/80 rounded-2xl p-4 border border-stone-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="include-food-check"
                      checked={includeFood}
                      onChange={(e) => setIncludeFood(e.target.checked)}
                      className="w-4 h-4 text-red-600 rounded bg-stone-800 border-stone-600 focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="include-food-check" className="text-xs sm:text-sm font-bold text-white cursor-pointer">
                      Include Daily Homely Bengali Meals?
                    </label>
                  </div>
                  <span className="text-xs text-amber-400 font-medium">Optional Add-on</span>
                </div>

                {includeFood && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-800 text-xs">
                    <div>
                      <label className="block text-[11px] text-stone-400 mb-1">Meal Preference:</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFoodPlan('fish')}
                          className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition ${
                            foodPlan === 'fish' ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                          }`}
                        >
                          Fish / Non-Veg (~₹300/d)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFoodPlan('veg')}
                          className={`flex-1 py-1.5 px-2 rounded-lg font-semibold transition ${
                            foodPlan === 'veg' ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                          }`}
                        >
                          Bengali Veg (~₹200/d)
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-stone-400 mb-1">Total Persons Dining:</label>
                      <div className="flex items-center bg-stone-800 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => setPersonsCount(Math.max(1, personsCount - 1))}
                          className="w-7 h-7 bg-stone-700 text-white rounded font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-xs">{personsCount} Person(s)</span>
                        <button
                          type="button"
                          onClick={() => setPersonsCount(personsCount + 1)}
                          className="w-7 h-7 bg-stone-700 text-white rounded font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Total Estimate Breakdown Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-red-950 via-stone-900 to-amber-950 rounded-2xl p-6 border-2 border-amber-400/60 text-white shadow-xl space-y-4">
                
                <div className="border-b border-white/10 pb-3">
                  <span className="text-xs text-amber-300 uppercase font-bold tracking-wider">
                    Estimated Package Summary
                  </span>
                  <h4 className="font-['Playfair_Display'] font-bold text-xl text-white mt-1">
                    {selectedRoom.name}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {roomsCount} Room × {nights} Night(s)
                  </p>
                </div>

                {/* Calculation Rows */}
                <div className="space-y-2 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Room Tariff ({roomsCount} × ₹{selectedRoom.basePrice} × {nights}n):</span>
                    <span className="text-white font-bold">₹{totalRoomCost}</span>
                  </div>

                  {includeFood && (
                    <div className="flex justify-between text-amber-300">
                      <span>Bengali Meals ({personsCount}p × {nights}n):</span>
                      <span className="font-bold">₹{totalFoodCost}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-emerald-400">
                    <span>24/7 CCTV & WiFi:</span>
                    <span className="font-bold">FREE</span>
                  </div>
                </div>

                {/* Big Total Box */}
                <div className="pt-3 border-t border-white/20 bg-stone-950/60 p-4 rounded-xl">
                  <span className="text-xs text-stone-400 block uppercase">Approximate Total</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-amber-400 font-['Playfair_Display']">
                      ₹{estimatedTotal}
                    </span>
                    <span className="text-xs text-stone-400">approx</span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">
                    *Final price confirmed by manager based on festival/peak weekend dates.
                  </p>
                </div>

                {/* Inquiry Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Estimate on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(selectedRoom.id, { nights, roomsCount, includeFood })}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Proceed to Book This Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
