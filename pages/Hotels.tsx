
import React, { useState, useMemo } from 'react';
// Fix: Import Link from react-router-dom to resolve "Cannot find name 'Link'" error.
import { Link } from 'react-router-dom';
import { HOTELS, HOTEL_CATEGORIES } from '../data/mockData';
import { HotelCategory } from '../types';

export const Hotels: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<HotelCategory | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const locations = useMemo(() => {
    const locs = Array.from(new Set(HOTELS.map(h => h.location)));
    return locs;
  }, []);

  const filteredHotels = useMemo(() => {
    return HOTELS.filter(hotel => {
      const categoryMatch = selectedCategory === 'all' || hotel.category === selectedCategory;
      const locationMatch = selectedLocation === 'all' || hotel.location === selectedLocation;
      return categoryMatch && locationMatch;
    });
  }, [selectedCategory, selectedLocation]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-cairo">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Resorts Sri Lanka"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-xl">الفنادق والمنتجعات</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">نختار لك أرقى الوجهات السكنية لتجربة إقامة ملكية في سريلانكا.</p>
        </div>
      </section>

      {/* Filters Section */}
      <div className="bg-white shadow-sm sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Slider */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto hide-scrollbar">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${selectedCategory === 'all' ? 'bg-[#007cc2] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                الكل
              </button>
              {HOTEL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${selectedCategory === cat.id ? 'bg-[#007cc2] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Location Dropdown */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <span className="text-gray-400 font-bold whitespace-nowrap">تصفية حسب المدينة:</span>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-gray-50 border border-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#007cc2] w-full lg:w-48 font-bold"
              >
                <option value="all">كل المدن</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              <div className="h-72 relative overflow-hidden">
                <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={hotel.name} />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1">
                   <span className="text-orange-500 font-black">★</span>
                   <span className="text-blue-900 font-black text-sm">{hotel.stars} نجوم</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-blue-900/80 backdrop-blur-md px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                  {HOTEL_CATEGORIES.find(c => c.id === hotel.category)?.title}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-blue-950 leading-tight group-hover:text-[#007cc2] transition-colors">
                    {hotel.name}
                  </h3>
                  <span className="text-gray-400 flex items-center gap-1 text-xs shrink-0 bg-gray-50 px-3 py-1 rounded-lg">
                    <span>📍</span>
                    {hotel.location}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 line-clamp-2 mb-8 flex-grow leading-relaxed">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {hotel.amenities.map((amenity, idx) => (
                    <span key={idx} className="bg-blue-50 text-[#007cc2] text-[10px] font-black px-3 py-1 rounded-lg border border-blue-100">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-50 mt-auto">
                  <div>
                    <span className="text-gray-400 text-[10px] block font-bold mb-1 uppercase tracking-wider">سعر الليلة من</span>
                    <div className="text-2xl font-black text-orange-500 tracking-tighter">
                      {hotel.currency}{hotel.pricePerNight}
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl hover:bg-orange-500 transition-all transform group-hover:-translate-y-1">
                    طلب الحجز
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-32">
            <div className="text-8xl mb-8 opacity-20">🏨</div>
            <h3 className="text-3xl font-black text-gray-300">عذراً، لا توجد نتائج مطابقة لخياراتك</h3>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedLocation('all'); }} 
              className="mt-6 text-[#007cc2] font-black hover:underline"
            >
              عرض جميع الفنادق
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#007cc2] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="relative z-10 text-center lg:text-right max-w-xl">
               <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">هل تبحث عن إقامة مخصصة تماماً؟</h2>
               <p className="text-xl opacity-90 leading-relaxed font-medium">نحن في المسافر سريلانكا نساعدك في حجز الفنادق التي تلبي تطلعاتك بأفضل الأسعار المتاحة حصرياً لعملائنا.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
               <a href="https://wa.me/94771440707" className="bg-white text-[#007cc2] px-12 py-5 rounded-3xl font-black text-lg hover:shadow-2xl transition-all text-center">تحدث مع خبيرنا</a>
               <Link to="/contact" className="bg-blue-900 text-white px-12 py-5 rounded-3xl font-black text-lg hover:shadow-2xl transition-all text-center">أرسل طلبك</Link>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
