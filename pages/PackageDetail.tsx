
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOUR_PACKAGES } from '../data/mockData';

export const PackageDetail: React.FC = () => {
  const { id } = useParams();
  const pkg = TOUR_PACKAGES.find(p => p.id === id);
  const otherPackages = TOUR_PACKAGES.filter(p => p.id !== id).slice(0, 3);

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
              <img src={pkg.mainImage} alt={pkg.title} className="w-full h-full object-cover" />
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
                  <span className="text-sm font-bold">سياحة</span>
                </div>
              </div>
              <div className="text-orange-500 font-bold text-xl">
                ابتداءً من {pkg.currency}{pkg.discountPrice || pkg.price}
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="space-y-10">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
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
                      <p className="text-gray-600 leading-relaxed text-sm mb-8">
                        {day.description}
                      </p>

                      <div className="border-t pt-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="text-orange-500">★</span> الأنشطة لهذا اليوم
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {day.activities.map((act, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-100 w-20 h-20 hover:border-orange-200 transition">
                              <span className="text-xl mb-1">
                                {act.includes('جولة') ? '🚶' : act.includes('معبد') ? '🕌' : act.includes('غداء') ? '🍽️' : '✨'}
                              </span>
                              <span className="text-[10px] text-gray-500 text-center leading-tight">{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Day Image Gallery */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img src={day.image} className="w-full h-full object-cover" alt={day.title} />
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                        1 / 8 صور
                      </div>
                      <div className="absolute inset-y-0 left-0 flex items-center px-2">
                         <button className="bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full">‹</button>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2">
                         <button className="bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full">›</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            <div className="mt-8 text-center">
               <button className="bg-blue-900 text-white px-12 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition">
                  ⬇ أظهر أكثر
               </button>
               <p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
                  <span className="text-green-500">ℹ</span> ملاحظة: نحن نقدم جداول برامج مرنة
               </p>
            </div>

            {/* Inclusions / Exclusions Section */}
            <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
               <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                  <span className="text-3xl">📍</span> ميزات البرنامج
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Includes */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <span className="font-bold text-green-600 border-b-2 border-green-600 pb-1">يشمل</span>
                       <span className="text-gray-300">لا يشمل</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                       <div className="text-center group">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition">🍳</div>
                          <p className="text-[10px] text-gray-500">إفطار يومي</p>
                       </div>
                       <div className="text-center group">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition">🚗</div>
                          <p className="text-[10px] text-gray-500">الاستقبال</p>
                       </div>
                       <div className="text-center group">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition">🗺️</div>
                          <p className="text-[10px] text-gray-500">جولات</p>
                       </div>
                       <div className="text-center group">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition">👥</div>
                          <p className="text-[10px] text-gray-500">فريق متابعة</p>
                       </div>
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

                    <div className="relative">
                      <select className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none font-inherit">
                        <option>اختر الخدمة</option>
                        <option>باقة سياحية</option>
                        <option>حجز فندق</option>
                        <option>سيارة مع سائق</option>
                      </select>
                      <span className="absolute left-4 top-4 text-gray-300">▼</span>
                    </div>

                    <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-800 transition transform hover:-translate-y-1">
                      أرسل الطلب
                    </button>
                    
                    <div className="flex items-start gap-2 pt-4">
                       <input type="checkbox" className="mt-1" />
                       <p className="text-[10px] text-gray-400 leading-tight">
                         أوافق على <span className="text-blue-900 underline cursor-pointer">الشروط والأحكام</span>. يتم معالجة بياناتك الشخصية وفقاً لـ <span className="text-blue-900 underline cursor-pointer">سياسة الخصوصية</span>.
                       </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Special Offer Banner */}
              <div className="relative rounded-2xl overflow-hidden h-48 group cursor-pointer shadow-lg">
                 <img src="https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=800" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full text-[10px] mb-2 font-bold">مفهوم خاص</span>
                    <h4 className="text-xl font-bold mb-2">للسياحة العائلية</h4>
                    <button className="bg-white text-orange-600 text-xs font-bold py-2 px-4 rounded-lg self-start">اكتشف برامجنا</button>
                 </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-blue-900 mb-2">اشترك في قائمتنا البريدية</h4>
                 <p className="text-[11px] text-gray-400 mb-6">احصل على آخر العروض والبرامج السياحية.</p>
                 <div className="flex gap-2">
                    <input type="text" className="flex-1 bg-gray-50 border p-3 rounded-xl text-xs outline-none focus:ring-1 focus:ring-blue-500 font-inherit" placeholder="البريد الإلكتروني" />
                    <button className="bg-blue-900 text-white px-4 rounded-xl text-xs font-bold">اشتراك</button>
                 </div>
                 <div className="flex items-start gap-2 mt-4">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-[9px] text-gray-400">أوافق على الشروط والأحكام</p>
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
              {otherPackages.map((pkg) => (
                <Link key={pkg.id} to={`/package/${pkg.id}`} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition duration-500">
                   <div className="h-56 relative overflow-hidden">
                      <img src={pkg.mainImage} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">أكثر مبيعاً</div>
                   </div>
                   <div className="p-6">
                      <h4 className="text-lg font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition line-clamp-2">{pkg.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4">
                         <span className="flex items-center gap-1">📍 سريلانكا</span>
                         <span className="flex items-center gap-1">⏱️ {pkg.duration}</span>
                         <span className="text-orange-500 font-extrabold text-sm">{pkg.currency}{pkg.price}</span>
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
