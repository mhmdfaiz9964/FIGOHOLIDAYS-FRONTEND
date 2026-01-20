
import React from 'react';

export const VisaInfo: React.FC = () => {
  const whatsappUrl = "https://wa.me/94771440707";

  const steps = [
    {
      id: '01',
      title: 'زيارة الموقع الرسمي',
      desc: 'الدخول إلى البوابة الرسمية للحكومة السريلانكية eta.gov.lk لضمان الأمان.',
      icon: '🌐'
    },
    {
      id: '02',
      title: 'تعبئة البيانات',
      desc: 'إدخال معلومات جواز السفر، تفاصيل الرحلة، وعنوان الإقامة في سريلانكا بدقة.',
      icon: '📝'
    },
    {
      id: '03',
      title: 'دفع الرسوم',
      desc: 'سداد الرسوم المقررة إلكترونياً باستخدام بطاقات الفيزا أو الماستر كارد.',
      icon: '💳'
    },
    {
      id: '04',
      title: 'استلام التأشيرة',
      desc: 'ستصلك الموافقة (ETA) عبر بريدك الإلكتروني خلال فترة وجيزة (غالباً 24 ساعة).',
      icon: '📧'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-cairo">
      {/* Hero Section */}
      <div className="relative h-[45vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Sri Lanka Travel"
        />
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">تأشيرة سريلانكا الإلكترونية (ETA)</h1>
          <p className="text-xl opacity-90 font-medium">دليلك الكامل للحصول على تصريح السفر لمواطني دول الخليج</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* GCC Special Update */}
        <div className="bg-gradient-to-r from-orange-50 to-white border-r-8 border-orange-500 p-8 rounded-3xl mb-20 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl">🌍</div>
          <div>
            <h2 className="text-2xl font-black text-orange-800 mb-2">تحديثات 2026 لمواطني الخليج</h2>
            <p className="text-gray-700 leading-relaxed font-medium">
              يتمتع مواطنو السعودية، الإمارات، الكويت، قطر، عُمان، والبحرين بتسهيلات استثنائية. 
              يمكنكم التقديم إلكترونياً والحصول على الموافقة بسرعة، كما تتوفر خيارات التأشيرة عند الوصول في مطار كولومبو الدولي لبعض الجنسيات.
            </p>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">الإجراءات</span>
            <h2 className="text-3xl md:text-4xl font-black text-blue-950">خطوات التقديم الإلكتروني</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <div className="absolute top-6 left-8 text-blue-100 font-black text-4xl group-hover:text-blue-50">#{step.id}</div>
                <h3 className="text-xl font-black text-blue-900 mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 text-gray-200 text-3xl">←</div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
               href="http://www.eta.gov.lk" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 text-blue-600 font-black hover:underline"
             >
               <span>رابط الموقع الرسمي (ETA)</span>
               <span className="text-xl">🔗</span>
             </a>
          </div>
        </div>

        {/* Requirements & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1578059425538-2ef25893bc3d?q=80&w=1000" 
              className="w-full h-full object-cover" 
              alt="Passport and Travel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent flex items-end p-12">
               <div className="text-white">
                 <h4 className="text-2xl font-black mb-2">تأكد من جاهزيتك</h4>
                 <p className="opacity-90 font-medium">نحن هنا لضمان رحلة خالية من المتاعب القانونية</p>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-blue-950 mb-6 flex items-center gap-3">
                <span className="bg-blue-100 p-3 rounded-2xl">📋</span>
                المتطلبات الأساسية
              </h3>
              <ul className="space-y-4">
                {[
                  'جواز سفر صالح لمدة لا تقل عن 6 أشهر من تاريخ الدخول.',
                  'تذكرة طيران مؤكدة للعودة أو للمحطة التالية.',
                  'إثبات مالي كافٍ لتغطية تكاليف الإقامة (اختياري غالباً).',
                  'عنوان إقامة واضح (اسم الفندق أو مكان السكن).'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 font-medium text-gray-700">
                    <span className="text-green-500 font-black">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
               <h4 className="font-black text-blue-900 mb-4 text-xl">مدة الصلاحية والتمديد</h4>
               <p className="text-gray-600 leading-relaxed font-medium mb-4">
                 تُمنح التأشيرة السياحية عادة لمدة 30 يوماً. إذا كنت ترغب في البقاء لفترة أطول، يمكنك التقدم بطلب تمديد من مكتب الهجرة في كولومبو ليصل الإجمالي إلى 90 يوماً.
               </p>
               <div className="flex gap-4">
                 <div className="bg-white px-4 py-2 rounded-xl text-xs font-black text-blue-900 shadow-sm">دخول مزدوج</div>
                 <div className="bg-white px-4 py-2 rounded-xl text-xs font-black text-blue-900 shadow-sm">صالحة لـ 30 يوم</div>
               </div>
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="bg-[#007cc2] rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-3xl mx-auto">
             <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">لا داعي للقلق بشأن الإجراءات!</h3>
             <p className="text-xl mb-12 opacity-90 font-medium leading-relaxed">
               عند حجز أي من برامجنا السياحية، يتولى خبراؤنا تقديم الدعم الكامل والمجاني لاستخراج تصاريح السفر (ETA) لضمان دخولك السلس إلى سريلانكا.
             </p>
             <a 
               href={whatsappUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-[#007cc2] px-16 py-6 rounded-[2rem] font-black text-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-4"
             >
               <span>اطلب المساعدة الآن عبر واتساب</span>
               <span className="text-2xl">💬</span>
             </a>
           </div>
           
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};
