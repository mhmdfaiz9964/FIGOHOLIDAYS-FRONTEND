import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TourPackage } from '../types';
import { getOffers } from '../api';

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

  const filteredPackages = filter === 'all'
    ? packages
    : packages.filter(p => p.types?.some(t => t.name === filter));

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white text-center mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            استكشف عروضنا <span className="text-blue-400">المميزة</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 font-medium"
          >
            اختر وجهتك المثالية من بين مجموعة واسعة من الباقات المصممة بعناية لتناسب جميع الأذواق والميزانيات
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white/50 backdrop-blur p-4 rounded-3xl border border-gray-100 shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${filter === 'all'
              ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-105'
              : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
          >
            الكل
          </button>
          {allTypes.map((typeName) => (
            <button
              key={typeName}
              onClick={() => setFilter(typeName)}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${filter === typeName
                ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20 scale-105'
                : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
            >
              {typeName}
            </button>
          ))}
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
                <Link to={`/package/${pkg.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={pkg.thumbnail_image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.category?.name}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(pkg.star_rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
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
                          {pkg.days}أيام / {pkg.nights}ليالي
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

