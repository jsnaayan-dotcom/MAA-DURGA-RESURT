export interface RoomType {
  id: string;
  name: string;
  bengaliName?: string;
  tagline: string;
  bedType: string;
  capacity: string;
  basePrice: number;
  acPrice?: number;
  image: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface AmenityItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'exterior' | 'food' | 'washroom' | 'reception';
  image: string;
  caption?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  travelerType: 'Family' | 'Couple' | 'Group' | 'Solo';
  comment: string;
}

export interface FoodItem {
  name: string;
  bengaliName: string;
  type: 'Thali' | 'Fish' | 'Curry' | 'Snacks' | 'Breakfast';
  price: string;
  description: string;
  badge?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  roomType: string;
  isAC: boolean;
  checkIn: string;
  checkOut: string;
  guests: number;
  foodRequired: boolean;
  specialRequests: string;
}
