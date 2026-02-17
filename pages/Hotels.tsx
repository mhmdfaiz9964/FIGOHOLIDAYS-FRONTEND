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
    return locs;
  }, [hotels]);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const categoryMatch = selectedCategory === 'all' ||
        hotel.category === selectedCategory ||
        hotel.hotel_type?.title === selectedCategory;
      const locationMatch = selectedLocation === 'all' || hotel.location === selectedLocation;
      return categoryMatch && locationMatch;
    });
  }, [hotels, selectedCategory, selectedLocation]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-cairo">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <LazyImage
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000"
          className="absolute inset-0 w-full h-full"
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
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007cc2]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                <div className="h-72 relative overflow-hidden">
                  <LazyImage src={hotel.image} className="w-full h-full transition-transform duration-700 group-hover:scale-110" alt={hotel.name} />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1">
                    <span className="text-orange-500 font-black">★</span>
                    <span className="text-blue-900 font-black text-sm">{hotel.stars} نجوم</span>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-blue-900/80 backdrop-blur-md px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                    {hotel.hotel_type?.title || HOTEL_CATEGORIES.find(c => c.id === hotel.category)?.title}
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

                  <div
                    className="text-sm text-gray-500 line-clamp-2 mb-8 flex-grow leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: hotel.description }}
                  />

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(hotel.amenities || []).map((amenity, idx) => (
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
                      className="bg-blue-900 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl hover:bg-orange-500 transition-all transform group-hover:-translate-y-1"
                    >
                      طلب الحجز
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredHotels.length === 0 && (
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
