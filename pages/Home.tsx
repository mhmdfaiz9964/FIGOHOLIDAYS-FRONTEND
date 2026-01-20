
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TOUR_PACKAGES, DESTINATIONS, TOUR_CATEGORIES, HOTELS, REVIEWS, HOTEL_CATEGORIES, HOTEL_PARTNERS } from '../data/mockData';
import { getHeroes, getSettings, getCategories, getOffers, getHotels, getReviews, getPartners } from '../api';
import { Hero } from '../types';
import { HomeSkeleton } from '../components/Skeleton';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [settings, setSettings] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [hotels, setHotels] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);

  const featuredPackages = offers.filter(p => p.status === 'active').slice(0, 3);
  
  const categoriesRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Auto-slide logic for carousels
  useEffect(() => {
    const slide = (ref: React.RefObject<HTMLDivElement>, step: number) => {
      if (ref.current) {
        if (ref.current.scrollLeft + ref.current.offsetWidth >= ref.current.scrollWidth - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollBy({ left: step, behavior: 'smooth' });
        }
      }
    };

    const categoriesInterval = setInterval(() => slide(categoriesRef, 320), 5000);
    const hotelsInterval = setInterval(() => slide(hotelsRef, 420), 4000);
    const reviewsInterval = setInterval(() => slide(reviewsRef, 470), 6000);
    const partnersInterval = setInterval(() => slide(partnersRef, 200), 3000);

    const fetchHeroes = async () => {
      try {
        const [heroesData, settingsData, categoriesData, offersData, hotelsData, reviewsData, partnersData] = await Promise.all([
          getHeroes(),
          getSettings(),
          getCategories(),
          getOffers(),
          getHotels(),
          getReviews(),
          getPartners()
        ]);
        setHeroes(heroesData);
        setSettings(settingsData);
        setCategories(categoriesData);
        setOffers(offersData);
        setHotels(hotelsData);
        setReviews(reviewsData);
        setPartners(partnersData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();

    return () => {
      clearInterval(categoriesInterval);
      clearInterval(hotelsInterval);
      clearInterval(reviewsInterval);
      clearInterval(partnersInterval);
    };
  }, []);

  const manualScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', step: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
    }
  };

  if (loading) return <HomeSkeleton />;

  return (
    <div className="animate-fadeIn font-cairo overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroes[0]?.background_image || "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000&auto=format&fit=crop"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          alt="Sri Lanka Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent"></div>
        <div className="relative z-10 text-right w-full max-w-7xl mx-auto px-4">
          <div className="max-w-2xl bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            {heroes[0]?.tag && (
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">{heroes[0].tag}</span>
            )}
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
              {heroes[0]?.title || "سريلانكا برؤية"} <span className="text-orange-400">{heroes[0]?.highlighted_title || "عربية"}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium leading-relaxed">
              {heroes[0]?.description || "رحلات فاخرة مصممة خصيصاً للمسافر الخليجي. استمتع بجمال الطبيعة مع خصوصية تامة وخدمة ملكية."}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link to={heroes[0]?.btn1_url || "/offers"} className="bg-[#007cc2] hover:bg-[#005fa3] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl flex items-center justify-center gap-3 group">
                <span>{heroes[0]?.btn1_text || "تصفح برامجنا"}</span>
                <span className="transition-transform group-hover:translate-x-[-5px]">←</span>
              </Link>
              <a href={heroes[0]?.btn2_url || "https://wa.me/94771440707"} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-12 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                <span>{heroes[0]?.btn2_text || "استشارة مجانية"}</span>
                <span className="text-green-400">💬</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories Carousel */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center md:text-right">
              <span className="text-orange-500 font-black uppercase tracking-widest text-xs mb-2 block">تصفح حسب نوع الرحلة</span>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 tracking-tight">برامجنا السياحية المتنوعة</h2>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => manualScroll(categoriesRef, 'left', 300)}
                className="w-12 h-12 rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 hover:bg-[#007cc2] hover:text-white transition-all"
              >
                <span>→</span>
              </button>
              <button 
                onClick={() => manualScroll(categoriesRef, 'right', 300)}
                className="w-12 h-12 rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 hover:bg-[#007cc2] hover:text-white transition-all"
              >
                <span>←</span>
              </button>
            </div>
          </div>

          <div 
            ref={categoriesRef}
            className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {(categories.length > 0 ? categories : TOUR_CATEGORIES).map((cat) => (
              <div 
                key={cat.id} 
                className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-blue-950 mb-3 group-hover:text-[#007cc2] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  <Link to="/offers" className="mt-auto text-orange-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span>عرض البرامج</span>
                    <span>←</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="text-right">
              <span className="text-orange-500 font-black uppercase tracking-wider text-xs">اكتشف باقاتنا</span>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mt-2 tracking-tight">أحدث العروض الحصرية</h2>
            </div>
            <Link to="/offers" className="text-[#007cc2] font-bold hover:text-orange-500 transition-colors hidden md:flex items-center gap-2">
              <span>عرض جميع الباقات</span>
              <span className="text-xl">←</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(featuredPackages.length > 0 ? featuredPackages : TOUR_PACKAGES.slice(0, 3)).map((pkg) => (
              <Link key={pkg.id} to={`/package/${pkg.id}`} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100 flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <img src={pkg.thumbnail_image || pkg.mainImage} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {pkg.isSpecialOffer && (
                    <div className="absolute top-6 right-6 bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-black shadow-xl animate-pulse z-10">
                      تخفيض موسمي
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                    <span className="text-white font-black text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">⏱️ {pkg.duration}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-blue-950 mb-4 group-hover:text-[#007cc2] transition-colors leading-tight">{pkg.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-8 flex-grow">{pkg.description}</p>
                  <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-50">
                    <div>
                      <span className="text-gray-400 text-[10px] block font-bold mb-1">يبدأ من</span>
                      <div className="text-2xl font-black text-orange-500 tracking-tighter">{pkg.currency}{pkg.discountPrice || pkg.price}</div>
                    </div>
                    <div className="bg-blue-50 text-[#007cc2] px-6 py-3 rounded-xl text-sm font-black group-hover:bg-[#007cc2] group-hover:text-white transition-all">
                      التفاصيل
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Carousel - Automatically Sliding */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center md:text-right">
              <span className="text-[#007cc2] font-black uppercase tracking-widest text-xs mb-2 block">إقامة ملكية</span>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 tracking-tight">أفضل الفنادق والمنتجعات</h2>
              <p className="text-gray-500 font-medium mt-2">نختار لك أرقى الوجهات السكنية لضمان الخصوصية والراحة التامة</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => manualScroll(hotelsRef, 'left', 350)}
                className="w-12 h-12 rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 hover:bg-[#007cc2] hover:text-white transition-all"
              >
                <span>→</span>
              </button>
              <button 
                onClick={() => manualScroll(hotelsRef, 'right', 350)}
                className="w-12 h-12 rounded-full bg-white shadow-md border flex items-center justify-center text-blue-900 hover:bg-[#007cc2] hover:text-white transition-all"
              >
                <span>←</span>
              </button>
            </div>
          </div>

          <div 
            ref={hotelsRef}
            className="flex gap-8 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {(hotels.length > 0 ? hotels : HOTELS.slice(0, 10)).map((hotel) => (
              <Link 
                key={hotel.id} 
                to="/hotels"
                className="min-w-[320px] md:min-w-[400px] snap-start bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1">
                    <span className="text-orange-500 font-black">★</span>
                    <span className="text-blue-900 font-black text-sm">{hotel.rating || hotel.stars} نجوم</span>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-blue-900/80 backdrop-blur-md px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                    {hotel.hotel_type?.title || HOTEL_CATEGORIES.find(c => c.id === hotel.category)?.title}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black text-blue-950 group-hover:text-[#007cc2] transition-colors leading-tight">
                      {hotel.name}
                    </h3>
                    <span className="text-gray-400 flex items-center gap-1 text-xs shrink-0 bg-gray-50 px-3 py-1 rounded-lg">
                      <span>📍</span>
                      {hotel.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-6">{hotel.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div className="text-lg font-black text-orange-500">{hotel.currency}{hotel.pricePerNight}<span className="text-[10px] text-gray-400 font-bold"> / ليلة</span></div>
                    <span className="text-[#007cc2] text-xs font-black group-hover:gap-2 flex items-center gap-1 transition-all">احجز الآن ←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners Logo Carousel */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-4">شركاء النجاح</h3>
          <p className="text-2xl font-black text-blue-900">شركاؤنا من أرقى العلامات الفندقية العالمية في سريلانكا</p>
        </div>
        <div 
          ref={partnersRef}
          className="flex gap-16 overflow-x-auto py-10 hide-scrollbar items-center whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the array for seamless infinite-like scrolling */}
          {(partners.length > 0 ? [...partners, ...partners] : [...HOTEL_PARTNERS, ...HOTEL_PARTNERS]).map((partner, i) => (
            <div key={i} className="min-w-[150px] flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 transform hover:scale-110">
              <img src={partner.image || partner.logo} alt={partner.name} className="h-16 object-contain mb-2" />
              <span className="text-[10px] font-black text-blue-900 uppercase tracking-wider">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TripAdvisor Reviews Section - Automatically Sliding */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" className="h-8" alt="TripAdvisor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 tracking-tight mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">فخورون بكوننا الخيار الأول للمسافر الخليجي بتقييمات استثنائية على منصة TripAdvisor العالمية</p>
          </div>

          <div 
            ref={reviewsRef}
            className="flex gap-8 overflow-x-auto py-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {(reviews.length > 0 ? reviews : REVIEWS).map((review) => (
              <div 
                key={review.id}
                className="min-w-[320px] md:min-w-[450px] snap-center bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative group"
              >
                <div className="absolute top-10 right-10 text-6xl text-blue-100 font-serif opacity-50 group-hover:text-blue-200 transition-colors">"</div>
                <div className="flex items-center gap-4 mb-8">
                  <img src={review.user_image || review.avatar} className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-md" alt={review.author} />
                  <div>
                    <h4 className="font-black text-blue-950">{review.author}</h4>
                    <p className="text-xs text-gray-400 font-bold">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-green-500 text-lg">●</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300 text-lg">●</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                  {review.comment}
                </p>
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-black uppercase tracking-widest border-t pt-6">
                  <span>المصدر: {review.source || 'TripAdvisor'}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://ar.tripadvisor.com/Attraction_Review-g293962-d26685256-Reviews-Figo_Holidays-Colombo_Western_Province.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#34e0a1] text-black px-10 py-5 rounded-3xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>مشاهدة جميع التقييمات</span>
              <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logo_mono.svg" className="h-5" alt="TA" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: 'رحلة منظمة', value: settings?.trip_count ? `${settings.trip_count}+` : '1,500+' },
                { label: 'عملاء من الخليج', value: settings?.customers_count ? `${settings.customers_count}+` : '12k+' },
                { label: 'وجهة سياحية', value: settings?.destination_count || '45' },
                { label: 'سنة خبرة', value: settings?.experience_count || '12' }
              ].map((stat, i) => (
                <div key={i} className="group">
                   <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
                   <div className="text-sm text-blue-300 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#007cc2] relative overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=2000" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight">خطط لرحلة أحلامك بضغطة زر</h2>
          <p className="text-xl mb-12 opacity-90 font-medium leading-relaxed max-w-2xl mx-auto">فريقنا من الخبراء جاهز لتصميم مسار رحلة مخصص تماماً لاحتياجاتك وميزانيتك.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-white text-[#007cc2] px-14 py-6 rounded-[2rem] font-black text-xl transition-all hover:shadow-2xl hover:scale-105 inline-block">
              تواصل معنا الآن
            </Link>
            <a href="https://wa.me/94771440707" className="bg-green-500 text-white px-14 py-6 rounded-[2rem] font-black text-xl transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3">
              <span>واتساب مباشر</span>
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
