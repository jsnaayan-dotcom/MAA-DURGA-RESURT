import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'exterior', label: 'Exterior (Red & Yellow)' },
    { key: 'rooms', label: 'Bedrooms' },
    { key: 'washroom', label: 'Clean Bathrooms' },
    { key: 'reception', label: 'Reception Lobby' },
    { key: 'food', label: 'Bengali Dining' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-amber-300 mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-['Playfair_Display'] font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Photo <span className="text-red-700">Gallery</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Take a real tour of Maa Durga Guest Inn: the distinct red & yellow exterior, spacious tidy bedrooms, sparkling clean attached bathrooms, welcoming reception, and fresh Bengali meals.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                  activeCategory === cat.key
                    ? 'bg-red-700 text-white shadow-md'
                    : 'bg-stone-50 text-stone-700 hover:bg-amber-50 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer bg-stone-100 border border-stone-200 aspect-[4/3] transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-amber-400 text-stone-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs inline-block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-base sm:text-lg leading-tight">
                      {item.title}
                    </h3>
                    {item.caption && (
                      <p className="text-xs text-amber-200/90 mt-0.5 line-clamp-1">
                        {item.caption}
                      </p>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0 group-hover:bg-red-600 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 p-2 rounded-full bg-stone-900/80 border border-white/20 z-10 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-2 sm:p-3 rounded-full bg-stone-900/80 border border-white/20 z-10 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 p-2 sm:p-3 rounded-full bg-stone-900/80 border border-white/20 z-10 transition"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Current image content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/20"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              {filteredItems[lightboxIndex].caption && (
                <p className="text-sm text-stone-300 mt-1 max-w-xl">
                  {filteredItems[lightboxIndex].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
