import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Star, Sparkles, Clock, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms & Rates', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Bengali Food', href: '#food' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Price Estimator', href: '#calculator' },
    { name: 'Digha Guide', href: '#sightseeing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 text-white text-xs sm:text-sm py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 text-amber-100">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              Old Digha (Rajbari Complex, 350m to Beach)
            </span>
            <span className="hidden md:inline text-amber-300/60">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Check-in: 12 PM | Check-out: 10 AM
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="hidden sm:flex items-center gap-1 text-amber-200 font-semibold">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              4.7 / 5 (270+ reviews)
            </span>
            <a
              id="top-call-link"
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-1 text-white bg-red-900/60 hover:bg-red-900 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition border border-amber-400/30"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-amber-100'
            : 'bg-white py-3.5 border-b border-amber-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center text-white shadow-md shadow-red-700/20 group-hover:scale-105 transition border-2 border-amber-400">
              <span className="font-['Playfair_Display'] font-black text-xl tracking-tighter">MD</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-['Playfair_Display'] font-bold text-lg sm:text-xl text-stone-900 leading-tight">
                  Maa Durga Guest Inn
                </span>
                <span className="bg-amber-100 text-amber-900 font-bold text-[10px] uppercase px-1.5 py-0.5 rounded border border-amber-300 hidden sm:inline-block">
                  Old Digha
                </span>
              </div>
              <p className="text-xs text-amber-700 font-['Noto_Serif_Bengali'] font-medium leading-none">
                মা দুর্গা গেস্ট ইন • পুরানো দিঘা
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-red-700 transition relative py-1 hover:font-semibold text-stone-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                'Hello Maa Durga Guest Inn, I want to inquire about room availability in Old Digha.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm transition"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-now-btn"
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md shadow-red-600/20 transition transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              <span>Book Room</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg shadow"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-amber-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-700" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="lg:hidden bg-white border-t border-amber-100 shadow-xl px-4 pt-3 pb-5 space-y-2.5 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-stone-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-stone-700 hover:bg-amber-50 hover:text-red-700"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full bg-red-50 hover:bg-red-100 text-red-800 font-bold py-2.5 rounded-lg text-sm border border-red-200"
              >
                <Phone className="w-4 h-4 text-red-600" />
                Call Manager: {HOTEL_INFO.phone}
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Maa Durga Guest Inn, I would like to inquire about room booking in Old Digha.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold py-2.5 rounded-lg text-xs shadow"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  Book Now (₹700)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
