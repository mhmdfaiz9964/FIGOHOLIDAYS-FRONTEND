import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TourPackage } from '../types';
import { getOffers } from '../api';
import { LazyImage } from '../components/LazyImage';

export const Offers: React.FC = () => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await getOffers();
        setPackages(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  // Extract all unique types from all packages
  const allTypes = Array.from(new Set(
    packages.flatMap(pkg => pkg.types?.map(t => t.name) || [])
  )).filter(Boolean);

  // Star counts
  const getStarCount = (stars: number | 'all') => {
    if (stars === 'all') return packages.length;
    return packages.filter(p => Number(p.star_rating) === stars).length;
  };

  const [selectedStars, setSelectedStars] = useState<number | 'all'>('all');

  const filteredPackages = packages.filter(p => {
    const typeMatch = filter === 'all' || p.types?.some(t => t.name === filter);
    const starMatch = selectedStars === 'all' || Number(p.star_rating) === Number(selectedStars);
    return typeMatch && starMatch;
  });

  return (
    <div className="min-h-screen pb-20 bg-[#f8f9fa] font-cairo text-right" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full brightness-[0.4] object-cover scale-105"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            استكشف عروضنا <span className="text-blue-400">المميزة</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            اختر وجهتك المثالية من بين مجموعة واسعة من الباقات المصممة بعناية لتناسب جميع الأذواق والميزانيات
          </motion.p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-950/10 border border-blue-50 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
            
            {/* Star Rating Filter */}
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block px-1 flex items-center gap-2">
                <span className="text-orange-500">★</span> تصنيف الفنادق
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

            {/* Types Filter Dropdown */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block px-1 flex items-center gap-2">
                <span className="text-[#007cc2]">🌍</span> أنواع الرحلات
              </label>
              <div className="relative group">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 p-4 pr-12 rounded-[1.25rem] outline-none focus:ring-2 focus:ring-[#007cc2] font-black appearance-none transition-all hover:bg-slate-100 text-right text-slate-700 shadow-sm"
                >
                  <option value="all">كل أنواع الرحلات</option>
                  {allTypes.map((typeName) => (
                    <option key={typeName} value={typeName}>{typeName}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#007cc2] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
                </div>
              </div>
            </div>

            {/* Search Summary Counter */}
            <div className="lg:col-span-1 pb-2 md:pb-4 text-center lg:text-left">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest bg-slate-50 inline-block px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                تم العثور على <span className="text-[#007cc2] text-sm mx-1">{filteredPackages.length}</span> عروض مميزة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-500 font-bold">جاري تحميل العروض...</p>
            </div>
          ) : filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                <Link to={`/package/${pkg.id}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <LazyImage
                      src={pkg.thumbnail_image}
                      alt={pkg.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.category?.name || 'برامج سياحية'}
                    </div>
                  </div>

                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(Number(pkg.star_rating) || 0)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {(pkg.types || []).map((t, idx) => (
                          <span key={idx} className="text-[9px] font-black uppercase tracking-tighter bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: pkg.meta_description }}></p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-sm text-gray-400 block line-through">
                          {pkg.offer_price ? `$${pkg.offer_price}` : ''}
                        </span>
                        <span className="text-2xl font-black text-blue-900">
                          ${pkg.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                          {pkg.days} أيام / {pkg.nights} ليالي
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400 font-bold">
              لا يوجد عروض في هذا التصنيف حالياً.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

