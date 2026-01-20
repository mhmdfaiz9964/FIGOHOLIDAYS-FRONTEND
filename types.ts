
export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image: string;
  activities: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  days: number;
  category: 'honeymoon' | 'family' | 'luxury' | 'adventure' | 'nature' | 'wellness' | 'safari' | 'beach' | 'culture';
  isFeatured: boolean;
  isSpecialOffer: boolean;
  discountPrice?: number;
  mainImage: string;
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  destinationId: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  location?: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  mapUrl?: string;
  attractions: Attraction[];
  icon?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  city: string;
  cuisine: string;
  description: string;
  image: string;
  rating: number;
  address: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  seats: number;
  bags: number;
  image: string;
  pricePerDay: number;
}

export type Transportation = Vehicle;

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export type HotelCategory = 
  | 'villas' 
  | 'boutique' 
  | 'beach' 
  | '5star' 
  | '4star' 
  | '3star' 
  | 'ayurveda' 
  | 'apartments';

export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  category: HotelCategory;
  stars: number;
  pricePerNight: number;
  currency: string;
  amenities: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface Hero {
  id: number;
  tag: string;
  title: string;
  highlighted_title: string;
  description: string;
  background_image: string;
  btn1_text: string;
  btn1_url: string;
  btn1_icon: string;
  btn2_text: string;
  btn2_url: string;
  btn2_icon: string;
}
