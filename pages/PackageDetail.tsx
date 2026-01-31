import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOffer, getOffers } from '../api';
import { TourPackage } from '../types';
import { PackageDetailSkeleton } from '../components/Skeleton';

export const PackageDetail: React.FC = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState<any>(null);
  const [otherPackages, setOtherPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    Promise.all([getOffer(id), getOffers()])
      .then(([offerData, allOffers]) => {
        setPkg(offerData);
        setOtherPackages(allOffers.filter((o: any) => o.id.toString() !== id.toString()).slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching package details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <PackageDetailSkeleton />;

  if (!pkg) return <div className="py-40 text-center text-2xl font-bold text-blue-900">عذراً، الباقة غير موجودة</div>;

  return (
    <div className="bg-[#f8f9fa] pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-900">🏠 الرئيسية</Link>
          <span>/</span>
          <Link to="/offers" className="hover:text-blue-900">البرامج السياحية</Link>
          <span>/</span>
          <span className="text-blue-900 font-bold truncate">{pkg.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#3b4b5e] mb-6">
              {pkg.title}
            </h1>

            {/* Main Feature Image/Video Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6 aspect-video group">
              <img src={pkg.thumbnail_image} alt={pkg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white cursor-pointer hover:scale-110 transition">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent mr-2"></div>
                </div>
              </div>
            </div>

            {/* Package Metadata Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">📅</span>
                  <span className="text-sm font-bold">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">🏨</span>
                  <span className="text-sm font-bold">فنادق 5 نجوم</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">💎</span>
                  <span className="text-sm font-bold">{pkg.category?.title || 'سياحة'}</span>
                </div>
              </div>
              <div className="text-orange-500 font-bold text-xl">
                ابتداءً من ${pkg.discountPrice || pkg.price}
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="space-y-10">
              {(pkg.itineraries || []).map((day: any) => (
                <div key={day.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                  {/* Day Label Sticker */}
                  <div className="absolute top-0 right-0 bg-blue-600 text-white w-14 h-14 flex flex-col items-center justify-center rounded-bl-3xl font-bold shadow-lg z-10">
                    <span className="text-xs">يوم</span>
                    <span className="text-xl">{day.day}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Day Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4 pr-10">
                        {day.title}
                      </h3>
                      <div 
                        className="text-gray-600 leading-relaxed text-sm mb-8"
                        dangerouslySetInnerHTML={{ __html: day.description }}
                      />

                      <div className="border-t pt-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="text-orange-500">★</span> الأنشطة لهذا اليوم
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {(day.activities || []).map((act: any, i: number) => {
                            const text = typeof act === 'string' ? act : act.text || '';
                            const icon = typeof act === 'string' ? null : act.icon;
                            return (
                              <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-100 w-20 h-20 hover:border-orange-200 transition">
                                <span className="text-xl mb-1">
                                  {icon || (text.includes('جولة') ? '🚶' : text.includes('معبد') ? '🕌' : text.includes('غداء') ? '🍽️' : '✨')}
                                </span>
                                <span className="text-[10px] text-gray-500 text-center leading-tight">{text}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Day Image Gallery */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img src={day.images?.[0] || pkg.thumbnail_image} className="w-full h-full object-cover" alt={day.title} />
                      {day.images?.length > 1 && (
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                          1 / {day.images.length} صور
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions / Exclusions Section */}
            <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
               <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                  <span className="text-3xl">📍</span> ميزات البرنامج
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="font-bold text-green-600 border-b-2 border-green-600 pb-1">الميزات</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                       {(pkg.inclusions || []).slice(0, 4).map((inc: string, i: number) => (
                         <div key={i} className="text-center group">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition">
                              {inc.includes('إفطار') ? '🍳' : inc.includes('سيارة') ? '🚗' : inc.includes('جولة') ? '🗺️' : '✨'}
                            </div>
                            <p className="text-[10px] text-gray-500">{inc}</p>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Main Inquiry Form */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm border">💬 تواصل معنا</button>
                    <button className="text-gray-400 text-sm font-bold px-4 py-2 hover:text-blue-900 transition">🔍 بحث</button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">دعنا نتصل بك</h3>
                  <p className="text-gray-400 text-xs mb-8 leading-relaxed">أدخل معلوماتك وسنقوم بالتواصل معك لتصميم رحلتك المثالية.</p>
                  
                  <form className="space-y-4">
                    <div className="relative">
                      <input type="text" className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition font-inherit" placeholder="الاسم الكامل" />
                      <span className="absolute left-4 top-4 text-gray-300 text-lg">👤</span>
                    </div>
                    
                    <div className="flex gap-2">
                       <div className="w-20 bg-gray-50 rounded-xl flex items-center justify-center text-xs text-gray-500 border-none">
                          🇸🇦 +966
                       </div>
                       <input type="tel" className="flex-1 bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition font-inherit" placeholder="رقم الهاتف" />
                    </div>

                    <div className="relative">
                      <input type="email" className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition font-inherit" placeholder="البريد الإلكتروني" />
                      <span className="absolute left-4 top-4 text-gray-300 text-lg">📧</span>
                    </div>

                    <button type="button" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-800 transition transform hover:-translate-y-1">
                      أرسل الطلب
                    </button>
                  </form>
                </div>
              </div>

              {/* Special Offer Banner */}
              <div className="relative rounded-2xl overflow-hidden h-48 group cursor-pointer shadow-lg">
                 <img src={pkg.sidebar_banner_image || pkg.thumbnail_image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full text-[10px] mb-2 font-bold">مفهوم خاص</span>
                    <h4 className="text-xl font-bold mb-2">{pkg.category?.title}</h4>
                    <Link to="/offers" className="bg-white text-orange-600 text-xs font-bold py-2 px-4 rounded-lg self-start">اكتشف برامجنا</Link>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Diverse Programs Section */}
        <div className="mt-24">
           <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                 <span className="text-orange-500 text-3xl">✈️</span> برامج سياحية متنوعة
              </h2>
              <Link to="/offers" className="text-blue-900 text-sm font-bold border-b-2 border-orange-500 pb-1">عرض الكل</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPackages.map((o) => (
                <Link key={o.id} to={`/package/${o.id}`} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition duration-500 h-full flex flex-col">
                   <div className="h-56 relative overflow-hidden">
                      <img src={o.thumbnail_image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt={o.title} />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">أكثر مبيعاً</div>
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition line-clamp-2">{o.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4 mt-auto">
                         <span className="flex items-center gap-1">📍 سريلانكا</span>
                         <span className="flex items-center gap-1">⏱️ {o.duration}</span>
                         <span className="text-orange-500 font-extrabold text-sm">${o.discountPrice || o.price}</span>
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
