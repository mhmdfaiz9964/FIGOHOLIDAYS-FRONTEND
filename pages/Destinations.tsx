
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, HALAL_RESTAURANTS } from '../data/mockData';

export const Destinations: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');

  // Split destinations into two equal rows
  const midPoint = Math.ceil(DESTINATIONS.length / 2);
  const row1Destinations = DESTINATIONS.slice(0, midPoint);
  const row2Destinations = DESTINATIONS.slice(midPoint);

  // Auto-slide logic for both rows
  useEffect(() => {
    const slide = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right' = 'left') => {
      if (ref.current) {
        const step = 420;
        if (direction === 'left') {
            if (ref.current.scrollLeft + ref.current.offsetWidth >= ref.current.scrollWidth - 10) {
              ref.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              ref.current.scrollBy({ left: step, behavior: 'smooth' });
            }
        } else {
            if (ref.current.scrollLeft <= 10) {
               ref.current.scrollTo({ left: ref.current.scrollWidth, behavior: 'smooth' });
            } else {
               ref.current.scrollBy({ left: -step, behavior: 'smooth' });
            }
        }
      }
    };

    const interval1 = setInterval(() => slide(row1Ref, 'left'), 4000);
    const interval2 = setInterval(() => slide(row2Ref, 'right'), 4500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const manualScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const step = 420;
      ref.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
    }
  };

  const filteredRestaurants = useMemo(() => {
    if (selectedCity === 'all') return HALAL_RESTAURANTS;
    return HALAL_RESTAURANTS.filter(r => r.city === selectedCity);
  }, [selectedCity]);

  const restaurantCities = useMemo(() => {
    return Array.from(new Set(HALAL_RESTAURANTS.map(r => r.city)));
  }, []);

  return (
    <div className="bg-white min-h-screen font-cairo overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Explore Sri Lanka Cities"
        />
        <div className="absolute inset-0 bg-blue-950/50 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-black mb-6 drop-shadow-2xl">الوجهات السياحية</h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium leading-relaxed">
            من الشواطئ الذهبية في نيجومبو إلى جبال الشاي في نوارا إليا، استكشف التنوع الفريد في مدن سريلانكا.
          </p>
        </div>
      </section>

      {/* Destinations Section - Two Row Carousel */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <span className="text-orange-500 font-black uppercase tracking-widest text-xs mb-2 block">مدننا الساحرة</span>
            <h2 className="text-3xl md:text-5xl font-black text-blue-950">أبرز الوجهات في الجزيرة</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Row 1 Carousel */}
        <div className="relative mb-12">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-blue-900 border-r-4 border-blue-900 pr-3">المثلث الثقافي والشمال</h3>
                 <div className="flex gap-2">
                    <button onClick={() => manualScroll(row1Ref, 'right')} className="w-10 h-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all">→</button>
                    <button onClick={() => manualScroll(row1Ref, 'left')} className="w-10 h-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all">←</button>
                 </div>
            </div>
            <div 
                ref={row1Ref}
                className="flex gap-8 overflow-x-auto pb-6 hide-scrollbar px-[calc(50vw-640px)] snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {row1Destinations.map((dest) => (
                <div key={dest.id} className="min-w-[320px] md:min-w-[400px] snap-start bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group">
                    <div className="h-64 relative overflow-hidden">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                            <span className="text-2xl">{dest.icon}</span>
                            <span className="text-blue-950 font-black text-lg">{dest.name}</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12 line-clamp-2">{dest.description}</p>
                        <div className="space-y-3">
                            <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest border-b pb-2 mb-4">أبرز الأماكن السياحية:</h4>
                            {dest.attractions.slice(0, 3).map((attr, i) => (
                            <div key={i} className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                                <span className="text-orange-500">✦</span>
                                {attr.name}
                            </div>
                            ))}
                        </div>
                        <Link to={`/destination/${dest.id}`} className="mt-8 w-full bg-blue-50 group-hover:bg-blue-900 text-blue-900 group-hover:text-white py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2">عرض التفاصيل والصور ←</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Row 2 Carousel */}
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-blue-900 border-r-4 border-blue-900 pr-3">الساحل الجنوبي والغربي</h3>
                 <div className="flex gap-2">
                    <button onClick={() => manualScroll(row2Ref, 'right')} className="w-10 h-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all">→</button>
                    <button onClick={() => manualScroll(row2Ref, 'left')} className="w-10 h-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all">←</button>
                 </div>
            </div>
            <div 
                ref={row2Ref}
                className="flex gap-8 overflow-x-auto pb-6 hide-scrollbar px-[calc(50vw-640px)] snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {row2Destinations.map((dest) => (
                <div key={dest.id} className="min-w-[320px] md:min-w-[400px] snap-start bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group">
                    <div className="h-64 relative overflow-hidden">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                            <span className="text-2xl">{dest.icon}</span>
                            <span className="text-blue-950 font-black text-lg">{dest.name}</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12 line-clamp-2">{dest.description}</p>
                        <div className="space-y-3">
                            <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest border-b pb-2 mb-4">أبرز الأماكن السياحية:</h4>
                            {dest.attractions.slice(0, 3).map((attr, i) => (
                            <div key={i} className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                                <span className="text-orange-500">✦</span>
                                {attr.name}
                            </div>
                            ))}
                        </div>
                        <Link to={`/destination/${dest.id}`} className="mt-8 w-full bg-blue-50 group-hover:bg-blue-900 text-blue-900 group-hover:text-white py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2">عرض التفاصيل والصور ←</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Halal Restaurants in Sri Lanka Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-2 block">السياحة الحلال</span>
            <h2 className="text-3xl md:text-5xl font-black text-blue-950">المطاعم الحلال في سريلانكا</h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
            <p className="text-gray-500 mt-8 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              نحن نحرص على راحة المسافر العربي والخليجي بتوفير قائمة محدثة بأفضل المطاعم الحلال المعتمدة في مختلف مدن الجزيرة.
            </p>
          </div>

          {/* City Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 sticky top-24 z-30 bg-white/80 backdrop-blur-md py-4 rounded-3xl shadow-sm border">
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all transform hover:scale-105 ${selectedCity === 'all' ? 'bg-green-600 text-white shadow-xl' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              الكل
            </button>
            {restaurantCities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-8 py-3 rounded-2xl font-black text-sm transition-all transform hover:scale-105 ${selectedCity === city ? 'bg-green-600 text-white shadow-xl' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRestaurants.map((res) => (
              <div key={res.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group">
                <div className="h-64 relative overflow-hidden">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <span>حلال معتمد</span>
                    <span className="text-lg">☪️</span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                    <span className="text-orange-500 text-lg">★</span>
                    <span className="text-blue-950 font-black">{res.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-blue-950 group-hover:text-green-600 transition-colors leading-tight">{res.name}</h3>
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">{res.city}</span>
                  </div>
                  <div className="text-orange-600 text-xs font-black mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                      {res.cuisine}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{res.description}</p>
                  <div className="flex items-center gap-3 text-gray-400 text-xs font-bold pt-6 border-t border-gray-50 group-hover:text-blue-900 transition-colors">
                    <span className="text-xl">📍</span>
                    <span className="line-clamp-1">{res.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-24 bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-200">
              <span className="text-8xl block mb-6 opacity-30">🍲</span>
              <p className="text-2xl font-black text-gray-400">عذراً، لا توجد مطاعم مسجلة في هذه المدينة حالياً.</p>
              <button onClick={() => setSelectedCity('all')} className="mt-6 text-green-600 font-bold hover:underline">عرض جميع المطاعم</button>
            </div>
          )}
        </div>
      </section>

      {/* Guide CTA Section */}
      <section className="py-24 bg-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000" className="w-full h-full object-cover" alt="Culture" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">هل ترغب في تنظيم رحلة سياحية حلال؟</h2>
          <p className="text-xl mb-12 opacity-90 font-medium leading-relaxed max-w-2xl mx-auto">نحن في المسافر سريلانكا متخصصون في تنظيم رحلات تراعي كافة متطلبات المسافر العربي من طعام حلال وخصوصية تامة.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/94771440707" className="bg-white text-green-700 px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-4 shadow-xl">
              <span>تواصل مع خبيرنا</span>
              <span className="text-2xl">💬</span>
            </a>
            <Link to="/offers" className="bg-green-900/50 backdrop-blur-md text-white border-2 border-white/30 px-12 py-5 rounded-[2.5rem] font-black text-xl transition-all hover:bg-green-900 shadow-xl">استعراض البرامج</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
