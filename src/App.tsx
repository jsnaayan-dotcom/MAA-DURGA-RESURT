import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { RoomsSection } from './components/RoomsSection';
import { Amenities } from './components/Amenities';
import { FoodDining } from './components/FoodDining';
import { Gallery } from './components/Gallery';
import { PricingCalculator } from './components/PricingCalculator';
import { Sightseeing } from './components/Sightseeing';
import { Reviews } from './components/Reviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [bookingPrefill, setBookingPrefill] = useState<any>(undefined);

  const handleOpenBooking = (roomId?: string, prefillData?: any) => {
    setSelectedRoomId(roomId);
    setBookingPrefill(prefillData);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 flex flex-col font-['Outfit',sans-serif]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Us & Traditional Story */}
        <AboutUs />

        {/* Rooms & Pricing Cards */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* Amenities & Services */}
        <Amenities />

        {/* Homely Bengali & Indian Dining Facility */}
        <FoodDining />

        {/* Visual Photo Gallery with Lightbox */}
        <Gallery />

        {/* Price & Package Estimator */}
        <PricingCalculator onOpenBooking={handleOpenBooking} />

        {/* Digha Sightseeing & Distance Guide */}
        <Sightseeing />

        {/* Guest Reviews, Ratings & FAQs */}
        <Reviews />

        {/* Location Map, Phone & Booking Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        selectedRoomId={selectedRoomId}
        initialData={bookingPrefill}
      />
    </div>
  );
}

export default App;
