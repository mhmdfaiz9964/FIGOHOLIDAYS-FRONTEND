
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DESTINATIONS, TOUR_PACKAGES } from '../data/mockData';

export const DestinationDetail: React.FC = () => {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === id);
  const relatedPackages = TOUR_PACKAGES.filter(p => p.destinationId === id);

  if (!dest) return <div className="py-40 text-center text-2xl font-cairo">الوجهة غير موجودة</div>;

  return (
    <div className="bg-white font-cairo">
      {/* Hero */}
      <div className="relative h-[50vh]">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black drop-shadow-2xl mb-4">{dest.name}</h1>
            <p className="text-xl opacity-90">{dest.icon} استكشف لؤلؤة المحيط</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-20">
              <h2 className="text-3xl font-black text-blue-950 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">ℹ</span>
                عن {dest.name}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {dest.description}
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-black text-blue-950 mb-12 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#007cc2] rounded-xl flex items-center justify-center text-white text-xl">📸</span>
                أبرز المعالم والأنشطة السياحية
              </h3>
              <div className="space-y-16">
                {dest.attractions.map((attr, i) => (
                  <div key={attr.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
                    <div className={`overflow-hidden rounded-[2.5rem] shadow-xl h-72 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <img 
                        src={attr.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt={attr.name} 
                      />
                    </div>
                    <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-black text-blue-100">0{i + 1}</span>
                        <h4 className="text-2xl font-black text-blue-900">{attr.name}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        {attr.description}
                      </p>
                      <button className="text-[#007cc2] font-black border-b-2 border-[#007cc2] pb-1 hover:text-orange-500 hover:border-orange-500 transition-all">
                        تحدث مع خبيرنا عن هذا المعلم
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <h3 className="text-2xl font-black text-blue-950 mb-8 border-r-4 border-orange-500 pr-4">برامج تشمل {dest.name}</h3>
              <div className="space-y-6">
                {relatedPackages.length > 0 ? (
                  relatedPackages.map((pkg) => (
                    <Link key={pkg.id} to={`/package/${pkg.id}`} className="block group">
                      <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                        <div className="h-32 overflow-hidden">
                          <img src={pkg.mainImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6">
                          <h4 className="font-black text-blue-900 group-hover:text-[#007cc2] transition-colors line-clamp-1 mb-2">{pkg.title}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500 font-bold">{pkg.duration}</span>
                            <span className="font-black text-orange-500">{pkg.currency}{pkg.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="bg-gray-50 p-8 rounded-[2rem] text-center">
                    <p className="text-gray-500 font-bold mb-4">لا توجد برامج مخصصة لهذه الوجهة حالياً.</p>
                    <Link to="/offers" className="text-[#007cc2] font-black underline">تصفح كل البرامج</Link>
                  </div>
                )}
                
                <div className="bg-blue-900 rounded-[2rem] p-8 text-white text-center mt-12">
                  <h4 className="text-xl font-black mb-4">خطط لزيارة {dest.name}</h4>
                  <p className="text-sm opacity-80 mb-6 font-medium">اتصل بنا الآن لتنظيم جولة خاصة لك في هذه الوجهة الساحرة.</p>
                  <a 
                    href="https://wa.me/94771440707" 
                    className="bg-white text-blue-900 block py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-transform"
                  >
                    واتساب مباشر 💬
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
