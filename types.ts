
export interface ItineraryActivity {
  text: string;
  icon?: string;
}

export interface ItineraryDay {
  id: number;
  day: string;
  title: string;
  description: string;
  images: string[];
  activities: ItineraryActivity[];
}

export interface TourPackage {
  id: number;
  title: string;
  meta_description: string;
  price: number;
  offer_price?: number;
  days: number;
  nights: number;
  star_rating: number;
  thumbnail_image: string;
  gallery_images: string[];
  video?: string;
  category: {
    id: number;
    name: string;
  };
  types: Array<{
    id: number;
    name: string;
  }>;
  itineraries: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  cancellation_policy?: string;
  more_details?: string;
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
  tag: string;
  tag_size: string;
  title: string;
  title_size: string;
  highlighted_title: string;
  highlight_size: string;
  description: string;
  description_size: string;
  background_image: string;
  background_images: string[];
  btn1_text: string;
  btn1_url: string;
  btn1_icon: string;
  btn2_text: string;
  btn2_url: string;
  btn2_icon: string;
}
