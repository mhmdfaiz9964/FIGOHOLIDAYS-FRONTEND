
import React, { useState } from 'react';
import { VEHICLES } from '../data/mockData';

export const Transportation: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "كم تكلفة استئجار سيارة مع سائق في سريلانكا؟", a: "تختلف التكلفة حسب نوع السيارة والمسافة المقطوعة، ولكن تبدأ الأسعار عادةً من 60 دولاراً يومياً شاملة الوقود وأجرة السائق." },
    { q: "هل السائقون يتحدثون العربية؟", a: "لدينا نخبة من السائقين الذين يتحدثون العربية والإنجليزية بطلاقة لضمان تواصل سهل ومريح." },
    { q: "هل تشمل الأسعار الوقود والضرائب؟", a: "نعم، عروضنا عادةً ما تكون شاملة للوقود، ضرائب الطرق، وتأمين الركاب." },
    { q: "كيف يمكنني حجز سيارة من المطار؟", a: "يمكنك الحجز مسبقاً عبر موقعنا أو الواتساب، وسيكون سائقنا بانتظارك في صالة الوصول حاملاً لوحة باسمك." }
  ];

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'سيدان': return '🚗';
      case 'فاخرة جداً': return '🎖️';
      case 'فان عائلي': return '🚐';
      case 'باص صغير': return '🚌';
      case 'حافلة كبيرة': return '🚍';
      default: return '🚘';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-40 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-right">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-6 leading-tight">
              تأجير سيارة مع سائق في <span className="text-orange-500">سريلانكا</span> بأسعار تبدأ من $60
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              استمتع بتجربة سفر لا مثيل لها في مدن سريلانكا الخلابة مع خدمة تأجير السيارات الفاخرة مع سائق محترف، حيث نضع بين يديك أسطولاً متنوعاً من المركبات لتلبية كافة احتياجاتك.
            </p>
            
            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 font-cairo">
              <div className="flex gap-4 mb-6 border-b pb-4">
                <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold">خدمة التوصيل</button>
                <button className="text-gray-500 hover:text-blue-900 px-6 py-2 font-bold transition">رحلة خاصة</button>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-xs text-gray-400 mb-1">نقطة الانطلاق</label>
                  <input type="text" className="w-full bg-gray-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-inherit" placeholder="المطار / الفندق" />
                </div>
                <div className="relative">
                  <label className="block text-xs text-gray-400 mb-1">نقطة الوصول</label>
                  <input type="text" className="w-full bg-gray-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-inherit" placeholder="الوجهة المقصودة" />
                </div>
                <div className="relative">
                  <label className="block text-xs text-gray-400 mb-1">التاريخ</label>
                  <input type="date" className="w-full bg-gray-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-inherit" />
                </div>
                <div className="relative">
                  <label className="block text-xs text-gray-400 mb-1">الوقت</label>
                  <input type="time" className="w-full bg-gray-50 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-inherit" />
                </div>
                <div className="col-span-full mt-4">
                  <button className="w-full bg-blue-900 hover:bg-blue-950 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg">بحث وتوافر</button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop" 
              className="relative rounded-3xl shadow-2xl z-10 w-full h-[500px] object-cover" 
              alt="Luxury Car Sri Lanka" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-2xl">🚗</div>
              <div>
                <p className="text-xs text-gray-400 font-bold">خدمة عملاء</p>
                <p className="font-bold text-blue-900">24/7 متوفرون</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950">خطوات تعبئة الطلب</h2>
          <p className="text-gray-500 mt-2">خدمة استئجار سيارة مع سائق من سفاري سريلانكا</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", icon: "📍", title: "ابحث عن وجهتك", desc: "معك أينما كانت وجهتك" },
            { step: "02", icon: "🚙", title: "اختيار السيارة", desc: "بأعلى المواصفات والراحة" },
            { step: "03", icon: "💳", title: "تفاصيل الحجز", desc: "تأكيد فوري وآمن" },
            { step: "04", icon: "✨", title: "استلام الطلب", desc: "نتابع راحتكم حتى وصولكم" }
          ].map((item, idx) => (
            <div key={idx} className="relative group text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 font-bold">{item.desc}</p>
              {idx < 3 && <div className="hidden md:block absolute top-10 -left-4 text-gray-200 text-4xl">←</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800" className="rounded-3xl shadow-2xl" alt="Driver" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 leading-tight">ما الذي يميز خدمة «المسافر» في سريلانكا؟</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg">🚘</div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">سيارات بمواصفات سياحية</h4>
                  <p className="text-gray-600 font-medium">سيارات حديثة بخيارات كثيرة تناسب جميع البرامج والرحلات بخصوصية تامة.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-900 p-4 rounded-2xl text-white shadow-lg">👨‍✈️</div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">سائقون محترفون</h4>
                  <p className="text-gray-600 font-medium">فريق من أمهر السائقين وأكثرهم خبرة، ممن يتحدثون لغتكم ويهتمون براحتكم.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-green-500 p-4 rounded-2xl text-white shadow-lg">📈</div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">مركبات بمختلف الأحجام</h4>
                  <p className="text-gray-600 font-medium">تناسب عدد أفراد العائلة أو المجموعات السياحية، من السيدان وحتى الحافلات الكبيرة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950">أنواع السيارات المتوفرة لدينا</h2>
          <p className="text-gray-500 mt-2 font-bold">اختر ما يناسب عدد أفراد عائلتك وميزانيتك</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-cairo">
          {VEHICLES.map((v) => (
            <div key={v.id} className="group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src={v.image} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" alt={v.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg text-2xl">
                  {getVehicleIcon(v.type)}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-blue-950 leading-tight">{v.name}</h3>
                  <span className="bg-blue-50 text-[#007cc2] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">{v.type}</span>
                </div>
                <div className="flex gap-6 mb-8 text-sm text-gray-500 font-bold">
                  <span className="flex items-center gap-2">👤 {v.seats} مقاعد</span>
                  <span className="flex items-center gap-2">🧳 {v.bags} حقائب</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-bold">يبدأ من اليوم</p>
                    <p className="text-2xl font-black text-orange-500 tracking-tighter">${v.pricePerDay}</p>
                  </div>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-orange-500 transition duration-300 shadow-md">احجز الآن</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 font-cairo">
          <h2 className="text-3xl font-black text-blue-950 mb-12 text-center">الأسئلة المتكررة</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-right p-6 font-bold text-blue-900 flex justify-between items-center group"
                >
                  <span className="group-hover:text-[#007cc2] transition-colors">{faq.q}</span>
                  <span className={`text-orange-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-40 p-6 pt-0 border-t' : 'max-h-0 overflow-hidden opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed font-medium pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-950 text-white font-cairo">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">50+</p>
            <p className="text-xs font-bold opacity-70 tracking-widest uppercase">سيارة حديثة</p>
          </div>
          <div>
            <p className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">985</p>
            <p className="text-xs font-bold opacity-70 tracking-widest uppercase">عميل سعيد</p>
          </div>
          <div>
            <p className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">52</p>
            <p className="text-xs font-bold opacity-70 tracking-widest uppercase">وجهة مغطاة</p>
          </div>
          <div>
            <p className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">24/7</p>
            <p className="text-xs font-bold opacity-70 tracking-widest uppercase">دعم متواصل</p>
          </div>
        </div>
      </section>
    </div>
  );
};
