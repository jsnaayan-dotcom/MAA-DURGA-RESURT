import exteriorImg from '../assets/images/real_hotel_exterior_1787023875250.jpg';
import acDeluxeRoomImg from '../assets/images/real_ac_deluxe_room_1787023885847.jpg';
import familyRoomImg from '../assets/images/real_spacious_family_room_1787023897100.jpg';
import doubleBedInteriorImg from '../assets/images/real_double_bed_interior_1787023943037.jpg';
import receptionImg from '../assets/images/real_hotel_reception_1787023906569.jpg';
import bathroomImg from '../assets/images/real_clean_bathroom_1787023918953.jpg';
import foodThaliImg from '../assets/images/bengali_thali_1787023045927.jpg';

import { RoomType, AmenityItem, GalleryItem, ReviewItem, FoodItem } from '../types';

export const HOTEL_INFO = {
  name: 'Maa Durga Guest Inn',
  bengaliName: 'মা দুর্গা গেস্ট ইন',
  tagline: 'Comfortable Stay Near the Sea – Maa Durga Guest Inn, Old Digha',
  address: 'Rajbari Complex, Near Hotel Angali Nibas, Old Digha, Purba Medinipur, West Bengal – 721428',
  phone: '+91 7003036882',
  phoneRaw: '+917003036882',
  whatsapp: '917003036882',
  email: 'sumanmridha5y@gmail.com',
  checkIn: '12:00 PM',
  checkOut: '10:00 AM',
  startingPrice: 700,
  rating: 4.7,
  totalReviews: 278,
  distanceToBeach: '350 meters (4-5 mins walk)',
  coordinates: {
    lat: 21.6268,
    lng: 87.5186,
  },
  images: {
    exterior: exteriorImg,
    thali: foodThaliImg,
    acRoom: acDeluxeRoomImg,
    familyRoom: familyRoomImg,
    doubleBed: doubleBedInteriorImg,
    reception: receptionImg,
    bathroom: bathroomImg,
  }
};

export const ROOMS_DATA: RoomType[] = [
  {
    id: 'double-bed-standard',
    name: '2-Bed Standard Room (Non-AC)',
    bengaliName: '২-বেড স্ট্যান্ডার্ড রুম (নন-এসি)',
    tagline: 'Ideal for budget conscious couples & duo travelers',
    bedType: '1 Large Double Bed / 2 Beds',
    capacity: '2 Adults (+ 1 Child)',
    basePrice: 700,
    acPrice: 1200,
    image: doubleBedInteriorImg,
    description: 'Bright, airy, and clean budget room featuring comfortable beds with clean linen, ceiling fan, bright lighting, attached clean tiled bathroom with shower, and daily housekeeping.',
    features: [
      'Clean Beds with Fresh Striped Linens',
      'High-Speed Ceiling Fan & Ventilation',
      'Attached Clean Tiled Bathroom with Shower',
      '24/7 Water Supply & Lighting Power Backup',
      'Daily Room Cleaning & Dusting',
      'Free High-Speed Wi-Fi',
      'In-room Dining / Room Service'
    ],
    isPopular: true
  },
  {
    id: 'double-bed-deluxe-ac',
    name: 'Deluxe AC Room with Ambient Cove Lighting',
    bengaliName: 'ডিলাক্স এসি রুম (অ্যাম্বিয়েন্ট সিলিং লাইটিং)',
    tagline: 'Chilled comfort with split AC & modern cove LED ceiling',
    bedType: '1 King/Queen Bed + Seating',
    capacity: '2 Adults (+ 1 Child)',
    basePrice: 1200,
    image: acDeluxeRoomImg,
    description: 'Modern air-conditioned room with silent split AC, blue/purple ambient ceiling cove lighting, comfortable mattress, tea table with chairs, wardrobe, and sparkling clean private bathroom with geyser.',
    features: [
      'Silent Powerful Split AC Unit',
      'Blue/Purple Ambient Ceiling Cove Lighting',
      'Attached Clean Tiled Bathroom with Jet Spray',
      'Tea Table & Seating Arrangement',
      'Decorative Carved Wooden Door',
      '24/7 CCTV Monitored Corridor',
      'Fresh Towels & Daily Housekeeping'
    ],
    isPopular: true
  },
  {
    id: 'triple-bed-family',
    name: 'Spacious Multi-Bed Family Room (Non-AC)',
    bengaliName: 'স্পেশাস মাল্টি-বেড ফ্যামিলি রুম (নন-এসি)',
    tagline: 'Spacious accommodation for whole family or group of friends',
    bedType: '2 Large Beds / Twin Setup',
    capacity: '3 - 5 Adults',
    basePrice: 1100,
    acPrice: 1700,
    image: familyRoomImg,
    description: 'Extra spacious family room in Maa Durga Guest Inn with two large comfortable beds, double-door modern wardrobe, round table with chairs, maroon curtains, and wide tiled floor space.',
    features: [
      'Two Large Beds with Clean Linens',
      'Double Door Modern Wardrobe Storage',
      'Accommodates 3 to 5 Family Members',
      'Attached Clean Spacious Bathroom',
      'Ceiling Fan & Ambient Lighting',
      'Homely Bengali Food delivered to room',
      '24/7 Front Desk Assistance'
    ],
    isPopular: false
  },
  {
    id: 'triple-bed-family-deluxe-ac',
    name: 'Spacious Deluxe Family AC Suite',
    bengaliName: 'ডিলাক্স ফ্যামিলি এসি স্যুট',
    tagline: 'Ultimate comfort & coolness for family vacations',
    bedType: '2 Large Beds + Split AC',
    capacity: '3 - 5 Adults',
    basePrice: 1700,
    image: acDeluxeRoomImg,
    description: 'Premium family room equipped with heavy tonnage split AC, ambient ceiling glow, full wardrobe, geyser in bathroom, and comfortable relaxation space.',
    features: [
      'High-Capacity Split AC for Fast Cooling',
      'Plush Cushions & Premium Bedding',
      'Western Style Clean Attached Bathroom',
      'Hot & Cold Water Facility',
      'Family Seating Table & Chairs',
      'Full Size Wardrobe & Luggage Space',
      '24/7 CCTV Security Protection'
    ],
    isPopular: false
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'cctv',
    title: '24/7 CCTV Surveillance',
    bengaliTitle: '২৪/৭ সিসিটিভি নিরাপত্তা',
    description: 'Round-the-clock security cameras covering corridors, entrance, and lobby to ensure complete safety for families, couples, and solo travelers.',
    iconName: 'ShieldCheck',
    highlight: '100% Safe Stay'
  },
  {
    id: 'washrooms',
    title: 'Hygienic Attached Washrooms',
    bengaliTitle: 'পরিষ্কার অ্যাটাচড বাথরুম',
    description: 'Sparkling clean tiled bathrooms in every single room with 24-hour running water, fresh fittings, and geyser hot water facility.',
    iconName: 'Sparkles',
    highlight: 'Deep Cleaned Daily'
  },
  {
    id: 'comfort-beds',
    title: 'Plush Comfortable Beds',
    bengaliTitle: 'আরামদায়ক বিছানা ও পরিষ্কার চাদর',
    description: 'Cozy mattresses, fresh laundered bedsheets, soft pillows, and hygienic blankets for sound sleep after a fun beach day.',
    iconName: 'Bed',
    highlight: 'Fresh Linens'
  },
  {
    id: 'food',
    title: 'Homely Bengali & Indian Food',
    bengaliTitle: 'ঘরোয়া বাঙালি সুস্বাদু খাবার',
    description: 'Freshly prepared Bengali thalis, fresh sea fish curry (macher jhol, hilsa, pomfret, prawn malai), egg/chicken curries, and breakfast.',
    iconName: 'Utensils',
    highlight: 'Freshly Cooked'
  },
  {
    id: 'room-service',
    title: 'Friendly Room Service',
    bengaliTitle: 'রুমে খাবার ও পরিষেবা',
    description: 'Dedicated and polite staff offering prompt room service, bed tea, drinking water, and immediate assistance with a smile.',
    iconName: 'BellRing',
    highlight: 'Quick & Polite'
  },
  {
    id: 'timings',
    title: 'Convenient Timings',
    bengaliTitle: 'চেক-ইন ১২:০০ PM / চেক-আউট ১০:০০ AM',
    description: 'Smooth Check-in at 12:00 PM and Check-out at 10:00 AM with luggage holding options available upon request.',
    iconName: 'Clock',
    highlight: '12 PM - 10 AM'
  },
  {
    id: 'power-backup',
    title: 'Lighting & Fan Power Backup',
    bengaliTitle: 'পাওয়ার ব্যাকআপ সাপোর্ট',
    description: 'Inverter / generator backup ensuring uninterrupted lights and fans during sudden coastal power fluctuations.',
    iconName: 'Zap',
    highlight: 'Uninterrupted'
  },
  {
    id: 'sea-proximity',
    title: '350m Walk to Old Digha Beach',
    bengaliTitle: 'সমুদ্র সৈকতের কাছে (৩৫০ মিটার)',
    description: 'Just 4-5 minutes leisurely walk to the main Old Digha sea beach ghats, stone boulders, and evening snack stalls.',
    iconName: 'Waves',
    highlight: 'Walking Distance'
  }
];

export const FOOD_MENU: FoodItem[] = [
  {
    name: 'Special Bengali Fish Thali',
    bengaliName: 'স্পেশাল বাঙালি মাছের থালি',
    type: 'Thali',
    price: '₹140',
    description: 'Basmati Rice, Rohu/Katla Fish Curry (Macher Jhol), Yellow Moong Dal, Crispy Aloo Bhaja, Sabzi, Chutney & Papad.',
    badge: 'Guest Favorite'
  },
  {
    name: 'Digha Fresh Prawn Malai Curry Thali',
    bengaliName: 'চিংড়ি মাছের মালাইকারি থালি',
    type: 'Thali',
    price: '₹220',
    description: 'Steaming Rice, Rich Coconut Milk Prawn Curry (Chingri Malai), Dal, Fried Potato, Tomato-Khejur Chutney & Mishti.',
    badge: 'Chef Special'
  },
  {
    name: 'Homely Chicken Thali',
    bengaliName: 'ঘরোয়া দেশি চিকেন থালি',
    type: 'Thali',
    price: '₹180',
    description: 'Rice, Rich Bengali Style Chicken Curry with Potato (Murgir Jhol), Dal, Bhaja, Salad, Lemon & Papad.',
    badge: 'Popular'
  },
  {
    name: 'Shorshe Ilish (Hilsa in Mustard) / Pomfret',
    bengaliName: 'সর্ষে ইলিশ / ফ্রাই পমফ্রেট',
    type: 'Fish',
    price: 'Seasonal / On Order',
    description: 'Traditional Digha coastal fresh Hilsa cooked in pungent mustard gravy or crispy golden fried pomfret fish.',
    badge: 'Coastal Special'
  },
  {
    name: 'Vegetarian Bengali Pure Thali',
    bengaliName: 'নিরামিষ বাঙালি থালি',
    type: 'Thali',
    price: '₹100',
    description: 'Rice, Sonamug Dal, Aloo Posto / Seasonal Mixed Veg (Labra), Crispy Beguni or Aloo Bhaja, Chutney & Papad.',
    badge: 'Pure Homely'
  },
  {
    name: 'Morning Breakfast & Bengali Chai',
    bengaliName: 'সকালের লুচি-ছোলার ডাল ও গরম চা',
    type: 'Breakfast',
    price: '₹50 - ₹70',
    description: 'Fluffy hot Kochuri / Luchi with Cholar Dal or Dum Aloo, followed by aromatic Darjeeling tea.',
    badge: 'Fresh Morning'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hotel Exterior (Red & Yellow Facade)',
    category: 'exterior',
    image: exteriorImg,
    caption: 'Vibrant 3-story red and yellow building with Maa Durga Guest Inn signboard, Old Digha'
  },
  {
    id: 'gal-2',
    title: 'Deluxe AC Room (Blue/Purple Cove Ceiling)',
    category: 'rooms',
    image: acDeluxeRoomImg,
    caption: 'Deluxe room with split AC, ambient ceiling glow, tea table, and decorative wooden door'
  },
  {
    id: 'gal-3',
    title: 'Spacious Multi-Bed Family Room',
    category: 'rooms',
    image: familyRoomImg,
    caption: 'Large family room with multiple beds, double door wardrobe, and seating table'
  },
  {
    id: 'gal-4',
    title: 'Comfortable Double Bed Setup',
    category: 'rooms',
    image: doubleBedInteriorImg,
    caption: 'Clean beds with fresh striped sheets, ceiling fan, and maroon window curtains'
  },
  {
    id: 'gal-5',
    title: 'Reception Lobby & Front Desk',
    category: 'reception',
    image: receptionImg,
    caption: 'Warm reception with Maa Durga blessings, TV, wooden desk, and hospitable staff'
  },
  {
    id: 'gal-6',
    title: 'Clean & Hygienic Attached Bathroom',
    category: 'washroom',
    image: bathroomImg,
    caption: 'Mosaic tiled washroom with overhead shower, chrome taps, jet spray, and Western toilet'
  },
  {
    id: 'gal-7',
    title: 'Authentic Bengali Fish Thali & Meals',
    category: 'food',
    image: foodThaliImg,
    caption: 'Delicious fresh Bengali fish thali served with piping hot rice, dal, and coastal fish curry'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Subhasish Mukherjee',
    location: 'Kolkata, West Bengal',
    rating: 5,
    date: 'August 2026',
    travelerType: 'Family',
    comment: 'Stayed with my family (4 members) for 2 nights. Extremely clean rooms, very polite owner and staff. The Bengali fish thali lunch was finger-licking good! Walking to the Old Digha sea beach took just 4 minutes. Highly recommended for budget family trips.'
  },
  {
    id: 'rev-2',
    name: 'Ananya & Rupam Roy',
    location: 'Howrah, West Bengal',
    rating: 5,
    date: 'July 2026',
    travelerType: 'Couple',
    comment: 'Best budget hotel in Old Digha under ₹1000! Clean bathroom, working AC, and safe atmosphere with CCTV cameras. The location in Rajbari complex is peaceful and safe for couples. We booked directly over WhatsApp easily.'
  },
  {
    id: 'rev-3',
    name: 'Debabrata Das',
    location: 'Midnapore, West Bengal',
    rating: 5,
    date: 'June 2026',
    travelerType: 'Group',
    comment: 'Came with 6 college friends for a weekend trip. We took two 3-bed rooms. Very spacious and affordable. Suman Da at the front desk was super helpful with cab bookings and fresh hot tea in the morning.'
  },
  {
    id: 'rev-4',
    name: 'Mousumi Banerjee',
    location: 'Bardhaman, West Bengal',
    rating: 4.5,
    date: 'May 2026',
    travelerType: 'Family',
    comment: 'Felt just like home. The blessings of Maa Durga are truly felt in their warm hospitality. Clean bedsheets and delicious homely food for my elderly parents. Will visit again on our next Digha tour.'
  }
];

export const SIGHTSEEING_DATA = [
  {
    name: 'Old Digha Sea Beach & Ghats',
    bengaliName: 'ওল্ড দিঘা সমুদ্র সৈকত',
    distance: '350 meters (4 min walk)',
    desc: 'Famous stone boulder promenade, scenic sea breeze, vibrant evening street food and seashell handicraft markets.',
    highlight: 'Must Visit Sunrise/Sunset'
  },
  {
    name: 'Biswa Bangla Park & Promenade',
    bengaliName: 'বিশ্ব বাংলা পার্ক',
    distance: '600 meters (7 min walk)',
    desc: 'Beautiful landscaped coastal park with sitting benches, musical fountains, and evening walking plaza.',
    highlight: 'Family Leisure'
  },
  {
    name: 'Digha Science Centre & Planetarium',
    bengaliName: 'দিঘা সায়েন্স সেন্টার',
    distance: '1.2 km (4 min e-rickshaw)',
    desc: 'Interactive science exhibits, 3D theatre, Jurassic park models, and planetarium show great for kids and students.',
    highlight: 'Kids Favorite'
  },
  {
    name: 'Marine Aquarium & Regional Centre (MARC)',
    bengaliName: 'মেরিন অ্যাকোয়ারিয়াম',
    distance: '1.5 km (5 min drive)',
    desc: 'Largest marine aquarium in India showing exotic sea creatures, sharks, coral species, and coastal marine biodiversity.',
    highlight: 'Exotic Sea Life'
  },
  {
    name: 'New Digha Beach & Helipad',
    bengaliName: 'নিউ দিঘা সমুদ্র সৈকত',
    distance: '2.5 km (8 min toto ride)',
    desc: 'Wide flat sandy beach ideal for swimming, banana boat rides, jet ski water sports, and coconut groves.',
    highlight: 'Water Sports & Bathing'
  },
  {
    name: 'Digha Mohona Watch Point & Fish Market',
    bengaliName: 'দিঘা মোহনা ও মাছের আড়ত',
    distance: '3.8 km (12 min toto)',
    desc: 'Confluence of river and Bay of Bengal, spectacular early morning fish auction and breathtaking sunrise photography point.',
    highlight: 'Fresh Seafood Hub'
  }
];

export const FAQS_DATA = [
  {
    q: 'What is the starting room price at Maa Durga Guest Inn?',
    a: 'Our affordable rooms start from approximately ₹700 per night for standard 2-bed rooms. Deluxe AC and spacious 3-bed family rooms are also available at very attractive budget rates.'
  },
  {
    q: 'How far is the hotel from Old Digha Sea Beach?',
    a: 'Maa Durga Guest Inn is located in the Rajbari Complex, approximately 350 meters from the sea beach (a quick 4 to 5-minute easy walk).'
  },
  {
    q: 'What are the Check-in and Check-out timings?',
    a: 'Standard Check-in time is 12:00 PM and Check-out time is 10:00 AM. Early check-in or late luggage storage can be accommodated subject to room availability.'
  },
  {
    q: 'Is Bengali food available at the hotel?',
    a: 'Yes! We have an in-house kitchen serving fresh, hygienic Bengali and Indian meals including authentic Macher Jhol (Fish Curry), Prawn Malai, Chicken curry, Veg Thalis, and morning Luchi-Alur Dom.'
  },
  {
    q: 'Is the hotel safe for families and couples?',
    a: 'Absolutely. We welcome families, married/unmarried couples with valid government ID proofs, and group travelers. The premises are under 24/7 CCTV surveillance with a safe and homely environment.'
  },
  {
    q: 'How can I book a room or contact for advance booking?',
    a: 'You can directly call us at +91 7003036882, click the WhatsApp button to chat instantly with our manager, or fill out the booking inquiry form on this website.'
  }
];
