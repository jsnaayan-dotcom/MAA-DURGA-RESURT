import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, Check, MessageCircle, Utensils, Shield, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
  initialData?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
  initialData
}) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS_DATA[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [isAC, setIsAC] = useState(false);
  const [foodOption, setFoodOption] = useState(false);
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
      const rm = ROOMS_DATA.find((r) => r.id === selectedRoomId);
      if (rm && (rm.name.includes('AC') || rm.id.includes('ac'))) {
        setIsAC(true);
      }
    }
    if (initialData) {
      if (initialData.checkIn) setCheckIn(initialData.checkIn);
      if (initialData.checkOut) setCheckOut(initialData.checkOut);
      if (initialData.guests) setGuests(initialData.guests);
      if (initialData.isAC !== undefined) setIsAC(initialData.isAC);
      if (initialData.includeFood !== undefined) setFoodOption(initialData.includeFood);
    }
  }, [selectedRoomId, initialData, isOpen]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `*New Booking Request - Maa Durga Guest Inn, Old Digha*
---------------------------------------
👤 *Guest Name:* ${name}
📞 *Contact Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🏨 *Room Type:* ${currentRoom.name}
❄️ *Air Conditioning:* ${isAC ? 'Yes (AC Room)' : 'No (Non-AC)'}
📅 *Check-in Date:* ${checkIn || 'To be confirmed'}
📅 *Check-out Date:* ${checkOut || 'To be confirmed'}
👥 *Number of Guests:* ${guests}
🍛 *Bengali Meals Required:* ${foodOption ? 'Yes (Fresh Bengali Food)' : 'No'}
📝 *Special Notes:* ${specialNotes || 'None'}
---------------------------------------
Please confirm room availability and payment options.`;

    setSubmitted(true);
    window.open(`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-amber-400 relative my-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-stone-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
              Old Digha Stay
            </span>
            <span className="text-amber-200 text-xs font-semibold">
              350m to Sea Beach
            </span>
          </div>

          <h3 className="font-['Playfair_Display'] font-bold text-2xl text-white">
            Book Room at Maa Durga Guest Inn
          </h3>
          <p className="text-xs text-amber-100 mt-0.5">
            Direct reservation with zero booking fee • Rooms starting at ₹700/night
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-['Playfair_Display'] font-bold text-2xl text-stone-900">
                Booking Request Forwarded!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                We've prepared your booking summary and opened WhatsApp so you can get instant confirmation from our manager Suman Mridha.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm"
                >
                  Call Directly: {HOTEL_INFO.phone}
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold px-4 py-2.5 rounded-xl text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {/* Selected Room Preview Strip */}
              <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    className="w-16 h-12 object-cover rounded-lg border border-amber-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-stone-900 text-sm">{currentRoom.name}</h5>
                    <p className="text-xs text-amber-800">Starting from ₹{currentRoom.basePrice}/night</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 block">Cap: {currentRoom.capacity}</span>
                </div>
              </div>

              {/* Room Category Select */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Change Room Type (Optional)
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} (from ₹{r.basePrice}/night)
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amitava Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 7003036882"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Check-In / Check-Out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Check-in Date (12 PM)
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Check-out Date (10 AM)
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Number of Guests & AC Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Total Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:ring-2 focus:ring-red-500"
                  >
                    <option value={1}>1 Guest (Solo)</option>
                    <option value={2}>2 Guests (Couple / 2 Friends)</option>
                    <option value={3}>3 Guests (Family)</option>
                    <option value={4}>4 Guests (Family Room)</option>
                    <option value={5}>5+ Guests (Multiple Rooms)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Room Cooling
                  </label>
                  <div className="flex bg-stone-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setIsAC(false)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
                        !isAC ? 'bg-amber-600 text-white' : 'text-stone-600'
                      }`}
                    >
                      Non-AC
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAC(true)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
                        isAC ? 'bg-red-700 text-white' : 'text-stone-600'
                      }`}
                    >
                      AC (Air Conditioned)
                    </button>
                  </div>
                </div>
              </div>

              {/* Food Option Checkbox */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="modal-food-check"
                    checked={foodOption}
                    onChange={(e) => setFoodOption(e.target.checked)}
                    className="w-4 h-4 text-red-600 rounded"
                  />
                  <label htmlFor="modal-food-check" className="font-semibold text-stone-800 cursor-pointer">
                    Add Bengali Meal Service (Fish Thali / Veg Thali)?
                  </label>
                </div>
                <span className="text-amber-800 font-bold">Homely Taste</span>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Special Notes / Arrival Time
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Arriving by train at Digha station, need ground floor room..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#FFFDF9] border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  id="modal-confirm-booking-btn"
                  className="w-full bg-gradient-to-r from-red-600 via-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-amber-200" />
                  <span>Send Booking Request on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-stone-500">
                  Manager will immediately reply to confirm your reservation and send booking slip.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
