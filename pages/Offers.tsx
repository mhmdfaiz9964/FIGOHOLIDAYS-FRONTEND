
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOUR_PACKAGES } from '../data/mockData';

export const Offers: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'honeymoon' | 'family' | 'luxury' | 'adventure'>('all');

  const filteredPackages = filter === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">أفضل العروض السياحية في سريلانكا</h1>
          <p className="text-blue-200 text-lg">باقات متنوعة تناسب العائلات، العرسان، ومحبي المغامرة</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm sticky top-20 z-40 mb-12">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex justify-center gap-2 md:gap-4 whitespace-nowrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              الكل
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === 'family' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              عائلي
            </button>
            <button
              onClick={() => setFilter('honeymoon')}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === 'honeymoon' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              شهر عسل
            </button>
            <button
              onClick={() => setFilter('adventure')}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === 'adventure' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              مغامرة
            </button>
            <button
              onClick={() => setFilter('luxury')}
              className={`px-6 py-2 rounded-full font-bold transition ${filter === 'luxury' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              فاخر
            </button>
          </div>
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Link key={pkg.id} to={`/package/${pkg.id}`} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.mainImage} alt={pkg.title} className="w-full h-full object-cover transition-scale duration-500 group-hover:scale-110" />
                {pkg.isSpecialOffer && (
                   <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    وفر حتى 20%
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-blue-900/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-medium">
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-orange-500 transition">{pkg.title}</h3>
                <div 
                  className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow"
                  dangerouslySetInnerHTML={{ __html: pkg.description }}
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.inclusions.slice(0, 3).map((inc, i) => (
                    <span key={i} className="bg-gray-50 text-gray-500 text-[10px] px-2 py-1 rounded-md border">{inc}</span>
                  ))}
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="text-gray-400 text-xs block">السعر للشخص</span>
                    <span className="text-2xl font-bold text-orange-500">{pkg.currency}{pkg.discountPrice || pkg.price}</span>
                    {pkg.discountPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">{pkg.currency}{pkg.price}</span>
                    )}
                  </div>
                  <div className="bg-blue-900 text-white p-3 rounded-xl transition group-hover:bg-orange-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400">عذراً، لا توجد عروض حالياً لهذا التصنيف</h3>
            <button onClick={() => setFilter('all')} className="mt-4 text-blue-900 underline font-bold">عرض كل العروض</button>
          </div>
        )}
      </div>
    </div>
  );
};
