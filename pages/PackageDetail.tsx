import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOffer, getOffers } from '../api';
import { TourPackage } from '../types';
import { PackageDetailSkeleton } from '../components/Skeleton';
import { motion } from 'framer-motion';

export const PackageDetail: React.FC = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState<TourPackage | null>(null);
  const [otherPackages, setOtherPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '1',
    message: ''
  });

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    Promise.all([getOffer(id), getOffers()])
      .then(([offerData, allOffers]) => {
        setPkg(offerData);
        setOtherPackages(allOffers.filter((o: TourPackage) => o.id.toString() !== id.toString()).slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching package details:', err);
        setLoading(false);
      });
  }, [id]);

  const handleWhatsApp = () => {
    if (!pkg) return;
    const message = `مرحباً، أود الاستفسار عن باقة: ${pkg.title}\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nعدد الأشخاص: ${formData.guests}\nالتاريخ: ${formData.date}\nالرسالة: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/966500000000?text=${encodedMessage}`, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkg) return;
    const subject = encodeURIComponent(`استفسار عن باقة: ${pkg.title}`);
    const body = encodeURIComponent(`الاسم: ${formData.name}\nالهاتف: ${formData.phone}\nعدد الأشخاص: ${formData.guests}\nالتاريخ: ${formData.date}\nالرسالة: ${formData.message}`);
    window.location.href = `mailto:info@figoholidays.com?subject=${subject}&body=${body}`;
  };

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

            {/* Main Feature Image/Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6 aspect-video group">
              {pkg.video ? (
                <video src={pkg.video} controls className="w-full h-full object-cover" />
              ) : (
                <img src={pkg.thumbnail_image} alt={pkg.title} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Package Metadata Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">📅</span>
                  <span className="text-sm font-bold">{pkg.days} أيام / {pkg.nights} ليالي</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">⭐</span>
                  <span className="text-sm font-bold">{pkg.star_rating} نجوم</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-xl">💎</span>
                  <span className="text-sm font-bold">{pkg.category.name}</span>
                </div>
              </div>
              <div className="text-blue-900 font-bold text-xl flex flex-col items-end">
                {pkg.offer_price && (
                  <span className="text-sm text-gray-400 line-through">${pkg.offer_price}</span>
                )}
                <span>${pkg.price} <span className="text-xs text-gray-400 font-normal">/ للشخص</span></span>
              </div>
            </div>

            {/* Rich Details */}
            {pkg.more_details && (
              <div className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">تفاصيل إضافية</h3>
                <div className="prose prose-blue text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: pkg.more_details }} />
              </div>
            )}

            {/* Itinerary Section */}
            <h3 className="text-2xl font-black text-blue-900 mb-8 mt-12 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">🗺️</span>
              البرنامج السياحي
            </h3>
            <div className="space-y-10">
              {pkg.itineraries.map((day) => (
                <div key={day.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-blue-900 text-white w-14 h-14 flex flex-col items-center justify-center rounded-bl-3xl font-bold shadow-lg z-10">
                    <span className="text-xs">يوم</span>
                    <span className="text-xl">{day.day.replace(/[^0-9]/g, '') || day.day}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4 pr-10">{day.title}</h3>
                      <div className="text-gray-600 leading-relaxed text-sm mb-8" dangerouslySetInnerHTML={{ __html: day.description }} />

                      {day.activities && day.activities.length > 0 && (
                        <div className="border-t pt-6">
                          <h4 className="text-sm font-bold text-gray-400 uppercase mb-4 flex items-center gap-2">الأنشطة</h4>
                          <div className="flex flex-wrap gap-3">
                            {day.activities.map((act, i) => (
                              <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-100 min-w-20 min-h-20">
                                {act.icon ? (
                                  <img src={`/storage/${act.icon}`} alt="" className="w-8 h-8 object-contain mb-1" />
                                ) : (
                                  <span className="text-xl mb-1">✨</span>
                                )}
                                <span className="text-[10px] text-gray-500 text-center leading-tight font-bold">{act.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img src={day.images?.[0] || pkg.thumbnail_image} className="w-full h-full object-cover" alt={day.title} />
                      {day.images && day.images.length > 1 && (
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                          1 / {day.images.length} صور
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions / Exclusions */}
            <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">✓</span> يتضمن البرنامج
                </h4>
                <ul className="space-y-4">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                      <span className="text-green-500">●</span> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">✕</span> لا يتضمن البرنامج
                </h4>
                <ul className="space-y-4">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                      <span className="text-red-400 font-bold">×</span> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Policy */}
            {pkg.cancellation_policy && (
              <div className="mt-8 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> سياسة الإلغاء
                </h4>
                <div className="text-orange-800 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: pkg.cancellation_policy }} />
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">

              {/* Inquiry Form */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-blue-900 p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">احجز رحلتك الآن</h3>
                  <p className="text-blue-100 text-xs">أدخل معلوماتك وسنقوم بالتواصل معك لتصميم رحلتك المثالية.</p>
                </div>
                <div className="p-8">
                  <form className="space-y-4" onSubmit={handleEmail}>
                    <input
                      type="text" required
                      className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="الاسم الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      type="tel" required
                      className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="رقم الهاتف"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <input
                      type="email" required
                      className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date" required
                        className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                      <select
                        className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} أشخاص</option>)}
                      </select>
                    </div>
                    <textarea
                      className="w-full bg-gray-50 border-none p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[100px]"
                      placeholder="رسالة إضافية (اختياري)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>

                    <div className="flex flex-col gap-3 pt-4">
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-emerald-600 transition flex items-center justify-center gap-2"
                      >
                        <span>تواصل عبر واتساب</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.511.895 3.141 1.368 4.814 1.368 5.233 0 9.491-4.258 9.493-9.492.001-2.537-.987-4.922-2.783-6.72s-4.183-2.784-6.72-2.785c-5.233 0-9.491 4.258-9.494 9.491-.001 1.836.524 3.623 1.517 5.174l-.994 3.629 3.717-.975z" /></svg>
                      </button>
                      <button
                        type="submit"
                        className="w-full bg-blue-900 border-2 border-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-transparent hover:text-blue-900 transition"
                      >
                        إرسال الطلب عبر البريد
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Special Offer Banner */}
              {pkg.types && pkg.types.length > 0 && (
                <div className="relative rounded-2xl overflow-hidden h-48 group cursor-pointer shadow-lg">
                  <img src={pkg.sidebar_banner_image || pkg.thumbnail_image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full text-[10px] mb-2 font-bold">عروض {pkg.types[0].name}</span>
                    <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
                    <Link to="/offers" className="bg-white text-blue-900 text-xs font-bold py-2 px-4 rounded-lg self-start">اكتشف برامجنا</Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Similar Programs Section */}
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
                    <span className="flex items-center gap-1">📍 {o.category.name}</span>
                    <span className="flex items-center gap-1">⏱️ {o.days} أيام</span>
                    <span className="text-blue-900 font-extrabold text-sm">${o.price}</span>
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
