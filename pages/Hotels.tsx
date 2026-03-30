import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_CATEGORIES } from '../data/mockData';
import { HotelCategory, Hotel } from '../types';
import { getHotels } from '../api';
import { LazyImage } from '../components/LazyImage';

export const Hotels: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<HotelCategory | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedStars, setSelectedStars] = useState<number | 'all'>('all');

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '1',
    notes: ''
  });

  // Dynamically generate the hotel type categories from data
  const dynamicCategories = useMemo(() => {
    const list: { id: string; title: string }[] = [];
    const seenIds = new Set<string>();

    // Start with core categories for consistency
    const baseCategories = [
      { id: 'villas', title: 'فلل خاصة بمسبح' },
      { id: 'boutique', title: 'فنادق بوتيك' },
      { id: 'beach', title: 'منتجعات شاطئية' },
      { id: 'apartments', title: 'شقق فندقية' },
    ];

    baseCategories.forEach(cat => {
      list.push(cat);
      seenIds.add(cat.id);
    });

    // Add unique types found in the real data
    hotels.forEach(hotel => {
      const hType = (hotel as any).hotel_type;
      if (hType && typeof hType === 'object') {
        const id = hType.id?.toString() || hType.title;
        if (id && !seenIds.has(id)) {
          list.push({ id, title: hType.title || hType.name });
          seenIds.add(id);
        }
      } else if (hotel.category && typeof hotel.category === 'string') {
        if (!seenIds.has(hotel.category) && !hotel.category.includes('star')) {
          list.push({ id: hotel.category, title: hotel.category });
          seenIds.add(hotel.category);
        }
      }
    });

    return list;
  }, [hotels]);

  useEffect(() => {
    getHotels()
      .then(data => {
        setHotels(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching hotels:', err);
        setLoading(false);
      });
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHotel) return;

    const message = `*طلب حجز فندق من الموقع* \n\n` +
      `*الفندق:* ${selectedHotel.name}\n` +
      `*المدينة:* ${selectedHotel.location}\n` +
      `*الاسم:* ${bookingDetails.name}\n` +
      `*رقم التواصل:* ${bookingDetails.phone}\n` +
      `*تاريخ الحجز المفضل:* ${bookingDetails.date}\n` +
      `*عدد الأشخاص:* ${bookingDetails.guests}\n` +
      `*ملاحظات:* ${bookingDetails.notes || 'لا يوجد'}`;

    window.open(`https://wa.me/94771440707?text=${encodeURIComponent(message)}`, '_blank');
    setIsModalOpen(false);
  };

  const locations = useMemo(() => {
    const locs = Array.from(new Set(hotels.map(h => h.location)));
    return locs.sort();
  }, [hotels]);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const hCategory = hotel.category?.toString();
      const hcId = (hotel as any).category_id?.toString();
      const htId = (hotel as any).hotel_type_id?.toString() || (hotel as any).hotel_type?.id?.toString();
      const htName = (hotel as any).hotel_type?.name;
      const htTitle = (hotel as any).hotel_type?.title;
      const htSlug = (hotel as any).hotel_type?.slug;

      const selCat = selectedCategory.toString();

      const categoryMatch = selectedCategory === 'all' ||
        hCategory === selCat ||
        hcId === selCat ||
        htId === selCat ||
        htName === selectedCategory ||
        htTitle === selectedCategory ||
        htSlug === selectedCategory ||
        (hotel as any).type?.toString() === selCat ||
        (hotel as any).type_id?.toString() === selCat ||
        // Check if the Arabic title from the API matches our static categories title
        (hotel as any).hotel_type?.title === HOTEL_CATEGORIES.find(c => c.id === selectedCategory)?.title ||
        (hotel as any).hotel_type?.name === HOTEL_CATEGORIES.find(c => c.id === selectedCategory)?.title;

      const locationMatch = selectedLocation === 'all' || 
        hotel.location === selectedLocation ||
        (hotel as any).city === selectedLocation;

      const starsMatch = selectedStars === 'all' || 
        Number(hotel.stars) === Number(selectedStars) ||
        Number((hotel as any).rating) === Number(selectedStars);

      return categoryMatch && locationMatch && starsMatch;
    });
  }, [hotels, selectedCategory, selectedLocation, selectedStars]);

  const getStarCount = (stars: number | 'all') => {
    if (stars === 'all') return hotels.length;
    return hotels.filter(h => Number(h.stars) === stars || Number((h as any).rating) === stars).length;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-cairo overflow-x-hidden text-right" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <LazyImage
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Luxury Resorts Sri Lanka"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-black mb-6 inline-block uppercase tracking-[0.2em] animate-fade-in">إقامة ملكية</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">الفنادق والمنتجعات</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium leading-relaxed">اكتشف مجموعتنا المختارة من أرقى الوجهات السكنية لتجربة إقامة لا تُنسى في سريلانكا.</p>
        </div>
      </section>

      {/* Filters Section */}
      <div className="bg-white shadow-xl relative z-40 -mt-10 mx-auto max-w-6xl rounded-[2rem] border border-gray-100 p-2">
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            {/* City Filter */}
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block px-1 flex items-center gap-2">
                <span className="text-[#007cc2]">📍</span> المدينة
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] font-black appearance-none transition-all hover:bg-gray-100"
                >
                  <option value="all">كل المدن</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#007cc2]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Star Rating Filter */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block px-1 flex items-center gap-2">
                <span className="text-orange-500">★</span> تصنيف النجوم
              </label>
              <div className="flex bg-slate-50 p-1.5 rounded-[1.25rem] border border-slate-100 h-[62px] shadow-inner">
                <button
                  onClick={() => setSelectedStars('all')}
                  className={`relative flex-1 rounded-xl font-black text-[11px] transition-all duration-300 flex flex-col items-center justify-center group ${selectedStars === 'all' ? 'bg-[#007cc2] text-white shadow-lg' : 'text-slate-400 hover:bg-white hover:text-[#007cc2]'}`}
                >
                  <span className="leading-tight">الكل</span>
                  <span className={`text-[8px] opacity-60 mt-0.5 ${selectedStars === 'all' ? 'text-white/80' : 'text-slate-400'}`}>({getStarCount('all')})</span>
                </button>
                {[5, 4, 3].map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedStars(s)}
                    className={`relative flex-1 rounded-xl font-black text-[11px] transition-all duration-300 flex flex-col items-center justify-center group ${selectedStars === s ? 'bg-[#007cc2] text-white shadow-lg' : 'text-slate-400 hover:bg-white hover:text-orange-500'}`}
                  >
                    <div className="flex items-center gap-0.5">
                      <span>{s}</span>
                      <span className={`${selectedStars === s ? 'text-white' : 'text-orange-400'} text-xs`}>★</span>
                    </div>
                    <span className={`text-[8px] opacity-60 mt-0.5 ${selectedStars === s ? 'text-white/80' : 'text-slate-400'}`}>({getStarCount(s)})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Dropdown */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block px-1 flex items-center gap-2">
                <span className="text-[#007cc2]">🏨</span> أنواع الإقامة
              </label>
              <div className="relative group">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-100 p-4 pr-12 rounded-[1.25rem] outline-none focus:ring-2 focus:ring-[#007cc2] font-black appearance-none transition-all hover:bg-slate-100 text-right text-slate-700 shadow-sm"
                >
                  <option value="all">كل أنواع الإقامة</option>
                  {dynamicCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#007cc2] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#007cc2] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="font-black text-gray-400 animate-pulse">جاري تحميل الفنادق...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                <div className="h-80 relative overflow-hidden">
                  <LazyImage src={hotel.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={hotel.name} />
                  
                  {/* Overlays */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-1.5 border border-white">
                    <span className="text-orange-500 font-black text-lg leading-none">★</span>
                    <span className="text-blue-950 font-black text-sm">{hotel.stars}</span>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
                    <div className="bg-[#007cc2] backdrop-blur-md px-4 py-1.5 rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                      {(hotel as any).hotel_type?.name || (hotel as any).hotel_type?.title || HOTEL_CATEGORIES.find(c => c.id === hotel.category)?.title || 'فندق'}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-2">
                      <span className="w-5 h-5 flex items-center justify-center bg-gray-50 rounded-lg text-blue-500">📍</span>
                      {hotel.location}
                    </div>
                    <h3 className="text-2xl font-black text-blue-950 leading-tight group-hover:text-[#007cc2] transition-colors line-clamp-1">
                      {hotel.name}
                    </h3>
                  </div>

                  <div
                    className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{ __html: hotel.description }}
                  />

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {(hotel.amenities || []).slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="bg-blue-50 text-[#007cc2] text-[10px] font-black px-4 py-1.5 rounded-xl border border-blue-100/50">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities?.length > 3 && (
                      <span className="text-[10px] font-black text-gray-300 px-2 py-1.5">+{hotel.amenities.length - 3}</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-50">
                    <div>
                      <span className="text-gray-400 text-[10px] block font-black mb-1 uppercase tracking-wider">تبدأ الأسعار من</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-orange-500">{hotel.currency}{hotel.pricePerNight}</span>
                        <span className="text-gray-400 text-[10px] font-bold">/ ليلة</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedHotel(hotel);
                        setBookingDetails({
                          name: '',
                          phone: '',
                          date: '',
                          guests: '1',
                          notes: ''
                        });
                        setIsModalOpen(true);
                      }}
                      className="bg-blue-950 text-white px-6 py-4 rounded-[1.25rem] font-black text-xs shadow-lg shadow-blue-900/20 hover:bg-orange-500 transition-all transform hover:scale-105 active:scale-95"
                    >
                      حجز الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredHotels.length === 0 && (
          <div className="text-center py-40 animate-in fade-in zoom-in duration-500">
            <div className="text-[120px] mb-8 grayscale opacity-20">🏨</div>
            <h3 className="text-4xl font-black text-gray-900 mb-4">لا توجد نتائج مطابقة</h3>
            <p className="text-gray-400 font-medium mb-10 max-w-md mx-auto leading-relaxed">جرب تغيير إعدادات التصفية للحصول على نتائج أكثر.</p>
            <button
              onClick={() => { 
                setSelectedCategory('all'); 
                setSelectedLocation('all'); 
                setSelectedStars('all');
              }}
              className="bg-[#007cc2] text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 hover:shadow-2xl transition-all"
            >
              إعادة تعيين الكل
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
      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="bg-[#007cc2] p-8 text-white relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h3 className="text-2xl font-black text-right">طلب حجز سريع</h3>
              <p className="text-blue-100 text-right mt-1 font-medium">{selectedHotel?.name}</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="p-8 space-y-5 text-right font-cairo">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">الاسم بالكامل</label>
                <input
                  required
                  type="text"
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] transition-all font-bold"
                  placeholder="أدخل اسمك"
                  value={bookingDetails.name}
                  onChange={e => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">رقم الواتساب</label>
                <input
                  required
                  type="tel"
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] transition-all font-bold text-left"
                  placeholder="+94 XXX XXX XXX"
                  value={bookingDetails.phone}
                  onChange={e => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">تاريخ الوصول</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] transition-all font-bold"
                    value={bookingDetails.date}
                    onChange={e => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">عدد الأفراد</label>
                  <select
                    className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] transition-all font-bold"
                    value={bookingDetails.guests}
                    onChange={e => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n}</option>)}
                    <option value="10+">أكثر من 10</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">ملاحظات إضافية</label>
                <textarea
                  className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#007cc2] transition-all font-bold h-24 resize-none"
                  placeholder="أي طلبات خاصة؟"
                  value={bookingDetails.notes}
                  onChange={e => setBookingDetails({ ...bookingDetails, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3 text-lg mt-4"
              >
                <span>إرسال الطلب عبر واتساب</span>
                <span className="text-2xl">💬</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
